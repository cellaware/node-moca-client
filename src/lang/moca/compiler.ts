import { CharStream, CommonTokenStream, ErrorListener, ParseTreeWalker, RecognitionException, Recognizer, TerminalNode, Token } from "antlr4";
import MocaParser, { Function_exprContext, Redirect_exprContext, StreamContext, Verb_noun_clauseContext } from "../antlr/MocaParser";
import MocaListener from "../antlr/MocaListener";
import MocaLexer from "../antlr/MocaLexer";
import { Change, PositionUtils, RangeUtils, Position, Range, initRange } from "../util";
import { MocaSqlCompilationResult, MocaSqlCompiler } from "../mocasql/compiler";

export class MocaCompiler {

    static compile(script: string, changes: Change[], prev: MocaCompilationResult | null) {
        return new MocaCompilationResult(script, changes, prev);
    }

    // Removes whitespace.
    static lex(script: string): Token[] {
        return new MocaLexer(new CharStream(script)).getAllTokens().filter(token => token.type !== MocaLexer.WHITESPACE && token.type !== MocaLexer.NEWLINE);
    }
}

export type EmbeddedRange = {
    id: number;
    ctx: 'moca' | 'sql' | 'groovy';
    range: Range;
    startOffset: number;
    stopOffset: number;
    text: string;
    compiled: boolean;
};

export class MocaCompilationResult {
    script: string;
    tokens: Token[];
    parser: MocaParser;
    parseTreeListener: MocaParseTreeListener;
    syntaxErrorListener: MocaSyntaxErrorListener;
    embeddedRanges: EmbeddedRange[];
    mocasqlCompilationResults: Map<number, MocaSqlCompilationResult>;

    constructor(script: string, changes: Change[], prev: MocaCompilationResult | null) {
        this.script = script;
        this.tokens = MocaCompiler.lex(script);
        this.parser = new MocaParser(new CommonTokenStream(new MocaLexer(new CharStream(script))));
        this.parser.removeErrorListeners();
        this.syntaxErrorListener = new MocaSyntaxErrorListener();
        this.parser.addErrorListener(this.syntaxErrorListener);

        let parseTree = this.parser.moca_script();
        this.parseTreeListener = new MocaParseTreeListener();
        new ParseTreeWalker().walk(this.parseTreeListener, parseTree);

        this.embeddedRanges = [];
        this.setEmbeddedRanges(script);

        this.mocasqlCompilationResults = new Map();

        if (changes.length > 0) {
            for (const embeddedRange of this.embeddedRanges) {

                for (const change of changes) {

                    if (embeddedRange.compiled) {
                        break;
                    }

                    let needsCompile = false;

                    const changeRangeLen = change.rangeLength === 0 ? change.text.length : change.rangeLength;

                    // Add scenario:
                    if ((embeddedRange.startOffset <= change.rangeOffset && embeddedRange.stopOffset > change.rangeOffset) ||
                        (embeddedRange.startOffset >= change.rangeOffset && embeddedRange.startOffset < changeRangeLen)) {
                        needsCompile = true;
                    }

                    if (needsCompile) {
                        embeddedRange.compiled = true;
                        if (embeddedRange.ctx === 'sql') {
                            let sqlScript = embeddedRange.text;
                            if (sqlScript.length > 2) {
                                // Remove '[' & ']'.
                                sqlScript = sqlScript.substring(1, sqlScript.length - 1);
                                this.mocasqlCompilationResults.set(embeddedRange.id, MocaSqlCompiler.compile(sqlScript, embeddedRange.range));
                            }
                        } else if (embeddedRange.ctx === 'groovy') {
                            // TODO
                        }
                    } else {
                        if (!!prev) {
                            if (embeddedRange.ctx === 'sql') {
                                const prevMocasqlCompilationResult = prev.mocasqlCompilationResults.get(embeddedRange.id);
                                if (prevMocasqlCompilationResult) {
                                    this.mocasqlCompilationResults.set(embeddedRange.id, prevMocasqlCompilationResult);
                                }
                            } else if (embeddedRange.ctx === 'groovy') {
                                // TODO
                            }
                        }
                    }
                }

            }
        }
    }

    hasSyntaxErrors() {
        return this.syntaxErrorListener.syntaxErrors.length > 0;
    }

    setEmbeddedRanges(script: string) {
        let sqlIdx = 0;
        let groovyIdx = 0;
        for (const token of this.tokens) {
            if (token.type === MocaLexer.SINGLE_BRACKET_STRING) {
                const endPos = PositionUtils.getPosition(script, token.stop);
                let range: Range = initRange(token.line, token.column, endPos.lineNumber, endPos.column);
                this.embeddedRanges.push({ range, startOffset: token.start, stopOffset: token.stop, text: token.text, ctx: 'sql', id: sqlIdx++, compiled: false });
            } else if (token.type === MocaLexer.DOUBLE_BRACKET_STRING) {
                const endPos = PositionUtils.getPosition(script, token.stop);
                let range: Range = initRange(token.line, token.column, endPos.lineNumber, endPos.column);
                this.embeddedRanges.push({ range, startOffset: token.start, stopOffset: token.stop, text: token.text, ctx: 'groovy', id: groovyIdx++, compiled: false });
            }
        }
    }
}

// https://github.com/mrglassdanny/moca-language-server/blob/master/src/main/java/com/github/mrglassdanny/mocalanguageserver/moca/lang/ast/MocaParseTreeListener.java#L19
export type VerbNounClauseKey = {
    id: number;
    verbNounClause: string;
}

export class MocaParseTreeListener extends MocaListener {
    redirects: Map<Token, string>;
    verbNounClauses: Map<VerbNounClauseKey, Token[]>;
    functions: Function_exprContext[];
    streams: Range[];

    constructor() {
        super();

        this.redirects = new Map();
        this.verbNounClauses = new Map();
        this.functions = [];
        this.streams = [];

        this.enterVerb_noun_clause = ((ctx: Verb_noun_clauseContext) => {
            if (!!ctx.children) {
                let buf = '';
                let tokens: Token[] = [];
                for (const child of ctx.children) {
                    if (child instanceof TerminalNode) {
                        if (child.symbol.type !== MocaLexer.CARET && child.symbol.type !== MocaLexer.WHERE) {
                            buf += `${child.getText()} `;
                            tokens.push(child.symbol);
                        }
                    } else {
                        break;
                    }
                }

                if (buf.length === 0) {
                    return;
                }

                buf = buf.trimEnd();
                this.verbNounClauses.set({ id: tokens[0].start, verbNounClause: buf }, tokens);
            }
        });

        this.enterRedirect_expr = ((ctx: Redirect_exprContext) => {
            if (!!ctx) {
                if (!!ctx.stop) {
                    this.redirects.set(ctx.stop, ctx.stop.text);
                }
            }
        });

        this.enterFunction_expr = ((ctx: Function_exprContext) => {
            if (!!ctx) {
                this.functions.push(ctx);
            }
        });

        this.enterStream = ((ctx: StreamContext) => {
            if (!!ctx) {
                this.streams.push(initRange(ctx.start.line, ctx.start.column, ctx.stop?.line ?? ctx.start.line, (ctx.stop?.stop ?? 0) - (ctx.stop?.start ?? 0)));
            }
        });
    }

    getVerbNounClauseRangeForPosition(pos: Position): Range | null {
        for (const val of Array.from(this.verbNounClauses.values())) {
            let range = initRange(val[0].line, val[0].column, val[val.length - 1].line, val[val.length - 1].column + val[val.length - 1].text.length);
            if (RangeUtils.contains(range, pos)) {
                return range;
            }
        }
        return null;
    }

    getVerbNounClauseForPosition(pos: Position): string | null {
        for (const [key, val] of Array.from(this.verbNounClauses.entries())) {
            let range = initRange(val[0].line, val[0].column, val[val.length - 1].line, val[val.length - 1].column + val[val.length - 1].text.length);
            if (RangeUtils.contains(range, pos)) {
                return key.verbNounClause;
            }
        }
        return null;
    }
}

export type MocaSyntaxError = {
    lineNumber: number;
    column: number;
    msg: string;
    token: Token;
}

export class MocaSyntaxErrorListener extends ErrorListener<Token> {

    syntaxErrors: MocaSyntaxError[];

    constructor() {
        super();
        this.syntaxErrors = [];
    }

    override syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, lineNumber: number, column: number, msg: string, e: RecognitionException | undefined): void {
        this.syntaxErrors.push({ lineNumber, column, msg, token: offendingSymbol });
    }
}