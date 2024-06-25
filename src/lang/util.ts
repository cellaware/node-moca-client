import { CharStream, Token } from "antlr4";
import { MocaCompilationResult } from "./moca/compiler";

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