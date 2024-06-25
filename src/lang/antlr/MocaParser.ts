// Generated from C://dev//node-moca-client//src//lang//antlr//Moca.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import MocaListener from "./MocaListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MocaParser extends Parser {
	public static readonly DOUBLE_BRACKET_STRING = 1;
	public static readonly SINGLE_BRACKET_STRING = 2;
	public static readonly LEFT_PAREN = 3;
	public static readonly RIGHT_PAREN = 4;
	public static readonly LEFT_BRACE = 5;
	public static readonly RIGHT_BRACE = 6;
	public static readonly LEFT_BRACKET = 7;
	public static readonly RIGHT_BRACKET = 8;
	public static readonly LESS = 9;
	public static readonly GREATER = 10;
	public static readonly LESS_EQUAL = 11;
	public static readonly GREATER_EQUAL = 12;
	public static readonly DOUBLE_LESS = 13;
	public static readonly DOUBLE_GREATER = 14;
	public static readonly PLUS = 15;
	public static readonly MINUS = 16;
	public static readonly STAR = 17;
	public static readonly DIV = 18;
	public static readonly MOD = 19;
	public static readonly BACKSLASH = 20;
	public static readonly AMPERSAND = 21;
	public static readonly CARET = 22;
	public static readonly BANG = 23;
	public static readonly QUESTION = 24;
	public static readonly COLON = 25;
	public static readonly SEMI_COLON = 26;
	public static readonly COMMA = 27;
	public static readonly PIPE = 28;
	public static readonly DOUBLE_PIPE = 29;
	public static readonly POUND = 30;
	public static readonly AT = 31;
	public static readonly EQUAL = 32;
	public static readonly NOT_EQUAL = 33;
	public static readonly DOT = 34;
	public static readonly DOLLAR_SIGN = 35;
	public static readonly OVERSTACKED_ARGS = 36;
	public static readonly SPECIAL_COMMAND_ARG_NO_ROWS = 37;
	public static readonly SPECIAL_COMMAND_ARG_DUMMY_ARG = 38;
	public static readonly SUPPRESS_WARNINGS = 39;
	public static readonly WHERE = 40;
	public static readonly AND = 41;
	public static readonly LIKE = 42;
	public static readonly OR = 43;
	public static readonly IS = 44;
	public static readonly NOT = 45;
	public static readonly NULL = 46;
	public static readonly IF = 47;
	public static readonly ELSE = 48;
	public static readonly TRY = 49;
	public static readonly CATCH = 50;
	public static readonly FINALLY = 51;
	public static readonly REMOTE = 52;
	public static readonly PARALLEL = 53;
	public static readonly INPARALLEL = 54;
	public static readonly ONSTACK = 55;
	public static readonly KEEP = 56;
	public static readonly NUMERIC_LITERAL = 57;
	public static readonly STRING_LITERAL = 58;
	public static readonly WORD = 59;
	public static readonly BLOCK_COMMENT = 60;
	public static readonly WHITESPACE = 61;
	public static readonly NEWLINE = 62;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_moca_script = 0;
	public static readonly RULE_sequence = 1;
	public static readonly RULE_stream = 2;
	public static readonly RULE_group = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_block = 5;
	public static readonly RULE_command = 6;
	public static readonly RULE_verb_noun_clause = 7;
	public static readonly RULE_verb_noun_clause_arg = 8;
	public static readonly RULE_verb_noun_clause_arg_expr = 9;
	public static readonly RULE_sub_sequence = 10;
	public static readonly RULE_if_expr = 11;
	public static readonly RULE_if_statement = 12;
	public static readonly RULE_else_if_statement = 13;
	public static readonly RULE_else_statement = 14;
	public static readonly RULE_try_block = 15;
	public static readonly RULE_catch_single_expr = 16;
	public static readonly RULE_catch_multi_expr = 17;
	public static readonly RULE_catch_sequence = 18;
	public static readonly RULE_finally_sequence = 19;
	public static readonly RULE_redirect_expr = 20;
	public static readonly RULE_remote_expr = 21;
	public static readonly RULE_suppress_warnings_expr = 22;
	public static readonly RULE_expr = 23;
	public static readonly RULE_function_expr = 24;
	public static readonly RULE_literal_value = 25;
	public static readonly RULE_at_variable = 26;
	public static readonly RULE_environment_variable = 27;
	public static readonly RULE_at_plus_variable = 28;
	public static readonly RULE_at_star = 29;
	public static readonly RULE_at_question = 30;
	public static readonly RULE_at_bang = 31;
	public static readonly RULE_integration_variable = 32;
	public static readonly RULE_remote_keyword = 33;
	public static readonly RULE_groovy_script = 34;
	public static readonly RULE_sql_script = 35;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'['", 
                                                            "']'", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'<<'", 
                                                            "'>>'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'\\'", "'&'", 
                                                            "'^'", "'!'", 
                                                            "'?'", "':'", 
                                                            "';'", "','", 
                                                            "'|'", "'||'", 
                                                            "'#'", "'@'", 
                                                            "'='", null, 
                                                            "'.'", "'$'", 
                                                            "'<<OVERSTACKED_ARGS>>'", 
                                                            "'#NO_ROWS'", 
                                                            "'#DUMMY_ARG'", 
                                                            "'@SuppressWarnings'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "DOUBLE_BRACKET_STRING", 
                                                             "SINGLE_BRACKET_STRING", 
                                                             "LEFT_PAREN", 
                                                             "RIGHT_PAREN", 
                                                             "LEFT_BRACE", 
                                                             "RIGHT_BRACE", 
                                                             "LEFT_BRACKET", 
                                                             "RIGHT_BRACKET", 
                                                             "LESS", "GREATER", 
                                                             "LESS_EQUAL", 
                                                             "GREATER_EQUAL", 
                                                             "DOUBLE_LESS", 
                                                             "DOUBLE_GREATER", 
                                                             "PLUS", "MINUS", 
                                                             "STAR", "DIV", 
                                                             "MOD", "BACKSLASH", 
                                                             "AMPERSAND", 
                                                             "CARET", "BANG", 
                                                             "QUESTION", 
                                                             "COLON", "SEMI_COLON", 
                                                             "COMMA", "PIPE", 
                                                             "DOUBLE_PIPE", 
                                                             "POUND", "AT", 
                                                             "EQUAL", "NOT_EQUAL", 
                                                             "DOT", "DOLLAR_SIGN", 
                                                             "OVERSTACKED_ARGS", 
                                                             "SPECIAL_COMMAND_ARG_NO_ROWS", 
                                                             "SPECIAL_COMMAND_ARG_DUMMY_ARG", 
                                                             "SUPPRESS_WARNINGS", 
                                                             "WHERE", "AND", 
                                                             "LIKE", "OR", 
                                                             "IS", "NOT", 
                                                             "NULL", "IF", 
                                                             "ELSE", "TRY", 
                                                             "CATCH", "FINALLY", 
                                                             "REMOTE", "PARALLEL", 
                                                             "INPARALLEL", 
                                                             "ONSTACK", 
                                                             "KEEP", "NUMERIC_LITERAL", 
                                                             "STRING_LITERAL", 
                                                             "WORD", "BLOCK_COMMENT", 
                                                             "WHITESPACE", 
                                                             "NEWLINE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"moca_script", "sequence", "stream", "group", "statement", "block", "command", 
		"verb_noun_clause", "verb_noun_clause_arg", "verb_noun_clause_arg_expr", 
		"sub_sequence", "if_expr", "if_statement", "else_if_statement", "else_statement", 
		"try_block", "catch_single_expr", "catch_multi_expr", "catch_sequence", 
		"finally_sequence", "redirect_expr", "remote_expr", "suppress_warnings_expr", 
		"expr", "function_expr", "literal_value", "at_variable", "environment_variable", 
		"at_plus_variable", "at_star", "at_question", "at_bang", "integration_variable", 
		"remote_keyword", "groovy_script", "sql_script",
	];
	public get grammarFileName(): string { return "Moca.g4"; }
	public get literalNames(): (string | null)[] { return MocaParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MocaParser.symbolicNames; }
	public get ruleNames(): string[] { return MocaParser.ruleNames; }
	public get serializedATN(): number[] { return MocaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MocaParser._ATN, MocaParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public moca_script(): Moca_scriptContext {
		let localctx: Moca_scriptContext = new Moca_scriptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MocaParser.RULE_moca_script);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 72;
			this.sequence();
			this.state = 73;
			this.match(MocaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sequence(): SequenceContext {
		let localctx: SequenceContext = new SequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MocaParser.RULE_sequence);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			this.stream();
			this.state = 80;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 76;
					this.match(MocaParser.SEMI_COLON);
					this.state = 77;
					this.stream();
					}
					}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 83;
				this.match(MocaParser.SEMI_COLON);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stream(): StreamContext {
		let localctx: StreamContext = new StreamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MocaParser.RULE_stream);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this.group();
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===28) {
				{
				{
				this.state = 87;
				this.match(MocaParser.PIPE);
				this.state = 88;
				this.group();
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public group(): GroupContext {
		let localctx: GroupContext = new GroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MocaParser.RULE_group);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 94;
			this.statement();
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 95;
				this.match(MocaParser.AMPERSAND);
				this.state = 96;
				this.statement();
				}
				}
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MocaParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 102;
				this.block();
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===50) {
					{
					this.state = 103;
					this.catch_multi_expr();
					}
				}

				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14) {
					{
					this.state = 106;
					this.redirect_expr();
					}
				}

				}
				break;
			case 2:
				{
				this.state = 109;
				this.if_statement();
				this.state = 113;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 110;
						this.else_if_statement();
						}
						}
					}
					this.state = 115;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 117;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 116;
					this.else_statement();
					}
					break;
				}
				}
				break;
			case 3:
				{
				this.state = 119;
				this.try_block();
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===50) {
					{
					{
					this.state = 120;
					this.catch_sequence();
					}
					}
					this.state = 125;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===51) {
					{
					this.state = 126;
					this.finally_sequence();
					}
				}

				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14) {
					{
					this.state = 129;
					this.redirect_expr();
					}
				}

				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MocaParser.RULE_block);
		let _la: number;
		try {
			this.state = 152;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 140;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 135;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						this.state = 134;
						this.remote_expr();
						}
						break;
					}
					}
					break;
				case 2:
					{
					this.state = 138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===39) {
						{
						this.state = 137;
						this.suppress_warnings_expr();
						}
					}

					}
					break;
				}
				this.state = 142;
				this.command();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 149;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 144;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===3 || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 7) !== 0)) {
						{
						this.state = 143;
						this.remote_expr();
						}
					}

					}
					break;
				case 2:
					{
					this.state = 147;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===39) {
						{
						this.state = 146;
						this.suppress_warnings_expr();
						}
					}

					}
					break;
				}
				this.state = 151;
				this.sub_sequence();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public command(): CommandContext {
		let localctx: CommandContext = new CommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MocaParser.RULE_command);
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 154;
				this.groovy_script();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 155;
				this.sql_script();
				}
				break;
			case 22:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 59:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 156;
				this.verb_noun_clause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public verb_noun_clause(): Verb_noun_clauseContext {
		let localctx: Verb_noun_clauseContext = new Verb_noun_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MocaParser.RULE_verb_noun_clause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 159;
				this.match(MocaParser.CARET);
				}
			}

			this.state = 163;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 162;
					_la = this._input.LA(1);
					if(!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 327679) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 165;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 167;
				this.match(MocaParser.WHERE);
				this.state = 168;
				this.verb_noun_clause_arg();
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===41) {
					{
					{
					this.state = 169;
					this.match(MocaParser.AND);
					this.state = 170;
					this.verb_noun_clause_arg();
					}
					}
					this.state = 175;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public verb_noun_clause_arg(): Verb_noun_clause_argContext {
		let localctx: Verb_noun_clause_argContext = new Verb_noun_clause_argContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, MocaParser.RULE_verb_noun_clause_arg);
		let _la: number;
		try {
			this.state = 208;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 36:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 178;
				this.match(MocaParser.OVERSTACKED_ARGS);
				}
				break;
			case 37:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 179;
				this.match(MocaParser.SPECIAL_COMMAND_ARG_NO_ROWS);
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 180;
				this.match(MocaParser.SPECIAL_COMMAND_ARG_DUMMY_ARG);
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 181;
				this.groovy_script();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 182;
				this.match(MocaParser.SINGLE_BRACKET_STRING);
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 185;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 183;
					this.at_star();
					}
					break;
				case 2:
					{
					this.state = 184;
					this.at_plus_variable();
					}
					break;
				}
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 187;
				this.match(MocaParser.WORD);
				this.state = 206;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 44:
					{
					{
					this.state = 188;
					this.match(MocaParser.IS);
					this.state = 190;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===45) {
						{
						this.state = 189;
						this.match(MocaParser.NOT);
						}
					}

					this.state = 192;
					this.match(MocaParser.NULL);
					}
					}
					break;
				case 9:
				case 10:
				case 11:
				case 12:
				case 32:
				case 33:
				case 42:
				case 45:
					{
					this.state = 203;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 42:
					case 45:
						{
						this.state = 194;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===45) {
							{
							this.state = 193;
							this.match(MocaParser.NOT);
							}
						}

						this.state = 196;
						this.match(MocaParser.LIKE);
						}
						break;
					case 9:
						{
						this.state = 197;
						this.match(MocaParser.LESS);
						}
						break;
					case 10:
						{
						this.state = 198;
						this.match(MocaParser.GREATER);
						}
						break;
					case 11:
						{
						this.state = 199;
						this.match(MocaParser.LESS_EQUAL);
						}
						break;
					case 12:
						{
						this.state = 200;
						this.match(MocaParser.GREATER_EQUAL);
						}
						break;
					case 32:
						{
						this.state = 201;
						this.match(MocaParser.EQUAL);
						}
						break;
					case 33:
						{
						this.state = 202;
						this.match(MocaParser.NOT_EQUAL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 205;
					this.verb_noun_clause_arg_expr(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public verb_noun_clause_arg_expr(): Verb_noun_clause_arg_exprContext;
	public verb_noun_clause_arg_expr(_p: number): Verb_noun_clause_arg_exprContext;
	// @RuleVersion(0)
	public verb_noun_clause_arg_expr(_p?: number): Verb_noun_clause_arg_exprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Verb_noun_clause_arg_exprContext = new Verb_noun_clause_arg_exprContext(this, this._ctx, _parentState);
		let _prevctx: Verb_noun_clause_arg_exprContext = localctx;
		let _startState: number = 18;
		this.enterRecursionRule(localctx, 18, MocaParser.RULE_verb_noun_clause_arg_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 211;
				this.literal_value();
				}
				break;
			case 2:
				{
				this.state = 212;
				this.match(MocaParser.WORD);
				}
				break;
			case 3:
				{
				this.state = 213;
				this.at_variable();
				}
				break;
			case 4:
				{
				this.state = 214;
				this.environment_variable();
				}
				break;
			case 5:
				{
				this.state = 215;
				this.integration_variable();
				}
				break;
			case 6:
				{
				this.state = 216;
				this.at_bang();
				}
				break;
			case 7:
				{
				this.state = 217;
				this.at_question();
				}
				break;
			case 8:
				{
				this.state = 218;
				this.at_star();
				}
				break;
			case 9:
				{
				this.state = 219;
				this.function_expr();
				}
				break;
			case 10:
				{
				this.state = 220;
				this.groovy_script();
				}
				break;
			case 11:
				{
				this.state = 221;
				this.match(MocaParser.SINGLE_BRACKET_STRING);
				}
				break;
			case 12:
				{
				{
				this.state = 222;
				this.match(MocaParser.BANG);
				this.state = 235;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 223;
					this.literal_value();
					}
					break;
				case 2:
					{
					this.state = 224;
					this.match(MocaParser.WORD);
					}
					break;
				case 3:
					{
					this.state = 225;
					this.at_variable();
					}
					break;
				case 4:
					{
					this.state = 226;
					this.environment_variable();
					}
					break;
				case 5:
					{
					this.state = 227;
					this.integration_variable();
					}
					break;
				case 6:
					{
					this.state = 228;
					this.at_bang();
					}
					break;
				case 7:
					{
					this.state = 229;
					this.at_question();
					}
					break;
				case 8:
					{
					this.state = 230;
					this.at_star();
					}
					break;
				case 9:
					{
					this.state = 231;
					this.function_expr();
					}
					break;
				case 10:
					{
					this.state = 232;
					this.groovy_script();
					}
					break;
				case 11:
					{
					this.state = 233;
					this.match(MocaParser.SINGLE_BRACKET_STRING);
					}
					break;
				case 12:
					{
					this.state = 234;
					this.verb_noun_clause_arg_expr(0);
					}
					break;
				}
				}
				}
				break;
			case 13:
				{
				this.state = 237;
				this.match(MocaParser.LEFT_PAREN);
				this.state = 238;
				this.verb_noun_clause_arg_expr(0);
				this.state = 239;
				this.match(MocaParser.AND);
				this.state = 240;
				this.verb_noun_clause_arg_expr(0);
				this.state = 241;
				this.match(MocaParser.RIGHT_PAREN);
				}
				break;
			case 14:
				{
				this.state = 243;
				this.match(MocaParser.LEFT_PAREN);
				this.state = 244;
				this.verb_noun_clause_arg_expr(0);
				this.state = 245;
				this.match(MocaParser.OR);
				this.state = 246;
				this.verb_noun_clause_arg_expr(0);
				this.state = 247;
				this.match(MocaParser.RIGHT_PAREN);
				}
				break;
			case 15:
				{
				this.state = 249;
				this.match(MocaParser.LEFT_PAREN);
				this.state = 250;
				this.verb_noun_clause_arg_expr(0);
				this.state = 251;
				this.match(MocaParser.RIGHT_PAREN);
				}
				break;
			case 16:
				{
				this.state = 253;
				this.match(MocaParser.LEFT_PAREN);
				this.state = 254;
				this.verb_noun_clause_arg_expr(0);
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===45) {
					{
					this.state = 255;
					this.match(MocaParser.NOT);
					}
				}

				{
				this.state = 258;
				this.match(MocaParser.LIKE);
				}
				this.state = 259;
				this.verb_noun_clause_arg_expr(0);
				this.state = 260;
				this.match(MocaParser.RIGHT_PAREN);
				}
				break;
			case 17:
				{
				this.state = 262;
				this.match(MocaParser.LEFT_PAREN);
				this.state = 263;
				this.verb_noun_clause_arg_expr(0);
				this.state = 268;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 44:
					{
					this.state = 264;
					this.match(MocaParser.IS);
					}
					break;
				case 46:
					{
					this.state = 265;
					this.match(MocaParser.NULL);
					}
					break;
				case 45:
					{
					this.state = 266;
					this.match(MocaParser.NOT);
					this.state = 267;
					this.match(MocaParser.NULL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 270;
				this.match(MocaParser.RIGHT_PAREN);
				}
				break;
			case 18:
				{
				this.state = 272;
				this.match(MocaParser.LEFT_PAREN);
				this.state = 273;
				this.verb_noun_clause_arg_expr(0);
				this.state = 274;
				this.match(MocaParser.IS);
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===45) {
					{
					this.state = 275;
					this.match(MocaParser.NOT);
					}
				}

				this.state = 278;
				this.verb_noun_clause_arg_expr(0);
				this.state = 279;
				this.match(MocaParser.RIGHT_PAREN);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 307;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 305;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
					case 1:
						{
						localctx = new Verb_noun_clause_arg_exprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_verb_noun_clause_arg_expr);
						this.state = 283;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 284;
						this.match(MocaParser.DOUBLE_PIPE);
						this.state = 285;
						this.verb_noun_clause_arg_expr(12);
						}
						break;
					case 2:
						{
						localctx = new Verb_noun_clause_arg_exprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_verb_noun_clause_arg_expr);
						this.state = 286;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 287;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 917504) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 288;
						this.verb_noun_clause_arg_expr(11);
						}
						break;
					case 3:
						{
						localctx = new Verb_noun_clause_arg_exprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_verb_noun_clause_arg_expr);
						this.state = 289;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 290;
						_la = this._input.LA(1);
						if(!(_la===15 || _la===16)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 291;
						this.verb_noun_clause_arg_expr(10);
						}
						break;
					case 4:
						{
						localctx = new Verb_noun_clause_arg_exprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_verb_noun_clause_arg_expr);
						this.state = 292;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 293;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7680) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 294;
						this.verb_noun_clause_arg_expr(9);
						}
						break;
					case 5:
						{
						localctx = new Verb_noun_clause_arg_exprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_verb_noun_clause_arg_expr);
						this.state = 295;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 302;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
						case 1:
							{
							this.state = 296;
							this.match(MocaParser.EQUAL);
							}
							break;
						case 2:
							{
							this.state = 297;
							this.match(MocaParser.NOT_EQUAL);
							}
							break;
						case 3:
							{
							this.state = 298;
							this.match(MocaParser.IS);
							}
							break;
						case 4:
							{
							this.state = 299;
							this.match(MocaParser.IS);
							this.state = 300;
							this.match(MocaParser.NOT);
							}
							break;
						case 5:
							{
							this.state = 301;
							this.match(MocaParser.LIKE);
							}
							break;
						}
						this.state = 304;
						this.verb_noun_clause_arg_expr(8);
						}
						break;
					}
					}
				}
				this.state = 309;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sub_sequence(): Sub_sequenceContext {
		let localctx: Sub_sequenceContext = new Sub_sequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, MocaParser.RULE_sub_sequence);
		try {
			this.state = 318;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 310;
				this.match(MocaParser.LEFT_BRACE);
				this.state = 311;
				this.sequence();
				this.state = 312;
				this.match(MocaParser.RIGHT_BRACE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 314;
				this.match(MocaParser.LEFT_BRACE);
				this.state = 315;
				this.sub_sequence();
				this.state = 316;
				this.match(MocaParser.RIGHT_BRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public if_expr(): If_exprContext {
		let localctx: If_exprContext = new If_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, MocaParser.RULE_if_expr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 320;
			this.match(MocaParser.IF);
			this.state = 321;
			this.match(MocaParser.LEFT_PAREN);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2189492238) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 14337) !== 0)) {
				{
				{
				this.state = 322;
				this.expr(0);
				}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 328;
			this.match(MocaParser.RIGHT_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public if_statement(): If_statementContext {
		let localctx: If_statementContext = new If_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, MocaParser.RULE_if_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 330;
			this.if_expr();
			this.state = 331;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public else_if_statement(): Else_if_statementContext {
		let localctx: Else_if_statementContext = new Else_if_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, MocaParser.RULE_else_if_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 333;
			this.match(MocaParser.ELSE);
			this.state = 334;
			this.if_statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public else_statement(): Else_statementContext {
		let localctx: Else_statementContext = new Else_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, MocaParser.RULE_else_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 336;
			this.match(MocaParser.ELSE);
			this.state = 337;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public try_block(): Try_blockContext {
		let localctx: Try_blockContext = new Try_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, MocaParser.RULE_try_block);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 339;
			this.match(MocaParser.TRY);
			this.state = 340;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catch_single_expr(): Catch_single_exprContext {
		let localctx: Catch_single_exprContext = new Catch_single_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, MocaParser.RULE_catch_single_expr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 342;
			this.match(MocaParser.CATCH);
			this.state = 343;
			this.match(MocaParser.LEFT_PAREN);
			this.state = 344;
			this.expr(0);
			this.state = 345;
			this.match(MocaParser.RIGHT_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catch_multi_expr(): Catch_multi_exprContext {
		let localctx: Catch_multi_exprContext = new Catch_multi_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, MocaParser.RULE_catch_multi_expr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 347;
			this.match(MocaParser.CATCH);
			this.state = 348;
			this.match(MocaParser.LEFT_PAREN);
			this.state = 349;
			this.expr(0);
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===27) {
				{
				{
				this.state = 350;
				this.match(MocaParser.COMMA);
				this.state = 351;
				this.expr(0);
				}
				}
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 357;
			this.match(MocaParser.RIGHT_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catch_sequence(): Catch_sequenceContext {
		let localctx: Catch_sequenceContext = new Catch_sequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, MocaParser.RULE_catch_sequence);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 359;
			this.catch_single_expr();
			this.state = 360;
			this.match(MocaParser.LEFT_BRACE);
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4194350) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 1310717) !== 0)) {
				{
				this.state = 361;
				this.sequence();
				}
			}

			this.state = 364;
			this.match(MocaParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public finally_sequence(): Finally_sequenceContext {
		let localctx: Finally_sequenceContext = new Finally_sequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, MocaParser.RULE_finally_sequence);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 366;
			this.match(MocaParser.FINALLY);
			this.state = 367;
			this.match(MocaParser.LEFT_BRACE);
			this.state = 368;
			this.sequence();
			this.state = 369;
			this.match(MocaParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public redirect_expr(): Redirect_exprContext {
		let localctx: Redirect_exprContext = new Redirect_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, MocaParser.RULE_redirect_expr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 371;
			this.match(MocaParser.DOUBLE_GREATER);
			this.state = 372;
			this.match(MocaParser.WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public remote_expr(): Remote_exprContext {
		let localctx: Remote_exprContext = new Remote_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, MocaParser.RULE_remote_expr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 374;
			this.remote_keyword();
			this.state = 375;
			this.match(MocaParser.LEFT_PAREN);
			this.state = 376;
			this.expr(0);
			this.state = 377;
			this.match(MocaParser.RIGHT_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public suppress_warnings_expr(): Suppress_warnings_exprContext {
		let localctx: Suppress_warnings_exprContext = new Suppress_warnings_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, MocaParser.RULE_suppress_warnings_expr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 379;
			this.match(MocaParser.SUPPRESS_WARNINGS);
			this.state = 380;
			this.match(MocaParser.LEFT_PAREN);
			this.state = 381;
			this.expr(0);
			this.state = 382;
			this.match(MocaParser.RIGHT_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 46;
		this.enterRecursionRule(localctx, 46, MocaParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 385;
				this.literal_value();
				}
				break;
			case 2:
				{
				this.state = 386;
				this.match(MocaParser.WORD);
				}
				break;
			case 3:
				{
				this.state = 387;
				this.at_variable();
				}
				break;
			case 4:
				{
				this.state = 388;
				this.environment_variable();
				}
				break;
			case 5:
				{
				this.state = 389;
				this.integration_variable();
				}
				break;
			case 6:
				{
				this.state = 390;
				this.at_bang();
				}
				break;
			case 7:
				{
				this.state = 391;
				this.at_question();
				}
				break;
			case 8:
				{
				this.state = 392;
				this.at_star();
				}
				break;
			case 9:
				{
				this.state = 393;
				this.function_expr();
				}
				break;
			case 10:
				{
				this.state = 394;
				this.groovy_script();
				}
				break;
			case 11:
				{
				this.state = 395;
				this.match(MocaParser.SINGLE_BRACKET_STRING);
				}
				break;
			case 12:
				{
				{
				this.state = 396;
				this.match(MocaParser.BANG);
				this.state = 409;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 397;
					this.literal_value();
					}
					break;
				case 2:
					{
					this.state = 398;
					this.match(MocaParser.WORD);
					}
					break;
				case 3:
					{
					this.state = 399;
					this.at_variable();
					}
					break;
				case 4:
					{
					this.state = 400;
					this.environment_variable();
					}
					break;
				case 5:
					{
					this.state = 401;
					this.integration_variable();
					}
					break;
				case 6:
					{
					this.state = 402;
					this.at_bang();
					}
					break;
				case 7:
					{
					this.state = 403;
					this.at_question();
					}
					break;
				case 8:
					{
					this.state = 404;
					this.at_star();
					}
					break;
				case 9:
					{
					this.state = 405;
					this.function_expr();
					}
					break;
				case 10:
					{
					this.state = 406;
					this.groovy_script();
					}
					break;
				case 11:
					{
					this.state = 407;
					this.match(MocaParser.SINGLE_BRACKET_STRING);
					}
					break;
				case 12:
					{
					this.state = 408;
					this.expr(0);
					}
					break;
				}
				}
				}
				break;
			case 13:
				{
				this.state = 411;
				this.match(MocaParser.LEFT_PAREN);
				this.state = 412;
				this.expr(0);
				this.state = 413;
				this.match(MocaParser.RIGHT_PAREN);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 466;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 464;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_expr);
						this.state = 417;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 418;
						this.match(MocaParser.DOUBLE_PIPE);
						this.state = 419;
						this.expr(12);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_expr);
						this.state = 420;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 421;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 917504) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 422;
						this.expr(11);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_expr);
						this.state = 423;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 424;
						_la = this._input.LA(1);
						if(!(_la===15 || _la===16)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 425;
						this.expr(10);
						}
						break;
					case 4:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_expr);
						this.state = 426;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 427;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7680) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 428;
						this.expr(9);
						}
						break;
					case 5:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_expr);
						this.state = 429;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 436;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
						case 1:
							{
							this.state = 430;
							this.match(MocaParser.EQUAL);
							}
							break;
						case 2:
							{
							this.state = 431;
							this.match(MocaParser.NOT_EQUAL);
							}
							break;
						case 3:
							{
							this.state = 432;
							this.match(MocaParser.IS);
							}
							break;
						case 4:
							{
							this.state = 433;
							this.match(MocaParser.IS);
							this.state = 434;
							this.match(MocaParser.NOT);
							}
							break;
						case 5:
							{
							this.state = 435;
							this.match(MocaParser.LIKE);
							}
							break;
						}
						this.state = 438;
						this.expr(8);
						}
						break;
					case 6:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_expr);
						this.state = 439;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 440;
						this.match(MocaParser.AND);
						this.state = 441;
						this.expr(7);
						}
						break;
					case 7:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_expr);
						this.state = 442;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 443;
						this.match(MocaParser.OR);
						this.state = 444;
						this.expr(6);
						}
						break;
					case 8:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_expr);
						this.state = 445;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 447;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===45) {
							{
							this.state = 446;
							this.match(MocaParser.NOT);
							}
						}

						{
						this.state = 449;
						this.match(MocaParser.LIKE);
						}
						this.state = 450;
						this.expr(4);
						}
						break;
					case 9:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_expr);
						this.state = 451;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 452;
						this.match(MocaParser.IS);
						this.state = 454;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===45) {
							{
							this.state = 453;
							this.match(MocaParser.NOT);
							}
						}

						this.state = 456;
						this.expr(2);
						}
						break;
					case 10:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaParser.RULE_expr);
						this.state = 457;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 462;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 44:
							{
							this.state = 458;
							this.match(MocaParser.IS);
							}
							break;
						case 46:
							{
							this.state = 459;
							this.match(MocaParser.NULL);
							}
							break;
						case 45:
							{
							this.state = 460;
							this.match(MocaParser.NOT);
							this.state = 461;
							this.match(MocaParser.NULL);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					}
					}
				}
				this.state = 468;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_expr(): Function_exprContext {
		let localctx: Function_exprContext = new Function_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, MocaParser.RULE_function_expr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 469;
			this.match(MocaParser.WORD);
			this.state = 470;
			this.match(MocaParser.LEFT_PAREN);
			this.state = 479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2189492238) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 14337) !== 0)) {
				{
				this.state = 471;
				this.expr(0);
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===27) {
					{
					{
					this.state = 472;
					this.match(MocaParser.COMMA);
					this.state = 473;
					this.expr(0);
					}
					}
					this.state = 478;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 481;
			this.match(MocaParser.RIGHT_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal_value(): Literal_valueContext {
		let localctx: Literal_valueContext = new Literal_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, MocaParser.RULE_literal_value);
		try {
			this.state = 488;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 483;
				this.match(MocaParser.MINUS);
				this.state = 484;
				this.match(MocaParser.NUMERIC_LITERAL);
				}
				break;
			case 57:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 485;
				this.match(MocaParser.NUMERIC_LITERAL);
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 486;
				this.match(MocaParser.STRING_LITERAL);
				}
				break;
			case 46:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 487;
				this.match(MocaParser.NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public at_variable(): At_variableContext {
		let localctx: At_variableContext = new At_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, MocaParser.RULE_at_variable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 490;
			this.match(MocaParser.AT);
			this.state = 492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 491;
				this.match(MocaParser.MINUS);
				}
			}

			this.state = 494;
			this.match(MocaParser.WORD);
			this.state = 503;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				{
				this.state = 495;
				this.match(MocaParser.COLON);
				this.state = 496;
				this.match(MocaParser.WORD);
				}
				}
				break;
			case 2:
				{
				this.state = 501;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
				case 1:
					{
					{
					this.state = 497;
					this.match(MocaParser.POUND);
					this.state = 498;
					this.match(MocaParser.KEEP);
					}
					}
					break;
				case 2:
					{
					{
					this.state = 499;
					this.match(MocaParser.POUND);
					this.state = 500;
					this.match(MocaParser.ONSTACK);
					}
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public environment_variable(): Environment_variableContext {
		let localctx: Environment_variableContext = new Environment_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, MocaParser.RULE_environment_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 505;
			this.match(MocaParser.AT);
			this.state = 506;
			this.match(MocaParser.AT);
			this.state = 507;
			this.match(MocaParser.WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public at_plus_variable(): At_plus_variableContext {
		let localctx: At_plus_variableContext = new At_plus_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, MocaParser.RULE_at_plus_variable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 509;
			this.match(MocaParser.AT);
			this.state = 510;
			_la = this._input.LA(1);
			if(!(_la===15 || _la===19)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 511;
			this.match(MocaParser.WORD);
			this.state = 516;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
				{
				{
				this.state = 512;
				this.match(MocaParser.COLON);
				this.state = 513;
				this.match(MocaParser.WORD);
				}
				}
				break;
			case 22:
				{
				{
				this.state = 514;
				this.match(MocaParser.CARET);
				this.state = 515;
				this.match(MocaParser.WORD);
				}
				}
				break;
			case -1:
			case 6:
			case 14:
			case 21:
			case 26:
			case 28:
			case 41:
			case 48:
			case 50:
			case 51:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public at_star(): At_starContext {
		let localctx: At_starContext = new At_starContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, MocaParser.RULE_at_star);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 518;
			this.match(MocaParser.AT);
			this.state = 519;
			this.match(MocaParser.STAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public at_question(): At_questionContext {
		let localctx: At_questionContext = new At_questionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, MocaParser.RULE_at_question);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 521;
			this.match(MocaParser.AT);
			this.state = 522;
			this.match(MocaParser.QUESTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public at_bang(): At_bangContext {
		let localctx: At_bangContext = new At_bangContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, MocaParser.RULE_at_bang);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 524;
			this.match(MocaParser.AT);
			this.state = 525;
			this.match(MocaParser.BANG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integration_variable(): Integration_variableContext {
		let localctx: Integration_variableContext = new Integration_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, MocaParser.RULE_integration_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 527;
			this.match(MocaParser.COLON);
			this.state = 528;
			this.match(MocaParser.WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public remote_keyword(): Remote_keywordContext {
		let localctx: Remote_keywordContext = new Remote_keywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, MocaParser.RULE_remote_keyword);
		try {
			this.state = 534;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 531;
				this.match(MocaParser.REMOTE);
				}
				break;
			case 53:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 532;
				this.match(MocaParser.PARALLEL);
				}
				break;
			case 54:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 533;
				this.match(MocaParser.INPARALLEL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groovy_script(): Groovy_scriptContext {
		let localctx: Groovy_scriptContext = new Groovy_scriptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, MocaParser.RULE_groovy_script);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 536;
			this.match(MocaParser.DOUBLE_BRACKET_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sql_script(): Sql_scriptContext {
		let localctx: Sql_scriptContext = new Sql_scriptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, MocaParser.RULE_sql_script);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 538;
			this.match(MocaParser.SINGLE_BRACKET_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.verb_noun_clause_arg_expr_sempred(localctx as Verb_noun_clause_arg_exprContext, predIndex);
		case 23:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private verb_noun_clause_arg_expr_sempred(localctx: Verb_noun_clause_arg_exprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);
		case 1:
			return this.precpred(this._ctx, 10);
		case 2:
			return this.precpred(this._ctx, 9);
		case 3:
			return this.precpred(this._ctx, 8);
		case 4:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 11);
		case 6:
			return this.precpred(this._ctx, 10);
		case 7:
			return this.precpred(this._ctx, 9);
		case 8:
			return this.precpred(this._ctx, 8);
		case 9:
			return this.precpred(this._ctx, 7);
		case 10:
			return this.precpred(this._ctx, 6);
		case 11:
			return this.precpred(this._ctx, 5);
		case 12:
			return this.precpred(this._ctx, 3);
		case 13:
			return this.precpred(this._ctx, 1);
		case 14:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,62,541,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,1,0,1,0,1,0,1,1,1,1,1,1,5,1,79,
	8,1,10,1,12,1,82,9,1,1,1,3,1,85,8,1,1,2,1,2,1,2,5,2,90,8,2,10,2,12,2,93,
	9,2,1,3,1,3,1,3,5,3,98,8,3,10,3,12,3,101,9,3,1,4,1,4,3,4,105,8,4,1,4,3,
	4,108,8,4,1,4,1,4,5,4,112,8,4,10,4,12,4,115,9,4,1,4,3,4,118,8,4,1,4,1,4,
	5,4,122,8,4,10,4,12,4,125,9,4,1,4,3,4,128,8,4,1,4,3,4,131,8,4,3,4,133,8,
	4,1,5,3,5,136,8,5,1,5,3,5,139,8,5,3,5,141,8,5,1,5,1,5,3,5,145,8,5,1,5,3,
	5,148,8,5,3,5,150,8,5,1,5,3,5,153,8,5,1,6,1,6,1,6,3,6,158,8,6,1,7,3,7,161,
	8,7,1,7,4,7,164,8,7,11,7,12,7,165,1,7,1,7,1,7,1,7,5,7,172,8,7,10,7,12,7,
	175,9,7,3,7,177,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,186,8,8,1,8,1,8,1,8,
	3,8,191,8,8,1,8,1,8,3,8,195,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,204,8,8,
	1,8,3,8,207,8,8,3,8,209,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,236,8,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	3,9,257,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,269,8,9,1,9,1,9,
	1,9,1,9,1,9,1,9,3,9,277,8,9,1,9,1,9,1,9,3,9,282,8,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,303,8,9,1,9,
	5,9,306,8,9,10,9,12,9,309,9,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,
	10,319,8,10,1,11,1,11,1,11,5,11,324,8,11,10,11,12,11,327,9,11,1,11,1,11,
	1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,
	16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,5,17,353,8,17,10,17,12,17,356,9,17,
	1,17,1,17,1,18,1,18,1,18,3,18,363,8,18,1,18,1,18,1,19,1,19,1,19,1,19,1,
	19,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,
	1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
	23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,410,8,23,1,23,1,23,
	1,23,1,23,3,23,416,8,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
	23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,437,8,23,1,23,1,23,
	1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,448,8,23,1,23,1,23,1,23,1,23,1,
	23,3,23,455,8,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,463,8,23,5,23,465,8,
	23,10,23,12,23,468,9,23,1,24,1,24,1,24,1,24,1,24,5,24,475,8,24,10,24,12,
	24,478,9,24,3,24,480,8,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,3,25,489,8,
	25,1,26,1,26,3,26,493,8,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,502,
	8,26,3,26,504,8,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,
	28,3,28,517,8,28,1,29,1,29,1,29,1,30,1,30,1,30,1,31,1,31,1,31,1,32,1,32,
	1,32,1,33,1,33,1,33,1,33,3,33,535,8,33,1,34,1,34,1,35,1,35,1,35,0,2,18,
	46,36,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
	48,50,52,54,56,58,60,62,64,66,68,70,0,5,2,0,41,56,59,59,1,0,17,19,1,0,15,
	16,1,0,9,12,2,0,15,15,19,19,646,0,72,1,0,0,0,2,75,1,0,0,0,4,86,1,0,0,0,
	6,94,1,0,0,0,8,132,1,0,0,0,10,152,1,0,0,0,12,157,1,0,0,0,14,160,1,0,0,0,
	16,208,1,0,0,0,18,281,1,0,0,0,20,318,1,0,0,0,22,320,1,0,0,0,24,330,1,0,
	0,0,26,333,1,0,0,0,28,336,1,0,0,0,30,339,1,0,0,0,32,342,1,0,0,0,34,347,
	1,0,0,0,36,359,1,0,0,0,38,366,1,0,0,0,40,371,1,0,0,0,42,374,1,0,0,0,44,
	379,1,0,0,0,46,415,1,0,0,0,48,469,1,0,0,0,50,488,1,0,0,0,52,490,1,0,0,0,
	54,505,1,0,0,0,56,509,1,0,0,0,58,518,1,0,0,0,60,521,1,0,0,0,62,524,1,0,
	0,0,64,527,1,0,0,0,66,534,1,0,0,0,68,536,1,0,0,0,70,538,1,0,0,0,72,73,3,
	2,1,0,73,74,5,0,0,1,74,1,1,0,0,0,75,80,3,4,2,0,76,77,5,26,0,0,77,79,3,4,
	2,0,78,76,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,84,1,0,0,
	0,82,80,1,0,0,0,83,85,5,26,0,0,84,83,1,0,0,0,84,85,1,0,0,0,85,3,1,0,0,0,
	86,91,3,6,3,0,87,88,5,28,0,0,88,90,3,6,3,0,89,87,1,0,0,0,90,93,1,0,0,0,
	91,89,1,0,0,0,91,92,1,0,0,0,92,5,1,0,0,0,93,91,1,0,0,0,94,99,3,8,4,0,95,
	96,5,21,0,0,96,98,3,8,4,0,97,95,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,
	100,1,0,0,0,100,7,1,0,0,0,101,99,1,0,0,0,102,104,3,10,5,0,103,105,3,34,
	17,0,104,103,1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,108,3,40,20,0,
	107,106,1,0,0,0,107,108,1,0,0,0,108,133,1,0,0,0,109,113,3,24,12,0,110,112,
	3,26,13,0,111,110,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,
	0,114,117,1,0,0,0,115,113,1,0,0,0,116,118,3,28,14,0,117,116,1,0,0,0,117,
	118,1,0,0,0,118,133,1,0,0,0,119,123,3,30,15,0,120,122,3,36,18,0,121,120,
	1,0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,127,1,0,0,0,
	125,123,1,0,0,0,126,128,3,38,19,0,127,126,1,0,0,0,127,128,1,0,0,0,128,130,
	1,0,0,0,129,131,3,40,20,0,130,129,1,0,0,0,130,131,1,0,0,0,131,133,1,0,0,
	0,132,102,1,0,0,0,132,109,1,0,0,0,132,119,1,0,0,0,133,9,1,0,0,0,134,136,
	3,42,21,0,135,134,1,0,0,0,135,136,1,0,0,0,136,141,1,0,0,0,137,139,3,44,
	22,0,138,137,1,0,0,0,138,139,1,0,0,0,139,141,1,0,0,0,140,135,1,0,0,0,140,
	138,1,0,0,0,141,142,1,0,0,0,142,153,3,12,6,0,143,145,3,42,21,0,144,143,
	1,0,0,0,144,145,1,0,0,0,145,150,1,0,0,0,146,148,3,44,22,0,147,146,1,0,0,
	0,147,148,1,0,0,0,148,150,1,0,0,0,149,144,1,0,0,0,149,147,1,0,0,0,150,151,
	1,0,0,0,151,153,3,20,10,0,152,140,1,0,0,0,152,149,1,0,0,0,153,11,1,0,0,
	0,154,158,3,68,34,0,155,158,3,70,35,0,156,158,3,14,7,0,157,154,1,0,0,0,
	157,155,1,0,0,0,157,156,1,0,0,0,158,13,1,0,0,0,159,161,5,22,0,0,160,159,
	1,0,0,0,160,161,1,0,0,0,161,163,1,0,0,0,162,164,7,0,0,0,163,162,1,0,0,0,
	164,165,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,176,1,0,0,0,167,168,
	5,40,0,0,168,173,3,16,8,0,169,170,5,41,0,0,170,172,3,16,8,0,171,169,1,0,
	0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,177,1,0,0,0,175,
	173,1,0,0,0,176,167,1,0,0,0,176,177,1,0,0,0,177,15,1,0,0,0,178,209,5,36,
	0,0,179,209,5,37,0,0,180,209,5,38,0,0,181,209,3,68,34,0,182,209,5,2,0,0,
	183,186,3,58,29,0,184,186,3,56,28,0,185,183,1,0,0,0,185,184,1,0,0,0,186,
	209,1,0,0,0,187,206,5,59,0,0,188,190,5,44,0,0,189,191,5,45,0,0,190,189,
	1,0,0,0,190,191,1,0,0,0,191,192,1,0,0,0,192,207,5,46,0,0,193,195,5,45,0,
	0,194,193,1,0,0,0,194,195,1,0,0,0,195,196,1,0,0,0,196,204,5,42,0,0,197,
	204,5,9,0,0,198,204,5,10,0,0,199,204,5,11,0,0,200,204,5,12,0,0,201,204,
	5,32,0,0,202,204,5,33,0,0,203,194,1,0,0,0,203,197,1,0,0,0,203,198,1,0,0,
	0,203,199,1,0,0,0,203,200,1,0,0,0,203,201,1,0,0,0,203,202,1,0,0,0,204,205,
	1,0,0,0,205,207,3,18,9,0,206,188,1,0,0,0,206,203,1,0,0,0,207,209,1,0,0,
	0,208,178,1,0,0,0,208,179,1,0,0,0,208,180,1,0,0,0,208,181,1,0,0,0,208,182,
	1,0,0,0,208,185,1,0,0,0,208,187,1,0,0,0,209,17,1,0,0,0,210,211,6,9,-1,0,
	211,282,3,50,25,0,212,282,5,59,0,0,213,282,3,52,26,0,214,282,3,54,27,0,
	215,282,3,64,32,0,216,282,3,62,31,0,217,282,3,60,30,0,218,282,3,58,29,0,
	219,282,3,48,24,0,220,282,3,68,34,0,221,282,5,2,0,0,222,235,5,23,0,0,223,
	236,3,50,25,0,224,236,5,59,0,0,225,236,3,52,26,0,226,236,3,54,27,0,227,
	236,3,64,32,0,228,236,3,62,31,0,229,236,3,60,30,0,230,236,3,58,29,0,231,
	236,3,48,24,0,232,236,3,68,34,0,233,236,5,2,0,0,234,236,3,18,9,0,235,223,
	1,0,0,0,235,224,1,0,0,0,235,225,1,0,0,0,235,226,1,0,0,0,235,227,1,0,0,0,
	235,228,1,0,0,0,235,229,1,0,0,0,235,230,1,0,0,0,235,231,1,0,0,0,235,232,
	1,0,0,0,235,233,1,0,0,0,235,234,1,0,0,0,236,282,1,0,0,0,237,238,5,3,0,0,
	238,239,3,18,9,0,239,240,5,41,0,0,240,241,3,18,9,0,241,242,5,4,0,0,242,
	282,1,0,0,0,243,244,5,3,0,0,244,245,3,18,9,0,245,246,5,43,0,0,246,247,3,
	18,9,0,247,248,5,4,0,0,248,282,1,0,0,0,249,250,5,3,0,0,250,251,3,18,9,0,
	251,252,5,4,0,0,252,282,1,0,0,0,253,254,5,3,0,0,254,256,3,18,9,0,255,257,
	5,45,0,0,256,255,1,0,0,0,256,257,1,0,0,0,257,258,1,0,0,0,258,259,5,42,0,
	0,259,260,3,18,9,0,260,261,5,4,0,0,261,282,1,0,0,0,262,263,5,3,0,0,263,
	268,3,18,9,0,264,269,5,44,0,0,265,269,5,46,0,0,266,267,5,45,0,0,267,269,
	5,46,0,0,268,264,1,0,0,0,268,265,1,0,0,0,268,266,1,0,0,0,269,270,1,0,0,
	0,270,271,5,4,0,0,271,282,1,0,0,0,272,273,5,3,0,0,273,274,3,18,9,0,274,
	276,5,44,0,0,275,277,5,45,0,0,276,275,1,0,0,0,276,277,1,0,0,0,277,278,1,
	0,0,0,278,279,3,18,9,0,279,280,5,4,0,0,280,282,1,0,0,0,281,210,1,0,0,0,
	281,212,1,0,0,0,281,213,1,0,0,0,281,214,1,0,0,0,281,215,1,0,0,0,281,216,
	1,0,0,0,281,217,1,0,0,0,281,218,1,0,0,0,281,219,1,0,0,0,281,220,1,0,0,0,
	281,221,1,0,0,0,281,222,1,0,0,0,281,237,1,0,0,0,281,243,1,0,0,0,281,249,
	1,0,0,0,281,253,1,0,0,0,281,262,1,0,0,0,281,272,1,0,0,0,282,307,1,0,0,0,
	283,284,10,11,0,0,284,285,5,29,0,0,285,306,3,18,9,12,286,287,10,10,0,0,
	287,288,7,1,0,0,288,306,3,18,9,11,289,290,10,9,0,0,290,291,7,2,0,0,291,
	306,3,18,9,10,292,293,10,8,0,0,293,294,7,3,0,0,294,306,3,18,9,9,295,302,
	10,7,0,0,296,303,5,32,0,0,297,303,5,33,0,0,298,303,5,44,0,0,299,300,5,44,
	0,0,300,303,5,45,0,0,301,303,5,42,0,0,302,296,1,0,0,0,302,297,1,0,0,0,302,
	298,1,0,0,0,302,299,1,0,0,0,302,301,1,0,0,0,303,304,1,0,0,0,304,306,3,18,
	9,8,305,283,1,0,0,0,305,286,1,0,0,0,305,289,1,0,0,0,305,292,1,0,0,0,305,
	295,1,0,0,0,306,309,1,0,0,0,307,305,1,0,0,0,307,308,1,0,0,0,308,19,1,0,
	0,0,309,307,1,0,0,0,310,311,5,5,0,0,311,312,3,2,1,0,312,313,5,6,0,0,313,
	319,1,0,0,0,314,315,5,5,0,0,315,316,3,20,10,0,316,317,5,6,0,0,317,319,1,
	0,0,0,318,310,1,0,0,0,318,314,1,0,0,0,319,21,1,0,0,0,320,321,5,47,0,0,321,
	325,5,3,0,0,322,324,3,46,23,0,323,322,1,0,0,0,324,327,1,0,0,0,325,323,1,
	0,0,0,325,326,1,0,0,0,326,328,1,0,0,0,327,325,1,0,0,0,328,329,5,4,0,0,329,
	23,1,0,0,0,330,331,3,22,11,0,331,332,3,8,4,0,332,25,1,0,0,0,333,334,5,48,
	0,0,334,335,3,24,12,0,335,27,1,0,0,0,336,337,5,48,0,0,337,338,3,8,4,0,338,
	29,1,0,0,0,339,340,5,49,0,0,340,341,3,10,5,0,341,31,1,0,0,0,342,343,5,50,
	0,0,343,344,5,3,0,0,344,345,3,46,23,0,345,346,5,4,0,0,346,33,1,0,0,0,347,
	348,5,50,0,0,348,349,5,3,0,0,349,354,3,46,23,0,350,351,5,27,0,0,351,353,
	3,46,23,0,352,350,1,0,0,0,353,356,1,0,0,0,354,352,1,0,0,0,354,355,1,0,0,
	0,355,357,1,0,0,0,356,354,1,0,0,0,357,358,5,4,0,0,358,35,1,0,0,0,359,360,
	3,32,16,0,360,362,5,5,0,0,361,363,3,2,1,0,362,361,1,0,0,0,362,363,1,0,0,
	0,363,364,1,0,0,0,364,365,5,6,0,0,365,37,1,0,0,0,366,367,5,51,0,0,367,368,
	5,5,0,0,368,369,3,2,1,0,369,370,5,6,0,0,370,39,1,0,0,0,371,372,5,14,0,0,
	372,373,5,59,0,0,373,41,1,0,0,0,374,375,3,66,33,0,375,376,5,3,0,0,376,377,
	3,46,23,0,377,378,5,4,0,0,378,43,1,0,0,0,379,380,5,39,0,0,380,381,5,3,0,
	0,381,382,3,46,23,0,382,383,5,4,0,0,383,45,1,0,0,0,384,385,6,23,-1,0,385,
	416,3,50,25,0,386,416,5,59,0,0,387,416,3,52,26,0,388,416,3,54,27,0,389,
	416,3,64,32,0,390,416,3,62,31,0,391,416,3,60,30,0,392,416,3,58,29,0,393,
	416,3,48,24,0,394,416,3,68,34,0,395,416,5,2,0,0,396,409,5,23,0,0,397,410,
	3,50,25,0,398,410,5,59,0,0,399,410,3,52,26,0,400,410,3,54,27,0,401,410,
	3,64,32,0,402,410,3,62,31,0,403,410,3,60,30,0,404,410,3,58,29,0,405,410,
	3,48,24,0,406,410,3,68,34,0,407,410,5,2,0,0,408,410,3,46,23,0,409,397,1,
	0,0,0,409,398,1,0,0,0,409,399,1,0,0,0,409,400,1,0,0,0,409,401,1,0,0,0,409,
	402,1,0,0,0,409,403,1,0,0,0,409,404,1,0,0,0,409,405,1,0,0,0,409,406,1,0,
	0,0,409,407,1,0,0,0,409,408,1,0,0,0,410,416,1,0,0,0,411,412,5,3,0,0,412,
	413,3,46,23,0,413,414,5,4,0,0,414,416,1,0,0,0,415,384,1,0,0,0,415,386,1,
	0,0,0,415,387,1,0,0,0,415,388,1,0,0,0,415,389,1,0,0,0,415,390,1,0,0,0,415,
	391,1,0,0,0,415,392,1,0,0,0,415,393,1,0,0,0,415,394,1,0,0,0,415,395,1,0,
	0,0,415,396,1,0,0,0,415,411,1,0,0,0,416,466,1,0,0,0,417,418,10,11,0,0,418,
	419,5,29,0,0,419,465,3,46,23,12,420,421,10,10,0,0,421,422,7,1,0,0,422,465,
	3,46,23,11,423,424,10,9,0,0,424,425,7,2,0,0,425,465,3,46,23,10,426,427,
	10,8,0,0,427,428,7,3,0,0,428,465,3,46,23,9,429,436,10,7,0,0,430,437,5,32,
	0,0,431,437,5,33,0,0,432,437,5,44,0,0,433,434,5,44,0,0,434,437,5,45,0,0,
	435,437,5,42,0,0,436,430,1,0,0,0,436,431,1,0,0,0,436,432,1,0,0,0,436,433,
	1,0,0,0,436,435,1,0,0,0,437,438,1,0,0,0,438,465,3,46,23,8,439,440,10,6,
	0,0,440,441,5,41,0,0,441,465,3,46,23,7,442,443,10,5,0,0,443,444,5,43,0,
	0,444,465,3,46,23,6,445,447,10,3,0,0,446,448,5,45,0,0,447,446,1,0,0,0,447,
	448,1,0,0,0,448,449,1,0,0,0,449,450,5,42,0,0,450,465,3,46,23,4,451,452,
	10,1,0,0,452,454,5,44,0,0,453,455,5,45,0,0,454,453,1,0,0,0,454,455,1,0,
	0,0,455,456,1,0,0,0,456,465,3,46,23,2,457,462,10,2,0,0,458,463,5,44,0,0,
	459,463,5,46,0,0,460,461,5,45,0,0,461,463,5,46,0,0,462,458,1,0,0,0,462,
	459,1,0,0,0,462,460,1,0,0,0,463,465,1,0,0,0,464,417,1,0,0,0,464,420,1,0,
	0,0,464,423,1,0,0,0,464,426,1,0,0,0,464,429,1,0,0,0,464,439,1,0,0,0,464,
	442,1,0,0,0,464,445,1,0,0,0,464,451,1,0,0,0,464,457,1,0,0,0,465,468,1,0,
	0,0,466,464,1,0,0,0,466,467,1,0,0,0,467,47,1,0,0,0,468,466,1,0,0,0,469,
	470,5,59,0,0,470,479,5,3,0,0,471,476,3,46,23,0,472,473,5,27,0,0,473,475,
	3,46,23,0,474,472,1,0,0,0,475,478,1,0,0,0,476,474,1,0,0,0,476,477,1,0,0,
	0,477,480,1,0,0,0,478,476,1,0,0,0,479,471,1,0,0,0,479,480,1,0,0,0,480,481,
	1,0,0,0,481,482,5,4,0,0,482,49,1,0,0,0,483,484,5,16,0,0,484,489,5,57,0,
	0,485,489,5,57,0,0,486,489,5,58,0,0,487,489,5,46,0,0,488,483,1,0,0,0,488,
	485,1,0,0,0,488,486,1,0,0,0,488,487,1,0,0,0,489,51,1,0,0,0,490,492,5,31,
	0,0,491,493,5,16,0,0,492,491,1,0,0,0,492,493,1,0,0,0,493,494,1,0,0,0,494,
	503,5,59,0,0,495,496,5,25,0,0,496,504,5,59,0,0,497,498,5,30,0,0,498,502,
	5,56,0,0,499,500,5,30,0,0,500,502,5,55,0,0,501,497,1,0,0,0,501,499,1,0,
	0,0,502,504,1,0,0,0,503,495,1,0,0,0,503,501,1,0,0,0,503,504,1,0,0,0,504,
	53,1,0,0,0,505,506,5,31,0,0,506,507,5,31,0,0,507,508,5,59,0,0,508,55,1,
	0,0,0,509,510,5,31,0,0,510,511,7,4,0,0,511,516,5,59,0,0,512,513,5,25,0,
	0,513,517,5,59,0,0,514,515,5,22,0,0,515,517,5,59,0,0,516,512,1,0,0,0,516,
	514,1,0,0,0,516,517,1,0,0,0,517,57,1,0,0,0,518,519,5,31,0,0,519,520,5,17,
	0,0,520,59,1,0,0,0,521,522,5,31,0,0,522,523,5,24,0,0,523,61,1,0,0,0,524,
	525,5,31,0,0,525,526,5,23,0,0,526,63,1,0,0,0,527,528,5,25,0,0,528,529,5,
	59,0,0,529,65,1,0,0,0,530,535,1,0,0,0,531,535,5,52,0,0,532,535,5,53,0,0,
	533,535,5,54,0,0,534,530,1,0,0,0,534,531,1,0,0,0,534,532,1,0,0,0,534,533,
	1,0,0,0,535,67,1,0,0,0,536,537,5,1,0,0,537,69,1,0,0,0,538,539,5,2,0,0,539,
	71,1,0,0,0,58,80,84,91,99,104,107,113,117,123,127,130,132,135,138,140,144,
	147,149,152,157,160,165,173,176,185,190,194,203,206,208,235,256,268,276,
	281,302,305,307,318,325,354,362,409,415,436,447,454,462,464,466,476,479,
	488,492,501,503,516,534];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MocaParser.__ATN) {
			MocaParser.__ATN = new ATNDeserializer().deserialize(MocaParser._serializedATN);
		}

		return MocaParser.__ATN;
	}


	static DecisionsToDFA = MocaParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Moca_scriptContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sequence(): SequenceContext {
		return this.getTypedRuleContext(SequenceContext, 0) as SequenceContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(MocaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_moca_script;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterMoca_script) {
	 		listener.enterMoca_script(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitMoca_script) {
	 		listener.exitMoca_script(this);
		}
	}
}


export class SequenceContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stream_list(): StreamContext[] {
		return this.getTypedRuleContexts(StreamContext) as StreamContext[];
	}
	public stream(i: number): StreamContext {
		return this.getTypedRuleContext(StreamContext, i) as StreamContext;
	}
	public SEMI_COLON_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.SEMI_COLON);
	}
	public SEMI_COLON(i: number): TerminalNode {
		return this.getToken(MocaParser.SEMI_COLON, i);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_sequence;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterSequence) {
	 		listener.enterSequence(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitSequence) {
	 		listener.exitSequence(this);
		}
	}
}


export class StreamContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public group_list(): GroupContext[] {
		return this.getTypedRuleContexts(GroupContext) as GroupContext[];
	}
	public group(i: number): GroupContext {
		return this.getTypedRuleContext(GroupContext, i) as GroupContext;
	}
	public PIPE_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.PIPE);
	}
	public PIPE(i: number): TerminalNode {
		return this.getToken(MocaParser.PIPE, i);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_stream;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterStream) {
	 		listener.enterStream(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitStream) {
	 		listener.exitStream(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public AMPERSAND_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.AMPERSAND);
	}
	public AMPERSAND(i: number): TerminalNode {
		return this.getToken(MocaParser.AMPERSAND, i);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_group;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterGroup) {
	 		listener.enterGroup(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitGroup) {
	 		listener.exitGroup(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public if_statement(): If_statementContext {
		return this.getTypedRuleContext(If_statementContext, 0) as If_statementContext;
	}
	public try_block(): Try_blockContext {
		return this.getTypedRuleContext(Try_blockContext, 0) as Try_blockContext;
	}
	public catch_multi_expr(): Catch_multi_exprContext {
		return this.getTypedRuleContext(Catch_multi_exprContext, 0) as Catch_multi_exprContext;
	}
	public redirect_expr(): Redirect_exprContext {
		return this.getTypedRuleContext(Redirect_exprContext, 0) as Redirect_exprContext;
	}
	public else_if_statement_list(): Else_if_statementContext[] {
		return this.getTypedRuleContexts(Else_if_statementContext) as Else_if_statementContext[];
	}
	public else_if_statement(i: number): Else_if_statementContext {
		return this.getTypedRuleContext(Else_if_statementContext, i) as Else_if_statementContext;
	}
	public else_statement(): Else_statementContext {
		return this.getTypedRuleContext(Else_statementContext, 0) as Else_statementContext;
	}
	public catch_sequence_list(): Catch_sequenceContext[] {
		return this.getTypedRuleContexts(Catch_sequenceContext) as Catch_sequenceContext[];
	}
	public catch_sequence(i: number): Catch_sequenceContext {
		return this.getTypedRuleContext(Catch_sequenceContext, i) as Catch_sequenceContext;
	}
	public finally_sequence(): Finally_sequenceContext {
		return this.getTypedRuleContext(Finally_sequenceContext, 0) as Finally_sequenceContext;
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_statement;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public command(): CommandContext {
		return this.getTypedRuleContext(CommandContext, 0) as CommandContext;
	}
	public remote_expr(): Remote_exprContext {
		return this.getTypedRuleContext(Remote_exprContext, 0) as Remote_exprContext;
	}
	public suppress_warnings_expr(): Suppress_warnings_exprContext {
		return this.getTypedRuleContext(Suppress_warnings_exprContext, 0) as Suppress_warnings_exprContext;
	}
	public sub_sequence(): Sub_sequenceContext {
		return this.getTypedRuleContext(Sub_sequenceContext, 0) as Sub_sequenceContext;
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_block;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public groovy_script(): Groovy_scriptContext {
		return this.getTypedRuleContext(Groovy_scriptContext, 0) as Groovy_scriptContext;
	}
	public sql_script(): Sql_scriptContext {
		return this.getTypedRuleContext(Sql_scriptContext, 0) as Sql_scriptContext;
	}
	public verb_noun_clause(): Verb_noun_clauseContext {
		return this.getTypedRuleContext(Verb_noun_clauseContext, 0) as Verb_noun_clauseContext;
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_command;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterCommand) {
	 		listener.enterCommand(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitCommand) {
	 		listener.exitCommand(this);
		}
	}
}


export class Verb_noun_clauseContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CARET(): TerminalNode {
		return this.getToken(MocaParser.CARET, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(MocaParser.WHERE, 0);
	}
	public verb_noun_clause_arg_list(): Verb_noun_clause_argContext[] {
		return this.getTypedRuleContexts(Verb_noun_clause_argContext) as Verb_noun_clause_argContext[];
	}
	public verb_noun_clause_arg(i: number): Verb_noun_clause_argContext {
		return this.getTypedRuleContext(Verb_noun_clause_argContext, i) as Verb_noun_clause_argContext;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(MocaParser.WORD, i);
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(MocaParser.AND, i);
	}
	public LIKE_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.LIKE);
	}
	public LIKE(i: number): TerminalNode {
		return this.getToken(MocaParser.LIKE, i);
	}
	public OR_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.OR);
	}
	public OR(i: number): TerminalNode {
		return this.getToken(MocaParser.OR, i);
	}
	public IS_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.IS);
	}
	public IS(i: number): TerminalNode {
		return this.getToken(MocaParser.IS, i);
	}
	public NOT_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.NOT);
	}
	public NOT(i: number): TerminalNode {
		return this.getToken(MocaParser.NOT, i);
	}
	public NULL_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.NULL);
	}
	public NULL(i: number): TerminalNode {
		return this.getToken(MocaParser.NULL, i);
	}
	public IF_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.IF);
	}
	public IF(i: number): TerminalNode {
		return this.getToken(MocaParser.IF, i);
	}
	public ELSE_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.ELSE);
	}
	public ELSE(i: number): TerminalNode {
		return this.getToken(MocaParser.ELSE, i);
	}
	public TRY_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.TRY);
	}
	public TRY(i: number): TerminalNode {
		return this.getToken(MocaParser.TRY, i);
	}
	public CATCH_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.CATCH);
	}
	public CATCH(i: number): TerminalNode {
		return this.getToken(MocaParser.CATCH, i);
	}
	public FINALLY_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.FINALLY);
	}
	public FINALLY(i: number): TerminalNode {
		return this.getToken(MocaParser.FINALLY, i);
	}
	public REMOTE_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.REMOTE);
	}
	public REMOTE(i: number): TerminalNode {
		return this.getToken(MocaParser.REMOTE, i);
	}
	public PARALLEL_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.PARALLEL);
	}
	public PARALLEL(i: number): TerminalNode {
		return this.getToken(MocaParser.PARALLEL, i);
	}
	public INPARALLEL_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.INPARALLEL);
	}
	public INPARALLEL(i: number): TerminalNode {
		return this.getToken(MocaParser.INPARALLEL, i);
	}
	public KEEP_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.KEEP);
	}
	public KEEP(i: number): TerminalNode {
		return this.getToken(MocaParser.KEEP, i);
	}
	public ONSTACK_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.ONSTACK);
	}
	public ONSTACK(i: number): TerminalNode {
		return this.getToken(MocaParser.ONSTACK, i);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_verb_noun_clause;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterVerb_noun_clause) {
	 		listener.enterVerb_noun_clause(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitVerb_noun_clause) {
	 		listener.exitVerb_noun_clause(this);
		}
	}
}


export class Verb_noun_clause_argContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OVERSTACKED_ARGS(): TerminalNode {
		return this.getToken(MocaParser.OVERSTACKED_ARGS, 0);
	}
	public SPECIAL_COMMAND_ARG_NO_ROWS(): TerminalNode {
		return this.getToken(MocaParser.SPECIAL_COMMAND_ARG_NO_ROWS, 0);
	}
	public SPECIAL_COMMAND_ARG_DUMMY_ARG(): TerminalNode {
		return this.getToken(MocaParser.SPECIAL_COMMAND_ARG_DUMMY_ARG, 0);
	}
	public groovy_script(): Groovy_scriptContext {
		return this.getTypedRuleContext(Groovy_scriptContext, 0) as Groovy_scriptContext;
	}
	public SINGLE_BRACKET_STRING(): TerminalNode {
		return this.getToken(MocaParser.SINGLE_BRACKET_STRING, 0);
	}
	public at_star(): At_starContext {
		return this.getTypedRuleContext(At_starContext, 0) as At_starContext;
	}
	public at_plus_variable(): At_plus_variableContext {
		return this.getTypedRuleContext(At_plus_variableContext, 0) as At_plus_variableContext;
	}
	public WORD(): TerminalNode {
		return this.getToken(MocaParser.WORD, 0);
	}
	public verb_noun_clause_arg_expr(): Verb_noun_clause_arg_exprContext {
		return this.getTypedRuleContext(Verb_noun_clause_arg_exprContext, 0) as Verb_noun_clause_arg_exprContext;
	}
	public IS(): TerminalNode {
		return this.getToken(MocaParser.IS, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(MocaParser.NULL, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(MocaParser.LIKE, 0);
	}
	public LESS(): TerminalNode {
		return this.getToken(MocaParser.LESS, 0);
	}
	public GREATER(): TerminalNode {
		return this.getToken(MocaParser.GREATER, 0);
	}
	public LESS_EQUAL(): TerminalNode {
		return this.getToken(MocaParser.LESS_EQUAL, 0);
	}
	public GREATER_EQUAL(): TerminalNode {
		return this.getToken(MocaParser.GREATER_EQUAL, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(MocaParser.EQUAL, 0);
	}
	public NOT_EQUAL(): TerminalNode {
		return this.getToken(MocaParser.NOT_EQUAL, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(MocaParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_verb_noun_clause_arg;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterVerb_noun_clause_arg) {
	 		listener.enterVerb_noun_clause_arg(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitVerb_noun_clause_arg) {
	 		listener.exitVerb_noun_clause_arg(this);
		}
	}
}


export class Verb_noun_clause_arg_exprContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal_value(): Literal_valueContext {
		return this.getTypedRuleContext(Literal_valueContext, 0) as Literal_valueContext;
	}
	public WORD(): TerminalNode {
		return this.getToken(MocaParser.WORD, 0);
	}
	public at_variable(): At_variableContext {
		return this.getTypedRuleContext(At_variableContext, 0) as At_variableContext;
	}
	public environment_variable(): Environment_variableContext {
		return this.getTypedRuleContext(Environment_variableContext, 0) as Environment_variableContext;
	}
	public integration_variable(): Integration_variableContext {
		return this.getTypedRuleContext(Integration_variableContext, 0) as Integration_variableContext;
	}
	public at_bang(): At_bangContext {
		return this.getTypedRuleContext(At_bangContext, 0) as At_bangContext;
	}
	public at_question(): At_questionContext {
		return this.getTypedRuleContext(At_questionContext, 0) as At_questionContext;
	}
	public at_star(): At_starContext {
		return this.getTypedRuleContext(At_starContext, 0) as At_starContext;
	}
	public function_expr(): Function_exprContext {
		return this.getTypedRuleContext(Function_exprContext, 0) as Function_exprContext;
	}
	public groovy_script(): Groovy_scriptContext {
		return this.getTypedRuleContext(Groovy_scriptContext, 0) as Groovy_scriptContext;
	}
	public SINGLE_BRACKET_STRING(): TerminalNode {
		return this.getToken(MocaParser.SINGLE_BRACKET_STRING, 0);
	}
	public BANG(): TerminalNode {
		return this.getToken(MocaParser.BANG, 0);
	}
	public verb_noun_clause_arg_expr_list(): Verb_noun_clause_arg_exprContext[] {
		return this.getTypedRuleContexts(Verb_noun_clause_arg_exprContext) as Verb_noun_clause_arg_exprContext[];
	}
	public verb_noun_clause_arg_expr(i: number): Verb_noun_clause_arg_exprContext {
		return this.getTypedRuleContext(Verb_noun_clause_arg_exprContext, i) as Verb_noun_clause_arg_exprContext;
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.LEFT_PAREN, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(MocaParser.AND, 0);
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.RIGHT_PAREN, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(MocaParser.OR, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(MocaParser.LIKE, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(MocaParser.NOT, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(MocaParser.IS, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(MocaParser.NULL, 0);
	}
	public DOUBLE_PIPE(): TerminalNode {
		return this.getToken(MocaParser.DOUBLE_PIPE, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(MocaParser.STAR, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(MocaParser.DIV, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(MocaParser.MOD, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(MocaParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(MocaParser.MINUS, 0);
	}
	public LESS(): TerminalNode {
		return this.getToken(MocaParser.LESS, 0);
	}
	public LESS_EQUAL(): TerminalNode {
		return this.getToken(MocaParser.LESS_EQUAL, 0);
	}
	public GREATER(): TerminalNode {
		return this.getToken(MocaParser.GREATER, 0);
	}
	public GREATER_EQUAL(): TerminalNode {
		return this.getToken(MocaParser.GREATER_EQUAL, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(MocaParser.EQUAL, 0);
	}
	public NOT_EQUAL(): TerminalNode {
		return this.getToken(MocaParser.NOT_EQUAL, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_verb_noun_clause_arg_expr;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterVerb_noun_clause_arg_expr) {
	 		listener.enterVerb_noun_clause_arg_expr(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitVerb_noun_clause_arg_expr) {
	 		listener.exitVerb_noun_clause_arg_expr(this);
		}
	}
}


export class Sub_sequenceContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(MocaParser.LEFT_BRACE, 0);
	}
	public sequence(): SequenceContext {
		return this.getTypedRuleContext(SequenceContext, 0) as SequenceContext;
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(MocaParser.RIGHT_BRACE, 0);
	}
	public sub_sequence(): Sub_sequenceContext {
		return this.getTypedRuleContext(Sub_sequenceContext, 0) as Sub_sequenceContext;
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_sub_sequence;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterSub_sequence) {
	 		listener.enterSub_sequence(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitSub_sequence) {
	 		listener.exitSub_sequence(this);
		}
	}
}


export class If_exprContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(MocaParser.IF, 0);
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.LEFT_PAREN, 0);
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.RIGHT_PAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_if_expr;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterIf_expr) {
	 		listener.enterIf_expr(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitIf_expr) {
	 		listener.exitIf_expr(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public if_expr(): If_exprContext {
		return this.getTypedRuleContext(If_exprContext, 0) as If_exprContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_if_statement;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterIf_statement) {
	 		listener.enterIf_statement(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitIf_statement) {
	 		listener.exitIf_statement(this);
		}
	}
}


export class Else_if_statementContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSE(): TerminalNode {
		return this.getToken(MocaParser.ELSE, 0);
	}
	public if_statement(): If_statementContext {
		return this.getTypedRuleContext(If_statementContext, 0) as If_statementContext;
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_else_if_statement;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterElse_if_statement) {
	 		listener.enterElse_if_statement(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitElse_if_statement) {
	 		listener.exitElse_if_statement(this);
		}
	}
}


export class Else_statementContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSE(): TerminalNode {
		return this.getToken(MocaParser.ELSE, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_else_statement;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterElse_statement) {
	 		listener.enterElse_statement(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitElse_statement) {
	 		listener.exitElse_statement(this);
		}
	}
}


export class Try_blockContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRY(): TerminalNode {
		return this.getToken(MocaParser.TRY, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_try_block;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterTry_block) {
	 		listener.enterTry_block(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitTry_block) {
	 		listener.exitTry_block(this);
		}
	}
}


export class Catch_single_exprContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CATCH(): TerminalNode {
		return this.getToken(MocaParser.CATCH, 0);
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.LEFT_PAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.RIGHT_PAREN, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_catch_single_expr;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterCatch_single_expr) {
	 		listener.enterCatch_single_expr(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitCatch_single_expr) {
	 		listener.exitCatch_single_expr(this);
		}
	}
}


export class Catch_multi_exprContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CATCH(): TerminalNode {
		return this.getToken(MocaParser.CATCH, 0);
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.LEFT_PAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.RIGHT_PAREN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_catch_multi_expr;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterCatch_multi_expr) {
	 		listener.enterCatch_multi_expr(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitCatch_multi_expr) {
	 		listener.exitCatch_multi_expr(this);
		}
	}
}


export class Catch_sequenceContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public catch_single_expr(): Catch_single_exprContext {
		return this.getTypedRuleContext(Catch_single_exprContext, 0) as Catch_single_exprContext;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(MocaParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(MocaParser.RIGHT_BRACE, 0);
	}
	public sequence(): SequenceContext {
		return this.getTypedRuleContext(SequenceContext, 0) as SequenceContext;
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_catch_sequence;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterCatch_sequence) {
	 		listener.enterCatch_sequence(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitCatch_sequence) {
	 		listener.exitCatch_sequence(this);
		}
	}
}


export class Finally_sequenceContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FINALLY(): TerminalNode {
		return this.getToken(MocaParser.FINALLY, 0);
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(MocaParser.LEFT_BRACE, 0);
	}
	public sequence(): SequenceContext {
		return this.getTypedRuleContext(SequenceContext, 0) as SequenceContext;
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(MocaParser.RIGHT_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_finally_sequence;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterFinally_sequence) {
	 		listener.enterFinally_sequence(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitFinally_sequence) {
	 		listener.exitFinally_sequence(this);
		}
	}
}


export class Redirect_exprContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOUBLE_GREATER(): TerminalNode {
		return this.getToken(MocaParser.DOUBLE_GREATER, 0);
	}
	public WORD(): TerminalNode {
		return this.getToken(MocaParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_redirect_expr;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterRedirect_expr) {
	 		listener.enterRedirect_expr(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitRedirect_expr) {
	 		listener.exitRedirect_expr(this);
		}
	}
}


export class Remote_exprContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public remote_keyword(): Remote_keywordContext {
		return this.getTypedRuleContext(Remote_keywordContext, 0) as Remote_keywordContext;
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.LEFT_PAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.RIGHT_PAREN, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_remote_expr;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterRemote_expr) {
	 		listener.enterRemote_expr(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitRemote_expr) {
	 		listener.exitRemote_expr(this);
		}
	}
}


export class Suppress_warnings_exprContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SUPPRESS_WARNINGS(): TerminalNode {
		return this.getToken(MocaParser.SUPPRESS_WARNINGS, 0);
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.LEFT_PAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.RIGHT_PAREN, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_suppress_warnings_expr;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterSuppress_warnings_expr) {
	 		listener.enterSuppress_warnings_expr(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitSuppress_warnings_expr) {
	 		listener.exitSuppress_warnings_expr(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal_value(): Literal_valueContext {
		return this.getTypedRuleContext(Literal_valueContext, 0) as Literal_valueContext;
	}
	public WORD(): TerminalNode {
		return this.getToken(MocaParser.WORD, 0);
	}
	public at_variable(): At_variableContext {
		return this.getTypedRuleContext(At_variableContext, 0) as At_variableContext;
	}
	public environment_variable(): Environment_variableContext {
		return this.getTypedRuleContext(Environment_variableContext, 0) as Environment_variableContext;
	}
	public integration_variable(): Integration_variableContext {
		return this.getTypedRuleContext(Integration_variableContext, 0) as Integration_variableContext;
	}
	public at_bang(): At_bangContext {
		return this.getTypedRuleContext(At_bangContext, 0) as At_bangContext;
	}
	public at_question(): At_questionContext {
		return this.getTypedRuleContext(At_questionContext, 0) as At_questionContext;
	}
	public at_star(): At_starContext {
		return this.getTypedRuleContext(At_starContext, 0) as At_starContext;
	}
	public function_expr(): Function_exprContext {
		return this.getTypedRuleContext(Function_exprContext, 0) as Function_exprContext;
	}
	public groovy_script(): Groovy_scriptContext {
		return this.getTypedRuleContext(Groovy_scriptContext, 0) as Groovy_scriptContext;
	}
	public SINGLE_BRACKET_STRING(): TerminalNode {
		return this.getToken(MocaParser.SINGLE_BRACKET_STRING, 0);
	}
	public BANG(): TerminalNode {
		return this.getToken(MocaParser.BANG, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.LEFT_PAREN, 0);
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.RIGHT_PAREN, 0);
	}
	public DOUBLE_PIPE(): TerminalNode {
		return this.getToken(MocaParser.DOUBLE_PIPE, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(MocaParser.STAR, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(MocaParser.DIV, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(MocaParser.MOD, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(MocaParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(MocaParser.MINUS, 0);
	}
	public LESS(): TerminalNode {
		return this.getToken(MocaParser.LESS, 0);
	}
	public LESS_EQUAL(): TerminalNode {
		return this.getToken(MocaParser.LESS_EQUAL, 0);
	}
	public GREATER(): TerminalNode {
		return this.getToken(MocaParser.GREATER, 0);
	}
	public GREATER_EQUAL(): TerminalNode {
		return this.getToken(MocaParser.GREATER_EQUAL, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(MocaParser.EQUAL, 0);
	}
	public NOT_EQUAL(): TerminalNode {
		return this.getToken(MocaParser.NOT_EQUAL, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(MocaParser.IS, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(MocaParser.NOT, 0);
	}
	public LIKE(): TerminalNode {
		return this.getToken(MocaParser.LIKE, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(MocaParser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(MocaParser.OR, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(MocaParser.NULL, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_expr;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
}


export class Function_exprContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(MocaParser.WORD, 0);
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.LEFT_PAREN, 0);
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(MocaParser.RIGHT_PAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_function_expr;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterFunction_expr) {
	 		listener.enterFunction_expr(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitFunction_expr) {
	 		listener.exitFunction_expr(this);
		}
	}
}


export class Literal_valueContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MINUS(): TerminalNode {
		return this.getToken(MocaParser.MINUS, 0);
	}
	public NUMERIC_LITERAL(): TerminalNode {
		return this.getToken(MocaParser.NUMERIC_LITERAL, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(MocaParser.STRING_LITERAL, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(MocaParser.NULL, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_literal_value;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterLiteral_value) {
	 		listener.enterLiteral_value(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitLiteral_value) {
	 		listener.exitLiteral_value(this);
		}
	}
}


export class At_variableContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(MocaParser.AT, 0);
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(MocaParser.WORD, i);
	}
	public MINUS(): TerminalNode {
		return this.getToken(MocaParser.MINUS, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MocaParser.COLON, 0);
	}
	public POUND(): TerminalNode {
		return this.getToken(MocaParser.POUND, 0);
	}
	public KEEP(): TerminalNode {
		return this.getToken(MocaParser.KEEP, 0);
	}
	public ONSTACK(): TerminalNode {
		return this.getToken(MocaParser.ONSTACK, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_at_variable;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterAt_variable) {
	 		listener.enterAt_variable(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitAt_variable) {
	 		listener.exitAt_variable(this);
		}
	}
}


export class Environment_variableContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.AT);
	}
	public AT(i: number): TerminalNode {
		return this.getToken(MocaParser.AT, i);
	}
	public WORD(): TerminalNode {
		return this.getToken(MocaParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_environment_variable;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterEnvironment_variable) {
	 		listener.enterEnvironment_variable(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitEnvironment_variable) {
	 		listener.exitEnvironment_variable(this);
		}
	}
}


export class At_plus_variableContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(MocaParser.AT, 0);
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(MocaParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(MocaParser.WORD, i);
	}
	public PLUS(): TerminalNode {
		return this.getToken(MocaParser.PLUS, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(MocaParser.MOD, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MocaParser.COLON, 0);
	}
	public CARET(): TerminalNode {
		return this.getToken(MocaParser.CARET, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_at_plus_variable;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterAt_plus_variable) {
	 		listener.enterAt_plus_variable(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitAt_plus_variable) {
	 		listener.exitAt_plus_variable(this);
		}
	}
}


export class At_starContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(MocaParser.AT, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(MocaParser.STAR, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_at_star;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterAt_star) {
	 		listener.enterAt_star(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitAt_star) {
	 		listener.exitAt_star(this);
		}
	}
}


export class At_questionContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(MocaParser.AT, 0);
	}
	public QUESTION(): TerminalNode {
		return this.getToken(MocaParser.QUESTION, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_at_question;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterAt_question) {
	 		listener.enterAt_question(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitAt_question) {
	 		listener.exitAt_question(this);
		}
	}
}


export class At_bangContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(MocaParser.AT, 0);
	}
	public BANG(): TerminalNode {
		return this.getToken(MocaParser.BANG, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_at_bang;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterAt_bang) {
	 		listener.enterAt_bang(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitAt_bang) {
	 		listener.exitAt_bang(this);
		}
	}
}


export class Integration_variableContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(MocaParser.COLON, 0);
	}
	public WORD(): TerminalNode {
		return this.getToken(MocaParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_integration_variable;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterIntegration_variable) {
	 		listener.enterIntegration_variable(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitIntegration_variable) {
	 		listener.exitIntegration_variable(this);
		}
	}
}


export class Remote_keywordContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REMOTE(): TerminalNode {
		return this.getToken(MocaParser.REMOTE, 0);
	}
	public PARALLEL(): TerminalNode {
		return this.getToken(MocaParser.PARALLEL, 0);
	}
	public INPARALLEL(): TerminalNode {
		return this.getToken(MocaParser.INPARALLEL, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_remote_keyword;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterRemote_keyword) {
	 		listener.enterRemote_keyword(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitRemote_keyword) {
	 		listener.exitRemote_keyword(this);
		}
	}
}


export class Groovy_scriptContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOUBLE_BRACKET_STRING(): TerminalNode {
		return this.getToken(MocaParser.DOUBLE_BRACKET_STRING, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_groovy_script;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterGroovy_script) {
	 		listener.enterGroovy_script(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitGroovy_script) {
	 		listener.exitGroovy_script(this);
		}
	}
}


export class Sql_scriptContext extends ParserRuleContext {
	constructor(parser?: MocaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SINGLE_BRACKET_STRING(): TerminalNode {
		return this.getToken(MocaParser.SINGLE_BRACKET_STRING, 0);
	}
    public get ruleIndex(): number {
    	return MocaParser.RULE_sql_script;
	}
	public enterRule(listener: MocaListener): void {
	    if(listener.enterSql_script) {
	 		listener.enterSql_script(this);
		}
	}
	public exitRule(listener: MocaListener): void {
	    if(listener.exitSql_script) {
	 		listener.exitSql_script(this);
		}
	}
}
