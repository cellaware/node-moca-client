grammar Moca;

moca_script: sequence EOF;

sequence: stream (SEMI_COLON stream)* SEMI_COLON?;

stream: group (PIPE group)*;

group: statement (AMPERSAND statement)*;

statement: (
		block catch_multi_expr? redirect_expr?
		| if_statement else_if_statement* else_statement?
		| try_block catch_sequence* finally_sequence? redirect_expr?
	);

block: (remote_expr? | suppress_warnings_expr?) command
	| (remote_expr? | suppress_warnings_expr?) sub_sequence;

command: groovy_script | sql_script | verb_noun_clause;

verb_noun_clause:
	CARET? (
		WORD
		| AND
		| LIKE
		| OR
		| IS
		| NOT
		| NULL
		| IF
		| ELSE
		| TRY
		| CATCH
		| FINALLY
		| REMOTE
		| PARALLEL
		| INPARALLEL
		| KEEP
		| ONSTACK
	)+ (WHERE verb_noun_clause_arg (AND verb_noun_clause_arg)*)?;

verb_noun_clause_arg:
	OVERSTACKED_ARGS
	| SPECIAL_COMMAND_ARG_NO_ROWS
	| SPECIAL_COMMAND_ARG_DUMMY_ARG
	| groovy_script
	| SINGLE_BRACKET_STRING
	| (at_star | at_plus_variable)
	| WORD (
		(IS NOT? NULL)
		| (
			NOT? LIKE
			| LESS
			| GREATER
			| LESS_EQUAL
			| GREATER_EQUAL
			| EQUAL
			| NOT_EQUAL
		) verb_noun_clause_arg_expr
	);

// Very similar to expr, but minor tweaks due to verb noun clause arg goofyness.
verb_noun_clause_arg_expr:
	literal_value
	| WORD
	| at_variable
	| environment_variable
	| integration_variable
	| at_bang
	| at_question
	| at_star
	| function_expr
	| groovy_script
	| SINGLE_BRACKET_STRING
	| (
		BANG (
			literal_value
			| WORD
			| at_variable
			| environment_variable
			| integration_variable
			| at_bang
			| at_question
			| at_star
			| function_expr
			| groovy_script
			| SINGLE_BRACKET_STRING
			| verb_noun_clause_arg_expr
		)
	)
	| verb_noun_clause_arg_expr DOUBLE_PIPE verb_noun_clause_arg_expr
	| verb_noun_clause_arg_expr (STAR | DIV | MOD) verb_noun_clause_arg_expr
	| verb_noun_clause_arg_expr (PLUS | MINUS) verb_noun_clause_arg_expr
	| verb_noun_clause_arg_expr (
		LESS
		| LESS_EQUAL
		| GREATER
		| GREATER_EQUAL
	) verb_noun_clause_arg_expr
	| verb_noun_clause_arg_expr (
		EQUAL
		| NOT_EQUAL
		| IS
		| IS NOT
		| LIKE
	) verb_noun_clause_arg_expr
	| LEFT_PAREN verb_noun_clause_arg_expr AND verb_noun_clause_arg_expr RIGHT_PAREN
	| LEFT_PAREN verb_noun_clause_arg_expr OR verb_noun_clause_arg_expr RIGHT_PAREN
	| LEFT_PAREN verb_noun_clause_arg_expr RIGHT_PAREN
	| LEFT_PAREN verb_noun_clause_arg_expr NOT? (LIKE) verb_noun_clause_arg_expr RIGHT_PAREN
	| LEFT_PAREN verb_noun_clause_arg_expr (IS | NULL | NOT NULL) RIGHT_PAREN
	| LEFT_PAREN verb_noun_clause_arg_expr IS NOT? verb_noun_clause_arg_expr RIGHT_PAREN;

sub_sequence:
	LEFT_BRACE sequence RIGHT_BRACE
	| LEFT_BRACE sub_sequence RIGHT_BRACE;

if_expr: IF LEFT_PAREN expr* RIGHT_PAREN;
if_statement: if_expr statement;
else_if_statement: ELSE if_statement;
else_statement: ELSE statement;

try_block: TRY block;
catch_single_expr: CATCH LEFT_PAREN expr RIGHT_PAREN;
catch_multi_expr:
	CATCH LEFT_PAREN expr (COMMA expr)* RIGHT_PAREN;
catch_sequence:
	catch_single_expr LEFT_BRACE sequence? RIGHT_BRACE;
finally_sequence: FINALLY LEFT_BRACE sequence RIGHT_BRACE;

redirect_expr: DOUBLE_GREATER WORD;

remote_expr: remote_keyword LEFT_PAREN expr RIGHT_PAREN;

suppress_warnings_expr:
	SUPPRESS_WARNINGS LEFT_PAREN expr RIGHT_PAREN;

expr:
	literal_value
	| WORD
	| at_variable
	| environment_variable
	| integration_variable
	| at_bang
	| at_question
	| at_star
	| function_expr
	| groovy_script
	| SINGLE_BRACKET_STRING
	| (
		BANG (
			literal_value
			| WORD
			| at_variable
			| environment_variable
			| integration_variable
			| at_bang
			| at_question
			| at_star
			| function_expr
			| groovy_script
			| SINGLE_BRACKET_STRING
			| expr
		)
	)
	| expr DOUBLE_PIPE expr
	| expr ( STAR | DIV | MOD) expr
	| expr ( PLUS | MINUS) expr
	| expr (LESS | LESS_EQUAL | GREATER | GREATER_EQUAL) expr
	| expr ( EQUAL | NOT_EQUAL | IS | IS NOT | LIKE) expr
	| expr AND expr
	| expr OR expr
	| LEFT_PAREN expr RIGHT_PAREN
	| expr NOT? (LIKE) expr
	| expr ( IS | NULL | NOT NULL)
	| expr IS NOT? expr;

function_expr:
	WORD LEFT_PAREN (expr ( COMMA expr)*)? RIGHT_PAREN;

literal_value:
	MINUS NUMERIC_LITERAL
	| NUMERIC_LITERAL
	| STRING_LITERAL
	| NULL;

at_variable:
	AT (MINUS)? WORD (
		(COLON WORD)
		| ((POUND KEEP) | (POUND ONSTACK))
	)?;
environment_variable: AT AT WORD;
at_plus_variable:
	AT (PLUS | MOD) WORD ((COLON WORD) | (CARET WORD))?;

at_star: AT STAR;
at_question: AT QUESTION;
at_bang: AT BANG;

integration_variable: COLON WORD;

remote_keyword: | REMOTE | PARALLEL | INPARALLEL;

groovy_script: DOUBLE_BRACKET_STRING;
sql_script: SINGLE_BRACKET_STRING;

DOUBLE_BRACKET_STRING:
	LEFT_BRACKET FRAGMENT_SINGLE_BRACKET_STRING RIGHT_BRACKET;
SINGLE_BRACKET_STRING: FRAGMENT_SINGLE_BRACKET_STRING;

// IMPORTANT: the only thing not accounted for here is a single '[' or ']' in comments or string.
fragment FRAGMENT_SINGLE_BRACKET_STRING:
	LEFT_BRACKET (~('[' | ']') | FRAGMENT_SINGLE_BRACKET_STRING)* RIGHT_BRACKET;

LEFT_PAREN: '(';
RIGHT_PAREN: ')';
LEFT_BRACE: '{';
RIGHT_BRACE: '}';
LEFT_BRACKET: '[';
RIGHT_BRACKET: ']';
LESS: '<';
GREATER: '>';
LESS_EQUAL: '<=';
GREATER_EQUAL: '>=';
DOUBLE_LESS: '<<';
DOUBLE_GREATER: '>>';
PLUS: '+';
MINUS: '-';
STAR: '*';
DIV: '/';
MOD: '%';
BACKSLASH: '\\';
AMPERSAND: '&';
CARET: '^';
BANG: '!';
QUESTION: '?';
COLON: ':';
SEMI_COLON: ';';
COMMA: ',';
PIPE: '|';
DOUBLE_PIPE: '||';
POUND: '#';
AT: '@';
EQUAL: '=';
NOT_EQUAL: '!=' | '<>';
DOT: '.';
DOLLAR_SIGN: '$';

OVERSTACKED_ARGS: '<<OVERSTACKED_ARGS>>';
SPECIAL_COMMAND_ARG_NO_ROWS: '#NO_ROWS';
SPECIAL_COMMAND_ARG_DUMMY_ARG: '#DUMMY_ARG';
SUPPRESS_WARNINGS: '@SuppressWarnings';

WHERE: W H E R E;
AND: A N D;
LIKE: L I K E;
OR: O R;
IS: I S;
NOT: N O T;
NULL: N U L L;
IF: I F;
ELSE: E L S E;
TRY: T R Y;
CATCH: C A T C H;
FINALLY: F I N A L L Y;
REMOTE: R E M O T E;
PARALLEL: P A R A L L E L;
INPARALLEL: I N P A R A L L E L;

ONSTACK: O N S T A C K;
KEEP: K E E P;

NUMERIC_LITERAL:
	DIGIT+ ('.' DIGIT*)? (E [-+]? DIGIT+)?
	| '.' DIGIT+ ( E [-+]? DIGIT+)?;

STRING_LITERAL: (
		'\'' ( ~'\'' | '\'\'')* '\''
		| '"' ( ~'"' | '""')* '"'
	);

WORD: [a-zA-Z_0-9.]+;

BLOCK_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

WHITESPACE: [ \t]+ -> channel(HIDDEN);

NEWLINE: ( '\r' '\n'? | '\n') -> channel(HIDDEN);

fragment DIGIT: [0-9];

fragment A: [aA];
fragment B: [bB];
fragment C: [cC];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];
fragment Z: [zZ];