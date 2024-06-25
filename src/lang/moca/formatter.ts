import { Token } from "antlr4";
import MocaLexer from "../antlr/MocaLexer";


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