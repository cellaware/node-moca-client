// Generated from C://dev//node-moca-client//src//lang//antlr//Moca.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { Moca_scriptContext } from "./MocaParser";
import { SequenceContext } from "./MocaParser";
import { StreamContext } from "./MocaParser";
import { GroupContext } from "./MocaParser";
import { StatementContext } from "./MocaParser";
import { BlockContext } from "./MocaParser";
import { CommandContext } from "./MocaParser";
import { Verb_noun_clauseContext } from "./MocaParser";
import { Verb_noun_clause_argContext } from "./MocaParser";
import { Verb_noun_clause_arg_exprContext } from "./MocaParser";
import { Sub_sequenceContext } from "./MocaParser";
import { If_exprContext } from "./MocaParser";
import { If_statementContext } from "./MocaParser";
import { Else_if_statementContext } from "./MocaParser";
import { Else_statementContext } from "./MocaParser";
import { Try_blockContext } from "./MocaParser";
import { Catch_single_exprContext } from "./MocaParser";
import { Catch_multi_exprContext } from "./MocaParser";
import { Catch_sequenceContext } from "./MocaParser";
import { Finally_sequenceContext } from "./MocaParser";
import { Redirect_exprContext } from "./MocaParser";
import { Remote_exprContext } from "./MocaParser";
import { Suppress_warnings_exprContext } from "./MocaParser";
import { ExprContext } from "./MocaParser";
import { Function_exprContext } from "./MocaParser";
import { Literal_valueContext } from "./MocaParser";
import { At_variableContext } from "./MocaParser";
import { Environment_variableContext } from "./MocaParser";
import { At_plus_variableContext } from "./MocaParser";
import { At_starContext } from "./MocaParser";
import { At_questionContext } from "./MocaParser";
import { At_bangContext } from "./MocaParser";
import { Integration_variableContext } from "./MocaParser";
import { Remote_keywordContext } from "./MocaParser";
import { Groovy_scriptContext } from "./MocaParser";
import { Sql_scriptContext } from "./MocaParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MocaParser`.
 */
export default class MocaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MocaParser.moca_script`.
	 * @param ctx the parse tree
	 */
	enterMoca_script?: (ctx: Moca_scriptContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.moca_script`.
	 * @param ctx the parse tree
	 */
	exitMoca_script?: (ctx: Moca_scriptContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.sequence`.
	 * @param ctx the parse tree
	 */
	enterSequence?: (ctx: SequenceContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.sequence`.
	 * @param ctx the parse tree
	 */
	exitSequence?: (ctx: SequenceContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.stream`.
	 * @param ctx the parse tree
	 */
	enterStream?: (ctx: StreamContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.stream`.
	 * @param ctx the parse tree
	 */
	exitStream?: (ctx: StreamContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.verb_noun_clause`.
	 * @param ctx the parse tree
	 */
	enterVerb_noun_clause?: (ctx: Verb_noun_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.verb_noun_clause`.
	 * @param ctx the parse tree
	 */
	exitVerb_noun_clause?: (ctx: Verb_noun_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.verb_noun_clause_arg`.
	 * @param ctx the parse tree
	 */
	enterVerb_noun_clause_arg?: (ctx: Verb_noun_clause_argContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.verb_noun_clause_arg`.
	 * @param ctx the parse tree
	 */
	exitVerb_noun_clause_arg?: (ctx: Verb_noun_clause_argContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.verb_noun_clause_arg_expr`.
	 * @param ctx the parse tree
	 */
	enterVerb_noun_clause_arg_expr?: (ctx: Verb_noun_clause_arg_exprContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.verb_noun_clause_arg_expr`.
	 * @param ctx the parse tree
	 */
	exitVerb_noun_clause_arg_expr?: (ctx: Verb_noun_clause_arg_exprContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.sub_sequence`.
	 * @param ctx the parse tree
	 */
	enterSub_sequence?: (ctx: Sub_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.sub_sequence`.
	 * @param ctx the parse tree
	 */
	exitSub_sequence?: (ctx: Sub_sequenceContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.if_expr`.
	 * @param ctx the parse tree
	 */
	enterIf_expr?: (ctx: If_exprContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.if_expr`.
	 * @param ctx the parse tree
	 */
	exitIf_expr?: (ctx: If_exprContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.else_if_statement`.
	 * @param ctx the parse tree
	 */
	enterElse_if_statement?: (ctx: Else_if_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.else_if_statement`.
	 * @param ctx the parse tree
	 */
	exitElse_if_statement?: (ctx: Else_if_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.else_statement`.
	 * @param ctx the parse tree
	 */
	enterElse_statement?: (ctx: Else_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.else_statement`.
	 * @param ctx the parse tree
	 */
	exitElse_statement?: (ctx: Else_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.try_block`.
	 * @param ctx the parse tree
	 */
	enterTry_block?: (ctx: Try_blockContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.try_block`.
	 * @param ctx the parse tree
	 */
	exitTry_block?: (ctx: Try_blockContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.catch_single_expr`.
	 * @param ctx the parse tree
	 */
	enterCatch_single_expr?: (ctx: Catch_single_exprContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.catch_single_expr`.
	 * @param ctx the parse tree
	 */
	exitCatch_single_expr?: (ctx: Catch_single_exprContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.catch_multi_expr`.
	 * @param ctx the parse tree
	 */
	enterCatch_multi_expr?: (ctx: Catch_multi_exprContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.catch_multi_expr`.
	 * @param ctx the parse tree
	 */
	exitCatch_multi_expr?: (ctx: Catch_multi_exprContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.catch_sequence`.
	 * @param ctx the parse tree
	 */
	enterCatch_sequence?: (ctx: Catch_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.catch_sequence`.
	 * @param ctx the parse tree
	 */
	exitCatch_sequence?: (ctx: Catch_sequenceContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.finally_sequence`.
	 * @param ctx the parse tree
	 */
	enterFinally_sequence?: (ctx: Finally_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.finally_sequence`.
	 * @param ctx the parse tree
	 */
	exitFinally_sequence?: (ctx: Finally_sequenceContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.redirect_expr`.
	 * @param ctx the parse tree
	 */
	enterRedirect_expr?: (ctx: Redirect_exprContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.redirect_expr`.
	 * @param ctx the parse tree
	 */
	exitRedirect_expr?: (ctx: Redirect_exprContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.remote_expr`.
	 * @param ctx the parse tree
	 */
	enterRemote_expr?: (ctx: Remote_exprContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.remote_expr`.
	 * @param ctx the parse tree
	 */
	exitRemote_expr?: (ctx: Remote_exprContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.suppress_warnings_expr`.
	 * @param ctx the parse tree
	 */
	enterSuppress_warnings_expr?: (ctx: Suppress_warnings_exprContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.suppress_warnings_expr`.
	 * @param ctx the parse tree
	 */
	exitSuppress_warnings_expr?: (ctx: Suppress_warnings_exprContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.function_expr`.
	 * @param ctx the parse tree
	 */
	enterFunction_expr?: (ctx: Function_exprContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.function_expr`.
	 * @param ctx the parse tree
	 */
	exitFunction_expr?: (ctx: Function_exprContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.literal_value`.
	 * @param ctx the parse tree
	 */
	enterLiteral_value?: (ctx: Literal_valueContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.literal_value`.
	 * @param ctx the parse tree
	 */
	exitLiteral_value?: (ctx: Literal_valueContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.at_variable`.
	 * @param ctx the parse tree
	 */
	enterAt_variable?: (ctx: At_variableContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.at_variable`.
	 * @param ctx the parse tree
	 */
	exitAt_variable?: (ctx: At_variableContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.environment_variable`.
	 * @param ctx the parse tree
	 */
	enterEnvironment_variable?: (ctx: Environment_variableContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.environment_variable`.
	 * @param ctx the parse tree
	 */
	exitEnvironment_variable?: (ctx: Environment_variableContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.at_plus_variable`.
	 * @param ctx the parse tree
	 */
	enterAt_plus_variable?: (ctx: At_plus_variableContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.at_plus_variable`.
	 * @param ctx the parse tree
	 */
	exitAt_plus_variable?: (ctx: At_plus_variableContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.at_star`.
	 * @param ctx the parse tree
	 */
	enterAt_star?: (ctx: At_starContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.at_star`.
	 * @param ctx the parse tree
	 */
	exitAt_star?: (ctx: At_starContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.at_question`.
	 * @param ctx the parse tree
	 */
	enterAt_question?: (ctx: At_questionContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.at_question`.
	 * @param ctx the parse tree
	 */
	exitAt_question?: (ctx: At_questionContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.at_bang`.
	 * @param ctx the parse tree
	 */
	enterAt_bang?: (ctx: At_bangContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.at_bang`.
	 * @param ctx the parse tree
	 */
	exitAt_bang?: (ctx: At_bangContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.integration_variable`.
	 * @param ctx the parse tree
	 */
	enterIntegration_variable?: (ctx: Integration_variableContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.integration_variable`.
	 * @param ctx the parse tree
	 */
	exitIntegration_variable?: (ctx: Integration_variableContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.remote_keyword`.
	 * @param ctx the parse tree
	 */
	enterRemote_keyword?: (ctx: Remote_keywordContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.remote_keyword`.
	 * @param ctx the parse tree
	 */
	exitRemote_keyword?: (ctx: Remote_keywordContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.groovy_script`.
	 * @param ctx the parse tree
	 */
	enterGroovy_script?: (ctx: Groovy_scriptContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.groovy_script`.
	 * @param ctx the parse tree
	 */
	exitGroovy_script?: (ctx: Groovy_scriptContext) => void;
	/**
	 * Enter a parse tree produced by `MocaParser.sql_script`.
	 * @param ctx the parse tree
	 */
	enterSql_script?: (ctx: Sql_scriptContext) => void;
	/**
	 * Exit a parse tree produced by `MocaParser.sql_script`.
	 * @param ctx the parse tree
	 */
	exitSql_script?: (ctx: Sql_scriptContext) => void;
}

