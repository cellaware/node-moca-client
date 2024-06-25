
import fetch from 'node-fetch';

import { CharStream, CommonTokenStream, ErrorListener, ParseTreeWalker, RecognitionException, Recognizer, TerminalNode, Token } from "antlr4";
import MocaParser, { Function_exprContext, Redirect_exprContext, StreamContext, Verb_noun_clauseContext } from "./antlr/MocaParser";
import MocaListener from "./antlr/MocaListener";
import MocaLexer from "./antlr/MocaLexer";
import MocaSqlListener from "./antlr/MocaSqlListener";
import MocaSqlParser from "./antlr/MocaSqlParser";
import MocaSqlLexer from "./antlr/MocaSqlLexer";

// ==== Utils =============================================

// Data maps directed to monaco-editor Position
export type Position = {
    /**
     * line number (starts at 1)
     */
    lineNumber: number; // Line number starts at 1
    /**
     * column (the first character in a line is between column 1 and column 2)
     */
    column: number;
};

export function initPosition(lineNumber: number, column: number): Position {
    return { lineNumber, column };
}

// Data maps directed to monaco-editor  Range
export type Range = {
    /**
     * Line number on which the range starts (starts at 1).
     */
    startLineNumber: number;
    /**
     * Column on which the range starts in line `startLineNumber` (starts at 1).
     */
    startColumn: number;
    /**
     * Line number on which the range ends.
     */
    endLineNumber: number;
    /**
     * Column on which the range ends in line `endLineNumber`.
     */
    endColumn: number;
};

export function initRange(startLineNumber: number, startColumn: number, endLineNumber: number, endColumn: number): Range {
    return { startLineNumber, startColumn, endLineNumber, endColumn };
}

export type Change = {
    range: Range;
    rangeLength: number;
    rangeOffset: number;
    text: string;
};

export class PositionUtils {

    static isValid(pos: Position) {
        return pos.lineNumber >= 1 && pos.column >= 0;
    }

    static getOffset(str: string, pos: Position) {
        if (!this.isValid(pos)) {
            return -1;
        }

        let offset = 0;
        let lineNumber = 1;

        if (pos.lineNumber > 1) {

            while (offset < str.length) {

                if (str[offset] === '\n') {
                    lineNumber++;
                }

                if (lineNumber === pos.lineNumber) {
                    break;
                }

                offset++;
            }
        }

        return offset + pos.column;
    }

    static isOffsetValid(str: string, offset: number) {
        return offset >= 0 && offset < str.length;
    }

    static getPosition(str: string, offset: number): Position {
        if (!this.isOffsetValid(str, offset)) {
            return initPosition(1, 0);
        }

        let lineNumber = 1;
        let column = 0;

        for (let idx = 0; idx < offset; idx++) {
            if (str[idx] === '\n') {
                lineNumber++;
                column = 0;
            } else {
                column++;
            }
        }

        return initPosition(lineNumber, column);
    }

    static getCharacterAtPosition(str: string, pos: Position) {
        if (!this.isValid(pos)) {
            return '0';
        }

        let offset = this.getOffset(str, pos);

        if (offset > str.length - 1) {
            return '0';
        } else {
            return str[offset];
        }
    }
}

export class RangeUtils {

    static contains(range: Range, pos: Position) {
        if (pos.lineNumber < range.startLineNumber || (pos.lineNumber === range.startLineNumber && pos.column < range.startColumn)) {
            return false;
        } else if (pos.lineNumber > range.endLineNumber || (pos.lineNumber === range.endLineNumber && pos.column > range.endColumn)) {
            return false;
        } else {
            return true;
        }
    }

    static containsRange(range: Range, other: Range) {
        if (other.startLineNumber < range.startLineNumber || (other.startLineNumber === range.startLineNumber && other.startColumn < range.startColumn)) {
            return false;
        } else if (other.endLineNumber > range.endLineNumber || (other.endLineNumber === range.endLineNumber && other.endColumn < range.endColumn)) {
            return false;
        } else {
            return true;
        }
    }

    static intersects(a: Range, b: Range) {
        return this.contains(a, initPosition(b.startLineNumber, b.startColumn)) || this.contains(a, initPosition(b.endLineNumber, b.endColumn));
    }

    static getText(str: string, range: Range) {

        let startPos = initPosition(range.startLineNumber, range.startColumn);
        let endPos = initPosition(range.endLineNumber, range.endColumn);

        if (PositionUtils.isValid(startPos) && PositionUtils.isValid(endPos)) {
            return str.substring(PositionUtils.getOffset(str, startPos), PositionUtils.getOffset(str, endPos));
        } else {
            return '';
        }
    }
}

export class MocaLanguageUtils {
    static getContextFromPosition(mocaCompilationResult: MocaCompilationResult, pos: Position): 'moca' | 'sql' | 'groovy' {
        for (const embeddedRange of mocaCompilationResult.embeddedRanges) {
            if (RangeUtils.contains(embeddedRange.range, pos)) {
                return embeddedRange.ctx;
            }
        }

        return 'moca';
    }

    static getTokenFromPosition(mocaCompilationResult: MocaCompilationResult, pos: Position): { token: Token, tokenIdx: number } | null {

        if (mocaCompilationResult.tokens.length > 0) {
            let prevToken = mocaCompilationResult.tokens[0];
            let tokenIdx: number;
            for (tokenIdx = 0; tokenIdx < mocaCompilationResult.tokens.length; tokenIdx++) {
                const token = mocaCompilationResult.tokens[tokenIdx];
                if (token.line > pos.lineNumber || (token.line === pos.lineNumber && token.column > pos.column)) {
                    return { token: prevToken, tokenIdx };
                }
                prevToken = token;
            }

            return { token: prevToken, tokenIdx: tokenIdx - 1 };
        }

        return null;
    }
}

export class CaseChangingCharStream extends CharStream {

    upper: boolean;

    constructor(data: string, upper: boolean) {
        super(data);

        this.upper = upper;
    }

    override LA(offset: number): number {

        // https://www.asciitable.com/

        let c = super.LA(offset);
        if (c < 0) {
            return c;
        }
        if (this.upper) {
            if (c >= 97 && c <= 122) {
                return c - 32;
            } else {
                return c;
            }

        } else {
            if (c >= 65 && c <= 90) {
                return c + 32;
            } else {
                return c;
            }
        }
    }
}

// ==== MOCA Connection =============================================

export class MocaConnection {

    private url: string;
    private userId: string;
    private password: string;
    private envXmlStr: string;

    constructor(url: string, userId: string, password: string) {
        this.url = url;
        this.userId = userId;
        this.password = password;
        this.envXmlStr = '';
    }

    private async sendRequest(requestBody: any): Promise<MocaResponse> {
        if (this.url === undefined || this.url.length === 0) {
            throw new Error('Invalid URL');
        }

        const headers = { 'Content-Type': 'application/moca-xml', Accept: 'application/json', 'Response-Encoder': 'JSON' };

        const res = await fetch(this.url, {
            method: "POST",
            headers: headers,
            body: requestBody,
        });

        let body = await res.text();
        if (body.length == 0) {
            body = '{}';
        }

        return new MocaResponse(res.headers, JSON.parse(body));
    }

    async executeCommand(command: string): Promise<MocaResponse> {

        if (command === undefined || command.length === 0) {
            command = 'noop';
        }

        let mocaRequest = this.buildMocaRequest(command);

        let mocaResponse = await this.sendRequest(mocaRequest);

        if (!mocaResponse.eOk()) {
            if (mocaResponse.status === '203' || mocaResponse.status === '301' || mocaResponse.status === '523') {
                let loginMocaResponse = await this.login();

                if (!loginMocaResponse.eOk()) {
                    throw new Error('MOCA Auto Login Error: ' + loginMocaResponse.message);
                }

                mocaResponse = await this.sendRequest(mocaRequest);
            }
        }

        return mocaResponse;
    }

    async login(): Promise<MocaResponse> {

        this.envXmlStr = '';
        let loginCommand = `login user where usr_id = '${this.userId}' and usr_pswd = '${this.password}'`;

        let mocaResponse = await this.sendRequest(this.buildMocaRequest(loginCommand));

        if (mocaResponse.eOk()) {
            let localeId = mocaResponse.results.getValue(0, 'locale_id');
            let userId = mocaResponse.results.getValue(0, 'usr_id');
            let sessionKey = mocaResponse.results.getValue(0, 'session_key');

            this.envXmlStr = `<var name="LOCALE_ID" value="${localeId}"/><var name="USR_ID" value="${userId}"/><var name="SESSION_KEY" value="${sessionKey}"/>`;
        } else {
            throw new Error(mocaResponse.message);
        }

        return mocaResponse;
    }

    async logout(): Promise<MocaResponse> {
        return this.executeCommand(`logout user where usr_id = '${this.userId}'`);
    }

    private buildMocaRequest(query: string): string {
        let escapedXmlQuery = this.escapeXml(query);

        return `
          <moca-request autocommit = "true">
              <environment>${this.envXmlStr}</environment>
              <query>${escapedXmlQuery}</query>
          </moca-request>`;
    }

    private escapeXml(str: string): string {
        let retStr = '';

        for (let i = 0; i < str.length; i++) {
            let c = str.charAt(i);

            switch (c) {
                case '"':
                    retStr += '&quot;';
                    break;
                case "'":
                    retStr += '&apos;';
                    break;
                case '&':
                    retStr += '&amp;';
                    break;
                case '<':
                    retStr += '&lt;';
                    break;
                case '>':
                    retStr += '&gt;';
                    break;
                default:
                    retStr += c;
                    break;
            }
        }

        return retStr;
    }
}

export class MocaResponse {

    status: string;
    message: string;
    results: MocaResults;

    constructor(headers: any, body: any) {
        let status = headers.get('Command-Status');

        if (status == null) {
            this.status = '-1';
        } else {
            this.status = status;
        }

        if (this.status === '0') {
            this.message = '';
            this.results = new MocaResults();

            this.results.setResults(body);
        } else {
            let message = headers.get('Message');

            if (message == null) {
                this.message = '';
            } else {
                this.message = message;
            }

            this.results = new MocaResults();
        }
    }

    eOk(): boolean {
        return this.status === '0';
    }

    noData(): boolean {
        return !this.eOk() || this.results.getRowCount() === 0;
    }
}

export class MocaResults {

    columns: MocaColumn[];
    rows: any[];

    constructor() {
        this.columns = [];
        this.rows = [];
    }

    setResults(jsonData: any) {
        let metadata = jsonData['metadata'];
        let values = jsonData['values'];

        for (let i in metadata) {
            this.columns.push(new MocaColumn(metadata[i][0], metadata[i][1]));
        }

        this.rows = values;
    }

    getColumnCount(): number {
        return this.columns.length;
    }

    getRowCount(): number {
        return this.rows.length;
    }

    getColumnName(columnIdx: number): string {
        if (columnIdx < 0 || this.columns.length <= columnIdx) {
            return '';
        }

        return this.columns[columnIdx].name;
    }

    getValueUnsafe(rowIdx: number, columnIdx: number): any {
        return this.rows[rowIdx][columnIdx];
    }

    getValue(rowIdx: number, columnName: string): any {

        let columnIdx = -1;

        for (let i in this.columns) {
            if (this.columns[i].name.localeCompare(columnName) === 0) {
                columnIdx = parseInt(i, 10);
            }
        }

        if (columnIdx === -1) {
            return '';
        } else {
            if (rowIdx >= 0 && this.rows.length > rowIdx) {
                return this.getValueUnsafe(rowIdx, columnIdx);
            } else {
                return '';
            }
        }
    }

    toJson(): any[] {
        let arr = [];
        for (let i = 0; i < this.rows.length; i++) {
            let obj: any = {};
            for (let j = 0; j < this.columns.length; j++) {
                obj[this.getColumnName(j)] = this.getValueUnsafe(i, j);
            }
            arr.push(obj);
        }
        return arr;
    }

    toJsonStr(): string {
        return JSON.stringify(this.toJson());
    }

    rowsToString(showColumns: boolean): string {

        let buf = '';

        if (this.getRowCount() === 0) {
            return buf;
        }

        if (showColumns) {
            for (const col of this.columns) {
                buf += `${col.name}, `;
            }
            buf = buf.substring(0, buf.lastIndexOf(', '));
            buf += '\n';
        }

        for (let i = 0; i < this.getRowCount(); i++) {
            for (let j = 0; j < this.getColumnCount(); j++) {
                let val = this.getValueUnsafe(i, j);
                if (val instanceof Date) {
                    const dteStr = val.toISOString();
                    buf += `${dteStr.substring(0, dteStr.lastIndexOf('.'))}`;
                } else {
                    buf += `${val}`;
                }
                buf += ', ';
            }
            buf = buf.substring(0, buf.lastIndexOf(', '));
            buf += '\n';
        }

        return buf;
    }

    toPublishDataStr(): string {
        let publishDataStr = '';

        const appendAnd = '\n   and ';
        const appendAmp = ' &\n';

        for (let i = 0; i < this.rows.length; i++) {

            publishDataStr += 'publish data\n where ';

            for (let j = 0; j < this.columns.length; j++) {

                const key = this.getColumnName(j);
                const val = this.getValueUnsafe(i, j);

                if (val != null) {
                    publishDataStr += `${key} = '${val}'${appendAnd}`;
                }
            }

            publishDataStr = publishDataStr.substring(0, publishDataStr.lastIndexOf(appendAnd));
            publishDataStr += appendAmp;
        }

        if (publishDataStr.length > 0) {
            publishDataStr = publishDataStr.substring(0, publishDataStr.lastIndexOf(appendAmp));
            publishDataStr += '\n|\n';
        }

        return publishDataStr;
    }

    static toPublishDataStr(data: any): string {

        let publishDataStr = '';

        if (data == null) {
            return publishDataStr;
        }

        const appendAnd = '\n   and ';
        const appendAmp = ' &\n';

        if (Array.isArray(data)) {
            const arr = data;

            for (let i = 0; i < arr.length; i++) {

                const obj = arr[i];

                publishDataStr += 'publish data\n where ';

                for (const key in obj) {
                    const val = obj[key];

                    if (val != null) {
                        publishDataStr += `${key} = '${val}'${appendAnd}`;
                    }
                }

                publishDataStr = publishDataStr.substring(0, publishDataStr.lastIndexOf(appendAnd));
                publishDataStr += appendAmp;
            }

            if (publishDataStr.length > 0) {
                publishDataStr = publishDataStr.substring(0, publishDataStr.lastIndexOf(appendAmp));
            }
        } else if (typeof data === 'object') {
            const obj = data;

            publishDataStr += 'publish data\n where ';

            for (const key in obj) {
                const val = obj[key];

                if (val != null) {
                    publishDataStr += `${key} = '${val}'${appendAnd}`;
                }
            }

            publishDataStr = publishDataStr.substring(0, publishDataStr.lastIndexOf(appendAnd));
        } else {
            publishDataStr += `publish data\n where val = '${data}'`;
        }

        if (publishDataStr.length > 0) {
            publishDataStr += '\n|\n';
        }

        return publishDataStr;
    }
}

export class MocaColumn {

    name: string;
    dataType: string;

    constructor(name: string, dataType: string) {
        this.name = name;
        this.dataType = dataType;
    }
}

// ==== MOCA Compiler =============================================

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

function isWord(token: Token) {
    switch (token.type) {
        case MocaLexer.WORD:
        case MocaLexer.OVERSTACKED_ARGS:
        case MocaLexer.SPECIAL_COMMAND_ARG_NO_ROWS:
        case MocaLexer.SPECIAL_COMMAND_ARG_DUMMY_ARG:
        case MocaLexer.ONSTACK:
        case MocaLexer.KEEP:
        case MocaLexer.NUMERIC_LITERAL:
        case MocaLexer.LIKE:
        case MocaLexer.IS:
        case MocaLexer.NOT:
        case MocaLexer.NULL:
            return true;
        default:
            return false;
    }
}

function isOperator(token: Token) {
    switch (token.type) {
        case MocaLexer.EQUAL:
        case MocaLexer.NOT_EQUAL:
        case MocaLexer.LESS:
        case MocaLexer.GREATER:
        case MocaLexer.LESS_EQUAL:
        case MocaLexer.GREATER_EQUAL:
        case MocaLexer.PLUS:
        case MocaLexer.MINUS:
        case MocaLexer.STAR:
        case MocaLexer.DIV:
        case MocaLexer.MOD:
            return true;
        default:
            return false;
    }
}

function tokenAddsNewLine(token: Token) {
    switch (token.type) {
        case MocaLexer.SEMI_COLON:
        case MocaLexer.PIPE:
        case MocaLexer.AMPERSAND:
        case MocaLexer.LEFT_BRACE:
        case MocaLexer.RIGHT_BRACE:
        case MocaLexer.WHERE:
        case MocaLexer.AND:
            return true;
        default:
            return false;
    }
}

export function format(tokens: Token[]) {

    let buf = '';
    let indentBuf = '';
    let parenCounter = 0;

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const prevToken = (i === 0) ? token : tokens[i - 1];
        const nextToken = (i === tokens.length - 1) ? token : tokens[i + 1];

        switch (token.type) {
            case MocaLexer.DOUBLE_BRACKET_STRING:
                buf += token.text;
                break;
            case MocaLexer.SINGLE_BRACKET_STRING:
                buf += token.text;
                break;

            case MocaLexer.LEFT_PAREN:
                buf += token.text;
                parenCounter++;
                break;
            case MocaLexer.RIGHT_PAREN:
                buf += token.text;
                parenCounter--;

                if (isWord(nextToken)) {
                    if (nextToken.type === MocaLexer.AND || nextToken.type === MocaLexer.OR) {
                        buf += ' ';
                    } else {
                        buf += `\n${indentBuf}`;
                    }
                }

                break;

            case MocaLexer.LEFT_BRACE:
                if (!tokenAddsNewLine(prevToken)) {
                    buf += `\n${indentBuf}`;
                }
                indentBuf += '\t';
                buf += token.text;
                buf += `\n${indentBuf}`;

                break;
            case MocaLexer.RIGHT_BRACE:
                indentBuf = indentBuf.substring(0, indentBuf.length - 1);
                buf += `\n${indentBuf}`;
                buf += token.text;
                break;

            case MocaLexer.EQUAL:
            case MocaLexer.NOT_EQUAL:
            case MocaLexer.LESS:
            case MocaLexer.GREATER:
            case MocaLexer.LESS_EQUAL:
            case MocaLexer.GREATER_EQUAL:
                buf += ` ${token.text} `;
                break;

            case MocaLexer.DIV:
                buf += ` ${token.text} `;
                break;
            case MocaLexer.STAR:
            case MocaLexer.MOD:
            case MocaLexer.PLUS:
                if (prevToken.type === MocaLexer.AT) {
                    buf += token.text;
                } else {
                    buf += ` ${token.text} `;
                }

                break;
            case MocaLexer.MINUS:
                if (isWord(nextToken)) {
                    if (isOperator(prevToken) || prevToken.type === MocaLexer.LEFT_PAREN || prevToken.type === MocaLexer.COMMA) {
                        buf += token.text;
                    } else {
                        buf += ` ${token.text} `;
                    }
                } else if (prevToken.type === MocaLexer.AT) {
                    buf += token.text;
                } else {
                    buf += ` ${token.text} `;
                }
                break;

            case MocaLexer.COMMA:
                buf += `${token.text} `;
                break;

            case MocaLexer.DOUBLE_PIPE:
                buf += ` ${token.text} `;
                break;

            case MocaLexer.SEMI_COLON:
                buf += token.text;
                buf += `\n${indentBuf}`;
                break;
            case MocaLexer.PIPE:
                buf += `\n${indentBuf}`;
                buf += token.text;
                buf += `\n${indentBuf}`;
                break;

            case MocaLexer.AMPERSAND:
                buf += ` ${token.text}`;
                buf += `\n${indentBuf}`;
                break;

            case MocaLexer.DOUBLE_GREATER:
                buf += ` ${token.text} `;
                break;

            case MocaLexer.WHERE:
                buf += `\n${indentBuf}`;
                buf += ` ${token.text} `;
                break;
            case MocaLexer.AND:

                if (parenCounter > 0) {
                    buf += ` ${token.text} `;
                } else {
                    buf += `\n${indentBuf}`;
                    buf += `   ${token.text} `;
                }

                break;

            case MocaLexer.IF:
                if (prevToken.type === MocaLexer.ELSE) {
                    buf += ' ';
                }
                buf += `${token.text} `;
                break;
            case MocaLexer.ELSE:
                buf += `\n${indentBuf}`;
                buf += token.text;
                if (nextToken.type !== MocaLexer.LEFT_BRACE && nextToken.type !== MocaLexer.IF) {
                    buf += `\n${indentBuf}`;
                }
                break;

            case MocaLexer.OR:
                buf += ` ${token.text} `;
                break;

            case MocaLexer.TRY:
                buf += `${token.text} `;
                break;
            case MocaLexer.CATCH:
                buf += `${token.text} `;
                break;
            case MocaLexer.FINALLY:
                buf += ` ${token.text} `;
                break;

            case MocaLexer.REMOTE:
            case MocaLexer.PARALLEL:
            case MocaLexer.INPARALLEL:
                buf += token.text;
                break;

            case MocaLexer.BLOCK_COMMENT:
                if (tokenAddsNewLine(prevToken)) {
                    buf += token.text;
                } else {
                    buf += `\n${indentBuf}`;
                    buf += token.text;
                }

                if (!tokenAddsNewLine(nextToken)) {
                    buf += `\n${indentBuf}`;
                }
                break;

            default:
                if (isWord(token)) {
                    if (i !== 0 && isWord(prevToken)) {
                        buf += ' ';
                    }
                }
                buf += token.text;
                break;
        }
    }

    return buf;
}

// ==== MOCA SQL Compiler =============================================

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