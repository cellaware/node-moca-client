import { CommonTokenStream, ErrorListener, ParseTreeWalker, RecognitionException, Recognizer, Token } from "antlr4";
import MocaSqlListener from "../antlr/MocaSqlListener";
import MocaSqlParser from "../antlr/MocaSqlParser";
import { CaseChangingCharStream, Range } from "../util";
import MocaSqlLexer from "../antlr/MocaSqlLexer";


export class MocaSqlCompiler {

    static compile(script: string, range: Range) {
        return new MocaSqlCompilationResult(script, range);
    }
}

export class MocaSqlCompilationResult {

    tokens: Token[];
    parser: MocaSqlParser;
    parseTreeListener: MocaSqlParseTreeListener;
    syntaxErrorListener: MocaSqlSyntaxErrorListener;
    range: Range;

    constructor(script: string, range: Range) {
        this.tokens = new MocaSqlLexer(new CaseChangingCharStream(script, true)).getAllTokens();
        this.parser = new MocaSqlParser(new CommonTokenStream(new MocaSqlLexer(new CaseChangingCharStream(script, true))));
        this.parser.removeErrorListeners();
        this.syntaxErrorListener = new MocaSqlSyntaxErrorListener();
        this.parser.addErrorListener(this.syntaxErrorListener);

        let parseTree = this.parser.moca_sql_script();
        this.parseTreeListener = new MocaSqlParseTreeListener();
        new ParseTreeWalker().walk(this.parseTreeListener, parseTree);
        this.range = range;
    }

    hasSyntaxErrors() {
        return this.syntaxErrorListener.syntaxErrors.length > 0;
    }
}

export class MocaSqlParseTreeListener extends MocaSqlListener {

}

export type MocaSqlSyntaxError = {
    lineNumber: number;
    column: number;
    msg: string;
    token: Token;
}

export class MocaSqlSyntaxErrorListener extends ErrorListener<Token> {

    syntaxErrors: MocaSqlSyntaxError[];

    constructor() {
        super();
        this.syntaxErrors = [];
    }

    override syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, lineNumber: number, column: number, msg: string, e: RecognitionException | undefined): void {
        this.syntaxErrors.push({ lineNumber, column, msg, token: offendingSymbol });
    }
}