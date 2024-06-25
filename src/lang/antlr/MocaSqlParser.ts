// Generated from C://dev//node-moca-client//src//lang//antlr//MocaSql.g4 by ANTLR 4.13.1
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
import MocaSqlListener from "./MocaSqlListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MocaSqlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly ABSENT = 2;
	public static readonly ADD = 3;
	public static readonly AES = 4;
	public static readonly ALL = 5;
	public static readonly ALLOW_CONNECTIONS = 6;
	public static readonly ALLOW_MULTIPLE_EVENT_LOSS = 7;
	public static readonly ALLOW_SINGLE_EVENT_LOSS = 8;
	public static readonly ALTER = 9;
	public static readonly AND = 10;
	public static readonly ANONYMOUS = 11;
	public static readonly ANY = 12;
	public static readonly APPEND = 13;
	public static readonly APPLICATION = 14;
	public static readonly AS = 15;
	public static readonly ASC = 16;
	public static readonly ASYMMETRIC = 17;
	public static readonly ASYNCHRONOUS_COMMIT = 18;
	public static readonly AUTHORIZATION = 19;
	public static readonly AUTHENTICATION = 20;
	public static readonly AUTOMATED_BACKUP_PREFERENCE = 21;
	public static readonly AUTOMATIC = 22;
	public static readonly AVAILABILITY_MODE = 23;
	public static readonly BACKSLASH = 24;
	public static readonly BACKUP = 25;
	public static readonly BEFORE = 26;
	public static readonly BEGIN = 27;
	public static readonly BETWEEN = 28;
	public static readonly BLOCK = 29;
	public static readonly BLOCKSIZE = 30;
	public static readonly BLOCKING_HIERARCHY = 31;
	public static readonly BREAK = 32;
	public static readonly BROWSE = 33;
	public static readonly BUFFER = 34;
	public static readonly BUFFERCOUNT = 35;
	public static readonly BULK = 36;
	public static readonly BY = 37;
	public static readonly CACHE = 38;
	public static readonly CALLED = 39;
	public static readonly CASCADE = 40;
	public static readonly CASE = 41;
	public static readonly CERTIFICATE = 42;
	public static readonly CHANGETABLE = 43;
	public static readonly CHANGES = 44;
	public static readonly CHECK = 45;
	public static readonly CHECKPOINT = 46;
	public static readonly CHECK_POLICY = 47;
	public static readonly CHECK_EXPIRATION = 48;
	public static readonly CLASSIFIER_FUNCTION = 49;
	public static readonly CLOSE = 50;
	public static readonly CLUSTER = 51;
	public static readonly CLUSTERED = 52;
	public static readonly COALESCE = 53;
	public static readonly COLLATE = 54;
	public static readonly COLUMN = 55;
	public static readonly COMPRESSION = 56;
	public static readonly COMMIT = 57;
	public static readonly COMPUTE = 58;
	public static readonly CONFIGURATION = 59;
	public static readonly CONSTRAINT = 60;
	public static readonly CONTAINMENT = 61;
	public static readonly CONTAINS = 62;
	public static readonly CONTAINSTABLE = 63;
	public static readonly CONTEXT = 64;
	public static readonly CONTINUE = 65;
	public static readonly CONTINUE_AFTER_ERROR = 66;
	public static readonly CONTRACT = 67;
	public static readonly CONTRACT_NAME = 68;
	public static readonly CONVERSATION = 69;
	public static readonly CONVERT = 70;
	public static readonly COPY_ONLY = 71;
	public static readonly CREATE = 72;
	public static readonly CROSS = 73;
	public static readonly CURRENT = 74;
	public static readonly CURRENT_DATE = 75;
	public static readonly CURRENT_TIME = 76;
	public static readonly CURRENT_TIMESTAMP = 77;
	public static readonly CURRENT_USER = 78;
	public static readonly CURSOR = 79;
	public static readonly CYCLE = 80;
	public static readonly DATA_COMPRESSION = 81;
	public static readonly DATA_SOURCE = 82;
	public static readonly DATABASE = 83;
	public static readonly DATABASE_MIRRORING = 84;
	public static readonly DBCC = 85;
	public static readonly DEALLOCATE = 86;
	public static readonly DECLARE = 87;
	public static readonly DEFAULT = 88;
	public static readonly DEFAULT_DATABASE = 89;
	public static readonly DEFAULT_SCHEMA = 90;
	public static readonly DELETE = 91;
	public static readonly DENY = 92;
	public static readonly DESC = 93;
	public static readonly DIAGNOSTICS = 94;
	public static readonly DIFFERENTIAL = 95;
	public static readonly DISK = 96;
	public static readonly DISTINCT = 97;
	public static readonly DISTRIBUTED = 98;
	public static readonly DOUBLE = 99;
	public static readonly DOUBLE_BACK_SLASH = 100;
	public static readonly DOUBLE_FORWARD_SLASH = 101;
	public static readonly DROP = 102;
	public static readonly DTC_SUPPORT = 103;
	public static readonly DUMP = 104;
	public static readonly ELSE = 105;
	public static readonly ENABLED = 106;
	public static readonly END = 107;
	public static readonly ENDPOINT = 108;
	public static readonly ERRLVL = 109;
	public static readonly ESCAPE = 110;
	public static readonly ERROR = 111;
	public static readonly EVENT = 112;
	public static readonly EVENTDATA = 113;
	public static readonly EVENT_RETENTION_MODE = 114;
	public static readonly EXCEPT = 115;
	public static readonly EXECUTABLE_FILE = 116;
	public static readonly EXECUTE = 117;
	public static readonly EXISTS = 118;
	public static readonly EXPIREDATE = 119;
	public static readonly EXIT = 120;
	public static readonly EXTENSION = 121;
	public static readonly EXTERNAL = 122;
	public static readonly EXTERNAL_ACCESS = 123;
	public static readonly FAILOVER = 124;
	public static readonly FAILURECONDITIONLEVEL = 125;
	public static readonly FAN_IN = 126;
	public static readonly FETCH = 127;
	public static readonly FILE = 128;
	public static readonly FILENAME = 129;
	public static readonly FILLFACTOR = 130;
	public static readonly FILE_SNAPSHOT = 131;
	public static readonly FOR = 132;
	public static readonly FORCESEEK = 133;
	public static readonly FORCE_SERVICE_ALLOW_DATA_LOSS = 134;
	public static readonly FOREIGN = 135;
	public static readonly FREETEXT = 136;
	public static readonly FREETEXTTABLE = 137;
	public static readonly FROM = 138;
	public static readonly FULL = 139;
	public static readonly FUNCTION = 140;
	public static readonly GET = 141;
	public static readonly GOTO = 142;
	public static readonly GOVERNOR = 143;
	public static readonly GRANT = 144;
	public static readonly GROUP = 145;
	public static readonly HAVING = 146;
	public static readonly HASHED = 147;
	public static readonly HEALTHCHECKTIMEOUT = 148;
	public static readonly IDENTITY = 149;
	public static readonly IDENTITYCOL = 150;
	public static readonly IDENTITY_INSERT = 151;
	public static readonly IF = 152;
	public static readonly IIF = 153;
	public static readonly IN = 154;
	public static readonly INCLUDE = 155;
	public static readonly INCREMENT = 156;
	public static readonly INDEX = 157;
	public static readonly INFINITE = 158;
	public static readonly INIT = 159;
	public static readonly INNER = 160;
	public static readonly INSERT = 161;
	public static readonly INSTEAD = 162;
	public static readonly INTERSECT = 163;
	public static readonly INTO = 164;
	public static readonly IPV4_ADDR = 165;
	public static readonly IPV6_ADDR = 166;
	public static readonly IS = 167;
	public static readonly ISNULL = 168;
	public static readonly JOIN = 169;
	public static readonly KERBEROS = 170;
	public static readonly KEY = 171;
	public static readonly KEY_PATH = 172;
	public static readonly KEY_STORE_PROVIDER_NAME = 173;
	public static readonly KILL = 174;
	public static readonly LANGUAGE = 175;
	public static readonly LEFT = 176;
	public static readonly LIBRARY = 177;
	public static readonly LIFETIME = 178;
	public static readonly LIKE = 179;
	public static readonly LINENO = 180;
	public static readonly LINUX = 181;
	public static readonly LISTENER_IP = 182;
	public static readonly LISTENER_PORT = 183;
	public static readonly LOAD = 184;
	public static readonly LOCAL_SERVICE_NAME = 185;
	public static readonly LOG = 186;
	public static readonly MATCHED = 187;
	public static readonly MASTER = 188;
	public static readonly MAX_MEMORY = 189;
	public static readonly MAXTRANSFER = 190;
	public static readonly MAXVALUE = 191;
	public static readonly MAX_DISPATCH_LATENCY = 192;
	public static readonly MAX_EVENT_SIZE = 193;
	public static readonly MAX_SIZE = 194;
	public static readonly MAX_OUTSTANDING_IO_PER_VOLUME = 195;
	public static readonly MEDIADESCRIPTION = 196;
	public static readonly MEDIANAME = 197;
	public static readonly MEMBER = 198;
	public static readonly MEMORY_PARTITION_MODE = 199;
	public static readonly MERGE = 200;
	public static readonly MESSAGE_FORWARDING = 201;
	public static readonly MESSAGE_FORWARD_SIZE = 202;
	public static readonly MINVALUE = 203;
	public static readonly MIRROR = 204;
	public static readonly MUST_CHANGE = 205;
	public static readonly NATIONAL = 206;
	public static readonly NEGOTIATE = 207;
	public static readonly NOCHECK = 208;
	public static readonly NOFORMAT = 209;
	public static readonly NOINIT = 210;
	public static readonly NONCLUSTERED = 211;
	public static readonly NONE = 212;
	public static readonly NOREWIND = 213;
	public static readonly NOSKIP = 214;
	public static readonly NOUNLOAD = 215;
	public static readonly NO_CHECKSUM = 216;
	public static readonly NO_COMPRESSION = 217;
	public static readonly NO_EVENT_LOSS = 218;
	public static readonly NOT = 219;
	public static readonly NOTIFICATION = 220;
	public static readonly NTLM = 221;
	public static readonly NULL = 222;
	public static readonly NULLIF = 223;
	public static readonly OF = 224;
	public static readonly OFF = 225;
	public static readonly OFFSETS = 226;
	public static readonly OLD_PASSWORD = 227;
	public static readonly ON = 228;
	public static readonly ON_FAILURE = 229;
	public static readonly OPEN = 230;
	public static readonly OPENDATASOURCE = 231;
	public static readonly OPENQUERY = 232;
	public static readonly OPENROWSET = 233;
	public static readonly OPENXML = 234;
	public static readonly OPTION = 235;
	public static readonly OR = 236;
	public static readonly ORDER = 237;
	public static readonly OUTER = 238;
	public static readonly OVER = 239;
	public static readonly PAGE = 240;
	public static readonly PARAM_NODE = 241;
	public static readonly PARTIAL = 242;
	public static readonly PASSWORD = 243;
	public static readonly PERCENT = 244;
	public static readonly PERMISSION_SET = 245;
	public static readonly PER_CPU = 246;
	public static readonly PER_DB = 247;
	public static readonly PER_NODE = 248;
	public static readonly PIVOT = 249;
	public static readonly PLAN = 250;
	public static readonly PLATFORM = 251;
	public static readonly POLICY = 252;
	public static readonly PRECISION = 253;
	public static readonly PREDICATE = 254;
	public static readonly PRIMARY = 255;
	public static readonly PRINT = 256;
	public static readonly PROC = 257;
	public static readonly PROCEDURE = 258;
	public static readonly PROCESS = 259;
	public static readonly PUBLIC = 260;
	public static readonly PYTHON = 261;
	public static readonly R = 262;
	public static readonly RAISERROR = 263;
	public static readonly RAW = 264;
	public static readonly READ = 265;
	public static readonly READTEXT = 266;
	public static readonly READ_WRITE_FILEGROUPS = 267;
	public static readonly RECONFIGURE = 268;
	public static readonly REFERENCES = 269;
	public static readonly REGENERATE = 270;
	public static readonly RELATED_CONVERSATION = 271;
	public static readonly RELATED_CONVERSATION_GROUP = 272;
	public static readonly REPLICATION = 273;
	public static readonly REQUIRED = 274;
	public static readonly RESET = 275;
	public static readonly RESTART = 276;
	public static readonly RESTORE = 277;
	public static readonly RESTRICT = 278;
	public static readonly RESUME = 279;
	public static readonly RETAINDAYS = 280;
	public static readonly RETURN = 281;
	public static readonly RETURNS = 282;
	public static readonly REVERT = 283;
	public static readonly REVOKE = 284;
	public static readonly REWIND = 285;
	public static readonly RIGHT = 286;
	public static readonly ROLLBACK = 287;
	public static readonly ROLE = 288;
	public static readonly ROWCOUNT = 289;
	public static readonly ROWGUIDCOL = 290;
	public static readonly RSA_512 = 291;
	public static readonly RSA_1024 = 292;
	public static readonly RSA_2048 = 293;
	public static readonly RSA_3072 = 294;
	public static readonly RSA_4096 = 295;
	public static readonly SAFETY = 296;
	public static readonly RULE = 297;
	public static readonly SAFE = 298;
	public static readonly SAVE = 299;
	public static readonly SCHEDULER = 300;
	public static readonly SCHEMA = 301;
	public static readonly SCHEME = 302;
	public static readonly SECURITYAUDIT = 303;
	public static readonly SELECT = 304;
	public static readonly SEMANTICKEYPHRASETABLE = 305;
	public static readonly SEMANTICSIMILARITYDETAILSTABLE = 306;
	public static readonly SEMANTICSIMILARITYTABLE = 307;
	public static readonly SERVER = 308;
	public static readonly SERVICE = 309;
	public static readonly SERVICE_BROKER = 310;
	public static readonly SERVICE_NAME = 311;
	public static readonly SESSION = 312;
	public static readonly SESSION_USER = 313;
	public static readonly SET = 314;
	public static readonly SETUSER = 315;
	public static readonly SHUTDOWN = 316;
	public static readonly SID = 317;
	public static readonly SKIP_KEYWORD = 318;
	public static readonly SOFTNUMA = 319;
	public static readonly SOME = 320;
	public static readonly SOURCE = 321;
	public static readonly SPECIFICATION = 322;
	public static readonly SPLIT = 323;
	public static readonly SQLDUMPERFLAGS = 324;
	public static readonly SQLDUMPERPATH = 325;
	public static readonly SQLDUMPERTIMEOUT = 326;
	public static readonly STATISTICS = 327;
	public static readonly STATE = 328;
	public static readonly STATS = 329;
	public static readonly START = 330;
	public static readonly STARTED = 331;
	public static readonly STARTUP_STATE = 332;
	public static readonly STOP = 333;
	public static readonly STOPPED = 334;
	public static readonly STOP_ON_ERROR = 335;
	public static readonly SUPPORTED = 336;
	public static readonly SYSTEM_USER = 337;
	public static readonly TABLE = 338;
	public static readonly TABLESAMPLE = 339;
	public static readonly TAPE = 340;
	public static readonly TARGET = 341;
	public static readonly TCP = 342;
	public static readonly TEXTSIZE = 343;
	public static readonly THEN = 344;
	public static readonly TO = 345;
	public static readonly TOP = 346;
	public static readonly TRACK_CAUSALITY = 347;
	public static readonly TRAN = 348;
	public static readonly TRANSACTION = 349;
	public static readonly TRANSFER = 350;
	public static readonly TRIGGER = 351;
	public static readonly TRUNCATE = 352;
	public static readonly TSEQUAL = 353;
	public static readonly UNCHECKED = 354;
	public static readonly UNION = 355;
	public static readonly UNIQUE = 356;
	public static readonly UNLOCK = 357;
	public static readonly UNPIVOT = 358;
	public static readonly UNSAFE = 359;
	public static readonly UPDATE = 360;
	public static readonly UPDATETEXT = 361;
	public static readonly URL = 362;
	public static readonly USE = 363;
	public static readonly USED = 364;
	public static readonly USER = 365;
	public static readonly VALUES = 366;
	public static readonly VARYING = 367;
	public static readonly VERBOSELOGGING = 368;
	public static readonly VIEW = 369;
	public static readonly VISIBILITY = 370;
	public static readonly WAITFOR = 371;
	public static readonly WHEN = 372;
	public static readonly WHERE = 373;
	public static readonly WHILE = 374;
	public static readonly WINDOWS = 375;
	public static readonly WITH = 376;
	public static readonly WITHIN = 377;
	public static readonly WITHOUT = 378;
	public static readonly WITNESS = 379;
	public static readonly WRITETEXT = 380;
	public static readonly ABSOLUTE = 381;
	public static readonly ACCENT_SENSITIVITY = 382;
	public static readonly ACTION = 383;
	public static readonly ACTIVATION = 384;
	public static readonly ACTIVE = 385;
	public static readonly ADDRESS = 386;
	public static readonly AES_128 = 387;
	public static readonly AES_192 = 388;
	public static readonly AES_256 = 389;
	public static readonly AFFINITY = 390;
	public static readonly AFTER = 391;
	public static readonly AGGREGATE = 392;
	public static readonly ALGORITHM = 393;
	public static readonly ALLOW_ENCRYPTED_VALUE_MODIFICATIONS = 394;
	public static readonly ALLOW_SNAPSHOT_ISOLATION = 395;
	public static readonly ALLOWED = 396;
	public static readonly ANSI_NULL_DEFAULT = 397;
	public static readonly ANSI_NULLS = 398;
	public static readonly ANSI_PADDING = 399;
	public static readonly ANSI_WARNINGS = 400;
	public static readonly APPLICATION_LOG = 401;
	public static readonly APPLY = 402;
	public static readonly ARITHABORT = 403;
	public static readonly ASSEMBLY = 404;
	public static readonly AUDIT = 405;
	public static readonly AUDIT_GUID = 406;
	public static readonly AUTO = 407;
	public static readonly AUTO_CLEANUP = 408;
	public static readonly AUTO_CLOSE = 409;
	public static readonly AUTO_CREATE_STATISTICS = 410;
	public static readonly AUTO_SHRINK = 411;
	public static readonly AUTO_UPDATE_STATISTICS = 412;
	public static readonly AUTO_UPDATE_STATISTICS_ASYNC = 413;
	public static readonly AVAILABILITY = 414;
	public static readonly AVG = 415;
	public static readonly BACKUP_PRIORITY = 416;
	public static readonly BEGIN_DIALOG = 417;
	public static readonly BIGINT = 418;
	public static readonly BINARY_BASE64 = 419;
	public static readonly BINARY_CHECKSUM = 420;
	public static readonly BINDING = 421;
	public static readonly BLOB_STORAGE = 422;
	public static readonly BROKER = 423;
	public static readonly BROKER_INSTANCE = 424;
	public static readonly BULK_LOGGED = 425;
	public static readonly CALLER = 426;
	public static readonly CAP_CPU_PERCENT = 427;
	public static readonly CAST = 428;
	public static readonly CATALOG = 429;
	public static readonly CATCH = 430;
	public static readonly CHANGE_RETENTION = 431;
	public static readonly CHANGE_TRACKING = 432;
	public static readonly CHECKSUM = 433;
	public static readonly CHECKSUM_AGG = 434;
	public static readonly CLEANUP = 435;
	public static readonly COLLECTION = 436;
	public static readonly COLUMN_MASTER_KEY = 437;
	public static readonly COMMITTED = 438;
	public static readonly COMPATIBILITY_LEVEL = 439;
	public static readonly CONCAT = 440;
	public static readonly CONCAT_NULL_YIELDS_NULL = 441;
	public static readonly CONTENT = 442;
	public static readonly CONTROL = 443;
	public static readonly COOKIE = 444;
	public static readonly COUNT = 445;
	public static readonly COUNT_BIG = 446;
	public static readonly COUNTER = 447;
	public static readonly CPU = 448;
	public static readonly CREATE_NEW = 449;
	public static readonly CREATION_DISPOSITION = 450;
	public static readonly CREDENTIAL = 451;
	public static readonly CRYPTOGRAPHIC = 452;
	public static readonly CURSOR_CLOSE_ON_COMMIT = 453;
	public static readonly CURSOR_DEFAULT = 454;
	public static readonly DATA = 455;
	public static readonly DATE_CORRELATION_OPTIMIZATION = 456;
	public static readonly DATEADD = 457;
	public static readonly DATEDIFF = 458;
	public static readonly DATENAME = 459;
	public static readonly DATEPART = 460;
	public static readonly DAYS = 461;
	public static readonly DB_CHAINING = 462;
	public static readonly DB_FAILOVER = 463;
	public static readonly DECRYPTION = 464;
	public static readonly DEFAULT_DOUBLE_QUOTE = 465;
	public static readonly DEFAULT_FULLTEXT_LANGUAGE = 466;
	public static readonly DEFAULT_LANGUAGE = 467;
	public static readonly DELAY = 468;
	public static readonly DELAYED_DURABILITY = 469;
	public static readonly DELETED = 470;
	public static readonly DENSE_RANK = 471;
	public static readonly DEPENDENTS = 472;
	public static readonly DES = 473;
	public static readonly DESCRIPTION = 474;
	public static readonly DESX = 475;
	public static readonly DHCP = 476;
	public static readonly DIALOG = 477;
	public static readonly DIRECTORY_NAME = 478;
	public static readonly DISABLE = 479;
	public static readonly DISABLE_BROKER = 480;
	public static readonly DISABLED = 481;
	public static readonly DISK_DRIVE = 482;
	public static readonly DOCUMENT = 483;
	public static readonly DYNAMIC = 484;
	public static readonly ELEMENTS = 485;
	public static readonly EMERGENCY = 486;
	public static readonly EMPTY = 487;
	public static readonly ENABLE = 488;
	public static readonly ENABLE_BROKER = 489;
	public static readonly ENCRYPTED_VALUE = 490;
	public static readonly ENCRYPTION = 491;
	public static readonly ENDPOINT_URL = 492;
	public static readonly ERROR_BROKER_CONVERSATIONS = 493;
	public static readonly EXCLUSIVE = 494;
	public static readonly EXECUTABLE = 495;
	public static readonly EXIST = 496;
	public static readonly EXPAND = 497;
	public static readonly EXPIRY_DATE = 498;
	public static readonly EXPLICIT = 499;
	public static readonly FAIL_OPERATION = 500;
	public static readonly FAILOVER_MODE = 501;
	public static readonly FAILURE = 502;
	public static readonly FAILURE_CONDITION_LEVEL = 503;
	public static readonly FAST = 504;
	public static readonly FAST_FORWARD = 505;
	public static readonly FILEGROUP = 506;
	public static readonly FILEGROWTH = 507;
	public static readonly FILEPATH = 508;
	public static readonly FILESTREAM = 509;
	public static readonly FILTER = 510;
	public static readonly FIRST = 511;
	public static readonly FIRST_VALUE = 512;
	public static readonly FOLLOWING = 513;
	public static readonly FORCE = 514;
	public static readonly FORCE_FAILOVER_ALLOW_DATA_LOSS = 515;
	public static readonly FORCED = 516;
	public static readonly FORMAT = 517;
	public static readonly FORWARD_ONLY = 518;
	public static readonly FULLSCAN = 519;
	public static readonly FULLTEXT = 520;
	public static readonly GB = 521;
	public static readonly GETDATE = 522;
	public static readonly GETUTCDATE = 523;
	public static readonly GLOBAL = 524;
	public static readonly GO = 525;
	public static readonly GROUP_MAX_REQUESTS = 526;
	public static readonly GROUPING = 527;
	public static readonly GROUPING_ID = 528;
	public static readonly HADR = 529;
	public static readonly HASH = 530;
	public static readonly HEALTH_CHECK_TIMEOUT = 531;
	public static readonly HIGH = 532;
	public static readonly HONOR_BROKER_PRIORITY = 533;
	public static readonly HOURS = 534;
	public static readonly IDENTITY_VALUE = 535;
	public static readonly IGNORE_NONCLUSTERED_COLUMNSTORE_INDEX = 536;
	public static readonly IMMEDIATE = 537;
	public static readonly IMPERSONATE = 538;
	public static readonly IMPORTANCE = 539;
	public static readonly INCLUDE_NULL_VALUES = 540;
	public static readonly INCREMENTAL = 541;
	public static readonly INITIATOR = 542;
	public static readonly INPUT = 543;
	public static readonly INSENSITIVE = 544;
	public static readonly INSERTED = 545;
	public static readonly INT = 546;
	public static readonly IP = 547;
	public static readonly ISOLATION = 548;
	public static readonly JOB = 549;
	public static readonly JSON = 550;
	public static readonly KB = 551;
	public static readonly KEEP = 552;
	public static readonly KEEPFIXED = 553;
	public static readonly KEY_SOURCE = 554;
	public static readonly KEYS = 555;
	public static readonly KEYSET = 556;
	public static readonly LAG = 557;
	public static readonly LAST = 558;
	public static readonly LAST_VALUE = 559;
	public static readonly LEAD = 560;
	public static readonly LEVEL = 561;
	public static readonly LIST = 562;
	public static readonly LISTENER = 563;
	public static readonly LISTENER_URL = 564;
	public static readonly LOB_COMPACTION = 565;
	public static readonly LOCAL = 566;
	public static readonly LOCATION = 567;
	public static readonly LOCK = 568;
	public static readonly LOCK_ESCALATION = 569;
	public static readonly LOGIN = 570;
	public static readonly LOOP = 571;
	public static readonly LOW = 572;
	public static readonly MANUAL = 573;
	public static readonly MARK = 574;
	public static readonly MATERIALIZED = 575;
	public static readonly MAX = 576;
	public static readonly MAX_CPU_PERCENT = 577;
	public static readonly MAX_DOP = 578;
	public static readonly MAX_FILES = 579;
	public static readonly MAX_IOPS_PER_VOLUME = 580;
	public static readonly MAX_MEMORY_PERCENT = 581;
	public static readonly MAX_PROCESSES = 582;
	public static readonly MAX_QUEUE_READERS = 583;
	public static readonly MAX_ROLLOVER_FILES = 584;
	public static readonly MAXDOP = 585;
	public static readonly MAXRECURSION = 586;
	public static readonly MAXSIZE = 587;
	public static readonly MB = 588;
	public static readonly MEDIUM = 589;
	public static readonly MEMORY_OPTIMIZED_DATA = 590;
	public static readonly MESSAGE = 591;
	public static readonly MIN = 592;
	public static readonly MIN_ACTIVE_ROWVERSION = 593;
	public static readonly MIN_CPU_PERCENT = 594;
	public static readonly MIN_IOPS_PER_VOLUME = 595;
	public static readonly MIN_MEMORY_PERCENT = 596;
	public static readonly MINUTES = 597;
	public static readonly MIRROR_ADDRESS = 598;
	public static readonly MIXED_PAGE_ALLOCATION = 599;
	public static readonly MODE = 600;
	public static readonly MODIFY = 601;
	public static readonly MOVE = 602;
	public static readonly MULTI_USER = 603;
	public static readonly NAME = 604;
	public static readonly NESTED_TRIGGERS = 605;
	public static readonly NEW_ACCOUNT = 606;
	public static readonly NEW_BROKER = 607;
	public static readonly NEW_PASSWORD = 608;
	public static readonly NEXT = 609;
	public static readonly NO = 610;
	public static readonly NO_TRUNCATE = 611;
	public static readonly NO_WAIT = 612;
	public static readonly NOCOUNT = 613;
	public static readonly NODES = 614;
	public static readonly NOEXPAND = 615;
	public static readonly NON_TRANSACTED_ACCESS = 616;
	public static readonly NORECOMPUTE = 617;
	public static readonly NORECOVERY = 618;
	public static readonly NOWAIT = 619;
	public static readonly NTILE = 620;
	public static readonly NUMANODE = 621;
	public static readonly NUMBER = 622;
	public static readonly NUMERIC_ROUNDABORT = 623;
	public static readonly OBJECT = 624;
	public static readonly OFFLINE = 625;
	public static readonly OFFSET = 626;
	public static readonly OLD_ACCOUNT = 627;
	public static readonly ONLINE = 628;
	public static readonly ONLY = 629;
	public static readonly OPEN_EXISTING = 630;
	public static readonly OPTIMISTIC = 631;
	public static readonly OPTIMIZE = 632;
	public static readonly OUT = 633;
	public static readonly OUTPUT = 634;
	public static readonly OVERRIDE = 635;
	public static readonly OWNER = 636;
	public static readonly PAGE_VERIFY = 637;
	public static readonly PARAMETERIZATION = 638;
	public static readonly PARTITION = 639;
	public static readonly PARTITIONS = 640;
	public static readonly PARTNER = 641;
	public static readonly PATH = 642;
	public static readonly POISON_MESSAGE_HANDLING = 643;
	public static readonly POOL = 644;
	public static readonly PORT = 645;
	public static readonly PRECEDING = 646;
	public static readonly PRIMARY_ROLE = 647;
	public static readonly PRIOR = 648;
	public static readonly PRIORITY = 649;
	public static readonly PRIORITY_LEVEL = 650;
	public static readonly PRIVATE = 651;
	public static readonly PRIVATE_KEY = 652;
	public static readonly PRIVILEGES = 653;
	public static readonly PROCEDURE_NAME = 654;
	public static readonly PROPERTY = 655;
	public static readonly PROVIDER = 656;
	public static readonly PROVIDER_KEY_NAME = 657;
	public static readonly QUERY = 658;
	public static readonly QUEUE = 659;
	public static readonly QUEUE_DELAY = 660;
	public static readonly QUOTED_IDENTIFIER = 661;
	public static readonly RANGE = 662;
	public static readonly RANK = 663;
	public static readonly RC2 = 664;
	public static readonly RC4 = 665;
	public static readonly RC4_128 = 666;
	public static readonly READ_COMMITTED_SNAPSHOT = 667;
	public static readonly READ_ONLY = 668;
	public static readonly READ_ONLY_ROUTING_LIST = 669;
	public static readonly READ_WRITE = 670;
	public static readonly READONLY = 671;
	public static readonly REBUILD = 672;
	public static readonly RECEIVE = 673;
	public static readonly RECOMPILE = 674;
	public static readonly RECOVERY = 675;
	public static readonly RECURSIVE_TRIGGERS = 676;
	public static readonly RELATIVE = 677;
	public static readonly REMOTE = 678;
	public static readonly REMOTE_SERVICE_NAME = 679;
	public static readonly REMOVE = 680;
	public static readonly REORGANIZE = 681;
	public static readonly REPEATABLE = 682;
	public static readonly REPLICA = 683;
	public static readonly REQUEST_MAX_CPU_TIME_SEC = 684;
	public static readonly REQUEST_MAX_MEMORY_GRANT_PERCENT = 685;
	public static readonly REQUEST_MEMORY_GRANT_TIMEOUT_SEC = 686;
	public static readonly REQUIRED_SYNCHRONIZED_SECONDARIES_TO_COMMIT = 687;
	public static readonly RESERVE_DISK_SPACE = 688;
	public static readonly RESOURCE = 689;
	public static readonly RESOURCE_MANAGER_LOCATION = 690;
	public static readonly RESTRICTED_USER = 691;
	public static readonly RETENTION = 692;
	public static readonly ROBUST = 693;
	public static readonly ROOT = 694;
	public static readonly ROUTE = 695;
	public static readonly ROW = 696;
	public static readonly ROW_NUMBER = 697;
	public static readonly ROWGUID = 698;
	public static readonly ROWS = 699;
	public static readonly SAMPLE = 700;
	public static readonly SCHEMABINDING = 701;
	public static readonly SCOPED = 702;
	public static readonly SCROLL = 703;
	public static readonly SCROLL_LOCKS = 704;
	public static readonly SEARCH = 705;
	public static readonly SECONDARY = 706;
	public static readonly SECONDARY_ONLY = 707;
	public static readonly SECONDARY_ROLE = 708;
	public static readonly SECONDS = 709;
	public static readonly SECRET = 710;
	public static readonly SECURITY = 711;
	public static readonly SECURITY_LOG = 712;
	public static readonly SEEDING_MODE = 713;
	public static readonly SELF = 714;
	public static readonly SEMI_SENSITIVE = 715;
	public static readonly SEND = 716;
	public static readonly SENT = 717;
	public static readonly SEQUENCE = 718;
	public static readonly SERIALIZABLE = 719;
	public static readonly SESSION_TIMEOUT = 720;
	public static readonly SETERROR = 721;
	public static readonly SHARE = 722;
	public static readonly SHOWPLAN = 723;
	public static readonly SIGNATURE = 724;
	public static readonly SIMPLE = 725;
	public static readonly SINGLE_USER = 726;
	public static readonly SIZE = 727;
	public static readonly SMALLINT = 728;
	public static readonly SNAPSHOT = 729;
	public static readonly SPATIAL_WINDOW_MAX_CELLS = 730;
	public static readonly STANDBY = 731;
	public static readonly START_DATE = 732;
	public static readonly STATIC = 733;
	public static readonly STATS_STREAM = 734;
	public static readonly STATUS = 735;
	public static readonly STATUSONLY = 736;
	public static readonly STDEV = 737;
	public static readonly STDEVP = 738;
	public static readonly STOPLIST = 739;
	public static readonly STRING_AGG = 740;
	public static readonly STUFF = 741;
	public static readonly SUBJECT = 742;
	public static readonly SUBSCRIPTION = 743;
	public static readonly SUM = 744;
	public static readonly SUSPEND = 745;
	public static readonly SYMMETRIC = 746;
	public static readonly SYNCHRONOUS_COMMIT = 747;
	public static readonly SYNONYM = 748;
	public static readonly SYSTEM = 749;
	public static readonly TAKE = 750;
	public static readonly TARGET_RECOVERY_TIME = 751;
	public static readonly TB = 752;
	public static readonly TEXTIMAGE_ON = 753;
	public static readonly THROW = 754;
	public static readonly TIES = 755;
	public static readonly TIME = 756;
	public static readonly TIMEOUT = 757;
	public static readonly TIMER = 758;
	public static readonly TINYINT = 759;
	public static readonly TORN_PAGE_DETECTION = 760;
	public static readonly TRANSFORM_NOISE_WORDS = 761;
	public static readonly TRIPLE_DES = 762;
	public static readonly TRIPLE_DES_3KEY = 763;
	public static readonly TRUSTWORTHY = 764;
	public static readonly TRY = 765;
	public static readonly TSQL = 766;
	public static readonly TWO_DIGIT_YEAR_CUTOFF = 767;
	public static readonly TYPE = 768;
	public static readonly TYPE_WARNING = 769;
	public static readonly UNBOUNDED = 770;
	public static readonly UNCOMMITTED = 771;
	public static readonly UNKNOWN = 772;
	public static readonly UNLIMITED = 773;
	public static readonly UOW = 774;
	public static readonly USING = 775;
	public static readonly VALID_XML = 776;
	public static readonly VALIDATION = 777;
	public static readonly VALUE = 778;
	public static readonly VAR = 779;
	public static readonly VARP = 780;
	public static readonly VIEW_METADATA = 781;
	public static readonly VIEWS = 782;
	public static readonly WAIT = 783;
	public static readonly WELL_FORMED_XML = 784;
	public static readonly WITHOUT_ARRAY_WRAPPER = 785;
	public static readonly WORK = 786;
	public static readonly WORKLOAD = 787;
	public static readonly XML = 788;
	public static readonly XMLDATA = 789;
	public static readonly XMLNAMESPACES = 790;
	public static readonly XMLSCHEMA = 791;
	public static readonly XSINIL = 792;
	public static readonly DOLLAR_ACTION = 793;
	public static readonly MOCA_ONSTACK = 794;
	public static readonly MOCA_IGNORE = 795;
	public static readonly SPACE = 796;
	public static readonly COMMENT = 797;
	public static readonly LINE_COMMENT = 798;
	public static readonly DOUBLE_QUOTE_ID = 799;
	public static readonly SINGLE_QUOTE = 800;
	public static readonly SQUARE_BRACKET_ID = 801;
	public static readonly LOCAL_ID = 802;
	public static readonly MOCA_ENVIRONMENT_VARIABLE = 803;
	public static readonly MOCA_AT_MINUS_VARIABLE = 804;
	public static readonly MOCA_AT_PLUS_VARIABLE = 805;
	public static readonly MOCA_AT_STAR = 806;
	public static readonly DECIMAL = 807;
	public static readonly ID = 808;
	public static readonly QUOTED_URL = 809;
	public static readonly QUOTED_HOST_AND_PORT = 810;
	public static readonly STRING = 811;
	public static readonly BINARY = 812;
	public static readonly FLOAT = 813;
	public static readonly REAL = 814;
	public static readonly EQUAL = 815;
	public static readonly NOT_EQUAL = 816;
	public static readonly GREATER = 817;
	public static readonly LESS = 818;
	public static readonly GREATER_EQUAL = 819;
	public static readonly LESS_EQUAL = 820;
	public static readonly EXCLAMATION = 821;
	public static readonly PLUS_ASSIGN = 822;
	public static readonly MINUS_ASSIGN = 823;
	public static readonly MULT_ASSIGN = 824;
	public static readonly DIV_ASSIGN = 825;
	public static readonly MOD_ASSIGN = 826;
	public static readonly AND_ASSIGN = 827;
	public static readonly XOR_ASSIGN = 828;
	public static readonly OR_ASSIGN = 829;
	public static readonly DOUBLE_BAR = 830;
	public static readonly DOT = 831;
	public static readonly UNDERLINE = 832;
	public static readonly AT = 833;
	public static readonly SHARP = 834;
	public static readonly DOLLAR = 835;
	public static readonly LR_BRACKET = 836;
	public static readonly RR_BRACKET = 837;
	public static readonly COMMA = 838;
	public static readonly SEMI = 839;
	public static readonly COLON = 840;
	public static readonly STAR = 841;
	public static readonly DIVIDE = 842;
	public static readonly MODULE = 843;
	public static readonly PLUS = 844;
	public static readonly MINUS = 845;
	public static readonly BIT_NOT = 846;
	public static readonly BIT_OR = 847;
	public static readonly BIT_AND = 848;
	public static readonly BIT_XOR = 849;
	public static readonly IPV4_OCTECT = 850;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_moca_sql_script = 0;
	public static readonly RULE_batch = 1;
	public static readonly RULE_sql_clauses = 2;
	public static readonly RULE_sql_clause = 3;
	public static readonly RULE_dml_clause = 4;
	public static readonly RULE_ddl_clause = 5;
	public static readonly RULE_drop_sequence = 6;
	public static readonly RULE_alter_sequence = 7;
	public static readonly RULE_create_sequence = 8;
	public static readonly RULE_delete_statement = 9;
	public static readonly RULE_delete_statement_from = 10;
	public static readonly RULE_insert_statement = 11;
	public static readonly RULE_insert_statement_value = 12;
	public static readonly RULE_select_statement = 13;
	public static readonly RULE_update_statement = 14;
	public static readonly RULE_output_clause = 15;
	public static readonly RULE_output_dml_list_elem = 16;
	public static readonly RULE_output_column_name = 17;
	public static readonly RULE_create_index = 18;
	public static readonly RULE_create_table = 19;
	public static readonly RULE_table_options = 20;
	public static readonly RULE_create_view = 21;
	public static readonly RULE_view_attribute = 22;
	public static readonly RULE_alter_table = 23;
	public static readonly RULE_host = 24;
	public static readonly RULE_drop_index = 25;
	public static readonly RULE_drop_relational_or_xml_or_spatial_index = 26;
	public static readonly RULE_drop_backward_compatible_index = 27;
	public static readonly RULE_drop_table = 28;
	public static readonly RULE_drop_view = 29;
	public static readonly RULE_rowset_function_limited = 30;
	public static readonly RULE_openquery = 31;
	public static readonly RULE_opendatasource = 32;
	public static readonly RULE_execute_statement = 33;
	public static readonly RULE_execute_body = 34;
	public static readonly RULE_execute_statement_arg = 35;
	public static readonly RULE_execute_var_string = 36;
	public static readonly RULE_column_def_table_constraints = 37;
	public static readonly RULE_column_def_table_constraint = 38;
	public static readonly RULE_column_definition = 39;
	public static readonly RULE_materialized_column_definition = 40;
	public static readonly RULE_column_constraint = 41;
	public static readonly RULE_table_constraint = 42;
	public static readonly RULE_on_delete = 43;
	public static readonly RULE_on_update = 44;
	public static readonly RULE_index_options = 45;
	public static readonly RULE_index_option = 46;
	public static readonly RULE_constant_LOCAL_ID = 47;
	public static readonly RULE_expression = 48;
	public static readonly RULE_moca_at_variable = 49;
	public static readonly RULE_moca_environment_variable = 50;
	public static readonly RULE_moca_at_minus_variable = 51;
	public static readonly RULE_moca_at_plus_variable = 52;
	public static readonly RULE_moca_at_star = 53;
	public static readonly RULE_moca_integration_variable = 54;
	public static readonly RULE_primitive_expression = 55;
	public static readonly RULE_case_expression = 56;
	public static readonly RULE_unary_operator_expression = 57;
	public static readonly RULE_bracket_expression = 58;
	public static readonly RULE_constant_expression = 59;
	public static readonly RULE_subquery = 60;
	public static readonly RULE_with_expression = 61;
	public static readonly RULE_common_table_expression = 62;
	public static readonly RULE_update_elem = 63;
	public static readonly RULE_search_condition_list = 64;
	public static readonly RULE_search_condition = 65;
	public static readonly RULE_search_condition_and = 66;
	public static readonly RULE_search_condition_not = 67;
	public static readonly RULE_predicate = 68;
	public static readonly RULE_query_expression = 69;
	public static readonly RULE_sql_union = 70;
	public static readonly RULE_query_specification = 71;
	public static readonly RULE_top_clause = 72;
	public static readonly RULE_top_percent = 73;
	public static readonly RULE_top_count = 74;
	public static readonly RULE_order_by_clause = 75;
	public static readonly RULE_for_clause = 76;
	public static readonly RULE_xml_common_directives = 77;
	public static readonly RULE_order_by_expression = 78;
	public static readonly RULE_group_by_item = 79;
	public static readonly RULE_option_clause = 80;
	public static readonly RULE_option = 81;
	public static readonly RULE_optimize_for_arg = 82;
	public static readonly RULE_select_list = 83;
	public static readonly RULE_udt_method_arguments = 84;
	public static readonly RULE_asterisk = 85;
	public static readonly RULE_column_elem = 86;
	public static readonly RULE_udt_elem = 87;
	public static readonly RULE_expression_elem = 88;
	public static readonly RULE_select_list_elem = 89;
	public static readonly RULE_table_sources = 90;
	public static readonly RULE_table_source = 91;
	public static readonly RULE_table_source_item_joined = 92;
	public static readonly RULE_table_source_item = 93;
	public static readonly RULE_open_xml = 94;
	public static readonly RULE_schema_declaration = 95;
	public static readonly RULE_column_declaration = 96;
	public static readonly RULE_change_table = 97;
	public static readonly RULE_join_part = 98;
	public static readonly RULE_pivot_clause = 99;
	public static readonly RULE_unpivot_clause = 100;
	public static readonly RULE_full_column_name_list = 101;
	public static readonly RULE_table_name_with_hint = 102;
	public static readonly RULE_rowset_function = 103;
	public static readonly RULE_bulk_option = 104;
	public static readonly RULE_derived_table = 105;
	public static readonly RULE_function_call = 106;
	public static readonly RULE_xml_data_type_methods = 107;
	public static readonly RULE_value_method = 108;
	public static readonly RULE_query_method = 109;
	public static readonly RULE_exist_method = 110;
	public static readonly RULE_modify_method = 111;
	public static readonly RULE_nodes_method = 112;
	public static readonly RULE_switch_section = 113;
	public static readonly RULE_switch_search_condition_section = 114;
	public static readonly RULE_as_column_alias = 115;
	public static readonly RULE_as_table_alias = 116;
	public static readonly RULE_table_alias = 117;
	public static readonly RULE_with_table_hints = 118;
	public static readonly RULE_insert_with_table_hints = 119;
	public static readonly RULE_table_hint = 120;
	public static readonly RULE_index_value = 121;
	public static readonly RULE_column_alias_list = 122;
	public static readonly RULE_column_alias = 123;
	public static readonly RULE_table_value_constructor = 124;
	public static readonly RULE_expression_list = 125;
	public static readonly RULE_ranking_windowed_function = 126;
	public static readonly RULE_aggregate_windowed_function = 127;
	public static readonly RULE_analytic_windowed_function = 128;
	public static readonly RULE_all_distinct_expression = 129;
	public static readonly RULE_over_clause = 130;
	public static readonly RULE_row_or_range_clause = 131;
	public static readonly RULE_window_frame_extent = 132;
	public static readonly RULE_window_frame_bound = 133;
	public static readonly RULE_window_frame_preceding = 134;
	public static readonly RULE_window_frame_following = 135;
	public static readonly RULE_full_table_name = 136;
	public static readonly RULE_table_name = 137;
	public static readonly RULE_simple_name = 138;
	public static readonly RULE_func_proc_name_schema = 139;
	public static readonly RULE_func_proc_name_database_schema = 140;
	public static readonly RULE_func_proc_name_server_database_schema = 141;
	public static readonly RULE_ddl_object = 142;
	public static readonly RULE_full_column_name = 143;
	public static readonly RULE_column_name_list_with_order = 144;
	public static readonly RULE_column_name_list = 145;
	public static readonly RULE_cursor_name = 146;
	public static readonly RULE_on_off = 147;
	public static readonly RULE_clustered = 148;
	public static readonly RULE_null_notnull = 149;
	public static readonly RULE_null_or_default = 150;
	public static readonly RULE_scalar_function_name = 151;
	public static readonly RULE_data_type = 152;
	public static readonly RULE_constant = 153;
	public static readonly RULE_sign = 154;
	public static readonly RULE_id = 155;
	public static readonly RULE_simple_id = 156;
	public static readonly RULE_comparison_operator = 157;
	public static readonly RULE_assignment_operator = 158;
	public static readonly literalNames: (string | null)[] = [ null, "':I_'", 
                                                            "'ABSENT'", 
                                                            "'ADD'", "'AES'", 
                                                            "'ALL'", "'ALLOW_CONNECTIONS'", 
                                                            "'ALLOW_MULTIPLE_EVENT_LOSS'", 
                                                            "'ALLOW_SINGLE_EVENT_LOSS'", 
                                                            "'ALTER'", "'AND'", 
                                                            "'ANONYMOUS'", 
                                                            "'ANY'", "'APPEND'", 
                                                            "'APPLICATION'", 
                                                            "'AS'", "'ASC'", 
                                                            "'ASYMMETRIC'", 
                                                            "'ASYNCHRONOUS_COMMIT'", 
                                                            "'AUTHORIZATION'", 
                                                            "'AUTHENTICATION'", 
                                                            "'AUTOMATED_BACKUP_PREFERENCE'", 
                                                            "'AUTOMATIC'", 
                                                            "'AVAILABILITY_MODE'", 
                                                            "'\\'", "'BACKUP'", 
                                                            "'BEFORE'", 
                                                            "'BEGIN'", "'BETWEEN'", 
                                                            "'BLOCK'", "'BLOCKSIZE'", 
                                                            "'BLOCKING_HIERARCHY'", 
                                                            "'BREAK'", "'BROWSE'", 
                                                            "'BUFFER'", 
                                                            "'BUFFERCOUNT'", 
                                                            "'BULK'", "'BY'", 
                                                            "'CACHE'", "'CALLED'", 
                                                            "'CASCADE'", 
                                                            "'CASE'", "'CERTIFICATE'", 
                                                            "'CHANGETABLE'", 
                                                            "'CHANGES'", 
                                                            "'CHECK'", "'CHECKPOINT'", 
                                                            "'CHECK_POLICY'", 
                                                            "'CHECK_EXPIRATION'", 
                                                            "'CLASSIFIER_FUNCTION'", 
                                                            "'CLOSE'", "'CLUSTER'", 
                                                            "'CLUSTERED'", 
                                                            "'COALESCE'", 
                                                            "'COLLATE'", 
                                                            "'COLUMN'", 
                                                            "'COMPRESSION'", 
                                                            "'COMMIT'", 
                                                            "'COMPUTE'", 
                                                            "'CONFIGURATION'", 
                                                            "'CONSTRAINT'", 
                                                            "'CONTAINMENT'", 
                                                            "'CONTAINS'", 
                                                            "'CONTAINSTABLE'", 
                                                            "'CONTEXT'", 
                                                            "'CONTINUE'", 
                                                            "'CONTINUE_AFTER_ERROR'", 
                                                            "'CONTRACT'", 
                                                            "'CONTRACT_NAME'", 
                                                            "'CONVERSATION'", 
                                                            null, "'COPY_ONLY'", 
                                                            "'CREATE'", 
                                                            "'CROSS'", "'CURRENT'", 
                                                            "'CURRENT_DATE'", 
                                                            "'CURRENT_TIME'", 
                                                            "'CURRENT_TIMESTAMP'", 
                                                            "'CURRENT_USER'", 
                                                            "'CURSOR'", 
                                                            "'CYCLE'", "'DATA_COMPRESSION'", 
                                                            "'DATA_SOURCE'", 
                                                            "'DATABASE'", 
                                                            "'DATABASE_MIRRORING'", 
                                                            "'DBCC'", "'DEALLOCATE'", 
                                                            "'DECLARE'", 
                                                            "'DEFAULT'", 
                                                            "'DEFAULT_DATABASE'", 
                                                            "'DEFAULT_SCHEMA'", 
                                                            "'DELETE'", 
                                                            "'DENY'", "'DESC'", 
                                                            "'DIAGNOSTICS'", 
                                                            "'DIFFERENTIAL'", 
                                                            "'DISK'", "'DISTINCT'", 
                                                            "'DISTRIBUTED'", 
                                                            "'DOUBLE'", 
                                                            "'\\\\'", "'//'", 
                                                            "'DROP'", "'DTC_SUPPORT'", 
                                                            "'DUMP'", "'ELSE'", 
                                                            "'ENABLED'", 
                                                            "'END'", "'ENDPOINT'", 
                                                            "'ERRLVL'", 
                                                            "'ESCAPE'", 
                                                            "'ERROR'", "'EVENT'", 
                                                            null, "'EVENT_RETENTION_MODE'", 
                                                            "'EXCEPT'", 
                                                            "'EXECUTABLE_FILE'", 
                                                            null, "'EXISTS'", 
                                                            "'EXPIREDATE'", 
                                                            "'EXIT'", "'EXTENSION'", 
                                                            "'EXTERNAL'", 
                                                            "'EXTERNAL_ACCESS'", 
                                                            "'FAILOVER'", 
                                                            "'FAILURECONDITIONLEVEL'", 
                                                            "'FAN_IN'", 
                                                            "'FETCH'", "'FILE'", 
                                                            "'FILENAME'", 
                                                            "'FILLFACTOR'", 
                                                            "'FILE_SNAPSHOT'", 
                                                            "'FOR'", "'FORCESEEK'", 
                                                            "'FORCE_SERVICE_ALLOW_DATA_LOSS'", 
                                                            "'FOREIGN'", 
                                                            "'FREETEXT'", 
                                                            "'FREETEXTTABLE'", 
                                                            "'FROM'", "'FULL'", 
                                                            "'FUNCTION'", 
                                                            "'GET'", "'GOTO'", 
                                                            "'GOVERNOR'", 
                                                            "'GRANT'", "'GROUP'", 
                                                            "'HAVING'", 
                                                            "'HASHED'", 
                                                            "'HEALTHCHECKTIMEOUT'", 
                                                            "'IDENTITY'", 
                                                            "'IDENTITYCOL'", 
                                                            "'IDENTITY_INSERT'", 
                                                            "'IF'", "'IIF'", 
                                                            "'IN'", "'INCLUDE'", 
                                                            "'INCREMENT'", 
                                                            "'INDEX'", "'INFINITE'", 
                                                            "'INIT'", "'INNER'", 
                                                            "'INSERT'", 
                                                            "'INSTEAD'", 
                                                            "'INTERSECT'", 
                                                            "'INTO'", null, 
                                                            null, "'IS'", 
                                                            "'ISNULL'", 
                                                            "'JOIN'", "'KERBEROS'", 
                                                            "'KEY'", "'KEY_PATH'", 
                                                            "'KEY_STORE_PROVIDER_NAME'", 
                                                            "'KILL'", "'LANGUAGE'", 
                                                            "'LEFT'", "'LIBRARY'", 
                                                            "'LIFETIME'", 
                                                            "'LIKE'", "'LINENO'", 
                                                            "'LINUX'", "'LISTENER_IP'", 
                                                            "'LISTENER_PORT'", 
                                                            "'LOAD'", "'LOCAL_SERVICE_NAME'", 
                                                            "'LOG'", "'MATCHED'", 
                                                            "'MASTER'", 
                                                            "'MAX_MEMORY'", 
                                                            "'MAXTRANSFER'", 
                                                            "'MAXVALUE'", 
                                                            "'MAX_DISPATCH_LATENCY'", 
                                                            "'MAX_EVENT_SIZE'", 
                                                            "'MAX_SIZE'", 
                                                            "'MAX_OUTSTANDING_IO_PER_VOLUME'", 
                                                            "'MEDIADESCRIPTION'", 
                                                            "'MEDIANAME'", 
                                                            "'MEMBER'", 
                                                            "'MEMORY_PARTITION_MODE'", 
                                                            "'MERGE'", "'MESSAGE_FORWARDING'", 
                                                            "'MESSAGE_FORWARD_SIZE'", 
                                                            "'MINVALUE'", 
                                                            "'MIRROR'", 
                                                            "'MUST_CHANGE'", 
                                                            "'NATIONAL'", 
                                                            "'NEGOTIATE'", 
                                                            "'NOCHECK'", 
                                                            "'NOFORMAT'", 
                                                            "'NOINIT'", 
                                                            "'NONCLUSTERED'", 
                                                            "'NONE'", "'NOREWIND'", 
                                                            "'NOSKIP'", 
                                                            "'NOUNLOAD'", 
                                                            "'NO_CHECKSUM'", 
                                                            "'NO_COMPRESSION'", 
                                                            "'NO_EVENT_LOSS'", 
                                                            "'NOT'", "'NOTIFICATION'", 
                                                            "'NTLM'", "'NULL'", 
                                                            "'NULLIF'", 
                                                            "'OF'", "'OFF'", 
                                                            "'OFFSETS'", 
                                                            "'OLD_PASSWORD'", 
                                                            "'ON'", "'ON_FAILURE'", 
                                                            "'OPEN'", "'OPENDATASOURCE'", 
                                                            "'OPENQUERY'", 
                                                            "'OPENROWSET'", 
                                                            "'OPENXML'", 
                                                            "'OPTION'", 
                                                            "'OR'", "'ORDER'", 
                                                            "'OUTER'", "'OVER'", 
                                                            "'PAGE'", "'PARAM_NODE'", 
                                                            "'PARTIAL'", 
                                                            "'PASSWORD'", 
                                                            "'PERCENT'", 
                                                            "'PERMISSION_SET'", 
                                                            "'PER_CPU'", 
                                                            "'PER_DB'", 
                                                            "'PER_NODE'", 
                                                            "'PIVOT'", "'PLAN'", 
                                                            "'PLATFORM'", 
                                                            "'POLICY'", 
                                                            "'PRECISION'", 
                                                            "'PREDICATE'", 
                                                            "'PRIMARY'", 
                                                            "'PRINT'", "'PROC'", 
                                                            "'PROCEDURE'", 
                                                            "'PROCESS'", 
                                                            "'PUBLIC'", 
                                                            "'PYTHON'", 
                                                            "'R'", "'RAISERROR'", 
                                                            "'RAW'", "'READ'", 
                                                            "'READTEXT'", 
                                                            "'READ_WRITE_FILEGROUPS'", 
                                                            "'RECONFIGURE'", 
                                                            "'REFERENCES'", 
                                                            "'REGENERATE'", 
                                                            "'RELATED_CONVERSATION'", 
                                                            "'RELATED_CONVERSATION_GROUP'", 
                                                            "'REPLICATION'", 
                                                            "'REQUIRED'", 
                                                            "'RESET'", "'RESTART'", 
                                                            "'RESTORE'", 
                                                            "'RESTRICT'", 
                                                            "'RESUME'", 
                                                            "'RETAINDAYS'", 
                                                            "'RETURN'", 
                                                            "'RETURNS'", 
                                                            "'REVERT'", 
                                                            "'REVOKE'", 
                                                            "'REWIND'", 
                                                            "'RIGHT'", "'ROLLBACK'", 
                                                            "'ROLE'", "'ROWCOUNT'", 
                                                            "'ROWGUIDCOL'", 
                                                            "'RSA_512'", 
                                                            "'RSA_1024'", 
                                                            "'RSA_2048'", 
                                                            "'RSA_3072'", 
                                                            "'RSA_4096'", 
                                                            "'SAFETY'", 
                                                            "'RULE'", "'SAFE'", 
                                                            "'SAVE'", "'SCHEDULER'", 
                                                            "'SCHEMA'", 
                                                            "'SCHEME'", 
                                                            "'SECURITYAUDIT'", 
                                                            "'SELECT'", 
                                                            "'SEMANTICKEYPHRASETABLE'", 
                                                            "'SEMANTICSIMILARITYDETAILSTABLE'", 
                                                            "'SEMANTICSIMILARITYTABLE'", 
                                                            "'SERVER'", 
                                                            "'SERVICE'", 
                                                            "'SERVICE_BROKER'", 
                                                            "'SERVICE_NAME'", 
                                                            "'SESSION'", 
                                                            "'SESSION_USER'", 
                                                            "'SET'", "'SETUSER'", 
                                                            "'SHUTDOWN'", 
                                                            "'SID'", "'SKIP'", 
                                                            "'SOFTNUMA'", 
                                                            "'SOME'", "'SOURCE'", 
                                                            "'SPECIFICATION'", 
                                                            "'SPLIT'", "'SQLDUMPERFLAGS'", 
                                                            "'SQLDUMPERPATH'", 
                                                            "'SQLDUMPERTIMEOUTS'", 
                                                            "'STATISTICS'", 
                                                            "'STATE'", "'STATS'", 
                                                            "'START'", "'STARTED'", 
                                                            "'STARTUP_STATE'", 
                                                            "'STOP'", "'STOPPED'", 
                                                            "'STOP_ON_ERROR'", 
                                                            "'SUPPORTED'", 
                                                            "'SYSTEM_USER'", 
                                                            "'TABLE'", "'TABLESAMPLE'", 
                                                            "'TAPE'", "'TARGET'", 
                                                            "'TCP'", "'TEXTSIZE'", 
                                                            "'THEN'", "'TO'", 
                                                            "'TOP'", "'TRACK_CAUSALITY'", 
                                                            "'TRAN'", "'TRANSACTION'", 
                                                            "'TRANSFER'", 
                                                            "'TRIGGER'", 
                                                            "'TRUNCATE'", 
                                                            "'TSEQUAL'", 
                                                            "'UNCHECKED'", 
                                                            "'UNION'", "'UNIQUE'", 
                                                            "'UNLOCK'", 
                                                            "'UNPIVOT'", 
                                                            "'UNSAFE'", 
                                                            "'UPDATE'", 
                                                            "'UPDATETEXT'", 
                                                            "'URL'", "'USE'", 
                                                            "'USED'", "'USER'", 
                                                            "'VALUES'", 
                                                            "'VARYING'", 
                                                            "'VERBOSELOGGING'", 
                                                            "'VIEW'", "'VISIBILITY'", 
                                                            "'WAITFOR'", 
                                                            "'WHEN'", "'WHERE'", 
                                                            "'WHILE'", "'WINDOWS'", 
                                                            "'WITH'", "'WITHIN'", 
                                                            "'WITHOUT'", 
                                                            "'WITNESS'", 
                                                            "'WRITETEXT'", 
                                                            "'ABSOLUTE'", 
                                                            "'ACCENT_SENSITIVITY'", 
                                                            "'ACTION'", 
                                                            "'ACTIVATION'", 
                                                            "'ACTIVE'", 
                                                            "'ADDRESS'", 
                                                            "'AES_128'", 
                                                            "'AES_192'", 
                                                            "'AES_256'", 
                                                            "'AFFINITY'", 
                                                            "'AFTER'", "'AGGREGATE'", 
                                                            "'ALGORITHM'", 
                                                            "'ALLOW_ENCRYPTED_VALUE_MODIFICATIONS'", 
                                                            "'ALLOW_SNAPSHOT_ISOLATION'", 
                                                            "'ALLOWED'", 
                                                            "'ANSI_NULL_DEFAULT'", 
                                                            "'ANSI_NULLS'", 
                                                            "'ANSI_PADDING'", 
                                                            "'ANSI_WARNINGS'", 
                                                            "'APPLICATION_LOG'", 
                                                            "'APPLY'", "'ARITHABORT'", 
                                                            "'ASSEMBLY'", 
                                                            "'AUDIT'", "'AUDIT_GUID'", 
                                                            "'AUTO'", "'AUTO_CLEANUP'", 
                                                            "'AUTO_CLOSE'", 
                                                            "'AUTO_CREATE_STATISTICS'", 
                                                            "'AUTO_SHRINK'", 
                                                            "'AUTO_UPDATE_STATISTICS'", 
                                                            "'AUTO_UPDATE_STATISTICS_ASYNC'", 
                                                            "'AVAILABILITY'", 
                                                            "'AVG'", "'BACKUP_PRIORITY'", 
                                                            "'BEGIN_DIALOG'", 
                                                            "'BIGINT'", 
                                                            "'BINARY BASE64'", 
                                                            "'BINARY_CHECKSUM'", 
                                                            "'BINDING'", 
                                                            "'BLOB_STORAGE'", 
                                                            "'BROKER'", 
                                                            "'BROKER_INSTANCE'", 
                                                            "'BULK_LOGGED'", 
                                                            "'CALLER'", 
                                                            "'CAP_CPU_PERCENT'", 
                                                            null, "'CATALOG'", 
                                                            "'CATCH'", "'CHANGE_RETENTION'", 
                                                            "'CHANGE_TRACKING'", 
                                                            "'CHECKSUM'", 
                                                            "'CHECKSUM_AGG'", 
                                                            "'CLEANUP'", 
                                                            "'COLLECTION'", 
                                                            "'COLUMN_MASTER_KEY'", 
                                                            "'COMMITTED'", 
                                                            "'COMPATIBILITY_LEVEL'", 
                                                            "'CONCAT'", 
                                                            "'CONCAT_NULL_YIELDS_NULL'", 
                                                            "'CONTENT'", 
                                                            "'CONTROL'", 
                                                            "'COOKIE'", 
                                                            "'COUNT'", "'COUNT_BIG'", 
                                                            "'COUNTER'", 
                                                            "'CPU'", "'CREATE_NEW'", 
                                                            "'CREATION_DISPOSITION'", 
                                                            "'CREDENTIAL'", 
                                                            "'CRYPTOGRAPHIC'", 
                                                            "'CURSOR_CLOSE_ON_COMMIT'", 
                                                            "'CURSOR_DEFAULT'", 
                                                            "'DATA'", "'DATE_CORRELATION_OPTIMIZATION'", 
                                                            "'DATEADD'", 
                                                            "'DATEDIFF'", 
                                                            "'DATENAME'", 
                                                            "'DATEPART'", 
                                                            "'DAYS'", "'DB_CHAINING'", 
                                                            "'DB_FAILOVER'", 
                                                            "'DECRYPTION'", 
                                                            null, "'DEFAULT_FULLTEXT_LANGUAGE'", 
                                                            "'DEFAULT_LANGUAGE'", 
                                                            "'DELAY'", "'DELAYED_DURABILITY'", 
                                                            "'DELETED'", 
                                                            "'DENSE_RANK'", 
                                                            "'DEPENDENTS'", 
                                                            "'DES'", "'DESCRIPTION'", 
                                                            "'DESX'", "'DHCP'", 
                                                            "'DIALOG'", 
                                                            "'DIRECTORY_NAME'", 
                                                            "'DISABLE'", 
                                                            "'DISABLE_BROKER'", 
                                                            "'DISABLED'", 
                                                            null, "'DOCUMENT'", 
                                                            "'DYNAMIC'", 
                                                            "'ELEMENTS'", 
                                                            "'EMERGENCY'", 
                                                            "'EMPTY'", "'ENABLE'", 
                                                            "'ENABLE_BROKER'", 
                                                            "'ENCRYPTED_VALUE'", 
                                                            "'ENCRYPTION'", 
                                                            "'ENDPOINT_URL'", 
                                                            "'ERROR_BROKER_CONVERSATIONS'", 
                                                            "'EXCLUSIVE'", 
                                                            "'EXECUTABLE'", 
                                                            "'EXIST'", "'EXPAND'", 
                                                            "'EXPIRY_DATE'", 
                                                            "'EXPLICIT'", 
                                                            "'FAIL_OPERATION'", 
                                                            "'FAILOVER_MODE'", 
                                                            "'FAILURE'", 
                                                            "'FAILURE_CONDITION_LEVEL'", 
                                                            "'FAST'", "'FAST_FORWARD'", 
                                                            "'FILEGROUP'", 
                                                            "'FILEGROWTH'", 
                                                            "'FILEPATH'", 
                                                            "'FILESTREAM'", 
                                                            "'FILTER'", 
                                                            "'FIRST'", "'FIRST_VALUE'", 
                                                            "'FOLLOWING'", 
                                                            "'FORCE'", "'FORCE_FAILOVER_ALLOW_DATA_LOSS'", 
                                                            "'FORCED'", 
                                                            "'FORMAT'", 
                                                            "'FORWARD_ONLY'", 
                                                            "'FULLSCAN'", 
                                                            "'FULLTEXT'", 
                                                            "'GB'", "'GETDATE'", 
                                                            "'GETUTCDATE'", 
                                                            "'GLOBAL'", 
                                                            "'GO'", "'GROUP_MAX_REQUESTS'", 
                                                            "'GROUPING'", 
                                                            "'GROUPING_ID'", 
                                                            "'HADR'", "'HASH'", 
                                                            "'HEALTH_CHECK_TIMEOUT'", 
                                                            "'HIGH'", "'HONOR_BROKER_PRIORITY'", 
                                                            "'HOURS'", "'IDENTITY_VALUE'", 
                                                            "'IGNORE_NONCLUSTERED_COLUMNSTORE_INDEX'", 
                                                            "'IMMEDIATE'", 
                                                            "'IMPERSONATE'", 
                                                            "'IMPORTANCE'", 
                                                            "'INCLUDE_NULL_VALUES'", 
                                                            "'INCREMENTAL'", 
                                                            "'INITIATOR'", 
                                                            "'INPUT'", "'INSENSITIVE'", 
                                                            "'INSERTED'", 
                                                            "'INT'", "'IP'", 
                                                            "'ISOLATION'", 
                                                            "'JOB'", "'JSON'", 
                                                            "'KB'", "'KEEP'", 
                                                            "'KEEPFIXED'", 
                                                            "'KEY_SOURCE'", 
                                                            "'KEYS'", "'KEYSET'", 
                                                            "'LAG'", "'LAST'", 
                                                            "'LAST_VALUE'", 
                                                            "'LEAD'", "'LEVEL'", 
                                                            "'LIST'", "'LISTENER'", 
                                                            "'LISTENER_URL'", 
                                                            "'LOB_COMPACTION'", 
                                                            "'LOCAL'", "'LOCATION'", 
                                                            "'LOCK'", "'LOCK_ESCALATION'", 
                                                            "'LOGIN'", "'LOOP'", 
                                                            "'LOW'", "'MANUAL'", 
                                                            "'MARK'", "'MATERIALIZED'", 
                                                            "'MAX'", "'MAX_CPU_PERCENT'", 
                                                            "'MAX_DOP'", 
                                                            "'MAX_FILES'", 
                                                            "'MAX_IOPS_PER_VOLUME'", 
                                                            "'MAX_MEMORY_PERCENT'", 
                                                            "'MAX_PROCESSES'", 
                                                            "'MAX_QUEUE_READERS'", 
                                                            "'MAX_ROLLOVER_FILES'", 
                                                            "'MAXDOP'", 
                                                            "'MAXRECURSION'", 
                                                            "'MAXSIZE'", 
                                                            "'MB'", "'MEDIUM'", 
                                                            "'MEMORY_OPTIMIZED_DATA'", 
                                                            "'MESSAGE'", 
                                                            "'MIN'", "'MIN_ACTIVE_ROWVERSION'", 
                                                            "'MIN_CPU_PERCENT'", 
                                                            "'MIN_IOPS_PER_VOLUME'", 
                                                            "'MIN_MEMORY_PERCENT'", 
                                                            "'MINUTES'", 
                                                            "'MIRROR_ADDRESS'", 
                                                            "'MIXED_PAGE_ALLOCATION'", 
                                                            "'MODE'", "'MODIFY'", 
                                                            "'MOVE'", "'MULTI_USER'", 
                                                            "'NAME'", "'NESTED_TRIGGERS'", 
                                                            "'NEW_ACCOUNT'", 
                                                            "'NEW_BROKER'", 
                                                            "'NEW_PASSWORD'", 
                                                            "'NEXT'", "'NO'", 
                                                            "'NO_TRUNCATE'", 
                                                            "'NO_WAIT'", 
                                                            "'NOCOUNT'", 
                                                            "'NODES'", "'NOEXPAND'", 
                                                            "'NON_TRANSACTED_ACCESS'", 
                                                            "'NORECOMPUTE'", 
                                                            "'NORECOVERY'", 
                                                            "'NOWAIT'", 
                                                            "'NTILE'", "'NUMANODE'", 
                                                            "'NUMBER'", 
                                                            "'NUMERIC_ROUNDABORT'", 
                                                            "'OBJECT'", 
                                                            "'OFFLINE'", 
                                                            "'OFFSET'", 
                                                            "'OLD_ACCOUNT'", 
                                                            "'ONLINE'", 
                                                            "'ONLY'", "'OPEN_EXISTING'", 
                                                            "'OPTIMISTIC'", 
                                                            "'OPTIMIZE'", 
                                                            "'OUT'", "'OUTPUT'", 
                                                            "'OVERRIDE'", 
                                                            "'OWNER'", "'PAGE_VERIFY'", 
                                                            "'PARAMETERIZATION'", 
                                                            "'PARTITION'", 
                                                            "'PARTITIONS'", 
                                                            "'PARTNER'", 
                                                            "'PATH'", "'POISON_MESSAGE_HANDLING'", 
                                                            "'POOL'", "'PORT'", 
                                                            "'PRECEDING'", 
                                                            "'PRIMARY_ROLE'", 
                                                            "'PRIOR'", "'PRIORITY'", 
                                                            "'PRIORITY_LEVEL'", 
                                                            "'PRIVATE'", 
                                                            "'PRIVATE_KEY'", 
                                                            "'PRIVILEGES'", 
                                                            "'PROCEDURE_NAME'", 
                                                            "'PROPERTY'", 
                                                            "'PROVIDER'", 
                                                            "'PROVIDER_KEY_NAME'", 
                                                            "'QUERY'", "'QUEUE'", 
                                                            "'QUEUE_DELAY'", 
                                                            "'QUOTED_IDENTIFIER'", 
                                                            "'RANGE'", "'RANK'", 
                                                            "'RC2'", "'RC4'", 
                                                            "'RC4_128'", 
                                                            "'READ_COMMITTED_SNAPSHOT'", 
                                                            "'READ_ONLY'", 
                                                            "'READ_ONLY_ROUTING_LIST'", 
                                                            "'READ_WRITE'", 
                                                            "'READONLY'", 
                                                            "'REBUILD'", 
                                                            "'RECEIVE'", 
                                                            "'RECOMPILE'", 
                                                            "'RECOVERY'", 
                                                            "'RECURSIVE_TRIGGERS'", 
                                                            "'RELATIVE'", 
                                                            "'REMOTE'", 
                                                            "'REMOTE_SERVICE_NAME'", 
                                                            "'REMOVE'", 
                                                            "'REORGANIZE'", 
                                                            "'REPEATABLE'", 
                                                            "'REPLICA'", 
                                                            "'REQUEST_MAX_CPU_TIME_SEC'", 
                                                            "'REQUEST_MAX_MEMORY_GRANT_PERCENT'", 
                                                            "'REQUEST_MEMORY_GRANT_TIMEOUT_SEC'", 
                                                            "'REQUIRED_SYNCHRONIZED_SECONDARIES_TO_COMMIT'", 
                                                            "'RESERVE_DISK_SPACE'", 
                                                            "'RESOURCE'", 
                                                            "'RESOURCE_MANAGER_LOCATION'", 
                                                            "'RESTRICTED_USER'", 
                                                            "'RETENTION'", 
                                                            "'ROBUST'", 
                                                            "'ROOT'", "'ROUTE'", 
                                                            "'ROW'", "'ROW_NUMBER'", 
                                                            "'ROWGUID'", 
                                                            "'ROWS'", "'SAMPLE'", 
                                                            "'SCHEMABINDING'", 
                                                            "'SCOPED'", 
                                                            "'SCROLL'", 
                                                            "'SCROLL_LOCKS'", 
                                                            "'SEARCH'", 
                                                            "'SECONDARY'", 
                                                            "'SECONDARY_ONLY'", 
                                                            "'SECONDARY_ROLE'", 
                                                            "'SECONDS'", 
                                                            "'SECRET'", 
                                                            "'SECURITY'", 
                                                            "'SECURITY_LOG'", 
                                                            "'SEEDING_MODE'", 
                                                            "'SELF'", "'SEMI_SENSITIVE'", 
                                                            "'SEND'", "'SENT'", 
                                                            "'SEQUENCE'", 
                                                            "'SERIALIZABLE'", 
                                                            "'SESSION_TIMEOUT'", 
                                                            "'SETERROR'", 
                                                            "'SHARE'", "'SHOWPLAN'", 
                                                            "'SIGNATURE'", 
                                                            "'SIMPLE'", 
                                                            "'SINGLE_USER'", 
                                                            "'SIZE'", "'SMALLINT'", 
                                                            "'SNAPSHOT'", 
                                                            "'SPATIAL_WINDOW_MAX_CELLS'", 
                                                            "'STANDBY'", 
                                                            "'START_DATE'", 
                                                            "'STATIC'", 
                                                            "'STATS_STREAM'", 
                                                            "'STATUS'", 
                                                            "'STATUSONLY'", 
                                                            "'STDEV'", "'STDEVP'", 
                                                            "'STOPLIST'", 
                                                            "'STRING_AGG'", 
                                                            "'STUFF'", "'SUBJECT'", 
                                                            "'SUBSCRIPTION'", 
                                                            "'SUM'", "'SUSPEND'", 
                                                            "'SYMMETRIC'", 
                                                            "'SYNCHRONOUS_COMMIT'", 
                                                            "'SYNONYM'", 
                                                            "'SYSTEM'", 
                                                            "'TAKE'", "'TARGET_RECOVERY_TIME'", 
                                                            "'TB'", "'TEXTIMAGE_ON'", 
                                                            "'THROW'", "'TIES'", 
                                                            "'TIME'", "'TIMEOUT'", 
                                                            "'TIMER'", "'TINYINT'", 
                                                            "'TORN_PAGE_DETECTION'", 
                                                            "'TRANSFORM_NOISE_WORDS'", 
                                                            "'TRIPLE_DES'", 
                                                            "'TRIPLE_DES_3KEY'", 
                                                            "'TRUSTWORTHY'", 
                                                            "'TRY'", "'TSQL'", 
                                                            "'TWO_DIGIT_YEAR_CUTOFF'", 
                                                            "'TYPE'", "'TYPE_WARNING'", 
                                                            "'UNBOUNDED'", 
                                                            "'UNCOMMITTED'", 
                                                            "'UNKNOWN'", 
                                                            "'UNLIMITED'", 
                                                            "'UOW'", "'USING'", 
                                                            "'VALID_XML'", 
                                                            "'VALIDATION'", 
                                                            "'VALUE'", "'VAR'", 
                                                            "'VARP'", "'VIEW_METADATA'", 
                                                            "'VIEWS'", "'WAIT'", 
                                                            "'WELL_FORMED_XML'", 
                                                            "'WITHOUT_ARRAY_WRAPPER'", 
                                                            "'WORK'", "'WORKLOAD'", 
                                                            "'XML'", "'XMLDATA'", 
                                                            "'XMLNAMESPACES'", 
                                                            "'XMLSCHEMA'", 
                                                            "'XSINIL'", 
                                                            "'$ACTION'", 
                                                            "'ONSTACK'", 
                                                            "'IGNORE'", 
                                                            null, null, 
                                                            null, null, 
                                                            "'''", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'='", 
                                                            null, "'>'", 
                                                            "'<'", "'>='", 
                                                            "'<='", "'!'", 
                                                            "'+='", "'-='", 
                                                            "'*='", "'/='", 
                                                            "'%='", "'&='", 
                                                            "'^='", "'|='", 
                                                            "'||'", "'.'", 
                                                            "'_'", "'@'", 
                                                            "'#'", "'$'", 
                                                            "'('", "')'", 
                                                            "','", "';'", 
                                                            "':'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'+'", "'-'", 
                                                            "'~'", "'|'", 
                                                            "'&'", "'^'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             "ABSENT", "ADD", 
                                                             "AES", "ALL", 
                                                             "ALLOW_CONNECTIONS", 
                                                             "ALLOW_MULTIPLE_EVENT_LOSS", 
                                                             "ALLOW_SINGLE_EVENT_LOSS", 
                                                             "ALTER", "AND", 
                                                             "ANONYMOUS", 
                                                             "ANY", "APPEND", 
                                                             "APPLICATION", 
                                                             "AS", "ASC", 
                                                             "ASYMMETRIC", 
                                                             "ASYNCHRONOUS_COMMIT", 
                                                             "AUTHORIZATION", 
                                                             "AUTHENTICATION", 
                                                             "AUTOMATED_BACKUP_PREFERENCE", 
                                                             "AUTOMATIC", 
                                                             "AVAILABILITY_MODE", 
                                                             "BACKSLASH", 
                                                             "BACKUP", "BEFORE", 
                                                             "BEGIN", "BETWEEN", 
                                                             "BLOCK", "BLOCKSIZE", 
                                                             "BLOCKING_HIERARCHY", 
                                                             "BREAK", "BROWSE", 
                                                             "BUFFER", "BUFFERCOUNT", 
                                                             "BULK", "BY", 
                                                             "CACHE", "CALLED", 
                                                             "CASCADE", 
                                                             "CASE", "CERTIFICATE", 
                                                             "CHANGETABLE", 
                                                             "CHANGES", 
                                                             "CHECK", "CHECKPOINT", 
                                                             "CHECK_POLICY", 
                                                             "CHECK_EXPIRATION", 
                                                             "CLASSIFIER_FUNCTION", 
                                                             "CLOSE", "CLUSTER", 
                                                             "CLUSTERED", 
                                                             "COALESCE", 
                                                             "COLLATE", 
                                                             "COLUMN", "COMPRESSION", 
                                                             "COMMIT", "COMPUTE", 
                                                             "CONFIGURATION", 
                                                             "CONSTRAINT", 
                                                             "CONTAINMENT", 
                                                             "CONTAINS", 
                                                             "CONTAINSTABLE", 
                                                             "CONTEXT", 
                                                             "CONTINUE", 
                                                             "CONTINUE_AFTER_ERROR", 
                                                             "CONTRACT", 
                                                             "CONTRACT_NAME", 
                                                             "CONVERSATION", 
                                                             "CONVERT", 
                                                             "COPY_ONLY", 
                                                             "CREATE", "CROSS", 
                                                             "CURRENT", 
                                                             "CURRENT_DATE", 
                                                             "CURRENT_TIME", 
                                                             "CURRENT_TIMESTAMP", 
                                                             "CURRENT_USER", 
                                                             "CURSOR", "CYCLE", 
                                                             "DATA_COMPRESSION", 
                                                             "DATA_SOURCE", 
                                                             "DATABASE", 
                                                             "DATABASE_MIRRORING", 
                                                             "DBCC", "DEALLOCATE", 
                                                             "DECLARE", 
                                                             "DEFAULT", 
                                                             "DEFAULT_DATABASE", 
                                                             "DEFAULT_SCHEMA", 
                                                             "DELETE", "DENY", 
                                                             "DESC", "DIAGNOSTICS", 
                                                             "DIFFERENTIAL", 
                                                             "DISK", "DISTINCT", 
                                                             "DISTRIBUTED", 
                                                             "DOUBLE", "DOUBLE_BACK_SLASH", 
                                                             "DOUBLE_FORWARD_SLASH", 
                                                             "DROP", "DTC_SUPPORT", 
                                                             "DUMP", "ELSE", 
                                                             "ENABLED", 
                                                             "END", "ENDPOINT", 
                                                             "ERRLVL", "ESCAPE", 
                                                             "ERROR", "EVENT", 
                                                             "EVENTDATA", 
                                                             "EVENT_RETENTION_MODE", 
                                                             "EXCEPT", "EXECUTABLE_FILE", 
                                                             "EXECUTE", 
                                                             "EXISTS", "EXPIREDATE", 
                                                             "EXIT", "EXTENSION", 
                                                             "EXTERNAL", 
                                                             "EXTERNAL_ACCESS", 
                                                             "FAILOVER", 
                                                             "FAILURECONDITIONLEVEL", 
                                                             "FAN_IN", "FETCH", 
                                                             "FILE", "FILENAME", 
                                                             "FILLFACTOR", 
                                                             "FILE_SNAPSHOT", 
                                                             "FOR", "FORCESEEK", 
                                                             "FORCE_SERVICE_ALLOW_DATA_LOSS", 
                                                             "FOREIGN", 
                                                             "FREETEXT", 
                                                             "FREETEXTTABLE", 
                                                             "FROM", "FULL", 
                                                             "FUNCTION", 
                                                             "GET", "GOTO", 
                                                             "GOVERNOR", 
                                                             "GRANT", "GROUP", 
                                                             "HAVING", "HASHED", 
                                                             "HEALTHCHECKTIMEOUT", 
                                                             "IDENTITY", 
                                                             "IDENTITYCOL", 
                                                             "IDENTITY_INSERT", 
                                                             "IF", "IIF", 
                                                             "IN", "INCLUDE", 
                                                             "INCREMENT", 
                                                             "INDEX", "INFINITE", 
                                                             "INIT", "INNER", 
                                                             "INSERT", "INSTEAD", 
                                                             "INTERSECT", 
                                                             "INTO", "IPV4_ADDR", 
                                                             "IPV6_ADDR", 
                                                             "IS", "ISNULL", 
                                                             "JOIN", "KERBEROS", 
                                                             "KEY", "KEY_PATH", 
                                                             "KEY_STORE_PROVIDER_NAME", 
                                                             "KILL", "LANGUAGE", 
                                                             "LEFT", "LIBRARY", 
                                                             "LIFETIME", 
                                                             "LIKE", "LINENO", 
                                                             "LINUX", "LISTENER_IP", 
                                                             "LISTENER_PORT", 
                                                             "LOAD", "LOCAL_SERVICE_NAME", 
                                                             "LOG", "MATCHED", 
                                                             "MASTER", "MAX_MEMORY", 
                                                             "MAXTRANSFER", 
                                                             "MAXVALUE", 
                                                             "MAX_DISPATCH_LATENCY", 
                                                             "MAX_EVENT_SIZE", 
                                                             "MAX_SIZE", 
                                                             "MAX_OUTSTANDING_IO_PER_VOLUME", 
                                                             "MEDIADESCRIPTION", 
                                                             "MEDIANAME", 
                                                             "MEMBER", "MEMORY_PARTITION_MODE", 
                                                             "MERGE", "MESSAGE_FORWARDING", 
                                                             "MESSAGE_FORWARD_SIZE", 
                                                             "MINVALUE", 
                                                             "MIRROR", "MUST_CHANGE", 
                                                             "NATIONAL", 
                                                             "NEGOTIATE", 
                                                             "NOCHECK", 
                                                             "NOFORMAT", 
                                                             "NOINIT", "NONCLUSTERED", 
                                                             "NONE", "NOREWIND", 
                                                             "NOSKIP", "NOUNLOAD", 
                                                             "NO_CHECKSUM", 
                                                             "NO_COMPRESSION", 
                                                             "NO_EVENT_LOSS", 
                                                             "NOT", "NOTIFICATION", 
                                                             "NTLM", "NULL", 
                                                             "NULLIF", "OF", 
                                                             "OFF", "OFFSETS", 
                                                             "OLD_PASSWORD", 
                                                             "ON", "ON_FAILURE", 
                                                             "OPEN", "OPENDATASOURCE", 
                                                             "OPENQUERY", 
                                                             "OPENROWSET", 
                                                             "OPENXML", 
                                                             "OPTION", "OR", 
                                                             "ORDER", "OUTER", 
                                                             "OVER", "PAGE", 
                                                             "PARAM_NODE", 
                                                             "PARTIAL", 
                                                             "PASSWORD", 
                                                             "PERCENT", 
                                                             "PERMISSION_SET", 
                                                             "PER_CPU", 
                                                             "PER_DB", "PER_NODE", 
                                                             "PIVOT", "PLAN", 
                                                             "PLATFORM", 
                                                             "POLICY", "PRECISION", 
                                                             "PREDICATE", 
                                                             "PRIMARY", 
                                                             "PRINT", "PROC", 
                                                             "PROCEDURE", 
                                                             "PROCESS", 
                                                             "PUBLIC", "PYTHON", 
                                                             "R", "RAISERROR", 
                                                             "RAW", "READ", 
                                                             "READTEXT", 
                                                             "READ_WRITE_FILEGROUPS", 
                                                             "RECONFIGURE", 
                                                             "REFERENCES", 
                                                             "REGENERATE", 
                                                             "RELATED_CONVERSATION", 
                                                             "RELATED_CONVERSATION_GROUP", 
                                                             "REPLICATION", 
                                                             "REQUIRED", 
                                                             "RESET", "RESTART", 
                                                             "RESTORE", 
                                                             "RESTRICT", 
                                                             "RESUME", "RETAINDAYS", 
                                                             "RETURN", "RETURNS", 
                                                             "REVERT", "REVOKE", 
                                                             "REWIND", "RIGHT", 
                                                             "ROLLBACK", 
                                                             "ROLE", "ROWCOUNT", 
                                                             "ROWGUIDCOL", 
                                                             "RSA_512", 
                                                             "RSA_1024", 
                                                             "RSA_2048", 
                                                             "RSA_3072", 
                                                             "RSA_4096", 
                                                             "SAFETY", "RULE", 
                                                             "SAFE", "SAVE", 
                                                             "SCHEDULER", 
                                                             "SCHEMA", "SCHEME", 
                                                             "SECURITYAUDIT", 
                                                             "SELECT", "SEMANTICKEYPHRASETABLE", 
                                                             "SEMANTICSIMILARITYDETAILSTABLE", 
                                                             "SEMANTICSIMILARITYTABLE", 
                                                             "SERVER", "SERVICE", 
                                                             "SERVICE_BROKER", 
                                                             "SERVICE_NAME", 
                                                             "SESSION", 
                                                             "SESSION_USER", 
                                                             "SET", "SETUSER", 
                                                             "SHUTDOWN", 
                                                             "SID", "SKIP_KEYWORD", 
                                                             "SOFTNUMA", 
                                                             "SOME", "SOURCE", 
                                                             "SPECIFICATION", 
                                                             "SPLIT", "SQLDUMPERFLAGS", 
                                                             "SQLDUMPERPATH", 
                                                             "SQLDUMPERTIMEOUT", 
                                                             "STATISTICS", 
                                                             "STATE", "STATS", 
                                                             "START", "STARTED", 
                                                             "STARTUP_STATE", 
                                                             "STOP", "STOPPED", 
                                                             "STOP_ON_ERROR", 
                                                             "SUPPORTED", 
                                                             "SYSTEM_USER", 
                                                             "TABLE", "TABLESAMPLE", 
                                                             "TAPE", "TARGET", 
                                                             "TCP", "TEXTSIZE", 
                                                             "THEN", "TO", 
                                                             "TOP", "TRACK_CAUSALITY", 
                                                             "TRAN", "TRANSACTION", 
                                                             "TRANSFER", 
                                                             "TRIGGER", 
                                                             "TRUNCATE", 
                                                             "TSEQUAL", 
                                                             "UNCHECKED", 
                                                             "UNION", "UNIQUE", 
                                                             "UNLOCK", "UNPIVOT", 
                                                             "UNSAFE", "UPDATE", 
                                                             "UPDATETEXT", 
                                                             "URL", "USE", 
                                                             "USED", "USER", 
                                                             "VALUES", "VARYING", 
                                                             "VERBOSELOGGING", 
                                                             "VIEW", "VISIBILITY", 
                                                             "WAITFOR", 
                                                             "WHEN", "WHERE", 
                                                             "WHILE", "WINDOWS", 
                                                             "WITH", "WITHIN", 
                                                             "WITHOUT", 
                                                             "WITNESS", 
                                                             "WRITETEXT", 
                                                             "ABSOLUTE", 
                                                             "ACCENT_SENSITIVITY", 
                                                             "ACTION", "ACTIVATION", 
                                                             "ACTIVE", "ADDRESS", 
                                                             "AES_128", 
                                                             "AES_192", 
                                                             "AES_256", 
                                                             "AFFINITY", 
                                                             "AFTER", "AGGREGATE", 
                                                             "ALGORITHM", 
                                                             "ALLOW_ENCRYPTED_VALUE_MODIFICATIONS", 
                                                             "ALLOW_SNAPSHOT_ISOLATION", 
                                                             "ALLOWED", 
                                                             "ANSI_NULL_DEFAULT", 
                                                             "ANSI_NULLS", 
                                                             "ANSI_PADDING", 
                                                             "ANSI_WARNINGS", 
                                                             "APPLICATION_LOG", 
                                                             "APPLY", "ARITHABORT", 
                                                             "ASSEMBLY", 
                                                             "AUDIT", "AUDIT_GUID", 
                                                             "AUTO", "AUTO_CLEANUP", 
                                                             "AUTO_CLOSE", 
                                                             "AUTO_CREATE_STATISTICS", 
                                                             "AUTO_SHRINK", 
                                                             "AUTO_UPDATE_STATISTICS", 
                                                             "AUTO_UPDATE_STATISTICS_ASYNC", 
                                                             "AVAILABILITY", 
                                                             "AVG", "BACKUP_PRIORITY", 
                                                             "BEGIN_DIALOG", 
                                                             "BIGINT", "BINARY_BASE64", 
                                                             "BINARY_CHECKSUM", 
                                                             "BINDING", 
                                                             "BLOB_STORAGE", 
                                                             "BROKER", "BROKER_INSTANCE", 
                                                             "BULK_LOGGED", 
                                                             "CALLER", "CAP_CPU_PERCENT", 
                                                             "CAST", "CATALOG", 
                                                             "CATCH", "CHANGE_RETENTION", 
                                                             "CHANGE_TRACKING", 
                                                             "CHECKSUM", 
                                                             "CHECKSUM_AGG", 
                                                             "CLEANUP", 
                                                             "COLLECTION", 
                                                             "COLUMN_MASTER_KEY", 
                                                             "COMMITTED", 
                                                             "COMPATIBILITY_LEVEL", 
                                                             "CONCAT", "CONCAT_NULL_YIELDS_NULL", 
                                                             "CONTENT", 
                                                             "CONTROL", 
                                                             "COOKIE", "COUNT", 
                                                             "COUNT_BIG", 
                                                             "COUNTER", 
                                                             "CPU", "CREATE_NEW", 
                                                             "CREATION_DISPOSITION", 
                                                             "CREDENTIAL", 
                                                             "CRYPTOGRAPHIC", 
                                                             "CURSOR_CLOSE_ON_COMMIT", 
                                                             "CURSOR_DEFAULT", 
                                                             "DATA", "DATE_CORRELATION_OPTIMIZATION", 
                                                             "DATEADD", 
                                                             "DATEDIFF", 
                                                             "DATENAME", 
                                                             "DATEPART", 
                                                             "DAYS", "DB_CHAINING", 
                                                             "DB_FAILOVER", 
                                                             "DECRYPTION", 
                                                             "DEFAULT_DOUBLE_QUOTE", 
                                                             "DEFAULT_FULLTEXT_LANGUAGE", 
                                                             "DEFAULT_LANGUAGE", 
                                                             "DELAY", "DELAYED_DURABILITY", 
                                                             "DELETED", 
                                                             "DENSE_RANK", 
                                                             "DEPENDENTS", 
                                                             "DES", "DESCRIPTION", 
                                                             "DESX", "DHCP", 
                                                             "DIALOG", "DIRECTORY_NAME", 
                                                             "DISABLE", 
                                                             "DISABLE_BROKER", 
                                                             "DISABLED", 
                                                             "DISK_DRIVE", 
                                                             "DOCUMENT", 
                                                             "DYNAMIC", 
                                                             "ELEMENTS", 
                                                             "EMERGENCY", 
                                                             "EMPTY", "ENABLE", 
                                                             "ENABLE_BROKER", 
                                                             "ENCRYPTED_VALUE", 
                                                             "ENCRYPTION", 
                                                             "ENDPOINT_URL", 
                                                             "ERROR_BROKER_CONVERSATIONS", 
                                                             "EXCLUSIVE", 
                                                             "EXECUTABLE", 
                                                             "EXIST", "EXPAND", 
                                                             "EXPIRY_DATE", 
                                                             "EXPLICIT", 
                                                             "FAIL_OPERATION", 
                                                             "FAILOVER_MODE", 
                                                             "FAILURE", 
                                                             "FAILURE_CONDITION_LEVEL", 
                                                             "FAST", "FAST_FORWARD", 
                                                             "FILEGROUP", 
                                                             "FILEGROWTH", 
                                                             "FILEPATH", 
                                                             "FILESTREAM", 
                                                             "FILTER", "FIRST", 
                                                             "FIRST_VALUE", 
                                                             "FOLLOWING", 
                                                             "FORCE", "FORCE_FAILOVER_ALLOW_DATA_LOSS", 
                                                             "FORCED", "FORMAT", 
                                                             "FORWARD_ONLY", 
                                                             "FULLSCAN", 
                                                             "FULLTEXT", 
                                                             "GB", "GETDATE", 
                                                             "GETUTCDATE", 
                                                             "GLOBAL", "GO", 
                                                             "GROUP_MAX_REQUESTS", 
                                                             "GROUPING", 
                                                             "GROUPING_ID", 
                                                             "HADR", "HASH", 
                                                             "HEALTH_CHECK_TIMEOUT", 
                                                             "HIGH", "HONOR_BROKER_PRIORITY", 
                                                             "HOURS", "IDENTITY_VALUE", 
                                                             "IGNORE_NONCLUSTERED_COLUMNSTORE_INDEX", 
                                                             "IMMEDIATE", 
                                                             "IMPERSONATE", 
                                                             "IMPORTANCE", 
                                                             "INCLUDE_NULL_VALUES", 
                                                             "INCREMENTAL", 
                                                             "INITIATOR", 
                                                             "INPUT", "INSENSITIVE", 
                                                             "INSERTED", 
                                                             "INT", "IP", 
                                                             "ISOLATION", 
                                                             "JOB", "JSON", 
                                                             "KB", "KEEP", 
                                                             "KEEPFIXED", 
                                                             "KEY_SOURCE", 
                                                             "KEYS", "KEYSET", 
                                                             "LAG", "LAST", 
                                                             "LAST_VALUE", 
                                                             "LEAD", "LEVEL", 
                                                             "LIST", "LISTENER", 
                                                             "LISTENER_URL", 
                                                             "LOB_COMPACTION", 
                                                             "LOCAL", "LOCATION", 
                                                             "LOCK", "LOCK_ESCALATION", 
                                                             "LOGIN", "LOOP", 
                                                             "LOW", "MANUAL", 
                                                             "MARK", "MATERIALIZED", 
                                                             "MAX", "MAX_CPU_PERCENT", 
                                                             "MAX_DOP", 
                                                             "MAX_FILES", 
                                                             "MAX_IOPS_PER_VOLUME", 
                                                             "MAX_MEMORY_PERCENT", 
                                                             "MAX_PROCESSES", 
                                                             "MAX_QUEUE_READERS", 
                                                             "MAX_ROLLOVER_FILES", 
                                                             "MAXDOP", "MAXRECURSION", 
                                                             "MAXSIZE", 
                                                             "MB", "MEDIUM", 
                                                             "MEMORY_OPTIMIZED_DATA", 
                                                             "MESSAGE", 
                                                             "MIN", "MIN_ACTIVE_ROWVERSION", 
                                                             "MIN_CPU_PERCENT", 
                                                             "MIN_IOPS_PER_VOLUME", 
                                                             "MIN_MEMORY_PERCENT", 
                                                             "MINUTES", 
                                                             "MIRROR_ADDRESS", 
                                                             "MIXED_PAGE_ALLOCATION", 
                                                             "MODE", "MODIFY", 
                                                             "MOVE", "MULTI_USER", 
                                                             "NAME", "NESTED_TRIGGERS", 
                                                             "NEW_ACCOUNT", 
                                                             "NEW_BROKER", 
                                                             "NEW_PASSWORD", 
                                                             "NEXT", "NO", 
                                                             "NO_TRUNCATE", 
                                                             "NO_WAIT", 
                                                             "NOCOUNT", 
                                                             "NODES", "NOEXPAND", 
                                                             "NON_TRANSACTED_ACCESS", 
                                                             "NORECOMPUTE", 
                                                             "NORECOVERY", 
                                                             "NOWAIT", "NTILE", 
                                                             "NUMANODE", 
                                                             "NUMBER", "NUMERIC_ROUNDABORT", 
                                                             "OBJECT", "OFFLINE", 
                                                             "OFFSET", "OLD_ACCOUNT", 
                                                             "ONLINE", "ONLY", 
                                                             "OPEN_EXISTING", 
                                                             "OPTIMISTIC", 
                                                             "OPTIMIZE", 
                                                             "OUT", "OUTPUT", 
                                                             "OVERRIDE", 
                                                             "OWNER", "PAGE_VERIFY", 
                                                             "PARAMETERIZATION", 
                                                             "PARTITION", 
                                                             "PARTITIONS", 
                                                             "PARTNER", 
                                                             "PATH", "POISON_MESSAGE_HANDLING", 
                                                             "POOL", "PORT", 
                                                             "PRECEDING", 
                                                             "PRIMARY_ROLE", 
                                                             "PRIOR", "PRIORITY", 
                                                             "PRIORITY_LEVEL", 
                                                             "PRIVATE", 
                                                             "PRIVATE_KEY", 
                                                             "PRIVILEGES", 
                                                             "PROCEDURE_NAME", 
                                                             "PROPERTY", 
                                                             "PROVIDER", 
                                                             "PROVIDER_KEY_NAME", 
                                                             "QUERY", "QUEUE", 
                                                             "QUEUE_DELAY", 
                                                             "QUOTED_IDENTIFIER", 
                                                             "RANGE", "RANK", 
                                                             "RC2", "RC4", 
                                                             "RC4_128", 
                                                             "READ_COMMITTED_SNAPSHOT", 
                                                             "READ_ONLY", 
                                                             "READ_ONLY_ROUTING_LIST", 
                                                             "READ_WRITE", 
                                                             "READONLY", 
                                                             "REBUILD", 
                                                             "RECEIVE", 
                                                             "RECOMPILE", 
                                                             "RECOVERY", 
                                                             "RECURSIVE_TRIGGERS", 
                                                             "RELATIVE", 
                                                             "REMOTE", "REMOTE_SERVICE_NAME", 
                                                             "REMOVE", "REORGANIZE", 
                                                             "REPEATABLE", 
                                                             "REPLICA", 
                                                             "REQUEST_MAX_CPU_TIME_SEC", 
                                                             "REQUEST_MAX_MEMORY_GRANT_PERCENT", 
                                                             "REQUEST_MEMORY_GRANT_TIMEOUT_SEC", 
                                                             "REQUIRED_SYNCHRONIZED_SECONDARIES_TO_COMMIT", 
                                                             "RESERVE_DISK_SPACE", 
                                                             "RESOURCE", 
                                                             "RESOURCE_MANAGER_LOCATION", 
                                                             "RESTRICTED_USER", 
                                                             "RETENTION", 
                                                             "ROBUST", "ROOT", 
                                                             "ROUTE", "ROW", 
                                                             "ROW_NUMBER", 
                                                             "ROWGUID", 
                                                             "ROWS", "SAMPLE", 
                                                             "SCHEMABINDING", 
                                                             "SCOPED", "SCROLL", 
                                                             "SCROLL_LOCKS", 
                                                             "SEARCH", "SECONDARY", 
                                                             "SECONDARY_ONLY", 
                                                             "SECONDARY_ROLE", 
                                                             "SECONDS", 
                                                             "SECRET", "SECURITY", 
                                                             "SECURITY_LOG", 
                                                             "SEEDING_MODE", 
                                                             "SELF", "SEMI_SENSITIVE", 
                                                             "SEND", "SENT", 
                                                             "SEQUENCE", 
                                                             "SERIALIZABLE", 
                                                             "SESSION_TIMEOUT", 
                                                             "SETERROR", 
                                                             "SHARE", "SHOWPLAN", 
                                                             "SIGNATURE", 
                                                             "SIMPLE", "SINGLE_USER", 
                                                             "SIZE", "SMALLINT", 
                                                             "SNAPSHOT", 
                                                             "SPATIAL_WINDOW_MAX_CELLS", 
                                                             "STANDBY", 
                                                             "START_DATE", 
                                                             "STATIC", "STATS_STREAM", 
                                                             "STATUS", "STATUSONLY", 
                                                             "STDEV", "STDEVP", 
                                                             "STOPLIST", 
                                                             "STRING_AGG", 
                                                             "STUFF", "SUBJECT", 
                                                             "SUBSCRIPTION", 
                                                             "SUM", "SUSPEND", 
                                                             "SYMMETRIC", 
                                                             "SYNCHRONOUS_COMMIT", 
                                                             "SYNONYM", 
                                                             "SYSTEM", "TAKE", 
                                                             "TARGET_RECOVERY_TIME", 
                                                             "TB", "TEXTIMAGE_ON", 
                                                             "THROW", "TIES", 
                                                             "TIME", "TIMEOUT", 
                                                             "TIMER", "TINYINT", 
                                                             "TORN_PAGE_DETECTION", 
                                                             "TRANSFORM_NOISE_WORDS", 
                                                             "TRIPLE_DES", 
                                                             "TRIPLE_DES_3KEY", 
                                                             "TRUSTWORTHY", 
                                                             "TRY", "TSQL", 
                                                             "TWO_DIGIT_YEAR_CUTOFF", 
                                                             "TYPE", "TYPE_WARNING", 
                                                             "UNBOUNDED", 
                                                             "UNCOMMITTED", 
                                                             "UNKNOWN", 
                                                             "UNLIMITED", 
                                                             "UOW", "USING", 
                                                             "VALID_XML", 
                                                             "VALIDATION", 
                                                             "VALUE", "VAR", 
                                                             "VARP", "VIEW_METADATA", 
                                                             "VIEWS", "WAIT", 
                                                             "WELL_FORMED_XML", 
                                                             "WITHOUT_ARRAY_WRAPPER", 
                                                             "WORK", "WORKLOAD", 
                                                             "XML", "XMLDATA", 
                                                             "XMLNAMESPACES", 
                                                             "XMLSCHEMA", 
                                                             "XSINIL", "DOLLAR_ACTION", 
                                                             "MOCA_ONSTACK", 
                                                             "MOCA_IGNORE", 
                                                             "SPACE", "COMMENT", 
                                                             "LINE_COMMENT", 
                                                             "DOUBLE_QUOTE_ID", 
                                                             "SINGLE_QUOTE", 
                                                             "SQUARE_BRACKET_ID", 
                                                             "LOCAL_ID", 
                                                             "MOCA_ENVIRONMENT_VARIABLE", 
                                                             "MOCA_AT_MINUS_VARIABLE", 
                                                             "MOCA_AT_PLUS_VARIABLE", 
                                                             "MOCA_AT_STAR", 
                                                             "DECIMAL", 
                                                             "ID", "QUOTED_URL", 
                                                             "QUOTED_HOST_AND_PORT", 
                                                             "STRING", "BINARY", 
                                                             "FLOAT", "REAL", 
                                                             "EQUAL", "NOT_EQUAL", 
                                                             "GREATER", 
                                                             "LESS", "GREATER_EQUAL", 
                                                             "LESS_EQUAL", 
                                                             "EXCLAMATION", 
                                                             "PLUS_ASSIGN", 
                                                             "MINUS_ASSIGN", 
                                                             "MULT_ASSIGN", 
                                                             "DIV_ASSIGN", 
                                                             "MOD_ASSIGN", 
                                                             "AND_ASSIGN", 
                                                             "XOR_ASSIGN", 
                                                             "OR_ASSIGN", 
                                                             "DOUBLE_BAR", 
                                                             "DOT", "UNDERLINE", 
                                                             "AT", "SHARP", 
                                                             "DOLLAR", "LR_BRACKET", 
                                                             "RR_BRACKET", 
                                                             "COMMA", "SEMI", 
                                                             "COLON", "STAR", 
                                                             "DIVIDE", "MODULE", 
                                                             "PLUS", "MINUS", 
                                                             "BIT_NOT", 
                                                             "BIT_OR", "BIT_AND", 
                                                             "BIT_XOR", 
                                                             "IPV4_OCTECT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"moca_sql_script", "batch", "sql_clauses", "sql_clause", "dml_clause", 
		"ddl_clause", "drop_sequence", "alter_sequence", "create_sequence", "delete_statement", 
		"delete_statement_from", "insert_statement", "insert_statement_value", 
		"select_statement", "update_statement", "output_clause", "output_dml_list_elem", 
		"output_column_name", "create_index", "create_table", "table_options", 
		"create_view", "view_attribute", "alter_table", "host", "drop_index", 
		"drop_relational_or_xml_or_spatial_index", "drop_backward_compatible_index", 
		"drop_table", "drop_view", "rowset_function_limited", "openquery", "opendatasource", 
		"execute_statement", "execute_body", "execute_statement_arg", "execute_var_string", 
		"column_def_table_constraints", "column_def_table_constraint", "column_definition", 
		"materialized_column_definition", "column_constraint", "table_constraint", 
		"on_delete", "on_update", "index_options", "index_option", "constant_LOCAL_ID", 
		"expression", "moca_at_variable", "moca_environment_variable", "moca_at_minus_variable", 
		"moca_at_plus_variable", "moca_at_star", "moca_integration_variable", 
		"primitive_expression", "case_expression", "unary_operator_expression", 
		"bracket_expression", "constant_expression", "subquery", "with_expression", 
		"common_table_expression", "update_elem", "search_condition_list", "search_condition", 
		"search_condition_and", "search_condition_not", "predicate", "query_expression", 
		"sql_union", "query_specification", "top_clause", "top_percent", "top_count", 
		"order_by_clause", "for_clause", "xml_common_directives", "order_by_expression", 
		"group_by_item", "option_clause", "option", "optimize_for_arg", "select_list", 
		"udt_method_arguments", "asterisk", "column_elem", "udt_elem", "expression_elem", 
		"select_list_elem", "table_sources", "table_source", "table_source_item_joined", 
		"table_source_item", "open_xml", "schema_declaration", "column_declaration", 
		"change_table", "join_part", "pivot_clause", "unpivot_clause", "full_column_name_list", 
		"table_name_with_hint", "rowset_function", "bulk_option", "derived_table", 
		"function_call", "xml_data_type_methods", "value_method", "query_method", 
		"exist_method", "modify_method", "nodes_method", "switch_section", "switch_search_condition_section", 
		"as_column_alias", "as_table_alias", "table_alias", "with_table_hints", 
		"insert_with_table_hints", "table_hint", "index_value", "column_alias_list", 
		"column_alias", "table_value_constructor", "expression_list", "ranking_windowed_function", 
		"aggregate_windowed_function", "analytic_windowed_function", "all_distinct_expression", 
		"over_clause", "row_or_range_clause", "window_frame_extent", "window_frame_bound", 
		"window_frame_preceding", "window_frame_following", "full_table_name", 
		"table_name", "simple_name", "func_proc_name_schema", "func_proc_name_database_schema", 
		"func_proc_name_server_database_schema", "ddl_object", "full_column_name", 
		"column_name_list_with_order", "column_name_list", "cursor_name", "on_off", 
		"clustered", "null_notnull", "null_or_default", "scalar_function_name", 
		"data_type", "constant", "sign", "id", "simple_id", "comparison_operator", 
		"assignment_operator",
	];
	public get grammarFileName(): string { return "MocaSql.g4"; }
	public get literalNames(): (string | null)[] { return MocaSqlParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MocaSqlParser.symbolicNames; }
	public get ruleNames(): string[] { return MocaSqlParser.ruleNames; }
	public get serializedATN(): number[] { return MocaSqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MocaSqlParser._ATN, MocaSqlParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public moca_sql_script(): Moca_sql_scriptContext {
		let localctx: Moca_sql_scriptContext = new Moca_sql_scriptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MocaSqlParser.RULE_moca_sql_script);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9 || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 1074266113) !== 0) || _la===161 || _la===304 || _la===360 || _la===376 || _la===836) {
				{
				{
				this.state = 318;
				this.batch();
				}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 324;
			this.match(MocaSqlParser.EOF);
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
	public batch(): BatchContext {
		let localctx: BatchContext = new BatchContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MocaSqlParser.RULE_batch);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 326;
			this.sql_clauses();
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
	public sql_clauses(): Sql_clausesContext {
		let localctx: Sql_clausesContext = new Sql_clausesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MocaSqlParser.RULE_sql_clauses);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 332;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 328;
					this.sql_clause();
					this.state = 330;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===839) {
						{
						this.state = 329;
						this.match(MocaSqlParser.SEMI);
						}
					}

					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 334;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public sql_clause(): Sql_clauseContext {
		let localctx: Sql_clauseContext = new Sql_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MocaSqlParser.RULE_sql_clause);
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 91:
			case 161:
			case 304:
			case 360:
			case 376:
			case 836:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 336;
				this.dml_clause();
				}
				break;
			case 9:
			case 72:
			case 102:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 337;
				this.ddl_clause();
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
	public dml_clause(): Dml_clauseContext {
		let localctx: Dml_clauseContext = new Dml_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MocaSqlParser.RULE_dml_clause);
		try {
			this.state = 344;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 340;
				this.delete_statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 341;
				this.insert_statement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 342;
				this.select_statement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 343;
				this.update_statement();
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
	public ddl_clause(): Ddl_clauseContext {
		let localctx: Ddl_clauseContext = new Ddl_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MocaSqlParser.RULE_ddl_clause);
		try {
			this.state = 356;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 346;
				this.create_sequence();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 347;
				this.alter_sequence();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 348;
				this.drop_sequence();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 349;
				this.create_table();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 350;
				this.alter_table();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 351;
				this.drop_table();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 352;
				this.create_index();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 353;
				this.drop_index();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 354;
				this.create_view();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 355;
				this.drop_view();
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
	public drop_sequence(): Drop_sequenceContext {
		let localctx: Drop_sequenceContext = new Drop_sequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MocaSqlParser.RULE_drop_sequence);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 358;
			this.match(MocaSqlParser.DROP);
			this.state = 359;
			this.match(MocaSqlParser.SEQUENCE);
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===152) {
				{
				this.state = 360;
				this.match(MocaSqlParser.IF);
				this.state = 361;
				this.match(MocaSqlParser.EXISTS);
				}
			}

			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39 || _la===81 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1610616833) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 201342977) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 811597845) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 169873409) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8229) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1084233599) !== 0) || _la===838) {
				{
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===838) {
					{
					this.state = 364;
					this.match(MocaSqlParser.COMMA);
					}
				}

				this.state = 370;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 367;
					localctx._database_name = this.id();
					this.state = 368;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 375;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 372;
					localctx._schema_name = this.id();
					this.state = 373;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 377;
				localctx._sequence_name = this.id();
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
	public alter_sequence(): Alter_sequenceContext {
		let localctx: Alter_sequenceContext = new Alter_sequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MocaSqlParser.RULE_alter_sequence);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 380;
			this.match(MocaSqlParser.ALTER);
			this.state = 381;
			this.match(MocaSqlParser.SEQUENCE);
			this.state = 385;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 382;
				localctx._schema_name = this.id();
				this.state = 383;
				this.match(MocaSqlParser.DOT);
				}
				break;
			}
			this.state = 387;
			localctx._sequence_name = this.id();
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===276) {
				{
				this.state = 388;
				this.match(MocaSqlParser.RESTART);
				this.state = 391;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 389;
					this.match(MocaSqlParser.WITH);
					this.state = 390;
					this.match(MocaSqlParser.DECIMAL);
					}
					break;
				}
				}
			}

			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===156) {
				{
				this.state = 395;
				this.match(MocaSqlParser.INCREMENT);
				this.state = 396;
				this.match(MocaSqlParser.BY);
				this.state = 397;
				localctx._sequnce_increment = this.match(MocaSqlParser.DECIMAL);
				}
			}

			this.state = 404;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 400;
				this.match(MocaSqlParser.MINVALUE);
				this.state = 401;
				this.match(MocaSqlParser.DECIMAL);
				}
				break;
			case 2:
				{
				this.state = 402;
				this.match(MocaSqlParser.NO);
				this.state = 403;
				this.match(MocaSqlParser.MINVALUE);
				}
				break;
			}
			this.state = 410;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 406;
				this.match(MocaSqlParser.MAXVALUE);
				this.state = 407;
				this.match(MocaSqlParser.DECIMAL);
				}
				break;
			case 2:
				{
				this.state = 408;
				this.match(MocaSqlParser.NO);
				this.state = 409;
				this.match(MocaSqlParser.MAXVALUE);
				}
				break;
			}
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 412;
				this.match(MocaSqlParser.CYCLE);
				}
				break;
			case 2:
				{
				this.state = 413;
				this.match(MocaSqlParser.NO);
				this.state = 414;
				this.match(MocaSqlParser.CYCLE);
				}
				break;
			}
			this.state = 421;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 38:
				{
				this.state = 417;
				this.match(MocaSqlParser.CACHE);
				this.state = 418;
				this.match(MocaSqlParser.DECIMAL);
				}
				break;
			case 610:
				{
				this.state = 419;
				this.match(MocaSqlParser.NO);
				this.state = 420;
				this.match(MocaSqlParser.CACHE);
				}
				break;
			case -1:
			case 9:
			case 72:
			case 91:
			case 102:
			case 161:
			case 304:
			case 360:
			case 376:
			case 836:
			case 839:
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
	public create_sequence(): Create_sequenceContext {
		let localctx: Create_sequenceContext = new Create_sequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, MocaSqlParser.RULE_create_sequence);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 423;
			this.match(MocaSqlParser.CREATE);
			this.state = 424;
			this.match(MocaSqlParser.SEQUENCE);
			this.state = 428;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 425;
				localctx._schema_name = this.id();
				this.state = 426;
				this.match(MocaSqlParser.DOT);
				}
				break;
			}
			this.state = 430;
			localctx._sequence_name = this.id();
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 431;
				this.match(MocaSqlParser.AS);
				this.state = 432;
				this.data_type();
				}
			}

			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===330) {
				{
				this.state = 435;
				this.match(MocaSqlParser.START);
				this.state = 436;
				this.match(MocaSqlParser.WITH);
				this.state = 437;
				this.match(MocaSqlParser.DECIMAL);
				}
			}

			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===156) {
				{
				this.state = 440;
				this.match(MocaSqlParser.INCREMENT);
				this.state = 441;
				this.match(MocaSqlParser.BY);
				this.state = 443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===845) {
					{
					this.state = 442;
					this.match(MocaSqlParser.MINUS);
					}
				}

				this.state = 445;
				this.match(MocaSqlParser.DECIMAL);
				}
			}

			this.state = 454;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 448;
				this.match(MocaSqlParser.MINVALUE);
				this.state = 450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===807) {
					{
					this.state = 449;
					this.match(MocaSqlParser.DECIMAL);
					}
				}

				}
				break;
			case 2:
				{
				this.state = 452;
				this.match(MocaSqlParser.NO);
				this.state = 453;
				this.match(MocaSqlParser.MINVALUE);
				}
				break;
			}
			this.state = 462;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 456;
				this.match(MocaSqlParser.MAXVALUE);
				this.state = 458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===807) {
					{
					this.state = 457;
					this.match(MocaSqlParser.DECIMAL);
					}
				}

				}
				break;
			case 2:
				{
				this.state = 460;
				this.match(MocaSqlParser.NO);
				this.state = 461;
				this.match(MocaSqlParser.MAXVALUE);
				}
				break;
			}
			this.state = 467;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 464;
				this.match(MocaSqlParser.CYCLE);
				}
				break;
			case 2:
				{
				this.state = 465;
				this.match(MocaSqlParser.NO);
				this.state = 466;
				this.match(MocaSqlParser.CYCLE);
				}
				break;
			}
			this.state = 475;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 38:
				{
				this.state = 469;
				this.match(MocaSqlParser.CACHE);
				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===807) {
					{
					this.state = 470;
					this.match(MocaSqlParser.DECIMAL);
					}
				}

				}
				break;
			case 610:
				{
				this.state = 473;
				this.match(MocaSqlParser.NO);
				this.state = 474;
				this.match(MocaSqlParser.CACHE);
				}
				break;
			case -1:
			case 9:
			case 72:
			case 91:
			case 102:
			case 161:
			case 304:
			case 360:
			case 376:
			case 836:
			case 839:
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
	public delete_statement(): Delete_statementContext {
		let localctx: Delete_statementContext = new Delete_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, MocaSqlParser.RULE_delete_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===376) {
				{
				this.state = 477;
				this.with_expression();
				}
			}

			this.state = 480;
			this.match(MocaSqlParser.DELETE);
			this.state = 490;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 481;
				this.match(MocaSqlParser.TOP);
				this.state = 482;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 483;
				this.expression(0);
				this.state = 484;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===244) {
					{
					this.state = 485;
					this.match(MocaSqlParser.PERCENT);
					}
				}

				}
				break;
			case 2:
				{
				this.state = 488;
				this.match(MocaSqlParser.TOP);
				this.state = 489;
				this.match(MocaSqlParser.DECIMAL);
				}
				break;
			}
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===138) {
				{
				this.state = 492;
				this.match(MocaSqlParser.FROM);
				}
			}

			this.state = 495;
			this.delete_statement_from();
			this.state = 497;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 496;
				this.insert_with_table_hints();
				}
				break;
			}
			this.state = 500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===634) {
				{
				this.state = 499;
				this.output_clause();
				}
			}

			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===138) {
				{
				this.state = 502;
				this.match(MocaSqlParser.FROM);
				this.state = 503;
				this.table_sources();
				}
			}

			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===373) {
				{
				this.state = 506;
				this.match(MocaSqlParser.WHERE);
				this.state = 517;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
				case 31:
				case 39:
				case 41:
				case 53:
				case 70:
				case 77:
				case 78:
				case 81:
				case 88:
				case 113:
				case 118:
				case 119:
				case 129:
				case 130:
				case 133:
				case 149:
				case 153:
				case 159:
				case 168:
				case 171:
				case 176:
				case 188:
				case 189:
				case 219:
				case 222:
				case 223:
				case 226:
				case 239:
				case 240:
				case 252:
				case 253:
				case 260:
				case 262:
				case 264:
				case 281:
				case 282:
				case 286:
				case 288:
				case 289:
				case 296:
				case 308:
				case 313:
				case 317:
				case 321:
				case 323:
				case 328:
				case 330:
				case 333:
				case 337:
				case 341:
				case 362:
				case 381:
				case 382:
				case 383:
				case 384:
				case 385:
				case 386:
				case 387:
				case 388:
				case 389:
				case 390:
				case 391:
				case 392:
				case 393:
				case 394:
				case 395:
				case 396:
				case 397:
				case 398:
				case 399:
				case 400:
				case 401:
				case 402:
				case 403:
				case 404:
				case 405:
				case 406:
				case 407:
				case 408:
				case 409:
				case 410:
				case 411:
				case 412:
				case 413:
				case 414:
				case 415:
				case 416:
				case 417:
				case 418:
				case 419:
				case 420:
				case 421:
				case 422:
				case 423:
				case 424:
				case 425:
				case 426:
				case 427:
				case 428:
				case 429:
				case 430:
				case 431:
				case 432:
				case 433:
				case 434:
				case 435:
				case 436:
				case 437:
				case 438:
				case 439:
				case 440:
				case 441:
				case 442:
				case 443:
				case 444:
				case 445:
				case 446:
				case 447:
				case 448:
				case 449:
				case 450:
				case 451:
				case 452:
				case 453:
				case 454:
				case 455:
				case 456:
				case 457:
				case 458:
				case 459:
				case 460:
				case 461:
				case 462:
				case 463:
				case 464:
				case 465:
				case 466:
				case 467:
				case 468:
				case 469:
				case 470:
				case 471:
				case 472:
				case 473:
				case 474:
				case 475:
				case 476:
				case 477:
				case 478:
				case 479:
				case 480:
				case 481:
				case 482:
				case 483:
				case 484:
				case 486:
				case 487:
				case 488:
				case 489:
				case 490:
				case 491:
				case 492:
				case 493:
				case 494:
				case 495:
				case 496:
				case 497:
				case 498:
				case 499:
				case 500:
				case 501:
				case 502:
				case 503:
				case 504:
				case 505:
				case 506:
				case 507:
				case 508:
				case 509:
				case 510:
				case 511:
				case 512:
				case 513:
				case 514:
				case 515:
				case 516:
				case 517:
				case 518:
				case 519:
				case 520:
				case 521:
				case 522:
				case 523:
				case 524:
				case 525:
				case 526:
				case 527:
				case 528:
				case 529:
				case 530:
				case 531:
				case 532:
				case 533:
				case 534:
				case 535:
				case 536:
				case 537:
				case 538:
				case 539:
				case 541:
				case 542:
				case 543:
				case 544:
				case 545:
				case 546:
				case 547:
				case 548:
				case 551:
				case 552:
				case 553:
				case 554:
				case 555:
				case 556:
				case 557:
				case 558:
				case 559:
				case 560:
				case 561:
				case 562:
				case 563:
				case 564:
				case 565:
				case 566:
				case 567:
				case 568:
				case 569:
				case 570:
				case 571:
				case 572:
				case 573:
				case 574:
				case 575:
				case 576:
				case 577:
				case 578:
				case 579:
				case 580:
				case 581:
				case 582:
				case 583:
				case 584:
				case 585:
				case 586:
				case 587:
				case 588:
				case 589:
				case 590:
				case 591:
				case 592:
				case 593:
				case 594:
				case 595:
				case 596:
				case 597:
				case 598:
				case 599:
				case 600:
				case 601:
				case 602:
				case 603:
				case 604:
				case 605:
				case 606:
				case 607:
				case 608:
				case 609:
				case 610:
				case 611:
				case 612:
				case 613:
				case 614:
				case 615:
				case 616:
				case 617:
				case 618:
				case 619:
				case 620:
				case 621:
				case 622:
				case 623:
				case 624:
				case 625:
				case 626:
				case 627:
				case 628:
				case 629:
				case 630:
				case 631:
				case 632:
				case 633:
				case 634:
				case 636:
				case 637:
				case 638:
				case 639:
				case 640:
				case 641:
				case 642:
				case 643:
				case 644:
				case 645:
				case 646:
				case 647:
				case 648:
				case 649:
				case 650:
				case 651:
				case 652:
				case 653:
				case 654:
				case 655:
				case 656:
				case 657:
				case 658:
				case 659:
				case 660:
				case 661:
				case 662:
				case 663:
				case 664:
				case 665:
				case 666:
				case 667:
				case 668:
				case 669:
				case 670:
				case 671:
				case 672:
				case 673:
				case 674:
				case 675:
				case 676:
				case 677:
				case 678:
				case 679:
				case 680:
				case 681:
				case 682:
				case 683:
				case 684:
				case 685:
				case 686:
				case 687:
				case 688:
				case 689:
				case 690:
				case 691:
				case 692:
				case 693:
				case 694:
				case 695:
				case 696:
				case 697:
				case 698:
				case 699:
				case 700:
				case 701:
				case 702:
				case 703:
				case 704:
				case 705:
				case 706:
				case 707:
				case 708:
				case 709:
				case 710:
				case 711:
				case 712:
				case 713:
				case 714:
				case 715:
				case 716:
				case 717:
				case 718:
				case 719:
				case 720:
				case 721:
				case 722:
				case 723:
				case 724:
				case 725:
				case 726:
				case 727:
				case 728:
				case 729:
				case 730:
				case 731:
				case 732:
				case 733:
				case 734:
				case 735:
				case 737:
				case 738:
				case 739:
				case 740:
				case 741:
				case 742:
				case 744:
				case 745:
				case 746:
				case 747:
				case 748:
				case 749:
				case 750:
				case 751:
				case 752:
				case 753:
				case 754:
				case 755:
				case 756:
				case 757:
				case 758:
				case 759:
				case 760:
				case 761:
				case 762:
				case 763:
				case 764:
				case 765:
				case 766:
				case 767:
				case 768:
				case 769:
				case 770:
				case 771:
				case 772:
				case 773:
				case 775:
				case 776:
				case 777:
				case 778:
				case 779:
				case 780:
				case 781:
				case 782:
				case 783:
				case 784:
				case 786:
				case 787:
				case 788:
				case 790:
				case 799:
				case 801:
				case 802:
				case 803:
				case 804:
				case 805:
				case 806:
				case 807:
				case 808:
				case 811:
				case 812:
				case 813:
				case 814:
				case 835:
				case 836:
				case 844:
				case 845:
				case 846:
					{
					this.state = 507;
					this.search_condition();
					}
					break;
				case 74:
					{
					this.state = 508;
					this.match(MocaSqlParser.CURRENT);
					this.state = 509;
					this.match(MocaSqlParser.OF);
					this.state = 515;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
					case 1:
						{
						this.state = 511;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
						case 1:
							{
							this.state = 510;
							this.match(MocaSqlParser.GLOBAL);
							}
							break;
						}
						this.state = 513;
						this.cursor_name();
						}
						break;
					case 2:
						{
						this.state = 514;
						localctx._cursor_var = this.match(MocaSqlParser.LOCAL_ID);
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			this.state = 522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===132) {
				{
				this.state = 521;
				this.for_clause();
				}
			}

			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===235) {
				{
				this.state = 524;
				this.option_clause();
				}
			}

			this.state = 528;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 527;
				this.match(MocaSqlParser.SEMI);
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
	public delete_statement_from(): Delete_statement_fromContext {
		let localctx: Delete_statement_fromContext = new Delete_statement_fromContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, MocaSqlParser.RULE_delete_statement_from);
		try {
			this.state = 534;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 530;
				this.ddl_object();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 531;
				this.table_alias();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 532;
				this.rowset_function_limited();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 533;
				localctx._table_var = this.match(MocaSqlParser.LOCAL_ID);
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
	public insert_statement(): Insert_statementContext {
		let localctx: Insert_statementContext = new Insert_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, MocaSqlParser.RULE_insert_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===376) {
				{
				this.state = 536;
				this.with_expression();
				}
			}

			this.state = 539;
			this.match(MocaSqlParser.INSERT);
			this.state = 547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===346) {
				{
				this.state = 540;
				this.match(MocaSqlParser.TOP);
				this.state = 541;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 542;
				this.expression(0);
				this.state = 543;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===244) {
					{
					this.state = 544;
					this.match(MocaSqlParser.PERCENT);
					}
				}

				}
			}

			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===164) {
				{
				this.state = 549;
				this.match(MocaSqlParser.INTO);
				}
			}

			this.state = 554;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
			case 81:
			case 113:
			case 119:
			case 129:
			case 130:
			case 133:
			case 159:
			case 171:
			case 188:
			case 189:
			case 226:
			case 240:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 288:
			case 289:
			case 296:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 362:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 799:
			case 801:
			case 802:
			case 808:
				{
				this.state = 552;
				this.ddl_object();
				}
				break;
			case 231:
			case 232:
				{
				this.state = 553;
				this.rowset_function_limited();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 557;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 556;
				this.insert_with_table_hints();
				}
				break;
			}
			this.state = 563;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 559;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 560;
				this.column_name_list();
				this.state = 561;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			}
			this.state = 566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===634) {
				{
				this.state = 565;
				this.output_clause();
				}
			}

			this.state = 568;
			this.insert_statement_value();
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===132) {
				{
				this.state = 569;
				this.for_clause();
				}
			}

			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===235) {
				{
				this.state = 572;
				this.option_clause();
				}
			}

			this.state = 576;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 575;
				this.match(MocaSqlParser.SEMI);
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
	public insert_statement_value(): Insert_statement_valueContext {
		let localctx: Insert_statement_valueContext = new Insert_statement_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, MocaSqlParser.RULE_insert_statement_value);
		try {
			this.state = 583;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 578;
				this.table_value_constructor();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 579;
				this.derived_table();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 580;
				this.execute_statement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 581;
				this.match(MocaSqlParser.DEFAULT);
				this.state = 582;
				this.match(MocaSqlParser.VALUES);
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
	public select_statement(): Select_statementContext {
		let localctx: Select_statementContext = new Select_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, MocaSqlParser.RULE_select_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===376) {
				{
				this.state = 585;
				this.with_expression();
				}
			}

			this.state = 588;
			this.query_expression();
			this.state = 590;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 589;
				this.order_by_clause();
				}
				break;
			}
			this.state = 593;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 592;
				this.for_clause();
				}
				break;
			}
			this.state = 596;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 595;
				this.option_clause();
				}
				break;
			}
			this.state = 599;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 598;
				this.match(MocaSqlParser.SEMI);
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
	public update_statement(): Update_statementContext {
		let localctx: Update_statementContext = new Update_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, MocaSqlParser.RULE_update_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===376) {
				{
				this.state = 601;
				this.with_expression();
				}
			}

			this.state = 604;
			this.match(MocaSqlParser.UPDATE);
			this.state = 612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===346) {
				{
				this.state = 605;
				this.match(MocaSqlParser.TOP);
				this.state = 606;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 607;
				this.expression(0);
				this.state = 608;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===244) {
					{
					this.state = 609;
					this.match(MocaSqlParser.PERCENT);
					}
				}

				}
			}

			this.state = 616;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
			case 81:
			case 113:
			case 119:
			case 129:
			case 130:
			case 133:
			case 159:
			case 171:
			case 188:
			case 189:
			case 226:
			case 240:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 288:
			case 289:
			case 296:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 362:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 799:
			case 801:
			case 802:
			case 808:
				{
				this.state = 614;
				this.ddl_object();
				}
				break;
			case 231:
			case 232:
				{
				this.state = 615;
				this.rowset_function_limited();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===376 || _la===836) {
				{
				this.state = 618;
				this.with_table_hints();
				}
			}

			this.state = 621;
			this.match(MocaSqlParser.SET);
			this.state = 622;
			this.update_elem();
			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===838) {
				{
				{
				this.state = 623;
				this.match(MocaSqlParser.COMMA);
				this.state = 624;
				this.update_elem();
				}
				}
				this.state = 629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===634) {
				{
				this.state = 630;
				this.output_clause();
				}
			}

			this.state = 635;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===138) {
				{
				this.state = 633;
				this.match(MocaSqlParser.FROM);
				this.state = 634;
				this.table_sources();
				}
			}

			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===373) {
				{
				this.state = 637;
				this.match(MocaSqlParser.WHERE);
				this.state = 648;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
				case 31:
				case 39:
				case 41:
				case 53:
				case 70:
				case 77:
				case 78:
				case 81:
				case 88:
				case 113:
				case 118:
				case 119:
				case 129:
				case 130:
				case 133:
				case 149:
				case 153:
				case 159:
				case 168:
				case 171:
				case 176:
				case 188:
				case 189:
				case 219:
				case 222:
				case 223:
				case 226:
				case 239:
				case 240:
				case 252:
				case 253:
				case 260:
				case 262:
				case 264:
				case 281:
				case 282:
				case 286:
				case 288:
				case 289:
				case 296:
				case 308:
				case 313:
				case 317:
				case 321:
				case 323:
				case 328:
				case 330:
				case 333:
				case 337:
				case 341:
				case 362:
				case 381:
				case 382:
				case 383:
				case 384:
				case 385:
				case 386:
				case 387:
				case 388:
				case 389:
				case 390:
				case 391:
				case 392:
				case 393:
				case 394:
				case 395:
				case 396:
				case 397:
				case 398:
				case 399:
				case 400:
				case 401:
				case 402:
				case 403:
				case 404:
				case 405:
				case 406:
				case 407:
				case 408:
				case 409:
				case 410:
				case 411:
				case 412:
				case 413:
				case 414:
				case 415:
				case 416:
				case 417:
				case 418:
				case 419:
				case 420:
				case 421:
				case 422:
				case 423:
				case 424:
				case 425:
				case 426:
				case 427:
				case 428:
				case 429:
				case 430:
				case 431:
				case 432:
				case 433:
				case 434:
				case 435:
				case 436:
				case 437:
				case 438:
				case 439:
				case 440:
				case 441:
				case 442:
				case 443:
				case 444:
				case 445:
				case 446:
				case 447:
				case 448:
				case 449:
				case 450:
				case 451:
				case 452:
				case 453:
				case 454:
				case 455:
				case 456:
				case 457:
				case 458:
				case 459:
				case 460:
				case 461:
				case 462:
				case 463:
				case 464:
				case 465:
				case 466:
				case 467:
				case 468:
				case 469:
				case 470:
				case 471:
				case 472:
				case 473:
				case 474:
				case 475:
				case 476:
				case 477:
				case 478:
				case 479:
				case 480:
				case 481:
				case 482:
				case 483:
				case 484:
				case 486:
				case 487:
				case 488:
				case 489:
				case 490:
				case 491:
				case 492:
				case 493:
				case 494:
				case 495:
				case 496:
				case 497:
				case 498:
				case 499:
				case 500:
				case 501:
				case 502:
				case 503:
				case 504:
				case 505:
				case 506:
				case 507:
				case 508:
				case 509:
				case 510:
				case 511:
				case 512:
				case 513:
				case 514:
				case 515:
				case 516:
				case 517:
				case 518:
				case 519:
				case 520:
				case 521:
				case 522:
				case 523:
				case 524:
				case 525:
				case 526:
				case 527:
				case 528:
				case 529:
				case 530:
				case 531:
				case 532:
				case 533:
				case 534:
				case 535:
				case 536:
				case 537:
				case 538:
				case 539:
				case 541:
				case 542:
				case 543:
				case 544:
				case 545:
				case 546:
				case 547:
				case 548:
				case 551:
				case 552:
				case 553:
				case 554:
				case 555:
				case 556:
				case 557:
				case 558:
				case 559:
				case 560:
				case 561:
				case 562:
				case 563:
				case 564:
				case 565:
				case 566:
				case 567:
				case 568:
				case 569:
				case 570:
				case 571:
				case 572:
				case 573:
				case 574:
				case 575:
				case 576:
				case 577:
				case 578:
				case 579:
				case 580:
				case 581:
				case 582:
				case 583:
				case 584:
				case 585:
				case 586:
				case 587:
				case 588:
				case 589:
				case 590:
				case 591:
				case 592:
				case 593:
				case 594:
				case 595:
				case 596:
				case 597:
				case 598:
				case 599:
				case 600:
				case 601:
				case 602:
				case 603:
				case 604:
				case 605:
				case 606:
				case 607:
				case 608:
				case 609:
				case 610:
				case 611:
				case 612:
				case 613:
				case 614:
				case 615:
				case 616:
				case 617:
				case 618:
				case 619:
				case 620:
				case 621:
				case 622:
				case 623:
				case 624:
				case 625:
				case 626:
				case 627:
				case 628:
				case 629:
				case 630:
				case 631:
				case 632:
				case 633:
				case 634:
				case 636:
				case 637:
				case 638:
				case 639:
				case 640:
				case 641:
				case 642:
				case 643:
				case 644:
				case 645:
				case 646:
				case 647:
				case 648:
				case 649:
				case 650:
				case 651:
				case 652:
				case 653:
				case 654:
				case 655:
				case 656:
				case 657:
				case 658:
				case 659:
				case 660:
				case 661:
				case 662:
				case 663:
				case 664:
				case 665:
				case 666:
				case 667:
				case 668:
				case 669:
				case 670:
				case 671:
				case 672:
				case 673:
				case 674:
				case 675:
				case 676:
				case 677:
				case 678:
				case 679:
				case 680:
				case 681:
				case 682:
				case 683:
				case 684:
				case 685:
				case 686:
				case 687:
				case 688:
				case 689:
				case 690:
				case 691:
				case 692:
				case 693:
				case 694:
				case 695:
				case 696:
				case 697:
				case 698:
				case 699:
				case 700:
				case 701:
				case 702:
				case 703:
				case 704:
				case 705:
				case 706:
				case 707:
				case 708:
				case 709:
				case 710:
				case 711:
				case 712:
				case 713:
				case 714:
				case 715:
				case 716:
				case 717:
				case 718:
				case 719:
				case 720:
				case 721:
				case 722:
				case 723:
				case 724:
				case 725:
				case 726:
				case 727:
				case 728:
				case 729:
				case 730:
				case 731:
				case 732:
				case 733:
				case 734:
				case 735:
				case 737:
				case 738:
				case 739:
				case 740:
				case 741:
				case 742:
				case 744:
				case 745:
				case 746:
				case 747:
				case 748:
				case 749:
				case 750:
				case 751:
				case 752:
				case 753:
				case 754:
				case 755:
				case 756:
				case 757:
				case 758:
				case 759:
				case 760:
				case 761:
				case 762:
				case 763:
				case 764:
				case 765:
				case 766:
				case 767:
				case 768:
				case 769:
				case 770:
				case 771:
				case 772:
				case 773:
				case 775:
				case 776:
				case 777:
				case 778:
				case 779:
				case 780:
				case 781:
				case 782:
				case 783:
				case 784:
				case 786:
				case 787:
				case 788:
				case 790:
				case 799:
				case 801:
				case 802:
				case 803:
				case 804:
				case 805:
				case 806:
				case 807:
				case 808:
				case 811:
				case 812:
				case 813:
				case 814:
				case 835:
				case 836:
				case 844:
				case 845:
				case 846:
					{
					this.state = 638;
					this.search_condition_list();
					}
					break;
				case 74:
					{
					this.state = 639;
					this.match(MocaSqlParser.CURRENT);
					this.state = 640;
					this.match(MocaSqlParser.OF);
					this.state = 646;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 72, this._ctx) ) {
					case 1:
						{
						this.state = 642;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 71, this._ctx) ) {
						case 1:
							{
							this.state = 641;
							this.match(MocaSqlParser.GLOBAL);
							}
							break;
						}
						this.state = 644;
						this.cursor_name();
						}
						break;
					case 2:
						{
						this.state = 645;
						localctx._cursor_var = this.match(MocaSqlParser.LOCAL_ID);
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			this.state = 653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===132) {
				{
				this.state = 652;
				this.for_clause();
				}
			}

			this.state = 656;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===235) {
				{
				this.state = 655;
				this.option_clause();
				}
			}

			this.state = 659;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 658;
				this.match(MocaSqlParser.SEMI);
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
	public output_clause(): Output_clauseContext {
		let localctx: Output_clauseContext = new Output_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, MocaSqlParser.RULE_output_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 661;
			this.match(MocaSqlParser.OUTPUT);
			this.state = 662;
			this.output_dml_list_elem();
			this.state = 667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===838) {
				{
				{
				this.state = 663;
				this.match(MocaSqlParser.COMMA);
				this.state = 664;
				this.output_dml_list_elem();
				}
				}
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===164) {
				{
				this.state = 670;
				this.match(MocaSqlParser.INTO);
				this.state = 673;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 802:
					{
					this.state = 671;
					this.match(MocaSqlParser.LOCAL_ID);
					}
					break;
				case 31:
				case 39:
				case 81:
				case 113:
				case 119:
				case 129:
				case 130:
				case 133:
				case 159:
				case 171:
				case 188:
				case 189:
				case 226:
				case 240:
				case 252:
				case 253:
				case 260:
				case 262:
				case 264:
				case 281:
				case 282:
				case 288:
				case 289:
				case 296:
				case 308:
				case 317:
				case 321:
				case 323:
				case 328:
				case 330:
				case 333:
				case 341:
				case 362:
				case 381:
				case 382:
				case 383:
				case 384:
				case 385:
				case 386:
				case 387:
				case 388:
				case 389:
				case 390:
				case 391:
				case 392:
				case 393:
				case 394:
				case 395:
				case 396:
				case 397:
				case 398:
				case 399:
				case 400:
				case 401:
				case 402:
				case 403:
				case 404:
				case 405:
				case 406:
				case 407:
				case 408:
				case 409:
				case 410:
				case 411:
				case 412:
				case 413:
				case 414:
				case 415:
				case 416:
				case 417:
				case 418:
				case 419:
				case 420:
				case 421:
				case 422:
				case 423:
				case 424:
				case 425:
				case 426:
				case 427:
				case 428:
				case 429:
				case 430:
				case 431:
				case 432:
				case 433:
				case 434:
				case 435:
				case 436:
				case 437:
				case 438:
				case 439:
				case 440:
				case 441:
				case 442:
				case 443:
				case 444:
				case 445:
				case 446:
				case 447:
				case 448:
				case 449:
				case 450:
				case 451:
				case 452:
				case 453:
				case 454:
				case 455:
				case 456:
				case 457:
				case 458:
				case 459:
				case 460:
				case 461:
				case 462:
				case 463:
				case 464:
				case 465:
				case 466:
				case 467:
				case 468:
				case 469:
				case 470:
				case 471:
				case 472:
				case 473:
				case 474:
				case 475:
				case 476:
				case 477:
				case 478:
				case 479:
				case 480:
				case 481:
				case 482:
				case 483:
				case 484:
				case 486:
				case 487:
				case 488:
				case 489:
				case 490:
				case 491:
				case 492:
				case 493:
				case 494:
				case 495:
				case 496:
				case 497:
				case 498:
				case 499:
				case 500:
				case 501:
				case 502:
				case 503:
				case 504:
				case 505:
				case 506:
				case 507:
				case 508:
				case 509:
				case 510:
				case 511:
				case 512:
				case 513:
				case 514:
				case 515:
				case 516:
				case 517:
				case 518:
				case 519:
				case 520:
				case 521:
				case 522:
				case 523:
				case 524:
				case 525:
				case 526:
				case 527:
				case 528:
				case 529:
				case 530:
				case 531:
				case 532:
				case 533:
				case 534:
				case 535:
				case 536:
				case 537:
				case 538:
				case 539:
				case 541:
				case 542:
				case 543:
				case 544:
				case 545:
				case 546:
				case 547:
				case 548:
				case 551:
				case 552:
				case 553:
				case 554:
				case 555:
				case 556:
				case 557:
				case 558:
				case 559:
				case 560:
				case 561:
				case 562:
				case 563:
				case 564:
				case 565:
				case 566:
				case 567:
				case 568:
				case 569:
				case 570:
				case 571:
				case 572:
				case 573:
				case 574:
				case 575:
				case 576:
				case 577:
				case 578:
				case 579:
				case 580:
				case 581:
				case 582:
				case 583:
				case 584:
				case 585:
				case 586:
				case 587:
				case 588:
				case 589:
				case 590:
				case 591:
				case 592:
				case 593:
				case 594:
				case 595:
				case 596:
				case 597:
				case 598:
				case 599:
				case 600:
				case 601:
				case 602:
				case 603:
				case 604:
				case 605:
				case 606:
				case 607:
				case 608:
				case 609:
				case 610:
				case 611:
				case 612:
				case 613:
				case 614:
				case 615:
				case 616:
				case 617:
				case 618:
				case 619:
				case 620:
				case 621:
				case 622:
				case 623:
				case 624:
				case 625:
				case 626:
				case 627:
				case 628:
				case 629:
				case 630:
				case 631:
				case 632:
				case 633:
				case 634:
				case 636:
				case 637:
				case 638:
				case 639:
				case 640:
				case 641:
				case 642:
				case 643:
				case 644:
				case 645:
				case 646:
				case 647:
				case 648:
				case 649:
				case 650:
				case 651:
				case 652:
				case 653:
				case 654:
				case 655:
				case 656:
				case 657:
				case 658:
				case 659:
				case 660:
				case 661:
				case 662:
				case 663:
				case 664:
				case 665:
				case 666:
				case 667:
				case 668:
				case 669:
				case 670:
				case 671:
				case 672:
				case 673:
				case 674:
				case 675:
				case 676:
				case 677:
				case 678:
				case 679:
				case 680:
				case 681:
				case 682:
				case 683:
				case 684:
				case 685:
				case 686:
				case 687:
				case 688:
				case 689:
				case 690:
				case 691:
				case 692:
				case 693:
				case 694:
				case 695:
				case 696:
				case 697:
				case 698:
				case 699:
				case 700:
				case 701:
				case 702:
				case 703:
				case 704:
				case 705:
				case 706:
				case 707:
				case 708:
				case 709:
				case 710:
				case 711:
				case 712:
				case 713:
				case 714:
				case 715:
				case 716:
				case 717:
				case 718:
				case 719:
				case 720:
				case 721:
				case 722:
				case 723:
				case 724:
				case 725:
				case 726:
				case 727:
				case 728:
				case 729:
				case 730:
				case 731:
				case 732:
				case 733:
				case 734:
				case 735:
				case 737:
				case 738:
				case 739:
				case 740:
				case 741:
				case 742:
				case 744:
				case 745:
				case 746:
				case 747:
				case 748:
				case 749:
				case 750:
				case 751:
				case 752:
				case 753:
				case 754:
				case 755:
				case 756:
				case 757:
				case 758:
				case 759:
				case 760:
				case 761:
				case 762:
				case 763:
				case 764:
				case 765:
				case 766:
				case 767:
				case 768:
				case 769:
				case 770:
				case 771:
				case 772:
				case 773:
				case 775:
				case 776:
				case 777:
				case 778:
				case 779:
				case 780:
				case 781:
				case 782:
				case 783:
				case 784:
				case 786:
				case 787:
				case 788:
				case 790:
				case 799:
				case 801:
				case 808:
					{
					this.state = 672;
					this.table_name();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 679;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 675;
					this.match(MocaSqlParser.LR_BRACKET);
					this.state = 676;
					this.column_name_list();
					this.state = 677;
					this.match(MocaSqlParser.RR_BRACKET);
					}
					break;
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
	public output_dml_list_elem(): Output_dml_list_elemContext {
		let localctx: Output_dml_list_elemContext = new Output_dml_list_elemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, MocaSqlParser.RULE_output_dml_list_elem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 685;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 683;
				this.output_column_name();
				}
				break;
			case 2:
				{
				this.state = 684;
				this.expression(0);
				}
				break;
			}
			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15 || _la===39 || _la===81 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1610616833) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 201342977) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 811597845) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 169873409) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8229) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1084233599) !== 0) || _la===811) {
				{
				this.state = 687;
				this.as_column_alias();
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
	public output_column_name(): Output_column_nameContext {
		let localctx: Output_column_nameContext = new Output_column_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, MocaSqlParser.RULE_output_column_name);
		try {
			this.state = 701;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 31:
			case 39:
			case 81:
			case 113:
			case 119:
			case 129:
			case 130:
			case 133:
			case 159:
			case 171:
			case 188:
			case 189:
			case 226:
			case 240:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 288:
			case 289:
			case 296:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 362:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 799:
			case 801:
			case 808:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 693;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 84, this._ctx) ) {
				case 1:
					{
					this.state = 690;
					this.match(MocaSqlParser.DELETED);
					}
					break;
				case 2:
					{
					this.state = 691;
					this.match(MocaSqlParser.INSERTED);
					}
					break;
				case 3:
					{
					this.state = 692;
					this.table_name();
					}
					break;
				}
				this.state = 695;
				this.match(MocaSqlParser.DOT);
				this.state = 698;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 841:
					{
					this.state = 696;
					this.match(MocaSqlParser.STAR);
					}
					break;
				case 39:
				case 81:
				case 113:
				case 119:
				case 129:
				case 130:
				case 133:
				case 159:
				case 171:
				case 188:
				case 189:
				case 226:
				case 240:
				case 252:
				case 253:
				case 260:
				case 262:
				case 264:
				case 281:
				case 282:
				case 288:
				case 289:
				case 296:
				case 308:
				case 317:
				case 321:
				case 323:
				case 328:
				case 330:
				case 333:
				case 341:
				case 362:
				case 381:
				case 382:
				case 383:
				case 384:
				case 385:
				case 386:
				case 387:
				case 388:
				case 389:
				case 390:
				case 391:
				case 392:
				case 393:
				case 394:
				case 395:
				case 396:
				case 397:
				case 398:
				case 399:
				case 400:
				case 401:
				case 402:
				case 403:
				case 404:
				case 405:
				case 406:
				case 407:
				case 408:
				case 409:
				case 410:
				case 411:
				case 412:
				case 413:
				case 414:
				case 415:
				case 416:
				case 417:
				case 418:
				case 419:
				case 420:
				case 421:
				case 422:
				case 423:
				case 424:
				case 425:
				case 426:
				case 427:
				case 428:
				case 429:
				case 430:
				case 431:
				case 432:
				case 433:
				case 434:
				case 435:
				case 436:
				case 437:
				case 438:
				case 439:
				case 440:
				case 441:
				case 442:
				case 443:
				case 444:
				case 445:
				case 446:
				case 447:
				case 448:
				case 449:
				case 450:
				case 451:
				case 452:
				case 453:
				case 454:
				case 455:
				case 456:
				case 457:
				case 458:
				case 459:
				case 460:
				case 461:
				case 462:
				case 463:
				case 464:
				case 465:
				case 466:
				case 467:
				case 468:
				case 469:
				case 470:
				case 471:
				case 472:
				case 473:
				case 474:
				case 475:
				case 476:
				case 477:
				case 478:
				case 479:
				case 480:
				case 481:
				case 482:
				case 483:
				case 484:
				case 486:
				case 487:
				case 488:
				case 489:
				case 490:
				case 491:
				case 492:
				case 493:
				case 494:
				case 495:
				case 496:
				case 497:
				case 498:
				case 499:
				case 500:
				case 501:
				case 502:
				case 503:
				case 504:
				case 505:
				case 506:
				case 507:
				case 508:
				case 509:
				case 510:
				case 511:
				case 512:
				case 513:
				case 514:
				case 515:
				case 516:
				case 517:
				case 518:
				case 519:
				case 520:
				case 521:
				case 522:
				case 523:
				case 524:
				case 525:
				case 526:
				case 527:
				case 528:
				case 529:
				case 530:
				case 531:
				case 532:
				case 533:
				case 534:
				case 535:
				case 536:
				case 537:
				case 538:
				case 539:
				case 541:
				case 542:
				case 543:
				case 544:
				case 545:
				case 546:
				case 547:
				case 548:
				case 551:
				case 552:
				case 553:
				case 554:
				case 555:
				case 556:
				case 557:
				case 558:
				case 559:
				case 560:
				case 561:
				case 562:
				case 563:
				case 564:
				case 565:
				case 566:
				case 567:
				case 568:
				case 569:
				case 570:
				case 571:
				case 572:
				case 573:
				case 574:
				case 575:
				case 576:
				case 577:
				case 578:
				case 579:
				case 580:
				case 581:
				case 582:
				case 583:
				case 584:
				case 585:
				case 586:
				case 587:
				case 588:
				case 589:
				case 590:
				case 591:
				case 592:
				case 593:
				case 594:
				case 595:
				case 596:
				case 597:
				case 598:
				case 599:
				case 600:
				case 601:
				case 602:
				case 603:
				case 604:
				case 605:
				case 606:
				case 607:
				case 608:
				case 609:
				case 610:
				case 611:
				case 612:
				case 613:
				case 614:
				case 615:
				case 616:
				case 617:
				case 618:
				case 619:
				case 620:
				case 621:
				case 622:
				case 623:
				case 624:
				case 625:
				case 626:
				case 627:
				case 628:
				case 629:
				case 630:
				case 631:
				case 632:
				case 633:
				case 634:
				case 636:
				case 637:
				case 638:
				case 639:
				case 640:
				case 641:
				case 642:
				case 643:
				case 644:
				case 645:
				case 646:
				case 647:
				case 648:
				case 649:
				case 650:
				case 651:
				case 652:
				case 653:
				case 654:
				case 655:
				case 656:
				case 657:
				case 658:
				case 659:
				case 660:
				case 661:
				case 662:
				case 663:
				case 664:
				case 665:
				case 666:
				case 667:
				case 668:
				case 669:
				case 670:
				case 671:
				case 672:
				case 673:
				case 674:
				case 675:
				case 676:
				case 677:
				case 678:
				case 679:
				case 680:
				case 681:
				case 682:
				case 683:
				case 684:
				case 685:
				case 686:
				case 687:
				case 688:
				case 689:
				case 690:
				case 691:
				case 692:
				case 693:
				case 694:
				case 695:
				case 696:
				case 697:
				case 698:
				case 699:
				case 700:
				case 701:
				case 702:
				case 703:
				case 704:
				case 705:
				case 706:
				case 707:
				case 708:
				case 709:
				case 710:
				case 711:
				case 712:
				case 713:
				case 714:
				case 715:
				case 716:
				case 717:
				case 718:
				case 719:
				case 720:
				case 721:
				case 722:
				case 723:
				case 724:
				case 725:
				case 726:
				case 727:
				case 728:
				case 729:
				case 730:
				case 731:
				case 732:
				case 733:
				case 734:
				case 735:
				case 737:
				case 738:
				case 739:
				case 740:
				case 741:
				case 742:
				case 744:
				case 745:
				case 746:
				case 747:
				case 748:
				case 749:
				case 750:
				case 751:
				case 752:
				case 753:
				case 754:
				case 755:
				case 756:
				case 757:
				case 758:
				case 759:
				case 760:
				case 761:
				case 762:
				case 763:
				case 764:
				case 765:
				case 766:
				case 767:
				case 768:
				case 769:
				case 770:
				case 771:
				case 772:
				case 773:
				case 775:
				case 776:
				case 777:
				case 778:
				case 779:
				case 780:
				case 781:
				case 782:
				case 783:
				case 784:
				case 786:
				case 787:
				case 788:
				case 790:
				case 799:
				case 801:
				case 808:
					{
					this.state = 697;
					this.id();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 793:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 700;
				this.match(MocaSqlParser.DOLLAR_ACTION);
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
	public create_index(): Create_indexContext {
		let localctx: Create_indexContext = new Create_indexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, MocaSqlParser.RULE_create_index);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 703;
			this.match(MocaSqlParser.CREATE);
			this.state = 705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===356) {
				{
				this.state = 704;
				this.match(MocaSqlParser.UNIQUE);
				}
			}

			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52 || _la===211) {
				{
				this.state = 707;
				this.clustered();
				}
			}

			this.state = 710;
			this.match(MocaSqlParser.INDEX);
			this.state = 711;
			this.id();
			this.state = 712;
			this.match(MocaSqlParser.ON);
			this.state = 713;
			this.table_name_with_hint();
			this.state = 714;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 715;
			this.column_name_list_with_order();
			this.state = 716;
			this.match(MocaSqlParser.RR_BRACKET);
			this.state = 722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===155) {
				{
				this.state = 717;
				this.match(MocaSqlParser.INCLUDE);
				this.state = 718;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 719;
				this.column_name_list();
				this.state = 720;
				this.match(MocaSqlParser.RR_BRACKET);
				}
			}

			this.state = 726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===373) {
				{
				this.state = 724;
				this.match(MocaSqlParser.WHERE);
				this.state = 725;
				localctx._where = this.search_condition();
				}
			}

			this.state = 729;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 728;
				this.index_options();
				}
				break;
			}
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===228) {
				{
				this.state = 731;
				this.match(MocaSqlParser.ON);
				this.state = 732;
				this.id();
				}
			}

			this.state = 736;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 735;
				this.match(MocaSqlParser.SEMI);
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
	public create_table(): Create_tableContext {
		let localctx: Create_tableContext = new Create_tableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, MocaSqlParser.RULE_create_table);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 738;
			this.match(MocaSqlParser.CREATE);
			this.state = 739;
			this.match(MocaSqlParser.TABLE);
			this.state = 740;
			this.table_name();
			this.state = 741;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 742;
			this.column_def_table_constraints();
			this.state = 744;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===838) {
				{
				this.state = 743;
				this.match(MocaSqlParser.COMMA);
				}
			}

			this.state = 746;
			this.match(MocaSqlParser.RR_BRACKET);
			this.state = 749;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===568) {
				{
				this.state = 747;
				this.match(MocaSqlParser.LOCK);
				this.state = 748;
				this.simple_id();
				}
			}

			this.state = 754;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 96, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 751;
					this.table_options();
					}
					}
				}
				this.state = 756;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 96, this._ctx);
			}
			this.state = 760;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 757;
				this.match(MocaSqlParser.ON);
				this.state = 758;
				this.id();
				}
				break;
			case 2:
				{
				this.state = 759;
				this.match(MocaSqlParser.DEFAULT);
				}
				break;
			}
			this.state = 765;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 753:
				{
				this.state = 762;
				this.match(MocaSqlParser.TEXTIMAGE_ON);
				this.state = 763;
				this.id();
				}
				break;
			case 88:
				{
				this.state = 764;
				this.match(MocaSqlParser.DEFAULT);
				}
				break;
			case -1:
			case 9:
			case 72:
			case 91:
			case 102:
			case 161:
			case 304:
			case 360:
			case 376:
			case 836:
			case 839:
				break;
			default:
				break;
			}
			this.state = 768;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 767;
				this.match(MocaSqlParser.SEMI);
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
	public table_options(): Table_optionsContext {
		let localctx: Table_optionsContext = new Table_optionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, MocaSqlParser.RULE_table_options);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 770;
			this.match(MocaSqlParser.WITH);
			this.state = 790;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 836:
				{
				this.state = 771;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 772;
				this.index_option();
				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===838) {
					{
					{
					this.state = 773;
					this.match(MocaSqlParser.COMMA);
					this.state = 774;
					this.index_option();
					}
					}
					this.state = 779;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 780;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 39:
			case 81:
			case 113:
			case 119:
			case 129:
			case 130:
			case 133:
			case 159:
			case 171:
			case 188:
			case 189:
			case 226:
			case 240:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 288:
			case 289:
			case 296:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 362:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 808:
				{
				this.state = 782;
				this.index_option();
				this.state = 787;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===838) {
					{
					{
					this.state = 783;
					this.match(MocaSqlParser.COMMA);
					this.state = 784;
					this.index_option();
					}
					}
					this.state = 789;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public create_view(): Create_viewContext {
		let localctx: Create_viewContext = new Create_viewContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, MocaSqlParser.RULE_create_view);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 792;
			this.match(MocaSqlParser.CREATE);
			this.state = 793;
			this.match(MocaSqlParser.VIEW);
			this.state = 794;
			this.simple_name();
			this.state = 799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===836) {
				{
				this.state = 795;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 796;
				this.column_name_list();
				this.state = 797;
				this.match(MocaSqlParser.RR_BRACKET);
				}
			}

			this.state = 810;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===376) {
				{
				this.state = 801;
				this.match(MocaSqlParser.WITH);
				this.state = 802;
				this.view_attribute();
				this.state = 807;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===838) {
					{
					{
					this.state = 803;
					this.match(MocaSqlParser.COMMA);
					this.state = 804;
					this.view_attribute();
					}
					}
					this.state = 809;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 812;
			this.match(MocaSqlParser.AS);
			this.state = 813;
			this.select_statement();
			this.state = 817;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 814;
				this.match(MocaSqlParser.WITH);
				this.state = 815;
				this.match(MocaSqlParser.CHECK);
				this.state = 816;
				this.match(MocaSqlParser.OPTION);
				}
				break;
			}
			this.state = 820;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 819;
				this.match(MocaSqlParser.SEMI);
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
	public view_attribute(): View_attributeContext {
		let localctx: View_attributeContext = new View_attributeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, MocaSqlParser.RULE_view_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 822;
			_la = this._input.LA(1);
			if(!(_la===491 || _la===701 || _la===781)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public alter_table(): Alter_tableContext {
		let localctx: Alter_tableContext = new Alter_tableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, MocaSqlParser.RULE_alter_table);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 824;
			this.match(MocaSqlParser.ALTER);
			this.state = 825;
			this.match(MocaSqlParser.TABLE);
			this.state = 826;
			this.table_name();
			this.state = 870;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				{
				this.state = 827;
				this.match(MocaSqlParser.SET);
				this.state = 828;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 829;
				this.match(MocaSqlParser.LOCK_ESCALATION);
				this.state = 830;
				this.match(MocaSqlParser.EQUAL);
				this.state = 831;
				_la = this._input.LA(1);
				if(!(_la===338 || _la===407 || _la===479)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 832;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 2:
				{
				this.state = 833;
				this.match(MocaSqlParser.ADD);
				this.state = 834;
				this.column_def_table_constraint();
				}
				break;
			case 3:
				{
				this.state = 835;
				this.match(MocaSqlParser.ALTER);
				this.state = 836;
				this.match(MocaSqlParser.COLUMN);
				this.state = 837;
				this.column_definition();
				}
				break;
			case 4:
				{
				this.state = 838;
				this.match(MocaSqlParser.DROP);
				this.state = 839;
				this.match(MocaSqlParser.COLUMN);
				this.state = 840;
				this.id();
				}
				break;
			case 5:
				{
				this.state = 841;
				this.match(MocaSqlParser.DROP);
				this.state = 842;
				this.match(MocaSqlParser.CONSTRAINT);
				this.state = 843;
				localctx._constraint = this.id();
				}
				break;
			case 6:
				{
				this.state = 844;
				this.match(MocaSqlParser.WITH);
				this.state = 845;
				this.match(MocaSqlParser.CHECK);
				this.state = 846;
				this.match(MocaSqlParser.ADD);
				this.state = 847;
				this.match(MocaSqlParser.CONSTRAINT);
				this.state = 848;
				localctx._constraint = this.id();
				this.state = 849;
				this.match(MocaSqlParser.FOREIGN);
				this.state = 850;
				this.match(MocaSqlParser.KEY);
				this.state = 851;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 852;
				localctx._fk = this.column_name_list();
				this.state = 853;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 854;
				this.match(MocaSqlParser.REFERENCES);
				this.state = 855;
				this.table_name();
				this.state = 856;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 857;
				localctx._pk = this.column_name_list();
				this.state = 858;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 7:
				{
				this.state = 860;
				this.match(MocaSqlParser.CHECK);
				this.state = 861;
				this.match(MocaSqlParser.CONSTRAINT);
				this.state = 862;
				localctx._constraint = this.id();
				}
				break;
			case 8:
				{
				this.state = 863;
				_la = this._input.LA(1);
				if(!(_la===479 || _la===488)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 864;
				this.match(MocaSqlParser.TRIGGER);
				this.state = 866;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===39 || _la===81 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1610616833) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 201342977) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 811597845) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 169873409) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8229) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1084233599) !== 0)) {
					{
					this.state = 865;
					this.id();
					}
				}

				}
				break;
			case 9:
				{
				this.state = 868;
				this.match(MocaSqlParser.REBUILD);
				this.state = 869;
				this.table_options();
				}
				break;
			}
			this.state = 873;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				{
				this.state = 872;
				this.match(MocaSqlParser.SEMI);
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
	public host(): HostContext {
		let localctx: HostContext = new HostContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, MocaSqlParser.RULE_host);
		try {
			this.state = 885;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 875;
				this.id();
				this.state = 876;
				this.match(MocaSqlParser.DOT);
				this.state = 877;
				this.host();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 883;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 111, this._ctx) ) {
				case 1:
					{
					this.state = 879;
					this.id();
					this.state = 880;
					this.match(MocaSqlParser.DOT);
					}
					break;
				case 2:
					{
					this.state = 882;
					this.id();
					}
					break;
				}
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
	public drop_index(): Drop_indexContext {
		let localctx: Drop_indexContext = new Drop_indexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, MocaSqlParser.RULE_drop_index);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 887;
			this.match(MocaSqlParser.DROP);
			this.state = 888;
			this.match(MocaSqlParser.INDEX);
			this.state = 891;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===152) {
				{
				this.state = 889;
				this.match(MocaSqlParser.IF);
				this.state = 890;
				this.match(MocaSqlParser.EXISTS);
				}
			}

			this.state = 909;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 893;
				this.drop_relational_or_xml_or_spatial_index();
				this.state = 898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===838) {
					{
					{
					this.state = 894;
					this.match(MocaSqlParser.COMMA);
					this.state = 895;
					this.drop_relational_or_xml_or_spatial_index();
					}
					}
					this.state = 900;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				{
				this.state = 901;
				this.drop_backward_compatible_index();
				this.state = 906;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===838) {
					{
					{
					this.state = 902;
					this.match(MocaSqlParser.COMMA);
					this.state = 903;
					this.drop_backward_compatible_index();
					}
					}
					this.state = 908;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 912;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 911;
				this.match(MocaSqlParser.SEMI);
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
	public drop_relational_or_xml_or_spatial_index(): Drop_relational_or_xml_or_spatial_indexContext {
		let localctx: Drop_relational_or_xml_or_spatial_indexContext = new Drop_relational_or_xml_or_spatial_indexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, MocaSqlParser.RULE_drop_relational_or_xml_or_spatial_index);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 914;
			localctx._index_name = this.id();
			this.state = 915;
			this.match(MocaSqlParser.ON);
			this.state = 916;
			this.full_table_name();
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
	public drop_backward_compatible_index(): Drop_backward_compatible_indexContext {
		let localctx: Drop_backward_compatible_indexContext = new Drop_backward_compatible_indexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, MocaSqlParser.RULE_drop_backward_compatible_index);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 921;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 918;
				localctx._owner_name = this.id();
				this.state = 919;
				this.match(MocaSqlParser.DOT);
				}
				break;
			}
			this.state = 923;
			localctx._table_or_view_name = this.id();
			this.state = 924;
			this.match(MocaSqlParser.DOT);
			this.state = 925;
			localctx._index_name = this.id();
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
	public drop_table(): Drop_tableContext {
		let localctx: Drop_tableContext = new Drop_tableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, MocaSqlParser.RULE_drop_table);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 927;
			this.match(MocaSqlParser.DROP);
			this.state = 928;
			this.match(MocaSqlParser.TABLE);
			this.state = 931;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===152) {
				{
				this.state = 929;
				this.match(MocaSqlParser.IF);
				this.state = 930;
				this.match(MocaSqlParser.EXISTS);
				}
			}

			this.state = 933;
			this.table_name();
			this.state = 935;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				{
				this.state = 934;
				this.match(MocaSqlParser.SEMI);
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
	public drop_view(): Drop_viewContext {
		let localctx: Drop_viewContext = new Drop_viewContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, MocaSqlParser.RULE_drop_view);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 937;
			this.match(MocaSqlParser.DROP);
			this.state = 938;
			this.match(MocaSqlParser.VIEW);
			this.state = 941;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===152) {
				{
				this.state = 939;
				this.match(MocaSqlParser.IF);
				this.state = 940;
				this.match(MocaSqlParser.EXISTS);
				}
			}

			this.state = 943;
			this.simple_name();
			this.state = 948;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===838) {
				{
				{
				this.state = 944;
				this.match(MocaSqlParser.COMMA);
				this.state = 945;
				this.simple_name();
				}
				}
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 952;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 951;
				this.match(MocaSqlParser.SEMI);
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
	public rowset_function_limited(): Rowset_function_limitedContext {
		let localctx: Rowset_function_limitedContext = new Rowset_function_limitedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, MocaSqlParser.RULE_rowset_function_limited);
		try {
			this.state = 956;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 232:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 954;
				this.openquery();
				}
				break;
			case 231:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 955;
				this.opendatasource();
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
	public openquery(): OpenqueryContext {
		let localctx: OpenqueryContext = new OpenqueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, MocaSqlParser.RULE_openquery);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 958;
			this.match(MocaSqlParser.OPENQUERY);
			this.state = 959;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 960;
			localctx._linked_server = this.id();
			this.state = 961;
			this.match(MocaSqlParser.COMMA);
			this.state = 962;
			localctx._query = this.match(MocaSqlParser.STRING);
			this.state = 963;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public opendatasource(): OpendatasourceContext {
		let localctx: OpendatasourceContext = new OpendatasourceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, MocaSqlParser.RULE_opendatasource);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 965;
			this.match(MocaSqlParser.OPENDATASOURCE);
			this.state = 966;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 967;
			localctx._provider = this.match(MocaSqlParser.STRING);
			this.state = 968;
			this.match(MocaSqlParser.COMMA);
			this.state = 969;
			localctx._init = this.match(MocaSqlParser.STRING);
			this.state = 970;
			this.match(MocaSqlParser.RR_BRACKET);
			this.state = 971;
			this.match(MocaSqlParser.DOT);
			this.state = 973;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39 || _la===81 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1610616833) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 201342977) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 811597845) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 169873409) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8229) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1084233599) !== 0)) {
				{
				this.state = 972;
				localctx._database = this.id();
				}
			}

			this.state = 975;
			this.match(MocaSqlParser.DOT);
			this.state = 977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39 || _la===81 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1610616833) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 201342977) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 811597845) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 169873409) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8229) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1084233599) !== 0)) {
				{
				this.state = 976;
				localctx._scheme = this.id();
				}
			}

			this.state = 979;
			this.match(MocaSqlParser.DOT);
			{
			this.state = 980;
			localctx._table = this.id();
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
	public execute_statement(): Execute_statementContext {
		let localctx: Execute_statementContext = new Execute_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, MocaSqlParser.RULE_execute_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 982;
			this.match(MocaSqlParser.EXECUTE);
			this.state = 983;
			this.execute_body();
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
	public execute_body(): Execute_bodyContext {
		let localctx: Execute_bodyContext = new Execute_bodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, MocaSqlParser.RULE_execute_body);
		let _la: number;
		try {
			this.state = 1027;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 987;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
				case 1:
					{
					this.state = 985;
					localctx._return_status = this.match(MocaSqlParser.LOCAL_ID);
					this.state = 986;
					this.match(MocaSqlParser.EQUAL);
					}
					break;
				}
				this.state = 991;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 989;
					this.func_proc_name_server_database_schema();
					}
					break;
				case 2:
					{
					this.state = 990;
					this.expression(0);
					}
					break;
				}
				this.state = 1001;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===39 || _la===81 || _la===88 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1610616833) !== 0) || ((((_la - 222)) & ~0x1F) === 0 && ((1 << (_la - 222)) & 3221487633) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 811597845) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 169873409) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8229) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1637881727) !== 0) || ((((_la - 811)) & ~0x1F) === 0 && ((1 << (_la - 811)) & 16777231) !== 0) || _la===844 || _la===845) {
					{
					this.state = 993;
					this.execute_statement_arg();
					this.state = 998;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===838) {
						{
						{
						this.state = 994;
						this.match(MocaSqlParser.COMMA);
						this.state = 995;
						this.execute_statement_arg();
						}
						}
						this.state = 1000;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1004;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
				case 1:
					{
					this.state = 1003;
					this.match(MocaSqlParser.SEMI);
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1006;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1007;
				this.execute_var_string();
				this.state = 1012;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===844) {
					{
					{
					this.state = 1008;
					this.match(MocaSqlParser.PLUS);
					this.state = 1009;
					this.execute_var_string();
					}
					}
					this.state = 1014;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1015;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 1022;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15 || _la===365 || _la===570) {
					{
					this.state = 1017;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===15) {
						{
						this.state = 1016;
						this.match(MocaSqlParser.AS);
						}
					}

					this.state = 1019;
					_la = this._input.LA(1);
					if(!(_la===365 || _la===570)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1020;
					this.match(MocaSqlParser.EQUAL);
					this.state = 1021;
					this.match(MocaSqlParser.STRING);
					}
				}

				this.state = 1025;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 135, this._ctx) ) {
				case 1:
					{
					this.state = 1024;
					this.match(MocaSqlParser.SEMI);
					}
					break;
				}
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
	public execute_statement_arg(): Execute_statement_argContext {
		let localctx: Execute_statement_argContext = new Execute_statement_argContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, MocaSqlParser.RULE_execute_statement_arg);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1031;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1029;
				localctx._parameter = this.match(MocaSqlParser.LOCAL_ID);
				this.state = 1030;
				this.match(MocaSqlParser.EQUAL);
				}
				break;
			}
			this.state = 1042;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
			case 81:
			case 113:
			case 119:
			case 129:
			case 130:
			case 133:
			case 159:
			case 171:
			case 188:
			case 189:
			case 226:
			case 240:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 288:
			case 289:
			case 296:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 362:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 799:
			case 801:
			case 802:
			case 807:
			case 808:
			case 811:
			case 812:
			case 813:
			case 814:
			case 835:
			case 844:
			case 845:
				{
				this.state = 1035;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 802:
				case 807:
				case 811:
				case 812:
				case 813:
				case 814:
				case 835:
				case 844:
				case 845:
					{
					this.state = 1033;
					this.constant_LOCAL_ID();
					}
					break;
				case 39:
				case 81:
				case 113:
				case 119:
				case 129:
				case 130:
				case 133:
				case 159:
				case 171:
				case 188:
				case 189:
				case 226:
				case 240:
				case 252:
				case 253:
				case 260:
				case 262:
				case 264:
				case 281:
				case 282:
				case 288:
				case 289:
				case 296:
				case 308:
				case 317:
				case 321:
				case 323:
				case 328:
				case 330:
				case 333:
				case 341:
				case 362:
				case 381:
				case 382:
				case 383:
				case 384:
				case 385:
				case 386:
				case 387:
				case 388:
				case 389:
				case 390:
				case 391:
				case 392:
				case 393:
				case 394:
				case 395:
				case 396:
				case 397:
				case 398:
				case 399:
				case 400:
				case 401:
				case 402:
				case 403:
				case 404:
				case 405:
				case 406:
				case 407:
				case 408:
				case 409:
				case 410:
				case 411:
				case 412:
				case 413:
				case 414:
				case 415:
				case 416:
				case 417:
				case 418:
				case 419:
				case 420:
				case 421:
				case 422:
				case 423:
				case 424:
				case 425:
				case 426:
				case 427:
				case 428:
				case 429:
				case 430:
				case 431:
				case 432:
				case 433:
				case 434:
				case 435:
				case 436:
				case 437:
				case 438:
				case 439:
				case 440:
				case 441:
				case 442:
				case 443:
				case 444:
				case 445:
				case 446:
				case 447:
				case 448:
				case 449:
				case 450:
				case 451:
				case 452:
				case 453:
				case 454:
				case 455:
				case 456:
				case 457:
				case 458:
				case 459:
				case 460:
				case 461:
				case 462:
				case 463:
				case 464:
				case 465:
				case 466:
				case 467:
				case 468:
				case 469:
				case 470:
				case 471:
				case 472:
				case 473:
				case 474:
				case 475:
				case 476:
				case 477:
				case 478:
				case 479:
				case 480:
				case 481:
				case 482:
				case 483:
				case 484:
				case 486:
				case 487:
				case 488:
				case 489:
				case 490:
				case 491:
				case 492:
				case 493:
				case 494:
				case 495:
				case 496:
				case 497:
				case 498:
				case 499:
				case 500:
				case 501:
				case 502:
				case 503:
				case 504:
				case 505:
				case 506:
				case 507:
				case 508:
				case 509:
				case 510:
				case 511:
				case 512:
				case 513:
				case 514:
				case 515:
				case 516:
				case 517:
				case 518:
				case 519:
				case 520:
				case 521:
				case 522:
				case 523:
				case 524:
				case 525:
				case 526:
				case 527:
				case 528:
				case 529:
				case 530:
				case 531:
				case 532:
				case 533:
				case 534:
				case 535:
				case 536:
				case 537:
				case 538:
				case 539:
				case 541:
				case 542:
				case 543:
				case 544:
				case 545:
				case 546:
				case 547:
				case 548:
				case 551:
				case 552:
				case 553:
				case 554:
				case 555:
				case 556:
				case 557:
				case 558:
				case 559:
				case 560:
				case 561:
				case 562:
				case 563:
				case 564:
				case 565:
				case 566:
				case 567:
				case 568:
				case 569:
				case 570:
				case 571:
				case 572:
				case 573:
				case 574:
				case 575:
				case 576:
				case 577:
				case 578:
				case 579:
				case 580:
				case 581:
				case 582:
				case 583:
				case 584:
				case 585:
				case 586:
				case 587:
				case 588:
				case 589:
				case 590:
				case 591:
				case 592:
				case 593:
				case 594:
				case 595:
				case 596:
				case 597:
				case 598:
				case 599:
				case 600:
				case 601:
				case 602:
				case 603:
				case 604:
				case 605:
				case 606:
				case 607:
				case 608:
				case 609:
				case 610:
				case 611:
				case 612:
				case 613:
				case 614:
				case 615:
				case 616:
				case 617:
				case 618:
				case 619:
				case 620:
				case 621:
				case 622:
				case 623:
				case 624:
				case 625:
				case 626:
				case 627:
				case 628:
				case 629:
				case 630:
				case 631:
				case 632:
				case 633:
				case 634:
				case 636:
				case 637:
				case 638:
				case 639:
				case 640:
				case 641:
				case 642:
				case 643:
				case 644:
				case 645:
				case 646:
				case 647:
				case 648:
				case 649:
				case 650:
				case 651:
				case 652:
				case 653:
				case 654:
				case 655:
				case 656:
				case 657:
				case 658:
				case 659:
				case 660:
				case 661:
				case 662:
				case 663:
				case 664:
				case 665:
				case 666:
				case 667:
				case 668:
				case 669:
				case 670:
				case 671:
				case 672:
				case 673:
				case 674:
				case 675:
				case 676:
				case 677:
				case 678:
				case 679:
				case 680:
				case 681:
				case 682:
				case 683:
				case 684:
				case 685:
				case 686:
				case 687:
				case 688:
				case 689:
				case 690:
				case 691:
				case 692:
				case 693:
				case 694:
				case 695:
				case 696:
				case 697:
				case 698:
				case 699:
				case 700:
				case 701:
				case 702:
				case 703:
				case 704:
				case 705:
				case 706:
				case 707:
				case 708:
				case 709:
				case 710:
				case 711:
				case 712:
				case 713:
				case 714:
				case 715:
				case 716:
				case 717:
				case 718:
				case 719:
				case 720:
				case 721:
				case 722:
				case 723:
				case 724:
				case 725:
				case 726:
				case 727:
				case 728:
				case 729:
				case 730:
				case 731:
				case 732:
				case 733:
				case 734:
				case 735:
				case 737:
				case 738:
				case 739:
				case 740:
				case 741:
				case 742:
				case 744:
				case 745:
				case 746:
				case 747:
				case 748:
				case 749:
				case 750:
				case 751:
				case 752:
				case 753:
				case 754:
				case 755:
				case 756:
				case 757:
				case 758:
				case 759:
				case 760:
				case 761:
				case 762:
				case 763:
				case 764:
				case 765:
				case 766:
				case 767:
				case 768:
				case 769:
				case 770:
				case 771:
				case 772:
				case 773:
				case 775:
				case 776:
				case 777:
				case 778:
				case 779:
				case 780:
				case 781:
				case 782:
				case 783:
				case 784:
				case 786:
				case 787:
				case 788:
				case 790:
				case 799:
				case 801:
				case 808:
					{
					this.state = 1034;
					this.id();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1038;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===633 || _la===634) {
					{
					this.state = 1037;
					_la = this._input.LA(1);
					if(!(_la===633 || _la===634)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				}
				break;
			case 88:
				{
				this.state = 1040;
				this.match(MocaSqlParser.DEFAULT);
				}
				break;
			case 222:
				{
				this.state = 1041;
				this.match(MocaSqlParser.NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public execute_var_string(): Execute_var_stringContext {
		let localctx: Execute_var_stringContext = new Execute_var_stringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, MocaSqlParser.RULE_execute_var_string);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1044;
			_la = this._input.LA(1);
			if(!(_la===802 || _la===811)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public column_def_table_constraints(): Column_def_table_constraintsContext {
		let localctx: Column_def_table_constraintsContext = new Column_def_table_constraintsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, MocaSqlParser.RULE_column_def_table_constraints);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1046;
			this.column_def_table_constraint();
			this.state = 1053;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 142, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1048;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===838) {
						{
						this.state = 1047;
						this.match(MocaSqlParser.COMMA);
						}
					}

					this.state = 1050;
					this.column_def_table_constraint();
					}
					}
				}
				this.state = 1055;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 142, this._ctx);
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
	public column_def_table_constraint(): Column_def_table_constraintContext {
		let localctx: Column_def_table_constraintContext = new Column_def_table_constraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, MocaSqlParser.RULE_column_def_table_constraint);
		try {
			this.state = 1059;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1056;
				this.column_definition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1057;
				this.materialized_column_definition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1058;
				this.table_constraint();
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
	public column_definition(): Column_definitionContext {
		let localctx: Column_definitionContext = new Column_definitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, MocaSqlParser.RULE_column_definition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1061;
			this.id();
			this.state = 1065;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
			case 81:
			case 99:
			case 113:
			case 119:
			case 129:
			case 130:
			case 133:
			case 159:
			case 171:
			case 188:
			case 189:
			case 226:
			case 240:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 288:
			case 289:
			case 296:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 362:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 799:
			case 801:
			case 808:
				{
				this.state = 1062;
				this.data_type();
				}
				break;
			case 15:
				{
				this.state = 1063;
				this.match(MocaSqlParser.AS);
				this.state = 1064;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===54) {
				{
				this.state = 1067;
				this.match(MocaSqlParser.COLLATE);
				this.state = 1068;
				this.id();
				}
			}

			this.state = 1072;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1071;
				this.null_notnull();
				}
				break;
			}
			this.state = 1095;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				{
				this.state = 1076;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
					{
					this.state = 1074;
					this.match(MocaSqlParser.CONSTRAINT);
					this.state = 1075;
					localctx._constraint = this.id();
					}
				}

				this.state = 1078;
				this.null_or_default();
				this.state = 1080;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 148, this._ctx) ) {
				case 1:
					{
					this.state = 1079;
					this.null_or_default();
					}
					break;
				}
				}
				break;
			case 2:
				{
				this.state = 1082;
				this.match(MocaSqlParser.IDENTITY);
				this.state = 1088;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 149, this._ctx) ) {
				case 1:
					{
					this.state = 1083;
					this.match(MocaSqlParser.LR_BRACKET);
					this.state = 1084;
					localctx._seed = this.match(MocaSqlParser.DECIMAL);
					this.state = 1085;
					this.match(MocaSqlParser.COMMA);
					this.state = 1086;
					localctx._increment = this.match(MocaSqlParser.DECIMAL);
					this.state = 1087;
					this.match(MocaSqlParser.RR_BRACKET);
					}
					break;
				}
				this.state = 1093;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 150, this._ctx) ) {
				case 1:
					{
					this.state = 1090;
					this.match(MocaSqlParser.NOT);
					this.state = 1091;
					this.match(MocaSqlParser.FOR);
					this.state = 1092;
					this.match(MocaSqlParser.REPLICATION);
					}
					break;
				}
				}
				break;
			}
			this.state = 1098;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===290) {
				{
				this.state = 1097;
				this.match(MocaSqlParser.ROWGUIDCOL);
				}
			}

			this.state = 1103;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1100;
					this.column_constraint();
					}
					}
				}
				this.state = 1105;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
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
	public materialized_column_definition(): Materialized_column_definitionContext {
		let localctx: Materialized_column_definitionContext = new Materialized_column_definitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, MocaSqlParser.RULE_materialized_column_definition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1106;
			this.id();
			this.state = 1107;
			_la = this._input.LA(1);
			if(!(_la===15 || _la===58)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1108;
			this.expression(0);
			this.state = 1112;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				{
				this.state = 1109;
				this.match(MocaSqlParser.MATERIALIZED);
				}
				break;
			case 2:
				{
				this.state = 1110;
				this.match(MocaSqlParser.NOT);
				this.state = 1111;
				this.match(MocaSqlParser.MATERIALIZED);
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
	public column_constraint(): Column_constraintContext {
		let localctx: Column_constraintContext = new Column_constraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, MocaSqlParser.RULE_column_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 1114;
				this.match(MocaSqlParser.CONSTRAINT);
				this.state = 1115;
				localctx._constraint = this.id();
				}
			}

			this.state = 1155;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 255:
			case 356:
				{
				this.state = 1121;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 255:
					{
					this.state = 1118;
					this.match(MocaSqlParser.PRIMARY);
					this.state = 1119;
					this.match(MocaSqlParser.KEY);
					}
					break;
				case 356:
					{
					this.state = 1120;
					this.match(MocaSqlParser.UNIQUE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52 || _la===211) {
					{
					this.state = 1123;
					this.clustered();
					}
				}

				this.state = 1127;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 158, this._ctx) ) {
				case 1:
					{
					this.state = 1126;
					this.index_options();
					}
					break;
				}
				}
				break;
			case 45:
				{
				this.state = 1129;
				this.match(MocaSqlParser.CHECK);
				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1130;
					this.match(MocaSqlParser.NOT);
					this.state = 1131;
					this.match(MocaSqlParser.FOR);
					this.state = 1132;
					this.match(MocaSqlParser.REPLICATION);
					}
				}

				this.state = 1135;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1136;
				this.search_condition();
				this.state = 1137;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 135:
			case 269:
				{
				this.state = 1141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===135) {
					{
					this.state = 1139;
					this.match(MocaSqlParser.FOREIGN);
					this.state = 1140;
					this.match(MocaSqlParser.KEY);
					}
				}

				this.state = 1143;
				this.match(MocaSqlParser.REFERENCES);
				this.state = 1144;
				this.table_name();
				this.state = 1145;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1146;
				localctx._pk = this.column_name_list();
				this.state = 1147;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 1149;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
				case 1:
					{
					this.state = 1148;
					this.on_delete();
					}
					break;
				}
				this.state = 1152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===228) {
					{
					this.state = 1151;
					this.on_update();
					}
				}

				}
				break;
			case 219:
			case 222:
				{
				this.state = 1154;
				this.null_notnull();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public table_constraint(): Table_constraintContext {
		let localctx: Table_constraintContext = new Table_constraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, MocaSqlParser.RULE_table_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 1157;
				this.match(MocaSqlParser.CONSTRAINT);
				this.state = 1158;
				localctx._constraint = this.id();
				}
			}

			this.state = 1225;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 255:
			case 356:
				{
				this.state = 1164;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 255:
					{
					this.state = 1161;
					this.match(MocaSqlParser.PRIMARY);
					this.state = 1162;
					this.match(MocaSqlParser.KEY);
					}
					break;
				case 356:
					{
					this.state = 1163;
					this.match(MocaSqlParser.UNIQUE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52 || _la===211) {
					{
					this.state = 1166;
					this.clustered();
					}
				}

				this.state = 1169;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1170;
				this.column_name_list_with_order();
				this.state = 1171;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 1173;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 167, this._ctx) ) {
				case 1:
					{
					this.state = 1172;
					this.index_options();
					}
					break;
				}
				this.state = 1177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===228) {
					{
					this.state = 1175;
					this.match(MocaSqlParser.ON);
					this.state = 1176;
					this.id();
					}
				}

				}
				break;
			case 45:
				{
				this.state = 1179;
				this.match(MocaSqlParser.CHECK);
				this.state = 1183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1180;
					this.match(MocaSqlParser.NOT);
					this.state = 1181;
					this.match(MocaSqlParser.FOR);
					this.state = 1182;
					this.match(MocaSqlParser.REPLICATION);
					}
				}

				this.state = 1185;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1186;
				this.search_condition();
				this.state = 1187;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 88:
				{
				this.state = 1189;
				this.match(MocaSqlParser.DEFAULT);
				this.state = 1191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===836) {
					{
					this.state = 1190;
					this.match(MocaSqlParser.LR_BRACKET);
					}
				}

				this.state = 1197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 1197;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 811:
						{
						this.state = 1193;
						this.match(MocaSqlParser.STRING);
						}
						break;
					case 844:
						{
						this.state = 1194;
						this.match(MocaSqlParser.PLUS);
						}
						break;
					case 39:
					case 53:
					case 70:
					case 77:
					case 78:
					case 81:
					case 113:
					case 119:
					case 129:
					case 130:
					case 133:
					case 149:
					case 153:
					case 159:
					case 168:
					case 171:
					case 176:
					case 188:
					case 189:
					case 223:
					case 226:
					case 240:
					case 252:
					case 253:
					case 260:
					case 262:
					case 264:
					case 281:
					case 282:
					case 286:
					case 288:
					case 289:
					case 296:
					case 308:
					case 313:
					case 317:
					case 321:
					case 323:
					case 328:
					case 330:
					case 333:
					case 337:
					case 341:
					case 362:
					case 381:
					case 382:
					case 383:
					case 384:
					case 385:
					case 386:
					case 387:
					case 388:
					case 389:
					case 390:
					case 391:
					case 392:
					case 393:
					case 394:
					case 395:
					case 396:
					case 397:
					case 398:
					case 399:
					case 400:
					case 401:
					case 402:
					case 403:
					case 404:
					case 405:
					case 406:
					case 407:
					case 408:
					case 409:
					case 410:
					case 411:
					case 412:
					case 413:
					case 414:
					case 415:
					case 416:
					case 417:
					case 418:
					case 419:
					case 420:
					case 421:
					case 422:
					case 423:
					case 424:
					case 425:
					case 426:
					case 427:
					case 428:
					case 429:
					case 430:
					case 431:
					case 432:
					case 433:
					case 434:
					case 435:
					case 436:
					case 437:
					case 438:
					case 439:
					case 440:
					case 441:
					case 442:
					case 443:
					case 444:
					case 445:
					case 446:
					case 447:
					case 448:
					case 449:
					case 450:
					case 451:
					case 452:
					case 453:
					case 454:
					case 455:
					case 456:
					case 457:
					case 458:
					case 459:
					case 460:
					case 461:
					case 462:
					case 463:
					case 464:
					case 465:
					case 466:
					case 467:
					case 468:
					case 469:
					case 470:
					case 471:
					case 472:
					case 473:
					case 474:
					case 475:
					case 476:
					case 477:
					case 478:
					case 479:
					case 480:
					case 481:
					case 482:
					case 483:
					case 484:
					case 486:
					case 487:
					case 488:
					case 489:
					case 490:
					case 491:
					case 492:
					case 493:
					case 494:
					case 495:
					case 496:
					case 497:
					case 498:
					case 499:
					case 500:
					case 501:
					case 502:
					case 503:
					case 504:
					case 505:
					case 506:
					case 507:
					case 508:
					case 509:
					case 510:
					case 511:
					case 512:
					case 513:
					case 514:
					case 515:
					case 516:
					case 517:
					case 518:
					case 519:
					case 520:
					case 521:
					case 522:
					case 523:
					case 524:
					case 525:
					case 526:
					case 527:
					case 528:
					case 529:
					case 530:
					case 531:
					case 532:
					case 533:
					case 534:
					case 535:
					case 536:
					case 537:
					case 538:
					case 539:
					case 541:
					case 542:
					case 543:
					case 544:
					case 545:
					case 546:
					case 547:
					case 548:
					case 551:
					case 552:
					case 553:
					case 554:
					case 555:
					case 556:
					case 557:
					case 558:
					case 559:
					case 560:
					case 561:
					case 562:
					case 563:
					case 564:
					case 565:
					case 566:
					case 567:
					case 568:
					case 569:
					case 570:
					case 571:
					case 572:
					case 573:
					case 574:
					case 575:
					case 576:
					case 577:
					case 578:
					case 579:
					case 580:
					case 581:
					case 582:
					case 583:
					case 584:
					case 585:
					case 586:
					case 587:
					case 588:
					case 589:
					case 590:
					case 591:
					case 592:
					case 593:
					case 594:
					case 595:
					case 596:
					case 597:
					case 598:
					case 599:
					case 600:
					case 601:
					case 602:
					case 603:
					case 604:
					case 605:
					case 606:
					case 607:
					case 608:
					case 609:
					case 610:
					case 611:
					case 612:
					case 613:
					case 614:
					case 615:
					case 616:
					case 617:
					case 618:
					case 619:
					case 620:
					case 621:
					case 622:
					case 623:
					case 624:
					case 625:
					case 626:
					case 627:
					case 628:
					case 629:
					case 630:
					case 631:
					case 632:
					case 633:
					case 634:
					case 636:
					case 637:
					case 638:
					case 639:
					case 640:
					case 641:
					case 642:
					case 643:
					case 644:
					case 645:
					case 646:
					case 647:
					case 648:
					case 649:
					case 650:
					case 651:
					case 652:
					case 653:
					case 654:
					case 655:
					case 656:
					case 657:
					case 658:
					case 659:
					case 660:
					case 661:
					case 662:
					case 663:
					case 664:
					case 665:
					case 666:
					case 667:
					case 668:
					case 669:
					case 670:
					case 671:
					case 672:
					case 673:
					case 674:
					case 675:
					case 676:
					case 677:
					case 678:
					case 679:
					case 680:
					case 681:
					case 682:
					case 683:
					case 684:
					case 685:
					case 686:
					case 687:
					case 688:
					case 689:
					case 690:
					case 691:
					case 692:
					case 693:
					case 694:
					case 695:
					case 696:
					case 697:
					case 698:
					case 699:
					case 700:
					case 701:
					case 702:
					case 703:
					case 704:
					case 705:
					case 706:
					case 707:
					case 708:
					case 709:
					case 710:
					case 711:
					case 712:
					case 713:
					case 714:
					case 715:
					case 716:
					case 717:
					case 718:
					case 719:
					case 720:
					case 721:
					case 722:
					case 723:
					case 724:
					case 725:
					case 726:
					case 727:
					case 728:
					case 729:
					case 730:
					case 731:
					case 732:
					case 733:
					case 734:
					case 735:
					case 737:
					case 738:
					case 739:
					case 740:
					case 741:
					case 742:
					case 744:
					case 745:
					case 746:
					case 747:
					case 748:
					case 749:
					case 750:
					case 751:
					case 752:
					case 753:
					case 754:
					case 755:
					case 756:
					case 757:
					case 758:
					case 759:
					case 760:
					case 761:
					case 762:
					case 763:
					case 764:
					case 765:
					case 766:
					case 767:
					case 768:
					case 769:
					case 770:
					case 771:
					case 772:
					case 773:
					case 775:
					case 776:
					case 777:
					case 778:
					case 779:
					case 780:
					case 781:
					case 782:
					case 783:
					case 784:
					case 786:
					case 787:
					case 788:
					case 790:
					case 799:
					case 801:
					case 802:
					case 808:
						{
						this.state = 1195;
						this.function_call();
						}
						break;
					case 807:
						{
						this.state = 1196;
						this.match(MocaSqlParser.DECIMAL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 1199;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 2147500033) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 19) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & 138937361) !== 0) || _la===188 || _la===189 || ((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & 1610743817) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 878706709) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 170004481) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8741) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1637881727) !== 0) || _la===811 || _la===844);
				this.state = 1202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===837) {
					{
					this.state = 1201;
					this.match(MocaSqlParser.RR_BRACKET);
					}
				}

				this.state = 1204;
				this.match(MocaSqlParser.FOR);
				this.state = 1205;
				this.id();
				}
				break;
			case 135:
				{
				this.state = 1206;
				this.match(MocaSqlParser.FOREIGN);
				this.state = 1207;
				this.match(MocaSqlParser.KEY);
				this.state = 1208;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1209;
				localctx._fk = this.column_name_list();
				this.state = 1210;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 1211;
				this.match(MocaSqlParser.REFERENCES);
				this.state = 1212;
				this.table_name();
				this.state = 1217;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
				case 1:
					{
					this.state = 1213;
					this.match(MocaSqlParser.LR_BRACKET);
					this.state = 1214;
					localctx._pk = this.column_name_list();
					this.state = 1215;
					this.match(MocaSqlParser.RR_BRACKET);
					}
					break;
				}
				this.state = 1220;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
				case 1:
					{
					this.state = 1219;
					this.on_delete();
					}
					break;
				}
				this.state = 1223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===228) {
					{
					this.state = 1222;
					this.on_update();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public on_delete(): On_deleteContext {
		let localctx: On_deleteContext = new On_deleteContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, MocaSqlParser.RULE_on_delete);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1227;
			this.match(MocaSqlParser.ON);
			this.state = 1228;
			this.match(MocaSqlParser.DELETE);
			this.state = 1236;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1229;
				this.match(MocaSqlParser.NO);
				this.state = 1230;
				this.match(MocaSqlParser.ACTION);
				}
				break;
			case 2:
				{
				this.state = 1231;
				this.match(MocaSqlParser.CASCADE);
				}
				break;
			case 3:
				{
				this.state = 1232;
				this.match(MocaSqlParser.SET);
				this.state = 1233;
				this.match(MocaSqlParser.NULL);
				}
				break;
			case 4:
				{
				this.state = 1234;
				this.match(MocaSqlParser.SET);
				this.state = 1235;
				this.match(MocaSqlParser.DEFAULT);
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
	public on_update(): On_updateContext {
		let localctx: On_updateContext = new On_updateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, MocaSqlParser.RULE_on_update);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1238;
			this.match(MocaSqlParser.ON);
			this.state = 1239;
			this.match(MocaSqlParser.UPDATE);
			this.state = 1247;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				{
				this.state = 1240;
				this.match(MocaSqlParser.NO);
				this.state = 1241;
				this.match(MocaSqlParser.ACTION);
				}
				break;
			case 2:
				{
				this.state = 1242;
				this.match(MocaSqlParser.CASCADE);
				}
				break;
			case 3:
				{
				this.state = 1243;
				this.match(MocaSqlParser.SET);
				this.state = 1244;
				this.match(MocaSqlParser.NULL);
				}
				break;
			case 4:
				{
				this.state = 1245;
				this.match(MocaSqlParser.SET);
				this.state = 1246;
				this.match(MocaSqlParser.DEFAULT);
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
	public index_options(): Index_optionsContext {
		let localctx: Index_optionsContext = new Index_optionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, MocaSqlParser.RULE_index_options);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1249;
			this.match(MocaSqlParser.WITH);
			this.state = 1250;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 1251;
			this.index_option();
			this.state = 1256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===838) {
				{
				{
				this.state = 1252;
				this.match(MocaSqlParser.COMMA);
				this.state = 1253;
				this.index_option();
				}
				}
				this.state = 1258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1259;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public index_option(): Index_optionContext {
		let localctx: Index_optionContext = new Index_optionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, MocaSqlParser.RULE_index_option);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1261;
			this.simple_id();
			this.state = 1262;
			this.match(MocaSqlParser.EQUAL);
			this.state = 1266;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
			case 81:
			case 113:
			case 119:
			case 129:
			case 130:
			case 133:
			case 159:
			case 171:
			case 188:
			case 189:
			case 226:
			case 240:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 288:
			case 289:
			case 296:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 362:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 808:
				{
				this.state = 1263;
				this.simple_id();
				}
				break;
			case 225:
			case 228:
				{
				this.state = 1264;
				this.on_off();
				}
				break;
			case 807:
				{
				this.state = 1265;
				this.match(MocaSqlParser.DECIMAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public constant_LOCAL_ID(): Constant_LOCAL_IDContext {
		let localctx: Constant_LOCAL_IDContext = new Constant_LOCAL_IDContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, MocaSqlParser.RULE_constant_LOCAL_ID);
		try {
			this.state = 1270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 807:
			case 811:
			case 812:
			case 813:
			case 814:
			case 835:
			case 844:
			case 845:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1268;
				this.constant();
				}
				break;
			case 802:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1269;
				this.match(MocaSqlParser.LOCAL_ID);
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 96;
		this.enterRecursionRule(localctx, 96, MocaSqlParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1284;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				{
				this.state = 1273;
				this.moca_at_variable();
				}
				break;
			case 2:
				{
				this.state = 1274;
				this.moca_at_minus_variable();
				}
				break;
			case 3:
				{
				this.state = 1275;
				this.moca_environment_variable();
				}
				break;
			case 4:
				{
				this.state = 1276;
				this.moca_integration_variable();
				}
				break;
			case 5:
				{
				this.state = 1277;
				this.primitive_expression();
				}
				break;
			case 6:
				{
				this.state = 1278;
				this.function_call();
				}
				break;
			case 7:
				{
				this.state = 1279;
				this.case_expression();
				}
				break;
			case 8:
				{
				this.state = 1280;
				this.full_column_name();
				}
				break;
			case 9:
				{
				this.state = 1281;
				this.bracket_expression();
				}
				break;
			case 10:
				{
				this.state = 1282;
				this.unary_operator_expression();
				}
				break;
			case 11:
				{
				this.state = 1283;
				this.over_clause();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1305;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 185, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1303;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 184, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaSqlParser.RULE_expression);
						this.state = 1286;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1287;
						localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 841)) & ~0x1F) === 0 && ((1 << (_la - 841)) & 7) !== 0))) {
						    localctx._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1288;
						this.expression(6);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaSqlParser.RULE_expression);
						this.state = 1289;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1290;
						localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 830)) & ~0x1F) === 0 && ((1 << (_la - 830)) & 966657) !== 0))) {
						    localctx._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1291;
						this.expression(5);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaSqlParser.RULE_expression);
						this.state = 1292;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1293;
						this.comparison_operator();
						this.state = 1294;
						this.expression(4);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaSqlParser.RULE_expression);
						this.state = 1296;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1297;
						this.assignment_operator();
						this.state = 1298;
						this.expression(3);
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, MocaSqlParser.RULE_expression);
						this.state = 1300;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1301;
						this.match(MocaSqlParser.COLLATE);
						this.state = 1302;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 1307;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 185, this._ctx);
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
	public moca_at_variable(): Moca_at_variableContext {
		let localctx: Moca_at_variableContext = new Moca_at_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, MocaSqlParser.RULE_moca_at_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1308;
			this.match(MocaSqlParser.LOCAL_ID);
			this.state = 1311;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				{
				this.state = 1309;
				this.match(MocaSqlParser.DOT);
				this.state = 1310;
				this.simple_id();
				}
				break;
			}
			this.state = 1323;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1313;
				this.match(MocaSqlParser.COLON);
				this.state = 1314;
				this.simple_id();
				}
				}
				break;
			case 2:
				{
				this.state = 1321;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 187, this._ctx) ) {
				case 1:
					{
					{
					this.state = 1315;
					this.match(MocaSqlParser.SHARP);
					this.state = 1316;
					this.match(MocaSqlParser.KEEP);
					}
					}
					break;
				case 2:
					{
					{
					this.state = 1317;
					this.match(MocaSqlParser.SHARP);
					this.state = 1318;
					this.match(MocaSqlParser.MOCA_ONSTACK);
					}
					}
					break;
				case 3:
					{
					{
					this.state = 1319;
					this.match(MocaSqlParser.SHARP);
					this.state = 1320;
					this.match(MocaSqlParser.MOCA_IGNORE);
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
	public moca_environment_variable(): Moca_environment_variableContext {
		let localctx: Moca_environment_variableContext = new Moca_environment_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, MocaSqlParser.RULE_moca_environment_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1325;
			this.match(MocaSqlParser.MOCA_ENVIRONMENT_VARIABLE);
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
	public moca_at_minus_variable(): Moca_at_minus_variableContext {
		let localctx: Moca_at_minus_variableContext = new Moca_at_minus_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, MocaSqlParser.RULE_moca_at_minus_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1327;
			this.match(MocaSqlParser.MOCA_AT_MINUS_VARIABLE);
			this.state = 1330;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				{
				this.state = 1328;
				this.match(MocaSqlParser.DOT);
				this.state = 1329;
				this.simple_id();
				}
				break;
			}
			this.state = 1342;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1332;
				this.match(MocaSqlParser.COLON);
				this.state = 1333;
				this.simple_id();
				}
				}
				break;
			case 2:
				{
				this.state = 1340;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
				case 1:
					{
					{
					this.state = 1334;
					this.match(MocaSqlParser.SHARP);
					this.state = 1335;
					this.match(MocaSqlParser.KEEP);
					}
					}
					break;
				case 2:
					{
					{
					this.state = 1336;
					this.match(MocaSqlParser.SHARP);
					this.state = 1337;
					this.match(MocaSqlParser.MOCA_ONSTACK);
					}
					}
					break;
				case 3:
					{
					{
					this.state = 1338;
					this.match(MocaSqlParser.SHARP);
					this.state = 1339;
					this.match(MocaSqlParser.MOCA_IGNORE);
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
	public moca_at_plus_variable(): Moca_at_plus_variableContext {
		let localctx: Moca_at_plus_variableContext = new Moca_at_plus_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, MocaSqlParser.RULE_moca_at_plus_variable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1344;
			this.match(MocaSqlParser.MOCA_AT_PLUS_VARIABLE);
			this.state = 1347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===831) {
				{
				this.state = 1345;
				this.match(MocaSqlParser.DOT);
				this.state = 1346;
				this.simple_id();
				}
			}

			this.state = 1353;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 840:
				{
				{
				this.state = 1349;
				this.match(MocaSqlParser.COLON);
				this.state = 1350;
				this.simple_id();
				}
				}
				break;
			case 849:
				{
				{
				this.state = 1351;
				this.match(MocaSqlParser.BIT_XOR);
				this.state = 1352;
				this.simple_id();
				}
				}
				break;
			case -1:
			case 9:
			case 10:
			case 15:
			case 39:
			case 72:
			case 73:
			case 81:
			case 91:
			case 102:
			case 113:
			case 115:
			case 119:
			case 129:
			case 130:
			case 132:
			case 133:
			case 139:
			case 145:
			case 146:
			case 159:
			case 160:
			case 161:
			case 163:
			case 169:
			case 171:
			case 176:
			case 188:
			case 189:
			case 200:
			case 226:
			case 228:
			case 235:
			case 236:
			case 237:
			case 238:
			case 240:
			case 249:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 286:
			case 288:
			case 289:
			case 296:
			case 304:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 344:
			case 355:
			case 358:
			case 360:
			case 362:
			case 373:
			case 376:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 799:
			case 801:
			case 808:
			case 836:
			case 837:
			case 838:
			case 839:
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
	public moca_at_star(): Moca_at_starContext {
		let localctx: Moca_at_starContext = new Moca_at_starContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, MocaSqlParser.RULE_moca_at_star);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1355;
			this.match(MocaSqlParser.MOCA_AT_STAR);
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
	public moca_integration_variable(): Moca_integration_variableContext {
		let localctx: Moca_integration_variableContext = new Moca_integration_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, MocaSqlParser.RULE_moca_integration_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1357;
			this.match(MocaSqlParser.T__0);
			this.state = 1358;
			this.simple_id();
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
	public primitive_expression(): Primitive_expressionContext {
		let localctx: Primitive_expressionContext = new Primitive_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, MocaSqlParser.RULE_primitive_expression);
		try {
			this.state = 1364;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 88:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1360;
				this.match(MocaSqlParser.DEFAULT);
				}
				break;
			case 222:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1361;
				this.match(MocaSqlParser.NULL);
				}
				break;
			case 802:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1362;
				this.match(MocaSqlParser.LOCAL_ID);
				}
				break;
			case 807:
			case 811:
			case 812:
			case 813:
			case 814:
			case 835:
			case 844:
			case 845:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1363;
				this.constant();
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
	public case_expression(): Case_expressionContext {
		let localctx: Case_expressionContext = new Case_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, MocaSqlParser.RULE_case_expression);
		let _la: number;
		try {
			this.state = 1391;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1366;
				this.match(MocaSqlParser.CASE);
				this.state = 1367;
				localctx._caseExpr = this.expression(0);
				this.state = 1369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1368;
					this.switch_section();
					}
					}
					this.state = 1371;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===372);
				this.state = 1375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===105) {
					{
					this.state = 1373;
					this.match(MocaSqlParser.ELSE);
					this.state = 1374;
					localctx._elseExpr = this.expression(0);
					}
				}

				this.state = 1377;
				this.match(MocaSqlParser.END);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1379;
				this.match(MocaSqlParser.CASE);
				this.state = 1381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1380;
					this.switch_search_condition_section();
					}
					}
					this.state = 1383;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===372);
				this.state = 1387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===105) {
					{
					this.state = 1385;
					this.match(MocaSqlParser.ELSE);
					this.state = 1386;
					localctx._elseExpr = this.expression(0);
					}
				}

				this.state = 1389;
				this.match(MocaSqlParser.END);
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
	public unary_operator_expression(): Unary_operator_expressionContext {
		let localctx: Unary_operator_expressionContext = new Unary_operator_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, MocaSqlParser.RULE_unary_operator_expression);
		let _la: number;
		try {
			this.state = 1397;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 846:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1393;
				this.match(MocaSqlParser.BIT_NOT);
				this.state = 1394;
				this.expression(0);
				}
				break;
			case 844:
			case 845:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1395;
				localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===844 || _la===845)) {
				    localctx._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1396;
				this.expression(0);
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
	public bracket_expression(): Bracket_expressionContext {
		let localctx: Bracket_expressionContext = new Bracket_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, MocaSqlParser.RULE_bracket_expression);
		try {
			this.state = 1407;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 201, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1399;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1400;
				this.expression(0);
				this.state = 1401;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1403;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1404;
				this.subquery();
				this.state = 1405;
				this.match(MocaSqlParser.RR_BRACKET);
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
	public constant_expression(): Constant_expressionContext {
		let localctx: Constant_expressionContext = new Constant_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, MocaSqlParser.RULE_constant_expression);
		try {
			this.state = 1417;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1409;
				this.match(MocaSqlParser.NULL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1410;
				this.constant();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1411;
				this.function_call();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1412;
				this.match(MocaSqlParser.LOCAL_ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1413;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1414;
				this.constant_expression();
				this.state = 1415;
				this.match(MocaSqlParser.RR_BRACKET);
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
	public subquery(): SubqueryContext {
		let localctx: SubqueryContext = new SubqueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, MocaSqlParser.RULE_subquery);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1419;
			this.select_statement();
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
	public with_expression(): With_expressionContext {
		let localctx: With_expressionContext = new With_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, MocaSqlParser.RULE_with_expression);
		let _la: number;
		try {
			this.state = 1447;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1421;
				this.match(MocaSqlParser.WITH);
				this.state = 1424;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
				case 1:
					{
					this.state = 1422;
					this.match(MocaSqlParser.XMLNAMESPACES);
					this.state = 1423;
					this.match(MocaSqlParser.COMMA);
					}
					break;
				}
				this.state = 1426;
				this.common_table_expression();
				this.state = 1431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===838) {
					{
					{
					this.state = 1427;
					this.match(MocaSqlParser.COMMA);
					this.state = 1428;
					this.common_table_expression();
					}
					}
					this.state = 1433;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1434;
				this.match(MocaSqlParser.WITH);
				this.state = 1435;
				this.match(MocaSqlParser.BLOCKING_HIERARCHY);
				this.state = 1440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===836) {
					{
					this.state = 1436;
					this.match(MocaSqlParser.LR_BRACKET);
					this.state = 1437;
					this.full_column_name_list();
					this.state = 1438;
					this.match(MocaSqlParser.RR_BRACKET);
					}
				}

				this.state = 1442;
				this.match(MocaSqlParser.AS);
				this.state = 1443;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1444;
				this.select_statement();
				this.state = 1445;
				this.match(MocaSqlParser.RR_BRACKET);
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
	public common_table_expression(): Common_table_expressionContext {
		let localctx: Common_table_expressionContext = new Common_table_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, MocaSqlParser.RULE_common_table_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1449;
			localctx._expression_name = this.id();
			this.state = 1454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===836) {
				{
				this.state = 1450;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1451;
				this.column_name_list();
				this.state = 1452;
				this.match(MocaSqlParser.RR_BRACKET);
				}
			}

			this.state = 1456;
			this.match(MocaSqlParser.AS);
			this.state = 1457;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 1458;
			this.select_statement();
			this.state = 1459;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public update_elem(): Update_elemContext {
		let localctx: Update_elemContext = new Update_elemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, MocaSqlParser.RULE_update_elem);
		try {
			this.state = 1477;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1463;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 31:
				case 39:
				case 81:
				case 113:
				case 119:
				case 129:
				case 130:
				case 133:
				case 159:
				case 171:
				case 188:
				case 189:
				case 226:
				case 240:
				case 252:
				case 253:
				case 260:
				case 262:
				case 264:
				case 281:
				case 282:
				case 288:
				case 289:
				case 296:
				case 308:
				case 317:
				case 321:
				case 323:
				case 328:
				case 330:
				case 333:
				case 341:
				case 362:
				case 381:
				case 382:
				case 383:
				case 384:
				case 385:
				case 386:
				case 387:
				case 388:
				case 389:
				case 390:
				case 391:
				case 392:
				case 393:
				case 394:
				case 395:
				case 396:
				case 397:
				case 398:
				case 399:
				case 400:
				case 401:
				case 402:
				case 403:
				case 404:
				case 405:
				case 406:
				case 407:
				case 408:
				case 409:
				case 410:
				case 411:
				case 412:
				case 413:
				case 414:
				case 415:
				case 416:
				case 417:
				case 418:
				case 419:
				case 420:
				case 421:
				case 422:
				case 423:
				case 424:
				case 425:
				case 426:
				case 427:
				case 428:
				case 429:
				case 430:
				case 431:
				case 432:
				case 433:
				case 434:
				case 435:
				case 436:
				case 437:
				case 438:
				case 439:
				case 440:
				case 441:
				case 442:
				case 443:
				case 444:
				case 445:
				case 446:
				case 447:
				case 448:
				case 449:
				case 450:
				case 451:
				case 452:
				case 453:
				case 454:
				case 455:
				case 456:
				case 457:
				case 458:
				case 459:
				case 460:
				case 461:
				case 462:
				case 463:
				case 464:
				case 465:
				case 466:
				case 467:
				case 468:
				case 469:
				case 470:
				case 471:
				case 472:
				case 473:
				case 474:
				case 475:
				case 476:
				case 477:
				case 478:
				case 479:
				case 480:
				case 481:
				case 482:
				case 483:
				case 484:
				case 486:
				case 487:
				case 488:
				case 489:
				case 490:
				case 491:
				case 492:
				case 493:
				case 494:
				case 495:
				case 496:
				case 497:
				case 498:
				case 499:
				case 500:
				case 501:
				case 502:
				case 503:
				case 504:
				case 505:
				case 506:
				case 507:
				case 508:
				case 509:
				case 510:
				case 511:
				case 512:
				case 513:
				case 514:
				case 515:
				case 516:
				case 517:
				case 518:
				case 519:
				case 520:
				case 521:
				case 522:
				case 523:
				case 524:
				case 525:
				case 526:
				case 527:
				case 528:
				case 529:
				case 530:
				case 531:
				case 532:
				case 533:
				case 534:
				case 535:
				case 536:
				case 537:
				case 538:
				case 539:
				case 541:
				case 542:
				case 543:
				case 544:
				case 545:
				case 546:
				case 547:
				case 548:
				case 551:
				case 552:
				case 553:
				case 554:
				case 555:
				case 556:
				case 557:
				case 558:
				case 559:
				case 560:
				case 561:
				case 562:
				case 563:
				case 564:
				case 565:
				case 566:
				case 567:
				case 568:
				case 569:
				case 570:
				case 571:
				case 572:
				case 573:
				case 574:
				case 575:
				case 576:
				case 577:
				case 578:
				case 579:
				case 580:
				case 581:
				case 582:
				case 583:
				case 584:
				case 585:
				case 586:
				case 587:
				case 588:
				case 589:
				case 590:
				case 591:
				case 592:
				case 593:
				case 594:
				case 595:
				case 596:
				case 597:
				case 598:
				case 599:
				case 600:
				case 601:
				case 602:
				case 603:
				case 604:
				case 605:
				case 606:
				case 607:
				case 608:
				case 609:
				case 610:
				case 611:
				case 612:
				case 613:
				case 614:
				case 615:
				case 616:
				case 617:
				case 618:
				case 619:
				case 620:
				case 621:
				case 622:
				case 623:
				case 624:
				case 625:
				case 626:
				case 627:
				case 628:
				case 629:
				case 630:
				case 631:
				case 632:
				case 633:
				case 634:
				case 636:
				case 637:
				case 638:
				case 639:
				case 640:
				case 641:
				case 642:
				case 643:
				case 644:
				case 645:
				case 646:
				case 647:
				case 648:
				case 649:
				case 650:
				case 651:
				case 652:
				case 653:
				case 654:
				case 655:
				case 656:
				case 657:
				case 658:
				case 659:
				case 660:
				case 661:
				case 662:
				case 663:
				case 664:
				case 665:
				case 666:
				case 667:
				case 668:
				case 669:
				case 670:
				case 671:
				case 672:
				case 673:
				case 674:
				case 675:
				case 676:
				case 677:
				case 678:
				case 679:
				case 680:
				case 681:
				case 682:
				case 683:
				case 684:
				case 685:
				case 686:
				case 687:
				case 688:
				case 689:
				case 690:
				case 691:
				case 692:
				case 693:
				case 694:
				case 695:
				case 696:
				case 697:
				case 698:
				case 699:
				case 700:
				case 701:
				case 702:
				case 703:
				case 704:
				case 705:
				case 706:
				case 707:
				case 708:
				case 709:
				case 710:
				case 711:
				case 712:
				case 713:
				case 714:
				case 715:
				case 716:
				case 717:
				case 718:
				case 719:
				case 720:
				case 721:
				case 722:
				case 723:
				case 724:
				case 725:
				case 726:
				case 727:
				case 728:
				case 729:
				case 730:
				case 731:
				case 732:
				case 733:
				case 734:
				case 735:
				case 737:
				case 738:
				case 739:
				case 740:
				case 741:
				case 742:
				case 744:
				case 745:
				case 746:
				case 747:
				case 748:
				case 749:
				case 750:
				case 751:
				case 752:
				case 753:
				case 754:
				case 755:
				case 756:
				case 757:
				case 758:
				case 759:
				case 760:
				case 761:
				case 762:
				case 763:
				case 764:
				case 765:
				case 766:
				case 767:
				case 768:
				case 769:
				case 770:
				case 771:
				case 772:
				case 773:
				case 775:
				case 776:
				case 777:
				case 778:
				case 779:
				case 780:
				case 781:
				case 782:
				case 783:
				case 784:
				case 786:
				case 787:
				case 788:
				case 790:
				case 799:
				case 801:
				case 808:
					{
					this.state = 1461;
					this.full_column_name();
					}
					break;
				case 802:
					{
					this.state = 1462;
					this.match(MocaSqlParser.LOCAL_ID);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1467;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 815:
					{
					this.state = 1465;
					this.match(MocaSqlParser.EQUAL);
					}
					break;
				case 822:
				case 823:
				case 824:
				case 825:
				case 826:
				case 827:
				case 828:
				case 829:
					{
					this.state = 1466;
					this.assignment_operator();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1469;
				this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1470;
				localctx._udt_column_name = this.id();
				this.state = 1471;
				this.match(MocaSqlParser.DOT);
				this.state = 1472;
				localctx._method_name = this.id();
				this.state = 1473;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1474;
				this.expression_list();
				this.state = 1475;
				this.match(MocaSqlParser.RR_BRACKET);
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
	public search_condition_list(): Search_condition_listContext {
		let localctx: Search_condition_listContext = new Search_condition_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, MocaSqlParser.RULE_search_condition_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1479;
			this.search_condition();
			this.state = 1484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===838) {
				{
				{
				this.state = 1480;
				this.match(MocaSqlParser.COMMA);
				this.state = 1481;
				this.search_condition();
				}
				}
				this.state = 1486;
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
	public search_condition(): Search_conditionContext {
		let localctx: Search_conditionContext = new Search_conditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, MocaSqlParser.RULE_search_condition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1487;
			this.search_condition_and();
			this.state = 1492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===236) {
				{
				{
				this.state = 1488;
				this.match(MocaSqlParser.OR);
				this.state = 1489;
				this.search_condition_and();
				}
				}
				this.state = 1494;
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
	public search_condition_and(): Search_condition_andContext {
		let localctx: Search_condition_andContext = new Search_condition_andContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, MocaSqlParser.RULE_search_condition_and);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1495;
			this.search_condition_not();
			this.state = 1500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 1496;
				this.match(MocaSqlParser.AND);
				this.state = 1497;
				this.search_condition_not();
				}
				}
				this.state = 1502;
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
	public search_condition_not(): Search_condition_notContext {
		let localctx: Search_condition_notContext = new Search_condition_notContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, MocaSqlParser.RULE_search_condition_not);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 1503;
				this.match(MocaSqlParser.NOT);
				}
			}

			this.state = 1506;
			this.predicate();
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
	public predicate(): PredicateContext {
		let localctx: PredicateContext = new PredicateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, MocaSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1579;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1508;
				this.match(MocaSqlParser.EXISTS);
				this.state = 1509;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1510;
				this.subquery();
				this.state = 1511;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1513;
				this.expression(0);
				this.state = 1514;
				this.comparison_operator();
				this.state = 1515;
				this.expression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1517;
				this.expression(0);
				this.state = 1518;
				this.comparison_operator();
				this.state = 1519;
				_la = this._input.LA(1);
				if(!(_la===5 || _la===12 || _la===320)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1520;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1521;
				this.subquery();
				this.state = 1522;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1524;
				this.expression(0);
				this.state = 1526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1525;
					this.match(MocaSqlParser.NOT);
					}
				}

				this.state = 1528;
				this.match(MocaSqlParser.BETWEEN);
				this.state = 1529;
				this.expression(0);
				this.state = 1530;
				this.match(MocaSqlParser.AND);
				this.state = 1531;
				this.expression(0);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1533;
				this.expression(0);
				this.state = 1535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1534;
					this.match(MocaSqlParser.NOT);
					}
				}

				this.state = 1537;
				this.match(MocaSqlParser.IN);
				this.state = 1538;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1541;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
				case 1:
					{
					this.state = 1539;
					this.subquery();
					}
					break;
				case 2:
					{
					this.state = 1540;
					this.expression_list();
					}
					break;
				}
				this.state = 1543;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1545;
				this.expression(0);
				this.state = 1547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===219) {
					{
					this.state = 1546;
					this.match(MocaSqlParser.NOT);
					}
				}

				this.state = 1549;
				this.match(MocaSqlParser.LIKE);
				this.state = 1550;
				this.expression(0);
				this.state = 1553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===110) {
					{
					this.state = 1551;
					this.match(MocaSqlParser.ESCAPE);
					this.state = 1552;
					this.expression(0);
					}
				}

				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1555;
				this.expression(0);
				this.state = 1556;
				this.match(MocaSqlParser.IS);
				this.state = 1557;
				this.null_notnull();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1559;
				this.moca_at_plus_variable();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1560;
				this.moca_at_star();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				{
				this.state = 1561;
				this.match(MocaSqlParser.LOCAL_ID);
				this.state = 1564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===831) {
					{
					this.state = 1562;
					this.match(MocaSqlParser.DOT);
					this.state = 1563;
					this.simple_id();
					}
				}

				this.state = 1566;
				this.match(MocaSqlParser.COLON);
				this.state = 1567;
				this.match(MocaSqlParser.RAW);
				}
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				{
				this.state = 1568;
				this.match(MocaSqlParser.MOCA_AT_MINUS_VARIABLE);
				this.state = 1571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===831) {
					{
					this.state = 1569;
					this.match(MocaSqlParser.DOT);
					this.state = 1570;
					this.simple_id();
					}
				}

				this.state = 1573;
				this.match(MocaSqlParser.COLON);
				this.state = 1574;
				this.match(MocaSqlParser.RAW);
				}
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1575;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1576;
				this.search_condition();
				this.state = 1577;
				this.match(MocaSqlParser.RR_BRACKET);
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
	public query_expression(): Query_expressionContext {
		let localctx: Query_expressionContext = new Query_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, MocaSqlParser.RULE_query_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1586;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 304:
				{
				this.state = 1581;
				this.query_specification();
				}
				break;
			case 836:
				{
				this.state = 1582;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1583;
				this.query_expression();
				this.state = 1584;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1591;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 224, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1588;
					this.sql_union();
					}
					}
				}
				this.state = 1593;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 224, this._ctx);
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
	public sql_union(): Sql_unionContext {
		let localctx: Sql_unionContext = new Sql_unionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, MocaSqlParser.RULE_sql_union);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1600;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 355:
				{
				this.state = 1594;
				this.match(MocaSqlParser.UNION);
				this.state = 1596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===5) {
					{
					this.state = 1595;
					this.match(MocaSqlParser.ALL);
					}
				}

				}
				break;
			case 115:
				{
				this.state = 1598;
				this.match(MocaSqlParser.EXCEPT);
				}
				break;
			case 163:
				{
				this.state = 1599;
				this.match(MocaSqlParser.INTERSECT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1607;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 304:
				{
				this.state = 1602;
				this.query_specification();
				}
				break;
			case 836:
				{
				{
				this.state = 1603;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1604;
				this.query_expression();
				this.state = 1605;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public query_specification(): Query_specificationContext {
		let localctx: Query_specificationContext = new Query_specificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, MocaSqlParser.RULE_query_specification);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1609;
			this.match(MocaSqlParser.SELECT);
			this.state = 1611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5 || _la===97) {
				{
				this.state = 1610;
				_la = this._input.LA(1);
				if(!(_la===5 || _la===97)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===346) {
				{
				this.state = 1613;
				this.top_clause();
				}
			}

			this.state = 1616;
			this.select_list();
			this.state = 1619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===164) {
				{
				this.state = 1617;
				this.match(MocaSqlParser.INTO);
				this.state = 1618;
				this.table_name();
				}
			}

			this.state = 1623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===138) {
				{
				this.state = 1621;
				this.match(MocaSqlParser.FROM);
				this.state = 1622;
				this.table_sources();
				}
			}

			this.state = 1627;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
			case 1:
				{
				this.state = 1625;
				this.match(MocaSqlParser.WHERE);
				this.state = 1626;
				localctx._where = this.search_condition();
				}
				break;
			}
			this.state = 1642;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
			case 1:
				{
				this.state = 1629;
				this.match(MocaSqlParser.GROUP);
				this.state = 1630;
				this.match(MocaSqlParser.BY);
				this.state = 1632;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===5) {
					{
					this.state = 1631;
					this.match(MocaSqlParser.ALL);
					}
				}

				this.state = 1634;
				this.group_by_item();
				this.state = 1639;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 234, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1635;
						this.match(MocaSqlParser.COMMA);
						this.state = 1636;
						this.group_by_item();
						}
						}
					}
					this.state = 1641;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 234, this._ctx);
				}
				}
				break;
			}
			this.state = 1646;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 236, this._ctx) ) {
			case 1:
				{
				this.state = 1644;
				this.match(MocaSqlParser.HAVING);
				this.state = 1645;
				localctx._having = this.search_condition();
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
	public top_clause(): Top_clauseContext {
		let localctx: Top_clauseContext = new Top_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, MocaSqlParser.RULE_top_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1648;
			this.match(MocaSqlParser.TOP);
			this.state = 1651;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				{
				this.state = 1649;
				this.top_percent();
				}
				break;
			case 2:
				{
				this.state = 1650;
				this.top_count();
				}
				break;
			}
			this.state = 1655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===376) {
				{
				this.state = 1653;
				this.match(MocaSqlParser.WITH);
				this.state = 1654;
				this.match(MocaSqlParser.TIES);
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
	public top_percent(): Top_percentContext {
		let localctx: Top_percentContext = new Top_percentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, MocaSqlParser.RULE_top_percent);
		let _la: number;
		try {
			this.state = 1664;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 813:
			case 814:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1657;
				_la = this._input.LA(1);
				if(!(_la===813 || _la===814)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1658;
				this.match(MocaSqlParser.PERCENT);
				}
				break;
			case 836:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1659;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1660;
				this.expression(0);
				this.state = 1661;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 1662;
				this.match(MocaSqlParser.PERCENT);
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
	public top_count(): Top_countContext {
		let localctx: Top_countContext = new Top_countContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, MocaSqlParser.RULE_top_count);
		try {
			this.state = 1671;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 807:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1666;
				this.match(MocaSqlParser.DECIMAL);
				}
				break;
			case 836:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1667;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1668;
				this.expression(0);
				this.state = 1669;
				this.match(MocaSqlParser.RR_BRACKET);
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
	public order_by_clause(): Order_by_clauseContext {
		let localctx: Order_by_clauseContext = new Order_by_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, MocaSqlParser.RULE_order_by_clause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1673;
			this.match(MocaSqlParser.ORDER);
			this.state = 1674;
			this.match(MocaSqlParser.BY);
			this.state = 1675;
			this.order_by_expression();
			this.state = 1680;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1676;
					this.match(MocaSqlParser.COMMA);
					this.state = 1677;
					this.order_by_expression();
					}
					}
				}
				this.state = 1682;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
			}
			this.state = 1694;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
			case 1:
				{
				this.state = 1683;
				this.match(MocaSqlParser.OFFSET);
				this.state = 1684;
				this.expression(0);
				this.state = 1685;
				_la = this._input.LA(1);
				if(!(_la===696 || _la===699)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===127) {
					{
					this.state = 1686;
					this.match(MocaSqlParser.FETCH);
					this.state = 1687;
					_la = this._input.LA(1);
					if(!(_la===511 || _la===609)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1688;
					this.expression(0);
					this.state = 1689;
					_la = this._input.LA(1);
					if(!(_la===696 || _la===699)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1690;
					this.match(MocaSqlParser.ONLY);
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
	public for_clause(): For_clauseContext {
		let localctx: For_clauseContext = new For_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, MocaSqlParser.RULE_for_clause);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1784;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 260, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1696;
				this.match(MocaSqlParser.FOR);
				this.state = 1697;
				this.match(MocaSqlParser.BROWSE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1698;
				this.match(MocaSqlParser.FOR);
				this.state = 1699;
				this.match(MocaSqlParser.XML);
				this.state = 1707;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 264:
					{
					this.state = 1700;
					this.match(MocaSqlParser.RAW);
					this.state = 1704;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 244, this._ctx) ) {
					case 1:
						{
						this.state = 1701;
						this.match(MocaSqlParser.LR_BRACKET);
						this.state = 1702;
						this.match(MocaSqlParser.STRING);
						this.state = 1703;
						this.match(MocaSqlParser.RR_BRACKET);
						}
						break;
					}
					}
					break;
				case 407:
					{
					this.state = 1706;
					this.match(MocaSqlParser.AUTO);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1712;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1709;
						this.xml_common_directives();
						}
						}
					}
					this.state = 1714;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
				}
				this.state = 1725;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 249, this._ctx) ) {
				case 1:
					{
					this.state = 1715;
					this.match(MocaSqlParser.COMMA);
					this.state = 1723;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 789:
						{
						this.state = 1716;
						this.match(MocaSqlParser.XMLDATA);
						}
						break;
					case 791:
						{
						this.state = 1717;
						this.match(MocaSqlParser.XMLSCHEMA);
						this.state = 1721;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
						case 1:
							{
							this.state = 1718;
							this.match(MocaSqlParser.LR_BRACKET);
							this.state = 1719;
							this.match(MocaSqlParser.STRING);
							this.state = 1720;
							this.match(MocaSqlParser.RR_BRACKET);
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				}
				this.state = 1730;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 250, this._ctx) ) {
				case 1:
					{
					this.state = 1727;
					this.match(MocaSqlParser.COMMA);
					this.state = 1728;
					this.match(MocaSqlParser.ELEMENTS);
					this.state = 1729;
					_la = this._input.LA(1);
					if(!(_la===2 || _la===792)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1732;
				this.match(MocaSqlParser.FOR);
				this.state = 1733;
				this.match(MocaSqlParser.XML);
				this.state = 1734;
				this.match(MocaSqlParser.EXPLICIT);
				this.state = 1738;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1735;
						this.xml_common_directives();
						}
						}
					}
					this.state = 1740;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
				}
				this.state = 1743;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
				case 1:
					{
					this.state = 1741;
					this.match(MocaSqlParser.COMMA);
					this.state = 1742;
					this.match(MocaSqlParser.XMLDATA);
					}
					break;
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1745;
				this.match(MocaSqlParser.FOR);
				this.state = 1746;
				this.match(MocaSqlParser.XML);
				this.state = 1747;
				this.match(MocaSqlParser.PATH);
				this.state = 1751;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 253, this._ctx) ) {
				case 1:
					{
					this.state = 1748;
					this.match(MocaSqlParser.LR_BRACKET);
					this.state = 1749;
					this.match(MocaSqlParser.STRING);
					this.state = 1750;
					this.match(MocaSqlParser.RR_BRACKET);
					}
					break;
				}
				this.state = 1756;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 254, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1753;
						this.xml_common_directives();
						}
						}
					}
					this.state = 1758;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 254, this._ctx);
				}
				this.state = 1762;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
				case 1:
					{
					this.state = 1759;
					this.match(MocaSqlParser.COMMA);
					this.state = 1760;
					this.match(MocaSqlParser.ELEMENTS);
					this.state = 1761;
					_la = this._input.LA(1);
					if(!(_la===2 || _la===792)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1764;
				this.match(MocaSqlParser.FOR);
				this.state = 1765;
				this.match(MocaSqlParser.JSON);
				this.state = 1766;
				_la = this._input.LA(1);
				if(!(_la===407 || _la===642)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1774;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 257, this._ctx) ) {
				case 1:
					{
					this.state = 1767;
					this.match(MocaSqlParser.COMMA);
					this.state = 1768;
					this.match(MocaSqlParser.ROOT);
					this.state = 1772;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 256, this._ctx) ) {
					case 1:
						{
						this.state = 1769;
						this.match(MocaSqlParser.LR_BRACKET);
						this.state = 1770;
						this.match(MocaSqlParser.STRING);
						this.state = 1771;
						this.match(MocaSqlParser.RR_BRACKET);
						}
						break;
					}
					}
					break;
				}
				this.state = 1778;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 258, this._ctx) ) {
				case 1:
					{
					this.state = 1776;
					this.match(MocaSqlParser.COMMA);
					this.state = 1777;
					this.match(MocaSqlParser.INCLUDE_NULL_VALUES);
					}
					break;
				}
				this.state = 1782;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 259, this._ctx) ) {
				case 1:
					{
					this.state = 1780;
					this.match(MocaSqlParser.COMMA);
					this.state = 1781;
					this.match(MocaSqlParser.WITHOUT_ARRAY_WRAPPER);
					}
					break;
				}
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
	public xml_common_directives(): Xml_common_directivesContext {
		let localctx: Xml_common_directivesContext = new Xml_common_directivesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, MocaSqlParser.RULE_xml_common_directives);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1786;
			this.match(MocaSqlParser.COMMA);
			this.state = 1795;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 419:
				{
				this.state = 1787;
				this.match(MocaSqlParser.BINARY_BASE64);
				}
				break;
			case 768:
				{
				this.state = 1788;
				this.match(MocaSqlParser.TYPE);
				}
				break;
			case 694:
				{
				this.state = 1789;
				this.match(MocaSqlParser.ROOT);
				this.state = 1793;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 261, this._ctx) ) {
				case 1:
					{
					this.state = 1790;
					this.match(MocaSqlParser.LR_BRACKET);
					this.state = 1791;
					this.match(MocaSqlParser.STRING);
					this.state = 1792;
					this.match(MocaSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public order_by_expression(): Order_by_expressionContext {
		let localctx: Order_by_expressionContext = new Order_by_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, MocaSqlParser.RULE_order_by_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1797;
			this.expression(0);
			this.state = 1799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16 || _la===93) {
				{
				this.state = 1798;
				_la = this._input.LA(1);
				if(!(_la===16 || _la===93)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
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
	public group_by_item(): Group_by_itemContext {
		let localctx: Group_by_itemContext = new Group_by_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, MocaSqlParser.RULE_group_by_item);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1801;
			this.expression(0);
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
	public option_clause(): Option_clauseContext {
		let localctx: Option_clauseContext = new Option_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, MocaSqlParser.RULE_option_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1803;
			this.match(MocaSqlParser.OPTION);
			this.state = 1804;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 1805;
			this.option();
			this.state = 1810;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===838) {
				{
				{
				this.state = 1806;
				this.match(MocaSqlParser.COMMA);
				this.state = 1807;
				this.option();
				}
				}
				this.state = 1812;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1813;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public option(): OptionContext {
		let localctx: OptionContext = new OptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, MocaSqlParser.RULE_option);
		let _la: number;
		try {
			this.state = 1860;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 266, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1815;
				this.match(MocaSqlParser.FAST);
				this.state = 1816;
				localctx._number_rows = this.match(MocaSqlParser.DECIMAL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1817;
				_la = this._input.LA(1);
				if(!(_la===237 || _la===530)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1818;
				this.match(MocaSqlParser.GROUP);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1819;
				_la = this._input.LA(1);
				if(!(_la===200 || _la===440 || _la===530)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1820;
				this.match(MocaSqlParser.UNION);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1821;
				_la = this._input.LA(1);
				if(!(_la===200 || _la===530 || _la===571)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1822;
				this.match(MocaSqlParser.JOIN);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1823;
				this.match(MocaSqlParser.EXPAND);
				this.state = 1824;
				this.match(MocaSqlParser.VIEWS);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1825;
				this.match(MocaSqlParser.FORCE);
				this.state = 1826;
				this.match(MocaSqlParser.ORDER);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1827;
				this.match(MocaSqlParser.IGNORE_NONCLUSTERED_COLUMNSTORE_INDEX);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1828;
				this.match(MocaSqlParser.KEEP);
				this.state = 1829;
				this.match(MocaSqlParser.PLAN);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1830;
				this.match(MocaSqlParser.KEEPFIXED);
				this.state = 1831;
				this.match(MocaSqlParser.PLAN);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1832;
				this.match(MocaSqlParser.MAXDOP);
				this.state = 1833;
				localctx._number_of_processors = this.match(MocaSqlParser.DECIMAL);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1834;
				this.match(MocaSqlParser.MAXRECURSION);
				this.state = 1835;
				localctx._number_recursion = this.match(MocaSqlParser.DECIMAL);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1836;
				this.match(MocaSqlParser.OPTIMIZE);
				this.state = 1837;
				this.match(MocaSqlParser.FOR);
				this.state = 1838;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1839;
				this.optimize_for_arg();
				this.state = 1844;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===838) {
					{
					{
					this.state = 1840;
					this.match(MocaSqlParser.COMMA);
					this.state = 1841;
					this.optimize_for_arg();
					}
					}
					this.state = 1846;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1847;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 1849;
				this.match(MocaSqlParser.OPTIMIZE);
				this.state = 1850;
				this.match(MocaSqlParser.FOR);
				this.state = 1851;
				this.match(MocaSqlParser.UNKNOWN);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 1852;
				this.match(MocaSqlParser.PARAMETERIZATION);
				this.state = 1853;
				_la = this._input.LA(1);
				if(!(_la===516 || _la===725)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 1854;
				this.match(MocaSqlParser.RECOMPILE);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 1855;
				this.match(MocaSqlParser.ROBUST);
				this.state = 1856;
				this.match(MocaSqlParser.PLAN);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 1857;
				this.match(MocaSqlParser.USE);
				this.state = 1858;
				this.match(MocaSqlParser.PLAN);
				this.state = 1859;
				this.match(MocaSqlParser.STRING);
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
	public optimize_for_arg(): Optimize_for_argContext {
		let localctx: Optimize_for_argContext = new Optimize_for_argContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, MocaSqlParser.RULE_optimize_for_arg);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1862;
			this.match(MocaSqlParser.LOCAL_ID);
			this.state = 1869;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 772:
				{
				this.state = 1863;
				this.match(MocaSqlParser.UNKNOWN);
				}
				break;
			case 815:
				{
				this.state = 1864;
				this.match(MocaSqlParser.EQUAL);
				this.state = 1867;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 807:
				case 811:
				case 812:
				case 813:
				case 814:
				case 835:
				case 844:
				case 845:
					{
					this.state = 1865;
					this.constant();
					}
					break;
				case 222:
					{
					this.state = 1866;
					this.match(MocaSqlParser.NULL);
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
	public select_list(): Select_listContext {
		let localctx: Select_listContext = new Select_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, MocaSqlParser.RULE_select_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1871;
			this.select_list_elem();
			this.state = 1876;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 269, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1872;
					this.match(MocaSqlParser.COMMA);
					this.state = 1873;
					this.select_list_elem();
					}
					}
				}
				this.state = 1878;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 269, this._ctx);
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
	public udt_method_arguments(): Udt_method_argumentsContext {
		let localctx: Udt_method_argumentsContext = new Udt_method_argumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, MocaSqlParser.RULE_udt_method_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1879;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 1880;
			this.execute_var_string();
			this.state = 1885;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===838) {
				{
				{
				this.state = 1881;
				this.match(MocaSqlParser.COMMA);
				this.state = 1882;
				this.execute_var_string();
				}
				}
				this.state = 1887;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1888;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public asterisk(): AsteriskContext {
		let localctx: AsteriskContext = new AsteriskContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, MocaSqlParser.RULE_asterisk);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31 || _la===39 || _la===81 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1610616833) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 201342977) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 811597845) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 169873409) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8229) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1084233599) !== 0)) {
				{
				this.state = 1890;
				this.table_name();
				this.state = 1891;
				this.match(MocaSqlParser.DOT);
				}
			}

			this.state = 1895;
			this.match(MocaSqlParser.STAR);
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
	public column_elem(): Column_elemContext {
		let localctx: Column_elemContext = new Column_elemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, MocaSqlParser.RULE_column_elem);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1910;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 31:
			case 39:
			case 81:
			case 113:
			case 119:
			case 129:
			case 130:
			case 133:
			case 159:
			case 171:
			case 188:
			case 189:
			case 226:
			case 240:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 288:
			case 289:
			case 296:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 362:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 799:
			case 801:
			case 808:
			case 835:
				{
				this.state = 1900;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 272, this._ctx) ) {
				case 1:
					{
					this.state = 1897;
					this.table_name();
					this.state = 1898;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 1907;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 273, this._ctx) ) {
				case 1:
					{
					this.state = 1902;
					localctx._column_name = this.id();
					}
					break;
				case 2:
					{
					this.state = 1903;
					this.match(MocaSqlParser.DOLLAR);
					this.state = 1904;
					this.match(MocaSqlParser.IDENTITY);
					}
					break;
				case 3:
					{
					this.state = 1905;
					this.match(MocaSqlParser.DOLLAR);
					this.state = 1906;
					this.match(MocaSqlParser.ROWGUID);
					}
					break;
				}
				}
				break;
			case 222:
				{
				this.state = 1909;
				this.match(MocaSqlParser.NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1913;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				{
				this.state = 1912;
				this.as_column_alias();
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
	public udt_elem(): Udt_elemContext {
		let localctx: Udt_elemContext = new Udt_elemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, MocaSqlParser.RULE_udt_elem);
		try {
			this.state = 1932;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 279, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1915;
				localctx._udt_column_name = this.id();
				this.state = 1916;
				this.match(MocaSqlParser.DOT);
				this.state = 1917;
				localctx._non_static_attr = this.id();
				this.state = 1918;
				this.udt_method_arguments();
				this.state = 1920;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 276, this._ctx) ) {
				case 1:
					{
					this.state = 1919;
					this.as_column_alias();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1922;
				localctx._udt_column_name = this.id();
				this.state = 1923;
				this.match(MocaSqlParser.COLON);
				this.state = 1924;
				this.match(MocaSqlParser.COLON);
				this.state = 1925;
				localctx._static_attr = this.id();
				this.state = 1927;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 277, this._ctx) ) {
				case 1:
					{
					this.state = 1926;
					this.udt_method_arguments();
					}
					break;
				}
				this.state = 1930;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 278, this._ctx) ) {
				case 1:
					{
					this.state = 1929;
					this.as_column_alias();
					}
					break;
				}
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
	public expression_elem(): Expression_elemContext {
		let localctx: Expression_elemContext = new Expression_elemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, MocaSqlParser.RULE_expression_elem);
		try {
			this.state = 1942;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 281, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1934;
				this.column_alias();
				this.state = 1935;
				localctx._eq = this.match(MocaSqlParser.EQUAL);
				this.state = 1936;
				this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1938;
				this.expression(0);
				this.state = 1940;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 280, this._ctx) ) {
				case 1:
					{
					this.state = 1939;
					this.as_column_alias();
					}
					break;
				}
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
	public select_list_elem(): Select_list_elemContext {
		let localctx: Select_list_elemContext = new Select_list_elemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, MocaSqlParser.RULE_select_list_elem);
		try {
			this.state = 1948;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1944;
				this.asterisk();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1945;
				this.column_elem();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1946;
				this.udt_elem();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1947;
				this.expression_elem();
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
	public table_sources(): Table_sourcesContext {
		let localctx: Table_sourcesContext = new Table_sourcesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, MocaSqlParser.RULE_table_sources);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1950;
			this.table_source();
			this.state = 1955;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 283, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1951;
					this.match(MocaSqlParser.COMMA);
					this.state = 1952;
					this.table_source();
					}
					}
				}
				this.state = 1957;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 283, this._ctx);
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
	public table_source(): Table_sourceContext {
		let localctx: Table_sourceContext = new Table_sourceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, MocaSqlParser.RULE_table_source);
		try {
			this.state = 1963;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 284, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1958;
				this.table_source_item_joined();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1959;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 1960;
				this.table_source_item_joined();
				this.state = 1961;
				this.match(MocaSqlParser.RR_BRACKET);
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
	public table_source_item_joined(): Table_source_item_joinedContext {
		let localctx: Table_source_item_joinedContext = new Table_source_item_joinedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, MocaSqlParser.RULE_table_source_item_joined);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1965;
			this.table_source_item();
			this.state = 1969;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 285, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1966;
					this.join_part();
					}
					}
				}
				this.state = 1971;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 285, this._ctx);
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
	public table_source_item(): Table_source_itemContext {
		let localctx: Table_source_itemContext = new Table_source_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, MocaSqlParser.RULE_table_source_item);
		let _la: number;
		try {
			this.state = 2028;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 298, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1972;
				this.table_name_with_hint();
				this.state = 1974;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 286, this._ctx) ) {
				case 1:
					{
					this.state = 1973;
					this.as_table_alias();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1976;
				this.full_table_name();
				this.state = 1978;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 287, this._ctx) ) {
				case 1:
					{
					this.state = 1977;
					this.as_table_alias();
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1980;
				this.rowset_function();
				this.state = 1982;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 288, this._ctx) ) {
				case 1:
					{
					this.state = 1981;
					this.as_table_alias();
					}
					break;
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1984;
				this.derived_table();
				this.state = 1989;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 290, this._ctx) ) {
				case 1:
					{
					this.state = 1985;
					this.as_table_alias();
					this.state = 1987;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 289, this._ctx) ) {
					case 1:
						{
						this.state = 1986;
						this.column_alias_list();
						}
						break;
					}
					}
					break;
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1991;
				this.change_table();
				this.state = 1992;
				this.as_table_alias();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1994;
				this.function_call();
				this.state = 1999;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 292, this._ctx) ) {
				case 1:
					{
					this.state = 1995;
					this.as_table_alias();
					this.state = 1997;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 291, this._ctx) ) {
					case 1:
						{
						this.state = 1996;
						this.column_alias_list();
						}
						break;
					}
					}
					break;
				}
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2001;
				this.match(MocaSqlParser.LOCAL_ID);
				this.state = 2003;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 293, this._ctx) ) {
				case 1:
					{
					this.state = 2002;
					this.as_table_alias();
					}
					break;
				}
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2005;
				this.match(MocaSqlParser.LOCAL_ID);
				this.state = 2006;
				this.match(MocaSqlParser.DOT);
				this.state = 2007;
				this.function_call();
				this.state = 2012;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 295, this._ctx) ) {
				case 1:
					{
					this.state = 2008;
					this.as_table_alias();
					this.state = 2010;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 294, this._ctx) ) {
					case 1:
						{
						this.state = 2009;
						this.column_alias_list();
						}
						break;
					}
					}
					break;
				}
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 2014;
				this.open_xml();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 2015;
				this.match(MocaSqlParser.COLON);
				this.state = 2016;
				this.match(MocaSqlParser.COLON);
				this.state = 2017;
				this.function_call();
				this.state = 2019;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 296, this._ctx) ) {
				case 1:
					{
					this.state = 2018;
					this.as_table_alias();
					}
					break;
				}
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				{
				this.state = 2021;
				this.match(MocaSqlParser.LOCAL_ID);
				this.state = 2024;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===831) {
					{
					this.state = 2022;
					this.match(MocaSqlParser.DOT);
					this.state = 2023;
					this.simple_id();
					}
				}

				this.state = 2026;
				this.match(MocaSqlParser.COLON);
				this.state = 2027;
				this.match(MocaSqlParser.RAW);
				}
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
	public open_xml(): Open_xmlContext {
		let localctx: Open_xmlContext = new Open_xmlContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, MocaSqlParser.RULE_open_xml);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2030;
			this.match(MocaSqlParser.OPENXML);
			this.state = 2031;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 2032;
			this.expression(0);
			this.state = 2033;
			this.match(MocaSqlParser.COMMA);
			this.state = 2034;
			this.expression(0);
			this.state = 2037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===838) {
				{
				this.state = 2035;
				this.match(MocaSqlParser.COMMA);
				this.state = 2036;
				this.expression(0);
				}
			}

			this.state = 2039;
			this.match(MocaSqlParser.RR_BRACKET);
			this.state = 2045;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 300, this._ctx) ) {
			case 1:
				{
				this.state = 2040;
				this.match(MocaSqlParser.WITH);
				this.state = 2041;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2042;
				this.schema_declaration();
				this.state = 2043;
				this.match(MocaSqlParser.RR_BRACKET);
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
	public schema_declaration(): Schema_declarationContext {
		let localctx: Schema_declarationContext = new Schema_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, MocaSqlParser.RULE_schema_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2047;
			this.column_declaration();
			this.state = 2052;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===838) {
				{
				{
				this.state = 2048;
				this.match(MocaSqlParser.COMMA);
				this.state = 2049;
				this.column_declaration();
				}
				}
				this.state = 2054;
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
	public column_declaration(): Column_declarationContext {
		let localctx: Column_declarationContext = new Column_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, MocaSqlParser.RULE_column_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2055;
			this.match(MocaSqlParser.ID);
			this.state = 2056;
			this.data_type();
			this.state = 2058;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===811) {
				{
				this.state = 2057;
				this.match(MocaSqlParser.STRING);
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
	public change_table(): Change_tableContext {
		let localctx: Change_tableContext = new Change_tableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, MocaSqlParser.RULE_change_table);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2060;
			this.match(MocaSqlParser.CHANGETABLE);
			this.state = 2061;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 2062;
			this.match(MocaSqlParser.CHANGES);
			this.state = 2063;
			this.table_name();
			this.state = 2064;
			this.match(MocaSqlParser.COMMA);
			this.state = 2065;
			_la = this._input.LA(1);
			if(!(_la===222 || _la===802 || _la===807)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2066;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public join_part(): Join_partContext {
		let localctx: Join_partContext = new Join_partContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, MocaSqlParser.RULE_join_part);
		let _la: number;
		try {
			this.state = 2102;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 307, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2075;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 160:
				case 169:
				case 200:
				case 530:
				case 571:
				case 678:
					{
					this.state = 2069;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===160) {
						{
						this.state = 2068;
						this.match(MocaSqlParser.INNER);
						}
					}

					}
					break;
				case 139:
				case 176:
				case 286:
					{
					this.state = 2071;
					localctx._join_type = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(_la===139 || _la===176 || _la===286)) {
					    localctx._join_type = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 2073;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===238) {
						{
						this.state = 2072;
						this.match(MocaSqlParser.OUTER);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===200 || _la===530 || _la===571 || _la===678) {
					{
					this.state = 2077;
					localctx._join_hint = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(_la===200 || _la===530 || _la===571 || _la===678)) {
					    localctx._join_hint = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 2080;
				this.match(MocaSqlParser.JOIN);
				this.state = 2081;
				this.table_source();
				this.state = 2082;
				this.match(MocaSqlParser.ON);
				this.state = 2083;
				this.search_condition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2085;
				this.match(MocaSqlParser.CROSS);
				this.state = 2086;
				this.match(MocaSqlParser.JOIN);
				this.state = 2087;
				this.table_source();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2088;
				this.match(MocaSqlParser.CROSS);
				this.state = 2089;
				this.match(MocaSqlParser.APPLY);
				this.state = 2090;
				this.table_source();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2091;
				this.match(MocaSqlParser.OUTER);
				this.state = 2092;
				this.match(MocaSqlParser.APPLY);
				this.state = 2093;
				this.table_source();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2094;
				this.match(MocaSqlParser.PIVOT);
				this.state = 2095;
				this.pivot_clause();
				this.state = 2096;
				this.as_table_alias();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2098;
				this.match(MocaSqlParser.UNPIVOT);
				this.state = 2099;
				this.unpivot_clause();
				this.state = 2100;
				this.as_table_alias();
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
	public pivot_clause(): Pivot_clauseContext {
		let localctx: Pivot_clauseContext = new Pivot_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, MocaSqlParser.RULE_pivot_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2104;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 2105;
			this.aggregate_windowed_function();
			this.state = 2106;
			this.match(MocaSqlParser.FOR);
			this.state = 2107;
			this.full_column_name();
			this.state = 2108;
			this.match(MocaSqlParser.IN);
			this.state = 2109;
			this.column_alias_list();
			this.state = 2110;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public unpivot_clause(): Unpivot_clauseContext {
		let localctx: Unpivot_clauseContext = new Unpivot_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, MocaSqlParser.RULE_unpivot_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2112;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 2113;
			this.expression(0);
			this.state = 2114;
			this.match(MocaSqlParser.FOR);
			this.state = 2115;
			this.full_column_name();
			this.state = 2116;
			this.match(MocaSqlParser.IN);
			this.state = 2117;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 2118;
			this.full_column_name_list();
			this.state = 2119;
			this.match(MocaSqlParser.RR_BRACKET);
			this.state = 2120;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public full_column_name_list(): Full_column_name_listContext {
		let localctx: Full_column_name_listContext = new Full_column_name_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, MocaSqlParser.RULE_full_column_name_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2122;
			this.full_column_name();
			this.state = 2127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===838) {
				{
				{
				this.state = 2123;
				this.match(MocaSqlParser.COMMA);
				this.state = 2124;
				this.full_column_name();
				}
				}
				this.state = 2129;
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
	public table_name_with_hint(): Table_name_with_hintContext {
		let localctx: Table_name_with_hintContext = new Table_name_with_hintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, MocaSqlParser.RULE_table_name_with_hint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2130;
			this.table_name();
			this.state = 2132;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 309, this._ctx) ) {
			case 1:
				{
				this.state = 2131;
				this.with_table_hints();
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
	public rowset_function(): Rowset_functionContext {
		let localctx: Rowset_functionContext = new Rowset_functionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, MocaSqlParser.RULE_rowset_function);
		let _la: number;
		try {
			this.state = 2160;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 312, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2134;
				this.match(MocaSqlParser.OPENROWSET);
				this.state = 2135;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2136;
				localctx._provider_name = this.match(MocaSqlParser.STRING);
				this.state = 2137;
				this.match(MocaSqlParser.COMMA);
				this.state = 2138;
				localctx._connectionString = this.match(MocaSqlParser.STRING);
				this.state = 2139;
				this.match(MocaSqlParser.COMMA);
				this.state = 2140;
				localctx._sql = this.match(MocaSqlParser.STRING);
				this.state = 2141;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 2142;
				this.match(MocaSqlParser.OPENROWSET);
				this.state = 2143;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2144;
				this.match(MocaSqlParser.BULK);
				this.state = 2145;
				localctx._data_file = this.match(MocaSqlParser.STRING);
				this.state = 2146;
				this.match(MocaSqlParser.COMMA);
				this.state = 2156;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 311, this._ctx) ) {
				case 1:
					{
					this.state = 2147;
					this.bulk_option();
					this.state = 2152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===838) {
						{
						{
						this.state = 2148;
						this.match(MocaSqlParser.COMMA);
						this.state = 2149;
						this.bulk_option();
						}
						}
						this.state = 2154;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 2:
					{
					this.state = 2155;
					this.id();
					}
					break;
				}
				this.state = 2158;
				this.match(MocaSqlParser.RR_BRACKET);
				}
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
	public bulk_option(): Bulk_optionContext {
		let localctx: Bulk_optionContext = new Bulk_optionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, MocaSqlParser.RULE_bulk_option);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2162;
			this.id();
			this.state = 2163;
			this.match(MocaSqlParser.EQUAL);
			this.state = 2164;
			localctx._bulk_option_value = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(_la===807 || _la===811)) {
			    localctx._bulk_option_value = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public derived_table(): Derived_tableContext {
		let localctx: Derived_tableContext = new Derived_tableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, MocaSqlParser.RULE_derived_table);
		try {
			this.state = 2176;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 313, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2166;
				this.subquery();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2167;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2168;
				this.subquery();
				this.state = 2169;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2171;
				this.table_value_constructor();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2172;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2173;
				this.table_value_constructor();
				this.state = 2174;
				this.match(MocaSqlParser.RR_BRACKET);
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
	public function_call(): Function_callContext {
		let localctx: Function_callContext = new Function_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, MocaSqlParser.RULE_function_call);
		let _la: number;
		try {
			this.state = 2324;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 319, this._ctx) ) {
			case 1:
				localctx = new BINARY_CHECKSUMContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2178;
				this.match(MocaSqlParser.BINARY_CHECKSUM);
				this.state = 2179;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2180;
				this.match(MocaSqlParser.STAR);
				this.state = 2181;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 2:
				localctx = new CASTContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2182;
				this.match(MocaSqlParser.CAST);
				this.state = 2183;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2184;
				this.expression(0);
				this.state = 2185;
				this.match(MocaSqlParser.AS);
				this.state = 2186;
				this.data_type();
				this.state = 2187;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				localctx = new CONVERTContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2189;
				this.match(MocaSqlParser.CONVERT);
				this.state = 2190;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2191;
				(localctx as CONVERTContext)._convert_data_type = this.data_type();
				this.state = 2192;
				this.match(MocaSqlParser.COMMA);
				this.state = 2193;
				(localctx as CONVERTContext)._convert_expression = this.expression(0);
				this.state = 2196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===838) {
					{
					this.state = 2194;
					this.match(MocaSqlParser.COMMA);
					this.state = 2195;
					(localctx as CONVERTContext)._style = this.expression(0);
					}
				}

				this.state = 2198;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				localctx = new CHECKSUMContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2200;
				this.match(MocaSqlParser.CHECKSUM);
				this.state = 2201;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2202;
				this.match(MocaSqlParser.STAR);
				this.state = 2203;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				localctx = new COALESCEContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2204;
				this.match(MocaSqlParser.COALESCE);
				this.state = 2205;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2206;
				this.expression_list();
				this.state = 2207;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 6:
				localctx = new CURRENT_TIMESTAMPContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2209;
				this.match(MocaSqlParser.CURRENT_TIMESTAMP);
				}
				break;
			case 7:
				localctx = new CURRENT_USERContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2210;
				this.match(MocaSqlParser.CURRENT_USER);
				}
				break;
			case 8:
				localctx = new DATEADDContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2211;
				this.match(MocaSqlParser.DATEADD);
				this.state = 2212;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2213;
				this.match(MocaSqlParser.ID);
				this.state = 2214;
				this.match(MocaSqlParser.COMMA);
				this.state = 2215;
				this.expression(0);
				this.state = 2216;
				this.match(MocaSqlParser.COMMA);
				this.state = 2217;
				this.expression(0);
				this.state = 2218;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 9:
				localctx = new DATEDIFFContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 2220;
				this.match(MocaSqlParser.DATEDIFF);
				this.state = 2221;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2222;
				this.match(MocaSqlParser.ID);
				this.state = 2223;
				this.match(MocaSqlParser.COMMA);
				this.state = 2224;
				this.expression(0);
				this.state = 2225;
				this.match(MocaSqlParser.COMMA);
				this.state = 2226;
				this.expression(0);
				this.state = 2227;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 10:
				localctx = new DATENAMEContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 2229;
				this.match(MocaSqlParser.DATENAME);
				this.state = 2230;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2231;
				this.match(MocaSqlParser.ID);
				this.state = 2232;
				this.match(MocaSqlParser.COMMA);
				this.state = 2233;
				this.expression(0);
				this.state = 2234;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 11:
				localctx = new DATEPARTContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 2236;
				this.match(MocaSqlParser.DATEPART);
				this.state = 2237;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2238;
				this.match(MocaSqlParser.ID);
				this.state = 2239;
				this.match(MocaSqlParser.COMMA);
				this.state = 2240;
				this.expression(0);
				this.state = 2241;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 12:
				localctx = new GETDATEContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 2243;
				this.match(MocaSqlParser.GETDATE);
				this.state = 2244;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2245;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 13:
				localctx = new GETUTCDATEContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 2246;
				this.match(MocaSqlParser.GETUTCDATE);
				this.state = 2247;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2248;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 14:
				localctx = new IDENTITYContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 2249;
				this.match(MocaSqlParser.IDENTITY);
				this.state = 2250;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2251;
				this.data_type();
				this.state = 2254;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 315, this._ctx) ) {
				case 1:
					{
					this.state = 2252;
					this.match(MocaSqlParser.COMMA);
					this.state = 2253;
					(localctx as IDENTITYContext)._seed = this.match(MocaSqlParser.DECIMAL);
					}
					break;
				}
				this.state = 2258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===838) {
					{
					this.state = 2256;
					this.match(MocaSqlParser.COMMA);
					this.state = 2257;
					(localctx as IDENTITYContext)._increment = this.match(MocaSqlParser.DECIMAL);
					}
				}

				this.state = 2260;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 15:
				localctx = new MIN_ACTIVE_ROWVERSIONContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 2262;
				this.match(MocaSqlParser.MIN_ACTIVE_ROWVERSION);
				}
				break;
			case 16:
				localctx = new NULLIFContext(this, localctx);
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 2263;
				this.match(MocaSqlParser.NULLIF);
				this.state = 2264;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2265;
				this.expression(0);
				this.state = 2266;
				this.match(MocaSqlParser.COMMA);
				this.state = 2267;
				this.expression(0);
				this.state = 2268;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 17:
				localctx = new STUFFContext(this, localctx);
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 2270;
				this.match(MocaSqlParser.STUFF);
				this.state = 2271;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2272;
				this.expression(0);
				this.state = 2273;
				this.match(MocaSqlParser.COMMA);
				this.state = 2274;
				this.match(MocaSqlParser.DECIMAL);
				this.state = 2275;
				this.match(MocaSqlParser.COMMA);
				this.state = 2276;
				this.match(MocaSqlParser.DECIMAL);
				this.state = 2277;
				this.match(MocaSqlParser.COMMA);
				this.state = 2278;
				this.expression(0);
				this.state = 2279;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 18:
				localctx = new SESSION_USERContext(this, localctx);
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 2281;
				this.match(MocaSqlParser.SESSION_USER);
				}
				break;
			case 19:
				localctx = new SYSTEM_USERContext(this, localctx);
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 2282;
				this.match(MocaSqlParser.SYSTEM_USER);
				}
				break;
			case 20:
				localctx = new ISNULLContext(this, localctx);
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 2283;
				this.match(MocaSqlParser.ISNULL);
				this.state = 2284;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2285;
				this.expression(0);
				this.state = 2286;
				this.match(MocaSqlParser.COMMA);
				this.state = 2287;
				this.expression(0);
				this.state = 2288;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 21:
				localctx = new XML_DATA_TYPE_FUNCContext(this, localctx);
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 2290;
				this.xml_data_type_methods();
				}
				break;
			case 22:
				localctx = new IFFContext(this, localctx);
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 2291;
				this.match(MocaSqlParser.IIF);
				this.state = 2292;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2293;
				this.search_condition();
				this.state = 2294;
				this.match(MocaSqlParser.COMMA);
				this.state = 2295;
				this.expression(0);
				this.state = 2296;
				this.match(MocaSqlParser.COMMA);
				this.state = 2297;
				this.expression(0);
				this.state = 2298;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 23:
				localctx = new RANKING_WINDOWED_FUNCContext(this, localctx);
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 2300;
				this.ranking_windowed_function();
				}
				break;
			case 24:
				localctx = new AGGREGATE_WINDOWED_FUNCContext(this, localctx);
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 2301;
				this.aggregate_windowed_function();
				}
				break;
			case 25:
				localctx = new ANALYTIC_WINDOWED_FUNCContext(this, localctx);
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 2302;
				this.analytic_windowed_function();
				}
				break;
			case 26:
				localctx = new SCALAR_FUNCTIONContext(this, localctx);
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 2303;
				this.scalar_function_name();
				this.state = 2304;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1 || _la===31 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 2147500037) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 2067) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & 138937361) !== 0) || _la===188 || _la===189 || ((((_la - 222)) & ~0x1F) === 0 && ((1 << (_la - 222)) & 3221618707) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 878706709) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 170004481) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8741) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1738545023) !== 0) || ((((_la - 811)) & ~0x1F) === 0 && ((1 << (_la - 811)) & 50331663) !== 0) || ((((_la - 844)) & ~0x1F) === 0 && ((1 << (_la - 844)) & 7) !== 0)) {
					{
					this.state = 2305;
					this.expression_list();
					}
				}

				this.state = 2308;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 27:
				localctx = new STRINGAGGContext(this, localctx);
				this.enterOuterAlt(localctx, 27);
				{
				this.state = 2310;
				this.match(MocaSqlParser.STRING_AGG);
				this.state = 2311;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2312;
				(localctx as STRINGAGGContext)._expr = this.expression(0);
				this.state = 2313;
				this.match(MocaSqlParser.COMMA);
				this.state = 2314;
				(localctx as STRINGAGGContext)._separator = this.expression(0);
				this.state = 2315;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 2322;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 318, this._ctx) ) {
				case 1:
					{
					this.state = 2316;
					this.match(MocaSqlParser.WITHIN);
					this.state = 2317;
					this.match(MocaSqlParser.GROUP);
					this.state = 2318;
					this.match(MocaSqlParser.LR_BRACKET);
					this.state = 2319;
					this.order_by_clause();
					this.state = 2320;
					this.match(MocaSqlParser.RR_BRACKET);
					}
					break;
				}
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
	public xml_data_type_methods(): Xml_data_type_methodsContext {
		let localctx: Xml_data_type_methodsContext = new Xml_data_type_methodsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, MocaSqlParser.RULE_xml_data_type_methods);
		try {
			this.state = 2331;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 320, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2326;
				this.value_method();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2327;
				this.query_method();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2328;
				this.exist_method();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2329;
				this.modify_method();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2330;
				this.nodes_method();
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
	public value_method(): Value_methodContext {
		let localctx: Value_methodContext = new Value_methodContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, MocaSqlParser.RULE_value_method);
		try {
			this.state = 2376;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 324, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2337;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 321, this._ctx) ) {
				case 1:
					{
					this.state = 2333;
					this.match(MocaSqlParser.LOCAL_ID);
					}
					break;
				case 2:
					{
					this.state = 2334;
					this.match(MocaSqlParser.ID);
					}
					break;
				case 3:
					{
					this.state = 2335;
					this.match(MocaSqlParser.EVENTDATA);
					}
					break;
				case 4:
					{
					this.state = 2336;
					this.query_method();
					}
					break;
				}
				this.state = 2339;
				this.match(MocaSqlParser.DOT);
				this.state = 2340;
				this.match(MocaSqlParser.VALUE);
				this.state = 2341;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2342;
				localctx._xquery = this.match(MocaSqlParser.STRING);
				this.state = 2343;
				this.match(MocaSqlParser.COMMA);
				this.state = 2344;
				localctx._sqltype = this.match(MocaSqlParser.STRING);
				this.state = 2345;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2350;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 322, this._ctx) ) {
				case 1:
					{
					this.state = 2346;
					this.match(MocaSqlParser.LOCAL_ID);
					}
					break;
				case 2:
					{
					this.state = 2347;
					this.match(MocaSqlParser.ID);
					}
					break;
				case 3:
					{
					this.state = 2348;
					this.match(MocaSqlParser.EVENTDATA);
					}
					break;
				case 4:
					{
					this.state = 2349;
					this.query_method();
					}
					break;
				}
				this.state = 2352;
				this.match(MocaSqlParser.DOT);
				this.state = 2353;
				this.match(MocaSqlParser.ROW);
				this.state = 2354;
				this.match(MocaSqlParser.DOT);
				this.state = 2355;
				this.match(MocaSqlParser.VALUE);
				this.state = 2356;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2357;
				localctx._xquery = this.match(MocaSqlParser.STRING);
				this.state = 2358;
				this.match(MocaSqlParser.COMMA);
				this.state = 2359;
				localctx._sqltype = this.match(MocaSqlParser.STRING);
				this.state = 2360;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2365;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 323, this._ctx) ) {
				case 1:
					{
					this.state = 2361;
					this.match(MocaSqlParser.LOCAL_ID);
					}
					break;
				case 2:
					{
					this.state = 2362;
					this.match(MocaSqlParser.ID);
					}
					break;
				case 3:
					{
					this.state = 2363;
					this.match(MocaSqlParser.EVENTDATA);
					}
					break;
				case 4:
					{
					this.state = 2364;
					this.query_method();
					}
					break;
				}
				this.state = 2367;
				this.match(MocaSqlParser.DOT);
				this.state = 2368;
				this.match(MocaSqlParser.PARAM_NODE);
				this.state = 2369;
				this.match(MocaSqlParser.DOT);
				this.state = 2370;
				this.match(MocaSqlParser.VALUE);
				this.state = 2371;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2372;
				localctx._xquery = this.match(MocaSqlParser.STRING);
				this.state = 2373;
				this.match(MocaSqlParser.COMMA);
				this.state = 2374;
				localctx._sqltype = this.match(MocaSqlParser.STRING);
				this.state = 2375;
				this.match(MocaSqlParser.RR_BRACKET);
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
	public query_method(): Query_methodContext {
		let localctx: Query_methodContext = new Query_methodContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, MocaSqlParser.RULE_query_method);
		try {
			this.state = 2400;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 327, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2381;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 325, this._ctx) ) {
				case 1:
					{
					this.state = 2378;
					this.match(MocaSqlParser.LOCAL_ID);
					}
					break;
				case 2:
					{
					this.state = 2379;
					this.match(MocaSqlParser.ID);
					}
					break;
				case 3:
					{
					this.state = 2380;
					this.full_table_name();
					}
					break;
				}
				this.state = 2383;
				this.match(MocaSqlParser.DOT);
				this.state = 2384;
				this.match(MocaSqlParser.QUERY);
				this.state = 2385;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2386;
				localctx._xquery = this.match(MocaSqlParser.STRING);
				this.state = 2387;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2391;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 326, this._ctx) ) {
				case 1:
					{
					this.state = 2388;
					this.match(MocaSqlParser.LOCAL_ID);
					}
					break;
				case 2:
					{
					this.state = 2389;
					this.match(MocaSqlParser.ID);
					}
					break;
				case 3:
					{
					this.state = 2390;
					this.full_table_name();
					}
					break;
				}
				this.state = 2393;
				this.match(MocaSqlParser.DOT);
				this.state = 2394;
				this.match(MocaSqlParser.ROW);
				this.state = 2395;
				this.match(MocaSqlParser.DOT);
				this.state = 2396;
				this.match(MocaSqlParser.QUERY);
				this.state = 2397;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2398;
				localctx._xquery = this.match(MocaSqlParser.STRING);
				this.state = 2399;
				this.match(MocaSqlParser.RR_BRACKET);
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
	public exist_method(): Exist_methodContext {
		let localctx: Exist_methodContext = new Exist_methodContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, MocaSqlParser.RULE_exist_method);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2402;
			_la = this._input.LA(1);
			if(!(_la===802 || _la===808)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2403;
			this.match(MocaSqlParser.DOT);
			this.state = 2404;
			this.match(MocaSqlParser.EXIST);
			this.state = 2405;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 2406;
			localctx._xquery = this.match(MocaSqlParser.STRING);
			this.state = 2407;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public modify_method(): Modify_methodContext {
		let localctx: Modify_methodContext = new Modify_methodContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, MocaSqlParser.RULE_modify_method);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2409;
			_la = this._input.LA(1);
			if(!(_la===802 || _la===808)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2410;
			this.match(MocaSqlParser.DOT);
			this.state = 2411;
			this.match(MocaSqlParser.MODIFY);
			this.state = 2412;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 2413;
			localctx._xml_dml = this.match(MocaSqlParser.STRING);
			this.state = 2414;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public nodes_method(): Nodes_methodContext {
		let localctx: Nodes_methodContext = new Nodes_methodContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, MocaSqlParser.RULE_nodes_method);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2416;
			_la = this._input.LA(1);
			if(!(_la===802 || _la===808)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2417;
			this.match(MocaSqlParser.DOT);
			this.state = 2418;
			this.match(MocaSqlParser.NODES);
			this.state = 2419;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 2420;
			localctx._xquery = this.match(MocaSqlParser.STRING);
			this.state = 2421;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public switch_section(): Switch_sectionContext {
		let localctx: Switch_sectionContext = new Switch_sectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, MocaSqlParser.RULE_switch_section);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2423;
			this.match(MocaSqlParser.WHEN);
			this.state = 2424;
			this.expression(0);
			this.state = 2425;
			this.match(MocaSqlParser.THEN);
			this.state = 2426;
			this.expression(0);
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
	public switch_search_condition_section(): Switch_search_condition_sectionContext {
		let localctx: Switch_search_condition_sectionContext = new Switch_search_condition_sectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, MocaSqlParser.RULE_switch_search_condition_section);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2428;
			this.match(MocaSqlParser.WHEN);
			this.state = 2429;
			this.search_condition();
			this.state = 2430;
			this.match(MocaSqlParser.THEN);
			this.state = 2431;
			this.expression(0);
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
	public as_column_alias(): As_column_aliasContext {
		let localctx: As_column_aliasContext = new As_column_aliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, MocaSqlParser.RULE_as_column_alias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 2433;
				this.match(MocaSqlParser.AS);
				}
			}

			this.state = 2436;
			this.column_alias();
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
	public as_table_alias(): As_table_aliasContext {
		let localctx: As_table_aliasContext = new As_table_aliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, MocaSqlParser.RULE_as_table_alias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 2438;
				this.match(MocaSqlParser.AS);
				}
			}

			this.state = 2441;
			this.table_alias();
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
	public table_alias(): Table_aliasContext {
		let localctx: Table_aliasContext = new Table_aliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, MocaSqlParser.RULE_table_alias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2443;
			this.id();
			this.state = 2445;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 330, this._ctx) ) {
			case 1:
				{
				this.state = 2444;
				this.with_table_hints();
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
	public with_table_hints(): With_table_hintsContext {
		let localctx: With_table_hintsContext = new With_table_hintsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, MocaSqlParser.RULE_with_table_hints);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===376) {
				{
				this.state = 2447;
				this.match(MocaSqlParser.WITH);
				}
			}

			this.state = 2450;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 2451;
			this.table_hint();
			this.state = 2458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===133 || _la===157 || _la===615 || ((((_la - 719)) & ~0x1F) === 0 && ((1 << (_la - 719)) & 3073) !== 0) || _la===808 || _la===838) {
				{
				{
				this.state = 2453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===838) {
					{
					this.state = 2452;
					this.match(MocaSqlParser.COMMA);
					}
				}

				this.state = 2455;
				this.table_hint();
				}
				}
				this.state = 2460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2461;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public insert_with_table_hints(): Insert_with_table_hintsContext {
		let localctx: Insert_with_table_hintsContext = new Insert_with_table_hintsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, MocaSqlParser.RULE_insert_with_table_hints);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2463;
			this.match(MocaSqlParser.WITH);
			this.state = 2464;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 2465;
			this.table_hint();
			this.state = 2472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===133 || _la===157 || _la===615 || ((((_la - 719)) & ~0x1F) === 0 && ((1 << (_la - 719)) & 3073) !== 0) || _la===808 || _la===838) {
				{
				{
				this.state = 2467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===838) {
					{
					this.state = 2466;
					this.match(MocaSqlParser.COMMA);
					}
				}

				this.state = 2469;
				this.table_hint();
				}
				}
				this.state = 2474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2475;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public table_hint(): Table_hintContext {
		let localctx: Table_hintContext = new Table_hintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, MocaSqlParser.RULE_table_hint);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===615) {
				{
				this.state = 2477;
				this.match(MocaSqlParser.NOEXPAND);
				}
			}

			this.state = 2528;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 342, this._ctx) ) {
			case 1:
				{
				this.state = 2480;
				this.match(MocaSqlParser.INDEX);
				this.state = 2500;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 836:
					{
					this.state = 2481;
					this.match(MocaSqlParser.LR_BRACKET);
					this.state = 2482;
					this.index_value();
					this.state = 2487;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===838) {
						{
						{
						this.state = 2483;
						this.match(MocaSqlParser.COMMA);
						this.state = 2484;
						this.index_value();
						}
						}
						this.state = 2489;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2490;
					this.match(MocaSqlParser.RR_BRACKET);
					}
					break;
				case 39:
				case 81:
				case 113:
				case 119:
				case 129:
				case 130:
				case 133:
				case 159:
				case 171:
				case 188:
				case 189:
				case 226:
				case 240:
				case 252:
				case 253:
				case 260:
				case 262:
				case 264:
				case 281:
				case 282:
				case 288:
				case 289:
				case 296:
				case 308:
				case 317:
				case 321:
				case 323:
				case 328:
				case 330:
				case 333:
				case 341:
				case 362:
				case 381:
				case 382:
				case 383:
				case 384:
				case 385:
				case 386:
				case 387:
				case 388:
				case 389:
				case 390:
				case 391:
				case 392:
				case 393:
				case 394:
				case 395:
				case 396:
				case 397:
				case 398:
				case 399:
				case 400:
				case 401:
				case 402:
				case 403:
				case 404:
				case 405:
				case 406:
				case 407:
				case 408:
				case 409:
				case 410:
				case 411:
				case 412:
				case 413:
				case 414:
				case 415:
				case 416:
				case 417:
				case 418:
				case 419:
				case 420:
				case 421:
				case 422:
				case 423:
				case 424:
				case 425:
				case 426:
				case 427:
				case 428:
				case 429:
				case 430:
				case 431:
				case 432:
				case 433:
				case 434:
				case 435:
				case 436:
				case 437:
				case 438:
				case 439:
				case 440:
				case 441:
				case 442:
				case 443:
				case 444:
				case 445:
				case 446:
				case 447:
				case 448:
				case 449:
				case 450:
				case 451:
				case 452:
				case 453:
				case 454:
				case 455:
				case 456:
				case 457:
				case 458:
				case 459:
				case 460:
				case 461:
				case 462:
				case 463:
				case 464:
				case 465:
				case 466:
				case 467:
				case 468:
				case 469:
				case 470:
				case 471:
				case 472:
				case 473:
				case 474:
				case 475:
				case 476:
				case 477:
				case 478:
				case 479:
				case 480:
				case 481:
				case 482:
				case 483:
				case 484:
				case 486:
				case 487:
				case 488:
				case 489:
				case 490:
				case 491:
				case 492:
				case 493:
				case 494:
				case 495:
				case 496:
				case 497:
				case 498:
				case 499:
				case 500:
				case 501:
				case 502:
				case 503:
				case 504:
				case 505:
				case 506:
				case 507:
				case 508:
				case 509:
				case 510:
				case 511:
				case 512:
				case 513:
				case 514:
				case 515:
				case 516:
				case 517:
				case 518:
				case 519:
				case 520:
				case 521:
				case 522:
				case 523:
				case 524:
				case 525:
				case 526:
				case 527:
				case 528:
				case 529:
				case 530:
				case 531:
				case 532:
				case 533:
				case 534:
				case 535:
				case 536:
				case 537:
				case 538:
				case 539:
				case 541:
				case 542:
				case 543:
				case 544:
				case 545:
				case 546:
				case 547:
				case 548:
				case 551:
				case 552:
				case 553:
				case 554:
				case 555:
				case 556:
				case 557:
				case 558:
				case 559:
				case 560:
				case 561:
				case 562:
				case 563:
				case 564:
				case 565:
				case 566:
				case 567:
				case 568:
				case 569:
				case 570:
				case 571:
				case 572:
				case 573:
				case 574:
				case 575:
				case 576:
				case 577:
				case 578:
				case 579:
				case 580:
				case 581:
				case 582:
				case 583:
				case 584:
				case 585:
				case 586:
				case 587:
				case 588:
				case 589:
				case 590:
				case 591:
				case 592:
				case 593:
				case 594:
				case 595:
				case 596:
				case 597:
				case 598:
				case 599:
				case 600:
				case 601:
				case 602:
				case 603:
				case 604:
				case 605:
				case 606:
				case 607:
				case 608:
				case 609:
				case 610:
				case 611:
				case 612:
				case 613:
				case 614:
				case 615:
				case 616:
				case 617:
				case 618:
				case 619:
				case 620:
				case 621:
				case 622:
				case 623:
				case 624:
				case 625:
				case 626:
				case 627:
				case 628:
				case 629:
				case 630:
				case 631:
				case 632:
				case 633:
				case 634:
				case 636:
				case 637:
				case 638:
				case 639:
				case 640:
				case 641:
				case 642:
				case 643:
				case 644:
				case 645:
				case 646:
				case 647:
				case 648:
				case 649:
				case 650:
				case 651:
				case 652:
				case 653:
				case 654:
				case 655:
				case 656:
				case 657:
				case 658:
				case 659:
				case 660:
				case 661:
				case 662:
				case 663:
				case 664:
				case 665:
				case 666:
				case 667:
				case 668:
				case 669:
				case 670:
				case 671:
				case 672:
				case 673:
				case 674:
				case 675:
				case 676:
				case 677:
				case 678:
				case 679:
				case 680:
				case 681:
				case 682:
				case 683:
				case 684:
				case 685:
				case 686:
				case 687:
				case 688:
				case 689:
				case 690:
				case 691:
				case 692:
				case 693:
				case 694:
				case 695:
				case 696:
				case 697:
				case 698:
				case 699:
				case 700:
				case 701:
				case 702:
				case 703:
				case 704:
				case 705:
				case 706:
				case 707:
				case 708:
				case 709:
				case 710:
				case 711:
				case 712:
				case 713:
				case 714:
				case 715:
				case 716:
				case 717:
				case 718:
				case 719:
				case 720:
				case 721:
				case 722:
				case 723:
				case 724:
				case 725:
				case 726:
				case 727:
				case 728:
				case 729:
				case 730:
				case 731:
				case 732:
				case 733:
				case 734:
				case 735:
				case 737:
				case 738:
				case 739:
				case 740:
				case 741:
				case 742:
				case 744:
				case 745:
				case 746:
				case 747:
				case 748:
				case 749:
				case 750:
				case 751:
				case 752:
				case 753:
				case 754:
				case 755:
				case 756:
				case 757:
				case 758:
				case 759:
				case 760:
				case 761:
				case 762:
				case 763:
				case 764:
				case 765:
				case 766:
				case 767:
				case 768:
				case 769:
				case 770:
				case 771:
				case 772:
				case 773:
				case 775:
				case 776:
				case 777:
				case 778:
				case 779:
				case 780:
				case 781:
				case 782:
				case 783:
				case 784:
				case 786:
				case 787:
				case 788:
				case 790:
				case 799:
				case 801:
				case 807:
				case 808:
					{
					this.state = 2492;
					this.index_value();
					this.state = 2497;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 338, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 2493;
							this.match(MocaSqlParser.COMMA);
							this.state = 2494;
							this.index_value();
							}
							}
						}
						this.state = 2499;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 338, this._ctx);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				{
				this.state = 2502;
				this.match(MocaSqlParser.INDEX);
				this.state = 2503;
				this.match(MocaSqlParser.EQUAL);
				this.state = 2504;
				this.index_value();
				}
				break;
			case 3:
				{
				this.state = 2505;
				this.match(MocaSqlParser.FORCESEEK);
				this.state = 2520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===836) {
					{
					this.state = 2506;
					this.match(MocaSqlParser.LR_BRACKET);
					this.state = 2507;
					this.index_value();
					this.state = 2508;
					this.match(MocaSqlParser.LR_BRACKET);
					this.state = 2509;
					this.match(MocaSqlParser.ID);
					this.state = 2514;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===838) {
						{
						{
						this.state = 2510;
						this.match(MocaSqlParser.COMMA);
						this.state = 2511;
						this.match(MocaSqlParser.ID);
						}
						}
						this.state = 2516;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2517;
					this.match(MocaSqlParser.RR_BRACKET);
					this.state = 2518;
					this.match(MocaSqlParser.RR_BRACKET);
					}
				}

				}
				break;
			case 4:
				{
				this.state = 2522;
				this.match(MocaSqlParser.SERIALIZABLE);
				}
				break;
			case 5:
				{
				this.state = 2523;
				this.match(MocaSqlParser.SNAPSHOT);
				}
				break;
			case 6:
				{
				this.state = 2524;
				this.match(MocaSqlParser.SPATIAL_WINDOW_MAX_CELLS);
				this.state = 2525;
				this.match(MocaSqlParser.EQUAL);
				this.state = 2526;
				this.match(MocaSqlParser.DECIMAL);
				}
				break;
			case 7:
				{
				this.state = 2527;
				this.match(MocaSqlParser.ID);
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
	public index_value(): Index_valueContext {
		let localctx: Index_valueContext = new Index_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, MocaSqlParser.RULE_index_value);
		try {
			this.state = 2532;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
			case 81:
			case 113:
			case 119:
			case 129:
			case 130:
			case 133:
			case 159:
			case 171:
			case 188:
			case 189:
			case 226:
			case 240:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 288:
			case 289:
			case 296:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 362:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 799:
			case 801:
			case 808:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2530;
				this.id();
				}
				break;
			case 807:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2531;
				this.match(MocaSqlParser.DECIMAL);
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
	public column_alias_list(): Column_alias_listContext {
		let localctx: Column_alias_listContext = new Column_alias_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, MocaSqlParser.RULE_column_alias_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2534;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 2535;
			this.column_alias();
			this.state = 2540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===838) {
				{
				{
				this.state = 2536;
				this.match(MocaSqlParser.COMMA);
				this.state = 2537;
				this.column_alias();
				}
				}
				this.state = 2542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2543;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public column_alias(): Column_aliasContext {
		let localctx: Column_aliasContext = new Column_aliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, MocaSqlParser.RULE_column_alias);
		try {
			this.state = 2547;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
			case 81:
			case 113:
			case 119:
			case 129:
			case 130:
			case 133:
			case 159:
			case 171:
			case 188:
			case 189:
			case 226:
			case 240:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 288:
			case 289:
			case 296:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 362:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 799:
			case 801:
			case 808:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2545;
				this.id();
				}
				break;
			case 811:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2546;
				this.match(MocaSqlParser.STRING);
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
	public table_value_constructor(): Table_value_constructorContext {
		let localctx: Table_value_constructorContext = new Table_value_constructorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, MocaSqlParser.RULE_table_value_constructor);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2549;
			this.match(MocaSqlParser.VALUES);
			this.state = 2550;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 2551;
			this.expression_list();
			this.state = 2552;
			this.match(MocaSqlParser.RR_BRACKET);
			this.state = 2560;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 346, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2553;
					this.match(MocaSqlParser.COMMA);
					this.state = 2554;
					this.match(MocaSqlParser.LR_BRACKET);
					this.state = 2555;
					this.expression_list();
					this.state = 2556;
					this.match(MocaSqlParser.RR_BRACKET);
					}
					}
				}
				this.state = 2562;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 346, this._ctx);
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
	public expression_list(): Expression_listContext {
		let localctx: Expression_listContext = new Expression_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, MocaSqlParser.RULE_expression_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2563;
			this.expression(0);
			this.state = 2568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===838) {
				{
				{
				this.state = 2564;
				this.match(MocaSqlParser.COMMA);
				this.state = 2565;
				this.expression(0);
				}
				}
				this.state = 2570;
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
	public ranking_windowed_function(): Ranking_windowed_functionContext {
		let localctx: Ranking_windowed_functionContext = new Ranking_windowed_functionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, MocaSqlParser.RULE_ranking_windowed_function);
		let _la: number;
		try {
			this.state = 2581;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 471:
			case 663:
			case 697:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2571;
				_la = this._input.LA(1);
				if(!(_la===471 || _la===663 || _la===697)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2572;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2573;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 2574;
				this.over_clause();
				}
				break;
			case 620:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2575;
				this.match(MocaSqlParser.NTILE);
				this.state = 2576;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2577;
				this.expression(0);
				this.state = 2578;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 2579;
				this.over_clause();
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
	public aggregate_windowed_function(): Aggregate_windowed_functionContext {
		let localctx: Aggregate_windowed_functionContext = new Aggregate_windowed_functionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, MocaSqlParser.RULE_aggregate_windowed_function);
		let _la: number;
		try {
			this.state = 2615;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 415:
			case 576:
			case 592:
			case 737:
			case 738:
			case 744:
			case 779:
			case 780:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2583;
				_la = this._input.LA(1);
				if(!(_la===415 || _la===576 || _la===592 || ((((_la - 737)) & ~0x1F) === 0 && ((1 << (_la - 737)) & 131) !== 0) || _la===779 || _la===780)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2584;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2585;
				this.all_distinct_expression();
				this.state = 2586;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 2588;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 349, this._ctx) ) {
				case 1:
					{
					this.state = 2587;
					this.over_clause();
					}
					break;
				}
				}
				break;
			case 445:
			case 446:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2590;
				_la = this._input.LA(1);
				if(!(_la===445 || _la===446)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2591;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2594;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 841:
					{
					this.state = 2592;
					this.match(MocaSqlParser.STAR);
					}
					break;
				case 1:
				case 5:
				case 31:
				case 39:
				case 41:
				case 53:
				case 70:
				case 77:
				case 78:
				case 81:
				case 88:
				case 97:
				case 113:
				case 119:
				case 129:
				case 130:
				case 133:
				case 149:
				case 153:
				case 159:
				case 168:
				case 171:
				case 176:
				case 188:
				case 189:
				case 222:
				case 223:
				case 226:
				case 239:
				case 240:
				case 252:
				case 253:
				case 260:
				case 262:
				case 264:
				case 281:
				case 282:
				case 286:
				case 288:
				case 289:
				case 296:
				case 308:
				case 313:
				case 317:
				case 321:
				case 323:
				case 328:
				case 330:
				case 333:
				case 337:
				case 341:
				case 362:
				case 381:
				case 382:
				case 383:
				case 384:
				case 385:
				case 386:
				case 387:
				case 388:
				case 389:
				case 390:
				case 391:
				case 392:
				case 393:
				case 394:
				case 395:
				case 396:
				case 397:
				case 398:
				case 399:
				case 400:
				case 401:
				case 402:
				case 403:
				case 404:
				case 405:
				case 406:
				case 407:
				case 408:
				case 409:
				case 410:
				case 411:
				case 412:
				case 413:
				case 414:
				case 415:
				case 416:
				case 417:
				case 418:
				case 419:
				case 420:
				case 421:
				case 422:
				case 423:
				case 424:
				case 425:
				case 426:
				case 427:
				case 428:
				case 429:
				case 430:
				case 431:
				case 432:
				case 433:
				case 434:
				case 435:
				case 436:
				case 437:
				case 438:
				case 439:
				case 440:
				case 441:
				case 442:
				case 443:
				case 444:
				case 445:
				case 446:
				case 447:
				case 448:
				case 449:
				case 450:
				case 451:
				case 452:
				case 453:
				case 454:
				case 455:
				case 456:
				case 457:
				case 458:
				case 459:
				case 460:
				case 461:
				case 462:
				case 463:
				case 464:
				case 465:
				case 466:
				case 467:
				case 468:
				case 469:
				case 470:
				case 471:
				case 472:
				case 473:
				case 474:
				case 475:
				case 476:
				case 477:
				case 478:
				case 479:
				case 480:
				case 481:
				case 482:
				case 483:
				case 484:
				case 486:
				case 487:
				case 488:
				case 489:
				case 490:
				case 491:
				case 492:
				case 493:
				case 494:
				case 495:
				case 496:
				case 497:
				case 498:
				case 499:
				case 500:
				case 501:
				case 502:
				case 503:
				case 504:
				case 505:
				case 506:
				case 507:
				case 508:
				case 509:
				case 510:
				case 511:
				case 512:
				case 513:
				case 514:
				case 515:
				case 516:
				case 517:
				case 518:
				case 519:
				case 520:
				case 521:
				case 522:
				case 523:
				case 524:
				case 525:
				case 526:
				case 527:
				case 528:
				case 529:
				case 530:
				case 531:
				case 532:
				case 533:
				case 534:
				case 535:
				case 536:
				case 537:
				case 538:
				case 539:
				case 541:
				case 542:
				case 543:
				case 544:
				case 545:
				case 546:
				case 547:
				case 548:
				case 551:
				case 552:
				case 553:
				case 554:
				case 555:
				case 556:
				case 557:
				case 558:
				case 559:
				case 560:
				case 561:
				case 562:
				case 563:
				case 564:
				case 565:
				case 566:
				case 567:
				case 568:
				case 569:
				case 570:
				case 571:
				case 572:
				case 573:
				case 574:
				case 575:
				case 576:
				case 577:
				case 578:
				case 579:
				case 580:
				case 581:
				case 582:
				case 583:
				case 584:
				case 585:
				case 586:
				case 587:
				case 588:
				case 589:
				case 590:
				case 591:
				case 592:
				case 593:
				case 594:
				case 595:
				case 596:
				case 597:
				case 598:
				case 599:
				case 600:
				case 601:
				case 602:
				case 603:
				case 604:
				case 605:
				case 606:
				case 607:
				case 608:
				case 609:
				case 610:
				case 611:
				case 612:
				case 613:
				case 614:
				case 615:
				case 616:
				case 617:
				case 618:
				case 619:
				case 620:
				case 621:
				case 622:
				case 623:
				case 624:
				case 625:
				case 626:
				case 627:
				case 628:
				case 629:
				case 630:
				case 631:
				case 632:
				case 633:
				case 634:
				case 636:
				case 637:
				case 638:
				case 639:
				case 640:
				case 641:
				case 642:
				case 643:
				case 644:
				case 645:
				case 646:
				case 647:
				case 648:
				case 649:
				case 650:
				case 651:
				case 652:
				case 653:
				case 654:
				case 655:
				case 656:
				case 657:
				case 658:
				case 659:
				case 660:
				case 661:
				case 662:
				case 663:
				case 664:
				case 665:
				case 666:
				case 667:
				case 668:
				case 669:
				case 670:
				case 671:
				case 672:
				case 673:
				case 674:
				case 675:
				case 676:
				case 677:
				case 678:
				case 679:
				case 680:
				case 681:
				case 682:
				case 683:
				case 684:
				case 685:
				case 686:
				case 687:
				case 688:
				case 689:
				case 690:
				case 691:
				case 692:
				case 693:
				case 694:
				case 695:
				case 696:
				case 697:
				case 698:
				case 699:
				case 700:
				case 701:
				case 702:
				case 703:
				case 704:
				case 705:
				case 706:
				case 707:
				case 708:
				case 709:
				case 710:
				case 711:
				case 712:
				case 713:
				case 714:
				case 715:
				case 716:
				case 717:
				case 718:
				case 719:
				case 720:
				case 721:
				case 722:
				case 723:
				case 724:
				case 725:
				case 726:
				case 727:
				case 728:
				case 729:
				case 730:
				case 731:
				case 732:
				case 733:
				case 734:
				case 735:
				case 737:
				case 738:
				case 739:
				case 740:
				case 741:
				case 742:
				case 744:
				case 745:
				case 746:
				case 747:
				case 748:
				case 749:
				case 750:
				case 751:
				case 752:
				case 753:
				case 754:
				case 755:
				case 756:
				case 757:
				case 758:
				case 759:
				case 760:
				case 761:
				case 762:
				case 763:
				case 764:
				case 765:
				case 766:
				case 767:
				case 768:
				case 769:
				case 770:
				case 771:
				case 772:
				case 773:
				case 775:
				case 776:
				case 777:
				case 778:
				case 779:
				case 780:
				case 781:
				case 782:
				case 783:
				case 784:
				case 786:
				case 787:
				case 788:
				case 790:
				case 799:
				case 801:
				case 802:
				case 803:
				case 804:
				case 807:
				case 808:
				case 811:
				case 812:
				case 813:
				case 814:
				case 835:
				case 836:
				case 844:
				case 845:
				case 846:
					{
					this.state = 2593;
					this.all_distinct_expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2596;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 2598;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 351, this._ctx) ) {
				case 1:
					{
					this.state = 2597;
					this.over_clause();
					}
					break;
				}
				}
				break;
			case 434:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2600;
				this.match(MocaSqlParser.CHECKSUM_AGG);
				this.state = 2601;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2602;
				this.all_distinct_expression();
				this.state = 2603;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 527:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2605;
				this.match(MocaSqlParser.GROUPING);
				this.state = 2606;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2607;
				this.expression(0);
				this.state = 2608;
				this.match(MocaSqlParser.RR_BRACKET);
				}
				break;
			case 528:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2610;
				this.match(MocaSqlParser.GROUPING_ID);
				this.state = 2611;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2612;
				this.expression_list();
				this.state = 2613;
				this.match(MocaSqlParser.RR_BRACKET);
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
	public analytic_windowed_function(): Analytic_windowed_functionContext {
		let localctx: Analytic_windowed_functionContext = new Analytic_windowed_functionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, MocaSqlParser.RULE_analytic_windowed_function);
		let _la: number;
		try {
			this.state = 2637;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 512:
			case 559:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2617;
				_la = this._input.LA(1);
				if(!(_la===512 || _la===559)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2618;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2619;
				this.expression(0);
				this.state = 2620;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 2621;
				this.over_clause();
				}
				break;
			case 557:
			case 560:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2623;
				_la = this._input.LA(1);
				if(!(_la===557 || _la===560)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2624;
				this.match(MocaSqlParser.LR_BRACKET);
				this.state = 2625;
				this.expression(0);
				this.state = 2632;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===838) {
					{
					this.state = 2626;
					this.match(MocaSqlParser.COMMA);
					this.state = 2627;
					this.expression(0);
					this.state = 2630;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===838) {
						{
						this.state = 2628;
						this.match(MocaSqlParser.COMMA);
						this.state = 2629;
						this.expression(0);
						}
					}

					}
				}

				this.state = 2634;
				this.match(MocaSqlParser.RR_BRACKET);
				this.state = 2635;
				this.over_clause();
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
	public all_distinct_expression(): All_distinct_expressionContext {
		let localctx: All_distinct_expressionContext = new All_distinct_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, MocaSqlParser.RULE_all_distinct_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5 || _la===97) {
				{
				this.state = 2639;
				_la = this._input.LA(1);
				if(!(_la===5 || _la===97)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 2642;
			this.expression(0);
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
	public over_clause(): Over_clauseContext {
		let localctx: Over_clauseContext = new Over_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, MocaSqlParser.RULE_over_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2644;
			this.match(MocaSqlParser.OVER);
			this.state = 2645;
			this.match(MocaSqlParser.LR_BRACKET);
			this.state = 2649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===639) {
				{
				this.state = 2646;
				this.match(MocaSqlParser.PARTITION);
				this.state = 2647;
				this.match(MocaSqlParser.BY);
				this.state = 2648;
				this.expression_list();
				}
			}

			this.state = 2652;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===237) {
				{
				this.state = 2651;
				this.order_by_clause();
				}
			}

			this.state = 2655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===662 || _la===699) {
				{
				this.state = 2654;
				this.row_or_range_clause();
				}
			}

			this.state = 2657;
			this.match(MocaSqlParser.RR_BRACKET);
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
	public row_or_range_clause(): Row_or_range_clauseContext {
		let localctx: Row_or_range_clauseContext = new Row_or_range_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, MocaSqlParser.RULE_row_or_range_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2659;
			_la = this._input.LA(1);
			if(!(_la===662 || _la===699)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2660;
			this.window_frame_extent();
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
	public window_frame_extent(): Window_frame_extentContext {
		let localctx: Window_frame_extentContext = new Window_frame_extentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, MocaSqlParser.RULE_window_frame_extent);
		try {
			this.state = 2668;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 74:
			case 770:
			case 807:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2662;
				this.window_frame_preceding();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2663;
				this.match(MocaSqlParser.BETWEEN);
				this.state = 2664;
				this.window_frame_bound();
				this.state = 2665;
				this.match(MocaSqlParser.AND);
				this.state = 2666;
				this.window_frame_bound();
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
	public window_frame_bound(): Window_frame_boundContext {
		let localctx: Window_frame_boundContext = new Window_frame_boundContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, MocaSqlParser.RULE_window_frame_bound);
		try {
			this.state = 2672;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 361, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2670;
				this.window_frame_preceding();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2671;
				this.window_frame_following();
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
	public window_frame_preceding(): Window_frame_precedingContext {
		let localctx: Window_frame_precedingContext = new Window_frame_precedingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, MocaSqlParser.RULE_window_frame_preceding);
		try {
			this.state = 2680;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 770:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2674;
				this.match(MocaSqlParser.UNBOUNDED);
				this.state = 2675;
				this.match(MocaSqlParser.PRECEDING);
				}
				break;
			case 807:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2676;
				this.match(MocaSqlParser.DECIMAL);
				this.state = 2677;
				this.match(MocaSqlParser.PRECEDING);
				}
				break;
			case 74:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2678;
				this.match(MocaSqlParser.CURRENT);
				this.state = 2679;
				this.match(MocaSqlParser.ROW);
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
	public window_frame_following(): Window_frame_followingContext {
		let localctx: Window_frame_followingContext = new Window_frame_followingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, MocaSqlParser.RULE_window_frame_following);
		try {
			this.state = 2686;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 770:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2682;
				this.match(MocaSqlParser.UNBOUNDED);
				this.state = 2683;
				this.match(MocaSqlParser.FOLLOWING);
				}
				break;
			case 807:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2684;
				this.match(MocaSqlParser.DECIMAL);
				this.state = 2685;
				this.match(MocaSqlParser.FOLLOWING);
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
	public full_table_name(): Full_table_nameContext {
		let localctx: Full_table_nameContext = new Full_table_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, MocaSqlParser.RULE_full_table_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2705;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 365, this._ctx) ) {
			case 1:
				{
				this.state = 2688;
				localctx._server = this.id();
				this.state = 2689;
				this.match(MocaSqlParser.DOT);
				this.state = 2690;
				localctx._database = this.id();
				this.state = 2691;
				this.match(MocaSqlParser.DOT);
				this.state = 2692;
				localctx._schema = this.id();
				this.state = 2693;
				this.match(MocaSqlParser.DOT);
				}
				break;
			case 2:
				{
				this.state = 2695;
				localctx._database = this.id();
				this.state = 2696;
				this.match(MocaSqlParser.DOT);
				this.state = 2698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===39 || _la===81 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1610616833) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 201342977) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 811597845) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 169873409) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8229) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1084233599) !== 0)) {
					{
					this.state = 2697;
					localctx._schema = this.id();
					}
				}

				this.state = 2700;
				this.match(MocaSqlParser.DOT);
				}
				break;
			case 3:
				{
				this.state = 2702;
				localctx._schema = this.id();
				this.state = 2703;
				this.match(MocaSqlParser.DOT);
				}
				break;
			}
			this.state = 2707;
			localctx._table = this.id();
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
	public table_name(): Table_nameContext {
		let localctx: Table_nameContext = new Table_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, MocaSqlParser.RULE_table_name);
		let _la: number;
		try {
			this.state = 2735;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 370, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2719;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 367, this._ctx) ) {
				case 1:
					{
					this.state = 2709;
					localctx._database = this.id();
					this.state = 2710;
					this.match(MocaSqlParser.DOT);
					this.state = 2712;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===39 || _la===81 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1610616833) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 201342977) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 811597845) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 169873409) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8229) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1084233599) !== 0)) {
						{
						this.state = 2711;
						localctx._schema = this.id();
						}
					}

					this.state = 2714;
					this.match(MocaSqlParser.DOT);
					}
					break;
				case 2:
					{
					this.state = 2716;
					localctx._schema = this.id();
					this.state = 2717;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 2721;
				localctx._table = this.id();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2732;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 369, this._ctx) ) {
				case 1:
					{
					this.state = 2722;
					localctx._database = this.id();
					this.state = 2723;
					this.match(MocaSqlParser.DOT);
					this.state = 2725;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===39 || _la===81 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1610616833) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 201342977) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 811597845) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 169873409) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8229) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1084233599) !== 0)) {
						{
						this.state = 2724;
						localctx._schema = this.id();
						}
					}

					this.state = 2727;
					this.match(MocaSqlParser.DOT);
					}
					break;
				case 2:
					{
					this.state = 2729;
					localctx._schema = this.id();
					this.state = 2730;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 2734;
				this.match(MocaSqlParser.BLOCKING_HIERARCHY);
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
	public simple_name(): Simple_nameContext {
		let localctx: Simple_nameContext = new Simple_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, MocaSqlParser.RULE_simple_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2740;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 371, this._ctx) ) {
			case 1:
				{
				this.state = 2737;
				localctx._schema = this.id();
				this.state = 2738;
				this.match(MocaSqlParser.DOT);
				}
				break;
			}
			this.state = 2742;
			localctx._name = this.id();
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
	public func_proc_name_schema(): Func_proc_name_schemaContext {
		let localctx: Func_proc_name_schemaContext = new Func_proc_name_schemaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, MocaSqlParser.RULE_func_proc_name_schema);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2747;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 372, this._ctx) ) {
			case 1:
				{
				{
				this.state = 2744;
				localctx._schema = this.id();
				}
				this.state = 2745;
				this.match(MocaSqlParser.DOT);
				}
				break;
			}
			this.state = 2749;
			localctx._procedure = this.id();
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
	public func_proc_name_database_schema(): Func_proc_name_database_schemaContext {
		let localctx: Func_proc_name_database_schemaContext = new Func_proc_name_database_schemaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 280, MocaSqlParser.RULE_func_proc_name_database_schema);
		let _la: number;
		try {
			this.state = 2762;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 375, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2751;
				this.func_proc_name_schema();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2759;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 374, this._ctx) ) {
				case 1:
					{
					this.state = 2752;
					localctx._database = this.id();
					this.state = 2753;
					this.match(MocaSqlParser.DOT);
					this.state = 2755;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===39 || _la===81 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1610616833) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 201342977) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 811597845) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 169873409) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8229) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1084233599) !== 0)) {
						{
						this.state = 2754;
						localctx._schema = this.id();
						}
					}

					this.state = 2757;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 2761;
				localctx._procedure = this.id();
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
	public func_proc_name_server_database_schema(): Func_proc_name_server_database_schemaContext {
		let localctx: Func_proc_name_server_database_schemaContext = new Func_proc_name_server_database_schemaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, MocaSqlParser.RULE_func_proc_name_server_database_schema);
		let _la: number;
		try {
			this.state = 2777;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 378, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2764;
				this.func_proc_name_database_schema();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2774;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 377, this._ctx) ) {
				case 1:
					{
					this.state = 2765;
					localctx._server = this.id();
					this.state = 2766;
					this.match(MocaSqlParser.DOT);
					this.state = 2767;
					localctx._database = this.id();
					this.state = 2768;
					this.match(MocaSqlParser.DOT);
					this.state = 2770;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===39 || _la===81 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1610616833) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 201342977) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 811597845) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 169873409) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8229) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1084233599) !== 0)) {
						{
						this.state = 2769;
						localctx._schema = this.id();
						}
					}

					this.state = 2772;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 2776;
				localctx._procedure = this.id();
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
	public ddl_object(): Ddl_objectContext {
		let localctx: Ddl_objectContext = new Ddl_objectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, MocaSqlParser.RULE_ddl_object);
		try {
			this.state = 2781;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
			case 81:
			case 113:
			case 119:
			case 129:
			case 130:
			case 133:
			case 159:
			case 171:
			case 188:
			case 189:
			case 226:
			case 240:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 288:
			case 289:
			case 296:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 362:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 799:
			case 801:
			case 808:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2779;
				this.full_table_name();
				}
				break;
			case 802:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2780;
				this.match(MocaSqlParser.LOCAL_ID);
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
	public full_column_name(): Full_column_nameContext {
		let localctx: Full_column_nameContext = new Full_column_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, MocaSqlParser.RULE_full_column_name);
		try {
			this.state = 2831;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 388, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2786;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
				case 1:
					{
					this.state = 2783;
					this.table_name();
					this.state = 2784;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 2788;
				localctx._column_name = this.id();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2792;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 381, this._ctx) ) {
				case 1:
					{
					this.state = 2789;
					this.table_name();
					this.state = 2790;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 2794;
				this.match(MocaSqlParser.COMPATIBILITY_LEVEL);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2798;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 382, this._ctx) ) {
				case 1:
					{
					this.state = 2795;
					this.table_name();
					this.state = 2796;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 2800;
				this.match(MocaSqlParser.STATUS);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2804;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 383, this._ctx) ) {
				case 1:
					{
					this.state = 2801;
					this.table_name();
					this.state = 2802;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 2806;
				this.match(MocaSqlParser.QUOTED_IDENTIFIER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2810;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 384, this._ctx) ) {
				case 1:
					{
					this.state = 2807;
					this.table_name();
					this.state = 2808;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 2812;
				this.match(MocaSqlParser.ARITHABORT);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2816;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 385, this._ctx) ) {
				case 1:
					{
					this.state = 2813;
					this.table_name();
					this.state = 2814;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 2818;
				this.match(MocaSqlParser.ANSI_WARNINGS);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2822;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 386, this._ctx) ) {
				case 1:
					{
					this.state = 2819;
					this.table_name();
					this.state = 2820;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 2824;
				this.match(MocaSqlParser.ANSI_PADDING);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2828;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 387, this._ctx) ) {
				case 1:
					{
					this.state = 2825;
					this.table_name();
					this.state = 2826;
					this.match(MocaSqlParser.DOT);
					}
					break;
				}
				this.state = 2830;
				this.match(MocaSqlParser.ANSI_NULLS);
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
	public column_name_list_with_order(): Column_name_list_with_orderContext {
		let localctx: Column_name_list_with_orderContext = new Column_name_list_with_orderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, MocaSqlParser.RULE_column_name_list_with_order);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2833;
			this.id();
			this.state = 2835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16 || _la===93) {
				{
				this.state = 2834;
				_la = this._input.LA(1);
				if(!(_la===16 || _la===93)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 2844;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===838) {
				{
				{
				this.state = 2837;
				this.match(MocaSqlParser.COMMA);
				this.state = 2838;
				this.id();
				this.state = 2840;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16 || _la===93) {
					{
					this.state = 2839;
					_la = this._input.LA(1);
					if(!(_la===16 || _la===93)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				}
				}
				this.state = 2846;
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
	public column_name_list(): Column_name_listContext {
		let localctx: Column_name_listContext = new Column_name_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, MocaSqlParser.RULE_column_name_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2847;
			this.id();
			this.state = 2852;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===838) {
				{
				{
				this.state = 2848;
				this.match(MocaSqlParser.COMMA);
				this.state = 2849;
				this.id();
				}
				}
				this.state = 2854;
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
	public cursor_name(): Cursor_nameContext {
		let localctx: Cursor_nameContext = new Cursor_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, MocaSqlParser.RULE_cursor_name);
		try {
			this.state = 2857;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
			case 81:
			case 113:
			case 119:
			case 129:
			case 130:
			case 133:
			case 159:
			case 171:
			case 188:
			case 189:
			case 226:
			case 240:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 288:
			case 289:
			case 296:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 362:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 799:
			case 801:
			case 808:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2855;
				this.id();
				}
				break;
			case 802:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2856;
				this.match(MocaSqlParser.LOCAL_ID);
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
	public on_off(): On_offContext {
		let localctx: On_offContext = new On_offContext(this, this._ctx, this.state);
		this.enterRule(localctx, 294, MocaSqlParser.RULE_on_off);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2859;
			_la = this._input.LA(1);
			if(!(_la===225 || _la===228)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public clustered(): ClusteredContext {
		let localctx: ClusteredContext = new ClusteredContext(this, this._ctx, this.state);
		this.enterRule(localctx, 296, MocaSqlParser.RULE_clustered);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2861;
			_la = this._input.LA(1);
			if(!(_la===52 || _la===211)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public null_notnull(): Null_notnullContext {
		let localctx: Null_notnullContext = new Null_notnullContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, MocaSqlParser.RULE_null_notnull);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2864;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===219) {
				{
				this.state = 2863;
				this.match(MocaSqlParser.NOT);
				}
			}

			this.state = 2866;
			this.match(MocaSqlParser.NULL);
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
	public null_or_default(): Null_or_defaultContext {
		let localctx: Null_or_defaultContext = new Null_or_defaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 300, MocaSqlParser.RULE_null_or_default);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2875;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 219:
			case 222:
				{
				this.state = 2868;
				this.null_notnull();
				}
				break;
			case 88:
				{
				this.state = 2869;
				this.match(MocaSqlParser.DEFAULT);
				this.state = 2870;
				this.constant_expression();
				this.state = 2873;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 395, this._ctx) ) {
				case 1:
					{
					this.state = 2871;
					this.match(MocaSqlParser.WITH);
					this.state = 2872;
					this.match(MocaSqlParser.VALUES);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public scalar_function_name(): Scalar_function_nameContext {
		let localctx: Scalar_function_nameContext = new Scalar_function_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 302, MocaSqlParser.RULE_scalar_function_name);
		try {
			this.state = 2882;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 397, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2877;
				this.func_proc_name_server_database_schema();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2878;
				this.match(MocaSqlParser.RIGHT);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2879;
				this.match(MocaSqlParser.LEFT);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2880;
				this.match(MocaSqlParser.BINARY_CHECKSUM);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2881;
				this.match(MocaSqlParser.CHECKSUM);
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
	public data_type(): Data_typeContext {
		let localctx: Data_typeContext = new Data_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 304, MocaSqlParser.RULE_data_type);
		let _la: number;
		try {
			this.state = 2905;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 402, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2884;
				this.id();
				this.state = 2886;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 398, this._ctx) ) {
				case 1:
					{
					this.state = 2885;
					this.match(MocaSqlParser.IDENTITY);
					}
					break;
				}
				this.state = 2895;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 400, this._ctx) ) {
				case 1:
					{
					this.state = 2888;
					this.match(MocaSqlParser.LR_BRACKET);
					this.state = 2889;
					_la = this._input.LA(1);
					if(!(_la===576 || _la===807)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 2892;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===838) {
						{
						this.state = 2890;
						this.match(MocaSqlParser.COMMA);
						this.state = 2891;
						this.match(MocaSqlParser.DECIMAL);
						}
					}

					this.state = 2894;
					this.match(MocaSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2897;
				this.match(MocaSqlParser.DOUBLE);
				this.state = 2899;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 401, this._ctx) ) {
				case 1:
					{
					this.state = 2898;
					this.match(MocaSqlParser.PRECISION);
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2901;
				this.match(MocaSqlParser.INT);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2902;
				this.match(MocaSqlParser.TINYINT);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2903;
				this.match(MocaSqlParser.SMALLINT);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2904;
				this.match(MocaSqlParser.BIGINT);
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
	public constant(): ConstantContext {
		let localctx: ConstantContext = new ConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 306, MocaSqlParser.RULE_constant);
		let _la: number;
		try {
			this.state = 2922;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 406, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2907;
				this.match(MocaSqlParser.STRING);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2908;
				this.match(MocaSqlParser.BINARY);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2910;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===844 || _la===845) {
					{
					this.state = 2909;
					this.sign();
					}
				}

				this.state = 2912;
				this.match(MocaSqlParser.DECIMAL);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===844 || _la===845) {
					{
					this.state = 2913;
					this.sign();
					}
				}

				this.state = 2916;
				_la = this._input.LA(1);
				if(!(_la===813 || _la===814)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2918;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===844 || _la===845) {
					{
					this.state = 2917;
					this.sign();
					}
				}

				this.state = 2920;
				localctx._dollar = this.match(MocaSqlParser.DOLLAR);
				this.state = 2921;
				_la = this._input.LA(1);
				if(!(_la===807 || _la===813)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
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
	public sign(): SignContext {
		let localctx: SignContext = new SignContext(this, this._ctx, this.state);
		this.enterRule(localctx, 308, MocaSqlParser.RULE_sign);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2924;
			_la = this._input.LA(1);
			if(!(_la===844 || _la===845)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public id(): IdContext {
		let localctx: IdContext = new IdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 310, MocaSqlParser.RULE_id);
		try {
			this.state = 2929;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
			case 81:
			case 113:
			case 119:
			case 129:
			case 130:
			case 133:
			case 159:
			case 171:
			case 188:
			case 189:
			case 226:
			case 240:
			case 252:
			case 253:
			case 260:
			case 262:
			case 264:
			case 281:
			case 282:
			case 288:
			case 289:
			case 296:
			case 308:
			case 317:
			case 321:
			case 323:
			case 328:
			case 330:
			case 333:
			case 341:
			case 362:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
			case 586:
			case 587:
			case 588:
			case 589:
			case 590:
			case 591:
			case 592:
			case 593:
			case 594:
			case 595:
			case 596:
			case 597:
			case 598:
			case 599:
			case 600:
			case 601:
			case 602:
			case 603:
			case 604:
			case 605:
			case 606:
			case 607:
			case 608:
			case 609:
			case 610:
			case 611:
			case 612:
			case 613:
			case 614:
			case 615:
			case 616:
			case 617:
			case 618:
			case 619:
			case 620:
			case 621:
			case 622:
			case 623:
			case 624:
			case 625:
			case 626:
			case 627:
			case 628:
			case 629:
			case 630:
			case 631:
			case 632:
			case 633:
			case 634:
			case 636:
			case 637:
			case 638:
			case 639:
			case 640:
			case 641:
			case 642:
			case 643:
			case 644:
			case 645:
			case 646:
			case 647:
			case 648:
			case 649:
			case 650:
			case 651:
			case 652:
			case 653:
			case 654:
			case 655:
			case 656:
			case 657:
			case 658:
			case 659:
			case 660:
			case 661:
			case 662:
			case 663:
			case 664:
			case 665:
			case 666:
			case 667:
			case 668:
			case 669:
			case 670:
			case 671:
			case 672:
			case 673:
			case 674:
			case 675:
			case 676:
			case 677:
			case 678:
			case 679:
			case 680:
			case 681:
			case 682:
			case 683:
			case 684:
			case 685:
			case 686:
			case 687:
			case 688:
			case 689:
			case 690:
			case 691:
			case 692:
			case 693:
			case 694:
			case 695:
			case 696:
			case 697:
			case 698:
			case 699:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704:
			case 705:
			case 706:
			case 707:
			case 708:
			case 709:
			case 710:
			case 711:
			case 712:
			case 713:
			case 714:
			case 715:
			case 716:
			case 717:
			case 718:
			case 719:
			case 720:
			case 721:
			case 722:
			case 723:
			case 724:
			case 725:
			case 726:
			case 727:
			case 728:
			case 729:
			case 730:
			case 731:
			case 732:
			case 733:
			case 734:
			case 735:
			case 737:
			case 738:
			case 739:
			case 740:
			case 741:
			case 742:
			case 744:
			case 745:
			case 746:
			case 747:
			case 748:
			case 749:
			case 750:
			case 751:
			case 752:
			case 753:
			case 754:
			case 755:
			case 756:
			case 757:
			case 758:
			case 759:
			case 760:
			case 761:
			case 762:
			case 763:
			case 764:
			case 765:
			case 766:
			case 767:
			case 768:
			case 769:
			case 770:
			case 771:
			case 772:
			case 773:
			case 775:
			case 776:
			case 777:
			case 778:
			case 779:
			case 780:
			case 781:
			case 782:
			case 783:
			case 784:
			case 786:
			case 787:
			case 788:
			case 790:
			case 808:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2926;
				this.simple_id();
				}
				break;
			case 799:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2927;
				this.match(MocaSqlParser.DOUBLE_QUOTE_ID);
				}
				break;
			case 801:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2928;
				this.match(MocaSqlParser.SQUARE_BRACKET_ID);
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
	public simple_id(): Simple_idContext {
		let localctx: Simple_idContext = new Simple_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 312, MocaSqlParser.RULE_simple_id);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2931;
			_la = this._input.LA(1);
			if(!(_la===39 || _la===81 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 1245249) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1610616833) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 201342977) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 811597845) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & 169873409) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 8229) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294443009) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 4294967295) !== 0) || ((((_la - 426)) & ~0x1F) === 0 && ((1 << (_la - 426)) & 4294967295) !== 0) || ((((_la - 458)) & ~0x1F) === 0 && ((1 << (_la - 458)) & 4160749567) !== 0) || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 4294967295) !== 0) || ((((_la - 522)) & ~0x1F) === 0 && ((1 << (_la - 522)) & 3892051967) !== 0) || ((((_la - 554)) & ~0x1F) === 0 && ((1 << (_la - 554)) & 4294967295) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 4294967295) !== 0) || ((((_la - 618)) & ~0x1F) === 0 && ((1 << (_la - 618)) & 4294836223) !== 0) || ((((_la - 650)) & ~0x1F) === 0 && ((1 << (_la - 650)) & 4294967295) !== 0) || ((((_la - 682)) & ~0x1F) === 0 && ((1 << (_la - 682)) & 4294967295) !== 0) || ((((_la - 714)) & ~0x1F) === 0 && ((1 << (_la - 714)) & 3753902079) !== 0) || ((((_la - 746)) & ~0x1F) === 0 && ((1 << (_la - 746)) & 4026531839) !== 0) || ((((_la - 778)) & ~0x1F) === 0 && ((1 << (_la - 778)) & 1073747839) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public comparison_operator(): Comparison_operatorContext {
		let localctx: Comparison_operatorContext = new Comparison_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 314, MocaSqlParser.RULE_comparison_operator);
		try {
			this.state = 2943;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 408, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2933;
				this.match(MocaSqlParser.EQUAL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2934;
				this.match(MocaSqlParser.LESS);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2935;
				this.match(MocaSqlParser.GREATER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2936;
				this.match(MocaSqlParser.LESS_EQUAL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2937;
				this.match(MocaSqlParser.GREATER_EQUAL);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2938;
				this.match(MocaSqlParser.NOT_EQUAL);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2939;
				this.match(MocaSqlParser.EXCLAMATION);
				this.state = 2940;
				this.match(MocaSqlParser.GREATER);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2941;
				this.match(MocaSqlParser.EXCLAMATION);
				this.state = 2942;
				this.match(MocaSqlParser.LESS);
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
	public assignment_operator(): Assignment_operatorContext {
		let localctx: Assignment_operatorContext = new Assignment_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 316, MocaSqlParser.RULE_assignment_operator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2945;
			_la = this._input.LA(1);
			if(!(((((_la - 822)) & ~0x1F) === 0 && ((1 << (_la - 822)) & 255) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 48:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
		case 4:
			return this.precpred(this._ctx, 10);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,850,2948,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,
	7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
	7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,
	7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,
	7,157,2,158,7,158,1,0,5,0,320,8,0,10,0,12,0,323,9,0,1,0,1,0,1,1,1,1,1,2,
	1,2,3,2,331,8,2,4,2,333,8,2,11,2,12,2,334,1,3,1,3,3,3,339,8,3,1,4,1,4,1,
	4,1,4,3,4,345,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,357,8,5,1,
	6,1,6,1,6,1,6,3,6,363,8,6,1,6,3,6,366,8,6,1,6,1,6,1,6,3,6,371,8,6,1,6,1,
	6,1,6,3,6,376,8,6,1,6,3,6,379,8,6,1,7,1,7,1,7,1,7,1,7,3,7,386,8,7,1,7,1,
	7,1,7,1,7,3,7,392,8,7,3,7,394,8,7,1,7,1,7,1,7,3,7,399,8,7,1,7,1,7,1,7,1,
	7,3,7,405,8,7,1,7,1,7,1,7,1,7,3,7,411,8,7,1,7,1,7,1,7,3,7,416,8,7,1,7,1,
	7,1,7,1,7,3,7,422,8,7,1,8,1,8,1,8,1,8,1,8,3,8,429,8,8,1,8,1,8,1,8,3,8,434,
	8,8,1,8,1,8,1,8,3,8,439,8,8,1,8,1,8,1,8,3,8,444,8,8,1,8,3,8,447,8,8,1,8,
	1,8,3,8,451,8,8,1,8,1,8,3,8,455,8,8,1,8,1,8,3,8,459,8,8,1,8,1,8,3,8,463,
	8,8,1,8,1,8,1,8,3,8,468,8,8,1,8,1,8,3,8,472,8,8,1,8,1,8,3,8,476,8,8,1,9,
	3,9,479,8,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,487,8,9,1,9,1,9,3,9,491,8,9,1,9,
	3,9,494,8,9,1,9,1,9,3,9,498,8,9,1,9,3,9,501,8,9,1,9,1,9,3,9,505,8,9,1,9,
	1,9,1,9,1,9,1,9,3,9,512,8,9,1,9,1,9,3,9,516,8,9,3,9,518,8,9,3,9,520,8,9,
	1,9,3,9,523,8,9,1,9,3,9,526,8,9,1,9,3,9,529,8,9,1,10,1,10,1,10,1,10,3,10,
	535,8,10,1,11,3,11,538,8,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,546,8,11,
	3,11,548,8,11,1,11,3,11,551,8,11,1,11,1,11,3,11,555,8,11,1,11,3,11,558,
	8,11,1,11,1,11,1,11,1,11,3,11,564,8,11,1,11,3,11,567,8,11,1,11,1,11,3,11,
	571,8,11,1,11,3,11,574,8,11,1,11,3,11,577,8,11,1,12,1,12,1,12,1,12,1,12,
	3,12,584,8,12,1,13,3,13,587,8,13,1,13,1,13,3,13,591,8,13,1,13,3,13,594,
	8,13,1,13,3,13,597,8,13,1,13,3,13,600,8,13,1,14,3,14,603,8,14,1,14,1,14,
	1,14,1,14,1,14,1,14,3,14,611,8,14,3,14,613,8,14,1,14,1,14,3,14,617,8,14,
	1,14,3,14,620,8,14,1,14,1,14,1,14,1,14,5,14,626,8,14,10,14,12,14,629,9,
	14,1,14,3,14,632,8,14,1,14,1,14,3,14,636,8,14,1,14,1,14,1,14,1,14,1,14,
	3,14,643,8,14,1,14,1,14,3,14,647,8,14,3,14,649,8,14,3,14,651,8,14,1,14,
	3,14,654,8,14,1,14,3,14,657,8,14,1,14,3,14,660,8,14,1,15,1,15,1,15,1,15,
	5,15,666,8,15,10,15,12,15,669,9,15,1,15,1,15,1,15,3,15,674,8,15,1,15,1,
	15,1,15,1,15,3,15,680,8,15,3,15,682,8,15,1,16,1,16,3,16,686,8,16,1,16,3,
	16,689,8,16,1,17,1,17,1,17,3,17,694,8,17,1,17,1,17,1,17,3,17,699,8,17,1,
	17,3,17,702,8,17,1,18,1,18,3,18,706,8,18,1,18,3,18,709,8,18,1,18,1,18,1,
	18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,723,8,18,1,18,1,18,
	3,18,727,8,18,1,18,3,18,730,8,18,1,18,1,18,3,18,734,8,18,1,18,3,18,737,
	8,18,1,19,1,19,1,19,1,19,1,19,1,19,3,19,745,8,19,1,19,1,19,1,19,3,19,750,
	8,19,1,19,5,19,753,8,19,10,19,12,19,756,9,19,1,19,1,19,1,19,3,19,761,8,
	19,1,19,1,19,1,19,3,19,766,8,19,1,19,3,19,769,8,19,1,20,1,20,1,20,1,20,
	1,20,5,20,776,8,20,10,20,12,20,779,9,20,1,20,1,20,1,20,1,20,1,20,5,20,786,
	8,20,10,20,12,20,789,9,20,3,20,791,8,20,1,21,1,21,1,21,1,21,1,21,1,21,1,
	21,3,21,800,8,21,1,21,1,21,1,21,1,21,5,21,806,8,21,10,21,12,21,809,9,21,
	3,21,811,8,21,1,21,1,21,1,21,1,21,1,21,3,21,818,8,21,1,21,3,21,821,8,21,
	1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
	23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,
	1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
	23,3,23,867,8,23,1,23,1,23,3,23,871,8,23,1,23,3,23,874,8,23,1,24,1,24,1,
	24,1,24,1,24,1,24,1,24,1,24,3,24,884,8,24,3,24,886,8,24,1,25,1,25,1,25,
	1,25,3,25,892,8,25,1,25,1,25,1,25,5,25,897,8,25,10,25,12,25,900,9,25,1,
	25,1,25,1,25,5,25,905,8,25,10,25,12,25,908,9,25,3,25,910,8,25,1,25,3,25,
	913,8,25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,3,27,922,8,27,1,27,1,27,1,27,
	1,27,1,28,1,28,1,28,1,28,3,28,932,8,28,1,28,1,28,3,28,936,8,28,1,29,1,29,
	1,29,1,29,3,29,942,8,29,1,29,1,29,1,29,5,29,947,8,29,10,29,12,29,950,9,
	29,1,29,3,29,953,8,29,1,30,1,30,3,30,957,8,30,1,31,1,31,1,31,1,31,1,31,
	1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,974,8,32,1,32,1,
	32,3,32,978,8,32,1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,3,34,988,8,34,
	1,34,1,34,3,34,992,8,34,1,34,1,34,1,34,5,34,997,8,34,10,34,12,34,1000,9,
	34,3,34,1002,8,34,1,34,3,34,1005,8,34,1,34,1,34,1,34,1,34,5,34,1011,8,34,
	10,34,12,34,1014,9,34,1,34,1,34,3,34,1018,8,34,1,34,1,34,1,34,3,34,1023,
	8,34,1,34,3,34,1026,8,34,3,34,1028,8,34,1,35,1,35,3,35,1032,8,35,1,35,1,
	35,3,35,1036,8,35,1,35,3,35,1039,8,35,1,35,1,35,3,35,1043,8,35,1,36,1,36,
	1,37,1,37,3,37,1049,8,37,1,37,5,37,1052,8,37,10,37,12,37,1055,9,37,1,38,
	1,38,1,38,3,38,1060,8,38,1,39,1,39,1,39,1,39,3,39,1066,8,39,1,39,1,39,3,
	39,1070,8,39,1,39,3,39,1073,8,39,1,39,1,39,3,39,1077,8,39,1,39,1,39,3,39,
	1081,8,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,1089,8,39,1,39,1,39,1,39,3,
	39,1094,8,39,3,39,1096,8,39,1,39,3,39,1099,8,39,1,39,5,39,1102,8,39,10,
	39,12,39,1105,9,39,1,40,1,40,1,40,1,40,1,40,1,40,3,40,1113,8,40,1,41,1,
	41,3,41,1117,8,41,1,41,1,41,1,41,3,41,1122,8,41,1,41,3,41,1125,8,41,1,41,
	3,41,1128,8,41,1,41,1,41,1,41,1,41,3,41,1134,8,41,1,41,1,41,1,41,1,41,1,
	41,1,41,3,41,1142,8,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,1150,8,41,1,41,
	3,41,1153,8,41,1,41,3,41,1156,8,41,1,42,1,42,3,42,1160,8,42,1,42,1,42,1,
	42,3,42,1165,8,42,1,42,3,42,1168,8,42,1,42,1,42,1,42,1,42,3,42,1174,8,42,
	1,42,1,42,3,42,1178,8,42,1,42,1,42,1,42,1,42,3,42,1184,8,42,1,42,1,42,1,
	42,1,42,1,42,1,42,3,42,1192,8,42,1,42,1,42,1,42,1,42,4,42,1198,8,42,11,
	42,12,42,1199,1,42,3,42,1203,8,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,
	42,1,42,1,42,1,42,1,42,1,42,3,42,1218,8,42,1,42,3,42,1221,8,42,1,42,3,42,
	1224,8,42,3,42,1226,8,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,
	43,1237,8,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,3,44,1248,8,44,
	1,45,1,45,1,45,1,45,1,45,5,45,1255,8,45,10,45,12,45,1258,9,45,1,45,1,45,
	1,46,1,46,1,46,1,46,1,46,3,46,1267,8,46,1,47,1,47,3,47,1271,8,47,1,48,1,
	48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,1285,8,48,1,48,
	1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
	48,1,48,5,48,1304,8,48,10,48,12,48,1307,9,48,1,49,1,49,1,49,3,49,1312,8,
	49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1322,8,49,3,49,1324,8,49,
	1,50,1,50,1,51,1,51,1,51,3,51,1331,8,51,1,51,1,51,1,51,1,51,1,51,1,51,1,
	51,1,51,3,51,1341,8,51,3,51,1343,8,51,1,52,1,52,1,52,3,52,1348,8,52,1,52,
	1,52,1,52,1,52,3,52,1354,8,52,1,53,1,53,1,54,1,54,1,54,1,55,1,55,1,55,1,
	55,3,55,1365,8,55,1,56,1,56,1,56,4,56,1370,8,56,11,56,12,56,1371,1,56,1,
	56,3,56,1376,8,56,1,56,1,56,1,56,1,56,4,56,1382,8,56,11,56,12,56,1383,1,
	56,1,56,3,56,1388,8,56,1,56,1,56,3,56,1392,8,56,1,57,1,57,1,57,1,57,3,57,
	1398,8,57,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,3,58,1408,8,58,1,59,1,
	59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,1418,8,59,1,60,1,60,1,61,1,61,1,61,
	3,61,1425,8,61,1,61,1,61,1,61,5,61,1430,8,61,10,61,12,61,1433,9,61,1,61,
	1,61,1,61,1,61,1,61,1,61,3,61,1441,8,61,1,61,1,61,1,61,1,61,1,61,3,61,1448,
	8,61,1,62,1,62,1,62,1,62,1,62,3,62,1455,8,62,1,62,1,62,1,62,1,62,1,62,1,
	63,1,63,3,63,1464,8,63,1,63,1,63,3,63,1468,8,63,1,63,1,63,1,63,1,63,1,63,
	1,63,1,63,1,63,3,63,1478,8,63,1,64,1,64,1,64,5,64,1483,8,64,10,64,12,64,
	1486,9,64,1,65,1,65,1,65,5,65,1491,8,65,10,65,12,65,1494,9,65,1,66,1,66,
	1,66,5,66,1499,8,66,10,66,12,66,1502,9,66,1,67,3,67,1505,8,67,1,67,1,67,
	1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,
	68,1,68,1,68,1,68,3,68,1527,8,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,3,68,
	1536,8,68,1,68,1,68,1,68,1,68,3,68,1542,8,68,1,68,1,68,1,68,1,68,3,68,1548,
	8,68,1,68,1,68,1,68,1,68,3,68,1554,8,68,1,68,1,68,1,68,1,68,1,68,1,68,1,
	68,1,68,1,68,3,68,1565,8,68,1,68,1,68,1,68,1,68,1,68,3,68,1572,8,68,1,68,
	1,68,1,68,1,68,1,68,1,68,3,68,1580,8,68,1,69,1,69,1,69,1,69,1,69,3,69,1587,
	8,69,1,69,5,69,1590,8,69,10,69,12,69,1593,9,69,1,70,1,70,3,70,1597,8,70,
	1,70,1,70,3,70,1601,8,70,1,70,1,70,1,70,1,70,1,70,3,70,1608,8,70,1,71,1,
	71,3,71,1612,8,71,1,71,3,71,1615,8,71,1,71,1,71,1,71,3,71,1620,8,71,1,71,
	1,71,3,71,1624,8,71,1,71,1,71,3,71,1628,8,71,1,71,1,71,1,71,3,71,1633,8,
	71,1,71,1,71,1,71,5,71,1638,8,71,10,71,12,71,1641,9,71,3,71,1643,8,71,1,
	71,1,71,3,71,1647,8,71,1,72,1,72,1,72,3,72,1652,8,72,1,72,1,72,3,72,1656,
	8,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,3,73,1665,8,73,1,74,1,74,1,74,1,
	74,1,74,3,74,1672,8,74,1,75,1,75,1,75,1,75,1,75,5,75,1679,8,75,10,75,12,
	75,1682,9,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,3,75,1693,8,75,
	3,75,1695,8,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,1705,8,76,1,
	76,3,76,1708,8,76,1,76,5,76,1711,8,76,10,76,12,76,1714,9,76,1,76,1,76,1,
	76,1,76,1,76,1,76,3,76,1722,8,76,3,76,1724,8,76,3,76,1726,8,76,1,76,1,76,
	1,76,3,76,1731,8,76,1,76,1,76,1,76,1,76,5,76,1737,8,76,10,76,12,76,1740,
	9,76,1,76,1,76,3,76,1744,8,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,1752,8,
	76,1,76,5,76,1755,8,76,10,76,12,76,1758,9,76,1,76,1,76,1,76,3,76,1763,8,
	76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,1773,8,76,3,76,1775,8,76,
	1,76,1,76,3,76,1779,8,76,1,76,1,76,3,76,1783,8,76,3,76,1785,8,76,1,77,1,
	77,1,77,1,77,1,77,1,77,1,77,3,77,1794,8,77,3,77,1796,8,77,1,78,1,78,3,78,
	1800,8,78,1,79,1,79,1,80,1,80,1,80,1,80,1,80,5,80,1809,8,80,10,80,12,80,
	1812,9,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,
	81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,
	1,81,1,81,5,81,1843,8,81,10,81,12,81,1846,9,81,1,81,1,81,1,81,1,81,1,81,
	1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,3,81,1861,8,81,1,82,1,82,1,82,1,
	82,1,82,3,82,1868,8,82,3,82,1870,8,82,1,83,1,83,1,83,5,83,1875,8,83,10,
	83,12,83,1878,9,83,1,84,1,84,1,84,1,84,5,84,1884,8,84,10,84,12,84,1887,
	9,84,1,84,1,84,1,85,1,85,1,85,3,85,1894,8,85,1,85,1,85,1,86,1,86,1,86,3,
	86,1901,8,86,1,86,1,86,1,86,1,86,1,86,3,86,1908,8,86,1,86,3,86,1911,8,86,
	1,86,3,86,1914,8,86,1,87,1,87,1,87,1,87,1,87,3,87,1921,8,87,1,87,1,87,1,
	87,1,87,1,87,3,87,1928,8,87,1,87,3,87,1931,8,87,3,87,1933,8,87,1,88,1,88,
	1,88,1,88,1,88,1,88,3,88,1941,8,88,3,88,1943,8,88,1,89,1,89,1,89,1,89,3,
	89,1949,8,89,1,90,1,90,1,90,5,90,1954,8,90,10,90,12,90,1957,9,90,1,91,1,
	91,1,91,1,91,1,91,3,91,1964,8,91,1,92,1,92,5,92,1968,8,92,10,92,12,92,1971,
	9,92,1,93,1,93,3,93,1975,8,93,1,93,1,93,3,93,1979,8,93,1,93,1,93,3,93,1983,
	8,93,1,93,1,93,1,93,3,93,1988,8,93,3,93,1990,8,93,1,93,1,93,1,93,1,93,1,
	93,1,93,3,93,1998,8,93,3,93,2000,8,93,1,93,1,93,3,93,2004,8,93,1,93,1,93,
	1,93,1,93,1,93,3,93,2011,8,93,3,93,2013,8,93,1,93,1,93,1,93,1,93,1,93,3,
	93,2020,8,93,1,93,1,93,1,93,3,93,2025,8,93,1,93,1,93,3,93,2029,8,93,1,94,
	1,94,1,94,1,94,1,94,1,94,1,94,3,94,2038,8,94,1,94,1,94,1,94,1,94,1,94,1,
	94,3,94,2046,8,94,1,95,1,95,1,95,5,95,2051,8,95,10,95,12,95,2054,9,95,1,
	96,1,96,1,96,3,96,2059,8,96,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,98,
	3,98,2070,8,98,1,98,1,98,3,98,2074,8,98,3,98,2076,8,98,1,98,3,98,2079,8,
	98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,
	1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,3,98,2103,8,98,1,99,1,99,1,99,1,
	99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,
	1,100,1,100,1,101,1,101,1,101,5,101,2126,8,101,10,101,12,101,2129,9,101,
	1,102,1,102,3,102,2133,8,102,1,103,1,103,1,103,1,103,1,103,1,103,1,103,
	1,103,1,103,1,103,1,103,1,103,1,103,1,103,1,103,1,103,5,103,2151,8,103,
	10,103,12,103,2154,9,103,1,103,3,103,2157,8,103,1,103,1,103,3,103,2161,
	8,103,1,104,1,104,1,104,1,104,1,105,1,105,1,105,1,105,1,105,1,105,1,105,
	1,105,1,105,1,105,3,105,2177,8,105,1,106,1,106,1,106,1,106,1,106,1,106,
	1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,
	3,106,2197,8,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,
	1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,
	1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,
	1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,
	1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,3,106,
	2255,8,106,1,106,1,106,3,106,2259,8,106,1,106,1,106,1,106,1,106,1,106,1,
	106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,
	106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,
	106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,
	106,1,106,1,106,1,106,1,106,3,106,2307,8,106,1,106,1,106,1,106,1,106,1,
	106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,3,106,2323,8,
	106,3,106,2325,8,106,1,107,1,107,1,107,1,107,1,107,3,107,2332,8,107,1,108,
	1,108,1,108,1,108,3,108,2338,8,108,1,108,1,108,1,108,1,108,1,108,1,108,
	1,108,1,108,1,108,1,108,1,108,3,108,2351,8,108,1,108,1,108,1,108,1,108,
	1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,3,108,2366,8,108,
	1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,3,108,2377,8,108,
	1,109,1,109,1,109,3,109,2382,8,109,1,109,1,109,1,109,1,109,1,109,1,109,
	1,109,1,109,3,109,2392,8,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,
	3,109,2401,8,109,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,111,1,111,
	1,111,1,111,1,111,1,111,1,111,1,112,1,112,1,112,1,112,1,112,1,112,1,112,
	1,113,1,113,1,113,1,113,1,113,1,114,1,114,1,114,1,114,1,114,1,115,3,115,
	2435,8,115,1,115,1,115,1,116,3,116,2440,8,116,1,116,1,116,1,117,1,117,3,
	117,2446,8,117,1,118,3,118,2449,8,118,1,118,1,118,1,118,3,118,2454,8,118,
	1,118,5,118,2457,8,118,10,118,12,118,2460,9,118,1,118,1,118,1,119,1,119,
	1,119,1,119,3,119,2468,8,119,1,119,5,119,2471,8,119,10,119,12,119,2474,
	9,119,1,119,1,119,1,120,3,120,2479,8,120,1,120,1,120,1,120,1,120,1,120,
	5,120,2486,8,120,10,120,12,120,2489,9,120,1,120,1,120,1,120,1,120,1,120,
	5,120,2496,8,120,10,120,12,120,2499,9,120,3,120,2501,8,120,1,120,1,120,
	1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,5,120,2513,8,120,10,120,
	12,120,2516,9,120,1,120,1,120,1,120,3,120,2521,8,120,1,120,1,120,1,120,
	1,120,1,120,1,120,3,120,2529,8,120,1,121,1,121,3,121,2533,8,121,1,122,1,
	122,1,122,1,122,5,122,2539,8,122,10,122,12,122,2542,9,122,1,122,1,122,1,
	123,1,123,3,123,2548,8,123,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,
	124,1,124,5,124,2559,8,124,10,124,12,124,2562,9,124,1,125,1,125,1,125,5,
	125,2567,8,125,10,125,12,125,2570,9,125,1,126,1,126,1,126,1,126,1,126,1,
	126,1,126,1,126,1,126,1,126,3,126,2582,8,126,1,127,1,127,1,127,1,127,1,
	127,3,127,2589,8,127,1,127,1,127,1,127,1,127,3,127,2595,8,127,1,127,1,127,
	3,127,2599,8,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,
	1,127,1,127,1,127,1,127,1,127,1,127,3,127,2616,8,127,1,128,1,128,1,128,
	1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,3,128,2631,
	8,128,3,128,2633,8,128,1,128,1,128,1,128,3,128,2638,8,128,1,129,3,129,2641,
	8,129,1,129,1,129,1,130,1,130,1,130,1,130,1,130,3,130,2650,8,130,1,130,
	3,130,2653,8,130,1,130,3,130,2656,8,130,1,130,1,130,1,131,1,131,1,131,1,
	132,1,132,1,132,1,132,1,132,1,132,3,132,2669,8,132,1,133,1,133,3,133,2673,
	8,133,1,134,1,134,1,134,1,134,1,134,1,134,3,134,2681,8,134,1,135,1,135,
	1,135,1,135,3,135,2687,8,135,1,136,1,136,1,136,1,136,1,136,1,136,1,136,
	1,136,1,136,1,136,3,136,2699,8,136,1,136,1,136,1,136,1,136,1,136,3,136,
	2706,8,136,1,136,1,136,1,137,1,137,1,137,3,137,2713,8,137,1,137,1,137,1,
	137,1,137,1,137,3,137,2720,8,137,1,137,1,137,1,137,1,137,3,137,2726,8,137,
	1,137,1,137,1,137,1,137,1,137,3,137,2733,8,137,1,137,3,137,2736,8,137,1,
	138,1,138,1,138,3,138,2741,8,138,1,138,1,138,1,139,1,139,1,139,3,139,2748,
	8,139,1,139,1,139,1,140,1,140,1,140,1,140,3,140,2756,8,140,1,140,1,140,
	3,140,2760,8,140,1,140,3,140,2763,8,140,1,141,1,141,1,141,1,141,1,141,1,
	141,3,141,2771,8,141,1,141,1,141,3,141,2775,8,141,1,141,3,141,2778,8,141,
	1,142,1,142,3,142,2782,8,142,1,143,1,143,1,143,3,143,2787,8,143,1,143,1,
	143,1,143,1,143,3,143,2793,8,143,1,143,1,143,1,143,1,143,3,143,2799,8,143,
	1,143,1,143,1,143,1,143,3,143,2805,8,143,1,143,1,143,1,143,1,143,3,143,
	2811,8,143,1,143,1,143,1,143,1,143,3,143,2817,8,143,1,143,1,143,1,143,1,
	143,3,143,2823,8,143,1,143,1,143,1,143,1,143,3,143,2829,8,143,1,143,3,143,
	2832,8,143,1,144,1,144,3,144,2836,8,144,1,144,1,144,1,144,3,144,2841,8,
	144,5,144,2843,8,144,10,144,12,144,2846,9,144,1,145,1,145,1,145,5,145,2851,
	8,145,10,145,12,145,2854,9,145,1,146,1,146,3,146,2858,8,146,1,147,1,147,
	1,148,1,148,1,149,3,149,2865,8,149,1,149,1,149,1,150,1,150,1,150,1,150,
	1,150,3,150,2874,8,150,3,150,2876,8,150,1,151,1,151,1,151,1,151,1,151,3,
	151,2883,8,151,1,152,1,152,3,152,2887,8,152,1,152,1,152,1,152,1,152,3,152,
	2893,8,152,1,152,3,152,2896,8,152,1,152,1,152,3,152,2900,8,152,1,152,1,
	152,1,152,1,152,3,152,2906,8,152,1,153,1,153,1,153,3,153,2911,8,153,1,153,
	1,153,3,153,2915,8,153,1,153,1,153,3,153,2919,8,153,1,153,1,153,3,153,2923,
	8,153,1,154,1,154,1,155,1,155,1,155,3,155,2930,8,155,1,156,1,156,1,157,
	1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,3,157,2944,8,157,
	1,158,1,158,1,158,0,1,96,159,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
	32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
	80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
	122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,
	158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,
	194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,
	230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,
	266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,
	302,304,306,308,310,312,314,316,0,39,3,0,491,491,701,701,781,781,3,0,338,
	338,407,407,479,479,2,0,479,479,488,488,2,0,365,365,570,570,1,0,633,634,
	2,0,802,802,811,811,2,0,15,15,58,58,1,0,841,843,3,0,830,830,844,845,847,
	849,1,0,844,845,3,0,5,5,12,12,320,320,2,0,5,5,97,97,1,0,813,814,2,0,696,
	696,699,699,2,0,511,511,609,609,2,0,2,2,792,792,2,0,407,407,642,642,2,0,
	16,16,93,93,2,0,237,237,530,530,3,0,200,200,440,440,530,530,3,0,200,200,
	530,530,571,571,2,0,516,516,725,725,3,0,222,222,802,802,807,807,3,0,139,
	139,176,176,286,286,4,0,200,200,530,530,571,571,678,678,2,0,807,807,811,
	811,2,0,802,802,808,808,3,0,471,471,663,663,697,697,6,0,415,415,576,576,
	592,592,737,738,744,744,779,780,1,0,445,446,2,0,512,512,559,559,2,0,557,
	557,560,560,2,0,662,662,699,699,2,0,225,225,228,228,2,0,52,52,211,211,2,
	0,576,576,807,807,2,0,807,807,813,813,38,0,39,39,81,81,113,113,119,119,
	129,130,133,133,159,159,171,171,188,189,226,226,240,240,252,253,260,260,
	262,262,264,264,281,282,288,289,296,296,308,308,317,317,321,321,323,323,
	328,328,330,330,333,333,341,341,362,362,381,484,486,539,541,548,551,634,
	636,735,737,742,744,773,775,784,786,788,790,790,808,808,1,0,822,829,3388,
	0,321,1,0,0,0,2,326,1,0,0,0,4,332,1,0,0,0,6,338,1,0,0,0,8,344,1,0,0,0,10,
	356,1,0,0,0,12,358,1,0,0,0,14,380,1,0,0,0,16,423,1,0,0,0,18,478,1,0,0,0,
	20,534,1,0,0,0,22,537,1,0,0,0,24,583,1,0,0,0,26,586,1,0,0,0,28,602,1,0,
	0,0,30,661,1,0,0,0,32,685,1,0,0,0,34,701,1,0,0,0,36,703,1,0,0,0,38,738,
	1,0,0,0,40,770,1,0,0,0,42,792,1,0,0,0,44,822,1,0,0,0,46,824,1,0,0,0,48,
	885,1,0,0,0,50,887,1,0,0,0,52,914,1,0,0,0,54,921,1,0,0,0,56,927,1,0,0,0,
	58,937,1,0,0,0,60,956,1,0,0,0,62,958,1,0,0,0,64,965,1,0,0,0,66,982,1,0,
	0,0,68,1027,1,0,0,0,70,1031,1,0,0,0,72,1044,1,0,0,0,74,1046,1,0,0,0,76,
	1059,1,0,0,0,78,1061,1,0,0,0,80,1106,1,0,0,0,82,1116,1,0,0,0,84,1159,1,
	0,0,0,86,1227,1,0,0,0,88,1238,1,0,0,0,90,1249,1,0,0,0,92,1261,1,0,0,0,94,
	1270,1,0,0,0,96,1284,1,0,0,0,98,1308,1,0,0,0,100,1325,1,0,0,0,102,1327,
	1,0,0,0,104,1344,1,0,0,0,106,1355,1,0,0,0,108,1357,1,0,0,0,110,1364,1,0,
	0,0,112,1391,1,0,0,0,114,1397,1,0,0,0,116,1407,1,0,0,0,118,1417,1,0,0,0,
	120,1419,1,0,0,0,122,1447,1,0,0,0,124,1449,1,0,0,0,126,1477,1,0,0,0,128,
	1479,1,0,0,0,130,1487,1,0,0,0,132,1495,1,0,0,0,134,1504,1,0,0,0,136,1579,
	1,0,0,0,138,1586,1,0,0,0,140,1600,1,0,0,0,142,1609,1,0,0,0,144,1648,1,0,
	0,0,146,1664,1,0,0,0,148,1671,1,0,0,0,150,1673,1,0,0,0,152,1784,1,0,0,0,
	154,1786,1,0,0,0,156,1797,1,0,0,0,158,1801,1,0,0,0,160,1803,1,0,0,0,162,
	1860,1,0,0,0,164,1862,1,0,0,0,166,1871,1,0,0,0,168,1879,1,0,0,0,170,1893,
	1,0,0,0,172,1910,1,0,0,0,174,1932,1,0,0,0,176,1942,1,0,0,0,178,1948,1,0,
	0,0,180,1950,1,0,0,0,182,1963,1,0,0,0,184,1965,1,0,0,0,186,2028,1,0,0,0,
	188,2030,1,0,0,0,190,2047,1,0,0,0,192,2055,1,0,0,0,194,2060,1,0,0,0,196,
	2102,1,0,0,0,198,2104,1,0,0,0,200,2112,1,0,0,0,202,2122,1,0,0,0,204,2130,
	1,0,0,0,206,2160,1,0,0,0,208,2162,1,0,0,0,210,2176,1,0,0,0,212,2324,1,0,
	0,0,214,2331,1,0,0,0,216,2376,1,0,0,0,218,2400,1,0,0,0,220,2402,1,0,0,0,
	222,2409,1,0,0,0,224,2416,1,0,0,0,226,2423,1,0,0,0,228,2428,1,0,0,0,230,
	2434,1,0,0,0,232,2439,1,0,0,0,234,2443,1,0,0,0,236,2448,1,0,0,0,238,2463,
	1,0,0,0,240,2478,1,0,0,0,242,2532,1,0,0,0,244,2534,1,0,0,0,246,2547,1,0,
	0,0,248,2549,1,0,0,0,250,2563,1,0,0,0,252,2581,1,0,0,0,254,2615,1,0,0,0,
	256,2637,1,0,0,0,258,2640,1,0,0,0,260,2644,1,0,0,0,262,2659,1,0,0,0,264,
	2668,1,0,0,0,266,2672,1,0,0,0,268,2680,1,0,0,0,270,2686,1,0,0,0,272,2705,
	1,0,0,0,274,2735,1,0,0,0,276,2740,1,0,0,0,278,2747,1,0,0,0,280,2762,1,0,
	0,0,282,2777,1,0,0,0,284,2781,1,0,0,0,286,2831,1,0,0,0,288,2833,1,0,0,0,
	290,2847,1,0,0,0,292,2857,1,0,0,0,294,2859,1,0,0,0,296,2861,1,0,0,0,298,
	2864,1,0,0,0,300,2875,1,0,0,0,302,2882,1,0,0,0,304,2905,1,0,0,0,306,2922,
	1,0,0,0,308,2924,1,0,0,0,310,2929,1,0,0,0,312,2931,1,0,0,0,314,2943,1,0,
	0,0,316,2945,1,0,0,0,318,320,3,2,1,0,319,318,1,0,0,0,320,323,1,0,0,0,321,
	319,1,0,0,0,321,322,1,0,0,0,322,324,1,0,0,0,323,321,1,0,0,0,324,325,5,0,
	0,1,325,1,1,0,0,0,326,327,3,4,2,0,327,3,1,0,0,0,328,330,3,6,3,0,329,331,
	5,839,0,0,330,329,1,0,0,0,330,331,1,0,0,0,331,333,1,0,0,0,332,328,1,0,0,
	0,333,334,1,0,0,0,334,332,1,0,0,0,334,335,1,0,0,0,335,5,1,0,0,0,336,339,
	3,8,4,0,337,339,3,10,5,0,338,336,1,0,0,0,338,337,1,0,0,0,339,7,1,0,0,0,
	340,345,3,18,9,0,341,345,3,22,11,0,342,345,3,26,13,0,343,345,3,28,14,0,
	344,340,1,0,0,0,344,341,1,0,0,0,344,342,1,0,0,0,344,343,1,0,0,0,345,9,1,
	0,0,0,346,357,3,16,8,0,347,357,3,14,7,0,348,357,3,12,6,0,349,357,3,38,19,
	0,350,357,3,46,23,0,351,357,3,56,28,0,352,357,3,36,18,0,353,357,3,50,25,
	0,354,357,3,42,21,0,355,357,3,58,29,0,356,346,1,0,0,0,356,347,1,0,0,0,356,
	348,1,0,0,0,356,349,1,0,0,0,356,350,1,0,0,0,356,351,1,0,0,0,356,352,1,0,
	0,0,356,353,1,0,0,0,356,354,1,0,0,0,356,355,1,0,0,0,357,11,1,0,0,0,358,
	359,5,102,0,0,359,362,5,718,0,0,360,361,5,152,0,0,361,363,5,118,0,0,362,
	360,1,0,0,0,362,363,1,0,0,0,363,378,1,0,0,0,364,366,5,838,0,0,365,364,1,
	0,0,0,365,366,1,0,0,0,366,370,1,0,0,0,367,368,3,310,155,0,368,369,5,831,
	0,0,369,371,1,0,0,0,370,367,1,0,0,0,370,371,1,0,0,0,371,375,1,0,0,0,372,
	373,3,310,155,0,373,374,5,831,0,0,374,376,1,0,0,0,375,372,1,0,0,0,375,376,
	1,0,0,0,376,377,1,0,0,0,377,379,3,310,155,0,378,365,1,0,0,0,378,379,1,0,
	0,0,379,13,1,0,0,0,380,381,5,9,0,0,381,385,5,718,0,0,382,383,3,310,155,
	0,383,384,5,831,0,0,384,386,1,0,0,0,385,382,1,0,0,0,385,386,1,0,0,0,386,
	387,1,0,0,0,387,393,3,310,155,0,388,391,5,276,0,0,389,390,5,376,0,0,390,
	392,5,807,0,0,391,389,1,0,0,0,391,392,1,0,0,0,392,394,1,0,0,0,393,388,1,
	0,0,0,393,394,1,0,0,0,394,398,1,0,0,0,395,396,5,156,0,0,396,397,5,37,0,
	0,397,399,5,807,0,0,398,395,1,0,0,0,398,399,1,0,0,0,399,404,1,0,0,0,400,
	401,5,203,0,0,401,405,5,807,0,0,402,403,5,610,0,0,403,405,5,203,0,0,404,
	400,1,0,0,0,404,402,1,0,0,0,404,405,1,0,0,0,405,410,1,0,0,0,406,407,5,191,
	0,0,407,411,5,807,0,0,408,409,5,610,0,0,409,411,5,191,0,0,410,406,1,0,0,
	0,410,408,1,0,0,0,410,411,1,0,0,0,411,415,1,0,0,0,412,416,5,80,0,0,413,
	414,5,610,0,0,414,416,5,80,0,0,415,412,1,0,0,0,415,413,1,0,0,0,415,416,
	1,0,0,0,416,421,1,0,0,0,417,418,5,38,0,0,418,422,5,807,0,0,419,420,5,610,
	0,0,420,422,5,38,0,0,421,417,1,0,0,0,421,419,1,0,0,0,421,422,1,0,0,0,422,
	15,1,0,0,0,423,424,5,72,0,0,424,428,5,718,0,0,425,426,3,310,155,0,426,427,
	5,831,0,0,427,429,1,0,0,0,428,425,1,0,0,0,428,429,1,0,0,0,429,430,1,0,0,
	0,430,433,3,310,155,0,431,432,5,15,0,0,432,434,3,304,152,0,433,431,1,0,
	0,0,433,434,1,0,0,0,434,438,1,0,0,0,435,436,5,330,0,0,436,437,5,376,0,0,
	437,439,5,807,0,0,438,435,1,0,0,0,438,439,1,0,0,0,439,446,1,0,0,0,440,441,
	5,156,0,0,441,443,5,37,0,0,442,444,5,845,0,0,443,442,1,0,0,0,443,444,1,
	0,0,0,444,445,1,0,0,0,445,447,5,807,0,0,446,440,1,0,0,0,446,447,1,0,0,0,
	447,454,1,0,0,0,448,450,5,203,0,0,449,451,5,807,0,0,450,449,1,0,0,0,450,
	451,1,0,0,0,451,455,1,0,0,0,452,453,5,610,0,0,453,455,5,203,0,0,454,448,
	1,0,0,0,454,452,1,0,0,0,454,455,1,0,0,0,455,462,1,0,0,0,456,458,5,191,0,
	0,457,459,5,807,0,0,458,457,1,0,0,0,458,459,1,0,0,0,459,463,1,0,0,0,460,
	461,5,610,0,0,461,463,5,191,0,0,462,456,1,0,0,0,462,460,1,0,0,0,462,463,
	1,0,0,0,463,467,1,0,0,0,464,468,5,80,0,0,465,466,5,610,0,0,466,468,5,80,
	0,0,467,464,1,0,0,0,467,465,1,0,0,0,467,468,1,0,0,0,468,475,1,0,0,0,469,
	471,5,38,0,0,470,472,5,807,0,0,471,470,1,0,0,0,471,472,1,0,0,0,472,476,
	1,0,0,0,473,474,5,610,0,0,474,476,5,38,0,0,475,469,1,0,0,0,475,473,1,0,
	0,0,475,476,1,0,0,0,476,17,1,0,0,0,477,479,3,122,61,0,478,477,1,0,0,0,478,
	479,1,0,0,0,479,480,1,0,0,0,480,490,5,91,0,0,481,482,5,346,0,0,482,483,
	5,836,0,0,483,484,3,96,48,0,484,486,5,837,0,0,485,487,5,244,0,0,486,485,
	1,0,0,0,486,487,1,0,0,0,487,491,1,0,0,0,488,489,5,346,0,0,489,491,5,807,
	0,0,490,481,1,0,0,0,490,488,1,0,0,0,490,491,1,0,0,0,491,493,1,0,0,0,492,
	494,5,138,0,0,493,492,1,0,0,0,493,494,1,0,0,0,494,495,1,0,0,0,495,497,3,
	20,10,0,496,498,3,238,119,0,497,496,1,0,0,0,497,498,1,0,0,0,498,500,1,0,
	0,0,499,501,3,30,15,0,500,499,1,0,0,0,500,501,1,0,0,0,501,504,1,0,0,0,502,
	503,5,138,0,0,503,505,3,180,90,0,504,502,1,0,0,0,504,505,1,0,0,0,505,519,
	1,0,0,0,506,517,5,373,0,0,507,518,3,130,65,0,508,509,5,74,0,0,509,515,5,
	224,0,0,510,512,5,524,0,0,511,510,1,0,0,0,511,512,1,0,0,0,512,513,1,0,0,
	0,513,516,3,292,146,0,514,516,5,802,0,0,515,511,1,0,0,0,515,514,1,0,0,0,
	516,518,1,0,0,0,517,507,1,0,0,0,517,508,1,0,0,0,518,520,1,0,0,0,519,506,
	1,0,0,0,519,520,1,0,0,0,520,522,1,0,0,0,521,523,3,152,76,0,522,521,1,0,
	0,0,522,523,1,0,0,0,523,525,1,0,0,0,524,526,3,160,80,0,525,524,1,0,0,0,
	525,526,1,0,0,0,526,528,1,0,0,0,527,529,5,839,0,0,528,527,1,0,0,0,528,529,
	1,0,0,0,529,19,1,0,0,0,530,535,3,284,142,0,531,535,3,234,117,0,532,535,
	3,60,30,0,533,535,5,802,0,0,534,530,1,0,0,0,534,531,1,0,0,0,534,532,1,0,
	0,0,534,533,1,0,0,0,535,21,1,0,0,0,536,538,3,122,61,0,537,536,1,0,0,0,537,
	538,1,0,0,0,538,539,1,0,0,0,539,547,5,161,0,0,540,541,5,346,0,0,541,542,
	5,836,0,0,542,543,3,96,48,0,543,545,5,837,0,0,544,546,5,244,0,0,545,544,
	1,0,0,0,545,546,1,0,0,0,546,548,1,0,0,0,547,540,1,0,0,0,547,548,1,0,0,0,
	548,550,1,0,0,0,549,551,5,164,0,0,550,549,1,0,0,0,550,551,1,0,0,0,551,554,
	1,0,0,0,552,555,3,284,142,0,553,555,3,60,30,0,554,552,1,0,0,0,554,553,1,
	0,0,0,555,557,1,0,0,0,556,558,3,238,119,0,557,556,1,0,0,0,557,558,1,0,0,
	0,558,563,1,0,0,0,559,560,5,836,0,0,560,561,3,290,145,0,561,562,5,837,0,
	0,562,564,1,0,0,0,563,559,1,0,0,0,563,564,1,0,0,0,564,566,1,0,0,0,565,567,
	3,30,15,0,566,565,1,0,0,0,566,567,1,0,0,0,567,568,1,0,0,0,568,570,3,24,
	12,0,569,571,3,152,76,0,570,569,1,0,0,0,570,571,1,0,0,0,571,573,1,0,0,0,
	572,574,3,160,80,0,573,572,1,0,0,0,573,574,1,0,0,0,574,576,1,0,0,0,575,
	577,5,839,0,0,576,575,1,0,0,0,576,577,1,0,0,0,577,23,1,0,0,0,578,584,3,
	248,124,0,579,584,3,210,105,0,580,584,3,66,33,0,581,582,5,88,0,0,582,584,
	5,366,0,0,583,578,1,0,0,0,583,579,1,0,0,0,583,580,1,0,0,0,583,581,1,0,0,
	0,584,25,1,0,0,0,585,587,3,122,61,0,586,585,1,0,0,0,586,587,1,0,0,0,587,
	588,1,0,0,0,588,590,3,138,69,0,589,591,3,150,75,0,590,589,1,0,0,0,590,591,
	1,0,0,0,591,593,1,0,0,0,592,594,3,152,76,0,593,592,1,0,0,0,593,594,1,0,
	0,0,594,596,1,0,0,0,595,597,3,160,80,0,596,595,1,0,0,0,596,597,1,0,0,0,
	597,599,1,0,0,0,598,600,5,839,0,0,599,598,1,0,0,0,599,600,1,0,0,0,600,27,
	1,0,0,0,601,603,3,122,61,0,602,601,1,0,0,0,602,603,1,0,0,0,603,604,1,0,
	0,0,604,612,5,360,0,0,605,606,5,346,0,0,606,607,5,836,0,0,607,608,3,96,
	48,0,608,610,5,837,0,0,609,611,5,244,0,0,610,609,1,0,0,0,610,611,1,0,0,
	0,611,613,1,0,0,0,612,605,1,0,0,0,612,613,1,0,0,0,613,616,1,0,0,0,614,617,
	3,284,142,0,615,617,3,60,30,0,616,614,1,0,0,0,616,615,1,0,0,0,617,619,1,
	0,0,0,618,620,3,236,118,0,619,618,1,0,0,0,619,620,1,0,0,0,620,621,1,0,0,
	0,621,622,5,314,0,0,622,627,3,126,63,0,623,624,5,838,0,0,624,626,3,126,
	63,0,625,623,1,0,0,0,626,629,1,0,0,0,627,625,1,0,0,0,627,628,1,0,0,0,628,
	631,1,0,0,0,629,627,1,0,0,0,630,632,3,30,15,0,631,630,1,0,0,0,631,632,1,
	0,0,0,632,635,1,0,0,0,633,634,5,138,0,0,634,636,3,180,90,0,635,633,1,0,
	0,0,635,636,1,0,0,0,636,650,1,0,0,0,637,648,5,373,0,0,638,649,3,128,64,
	0,639,640,5,74,0,0,640,646,5,224,0,0,641,643,5,524,0,0,642,641,1,0,0,0,
	642,643,1,0,0,0,643,644,1,0,0,0,644,647,3,292,146,0,645,647,5,802,0,0,646,
	642,1,0,0,0,646,645,1,0,0,0,647,649,1,0,0,0,648,638,1,0,0,0,648,639,1,0,
	0,0,649,651,1,0,0,0,650,637,1,0,0,0,650,651,1,0,0,0,651,653,1,0,0,0,652,
	654,3,152,76,0,653,652,1,0,0,0,653,654,1,0,0,0,654,656,1,0,0,0,655,657,
	3,160,80,0,656,655,1,0,0,0,656,657,1,0,0,0,657,659,1,0,0,0,658,660,5,839,
	0,0,659,658,1,0,0,0,659,660,1,0,0,0,660,29,1,0,0,0,661,662,5,634,0,0,662,
	667,3,32,16,0,663,664,5,838,0,0,664,666,3,32,16,0,665,663,1,0,0,0,666,669,
	1,0,0,0,667,665,1,0,0,0,667,668,1,0,0,0,668,681,1,0,0,0,669,667,1,0,0,0,
	670,673,5,164,0,0,671,674,5,802,0,0,672,674,3,274,137,0,673,671,1,0,0,0,
	673,672,1,0,0,0,674,679,1,0,0,0,675,676,5,836,0,0,676,677,3,290,145,0,677,
	678,5,837,0,0,678,680,1,0,0,0,679,675,1,0,0,0,679,680,1,0,0,0,680,682,1,
	0,0,0,681,670,1,0,0,0,681,682,1,0,0,0,682,31,1,0,0,0,683,686,3,34,17,0,
	684,686,3,96,48,0,685,683,1,0,0,0,685,684,1,0,0,0,686,688,1,0,0,0,687,689,
	3,230,115,0,688,687,1,0,0,0,688,689,1,0,0,0,689,33,1,0,0,0,690,694,5,470,
	0,0,691,694,5,545,0,0,692,694,3,274,137,0,693,690,1,0,0,0,693,691,1,0,0,
	0,693,692,1,0,0,0,694,695,1,0,0,0,695,698,5,831,0,0,696,699,5,841,0,0,697,
	699,3,310,155,0,698,696,1,0,0,0,698,697,1,0,0,0,699,702,1,0,0,0,700,702,
	5,793,0,0,701,693,1,0,0,0,701,700,1,0,0,0,702,35,1,0,0,0,703,705,5,72,0,
	0,704,706,5,356,0,0,705,704,1,0,0,0,705,706,1,0,0,0,706,708,1,0,0,0,707,
	709,3,296,148,0,708,707,1,0,0,0,708,709,1,0,0,0,709,710,1,0,0,0,710,711,
	5,157,0,0,711,712,3,310,155,0,712,713,5,228,0,0,713,714,3,204,102,0,714,
	715,5,836,0,0,715,716,3,288,144,0,716,722,5,837,0,0,717,718,5,155,0,0,718,
	719,5,836,0,0,719,720,3,290,145,0,720,721,5,837,0,0,721,723,1,0,0,0,722,
	717,1,0,0,0,722,723,1,0,0,0,723,726,1,0,0,0,724,725,5,373,0,0,725,727,3,
	130,65,0,726,724,1,0,0,0,726,727,1,0,0,0,727,729,1,0,0,0,728,730,3,90,45,
	0,729,728,1,0,0,0,729,730,1,0,0,0,730,733,1,0,0,0,731,732,5,228,0,0,732,
	734,3,310,155,0,733,731,1,0,0,0,733,734,1,0,0,0,734,736,1,0,0,0,735,737,
	5,839,0,0,736,735,1,0,0,0,736,737,1,0,0,0,737,37,1,0,0,0,738,739,5,72,0,
	0,739,740,5,338,0,0,740,741,3,274,137,0,741,742,5,836,0,0,742,744,3,74,
	37,0,743,745,5,838,0,0,744,743,1,0,0,0,744,745,1,0,0,0,745,746,1,0,0,0,
	746,749,5,837,0,0,747,748,5,568,0,0,748,750,3,312,156,0,749,747,1,0,0,0,
	749,750,1,0,0,0,750,754,1,0,0,0,751,753,3,40,20,0,752,751,1,0,0,0,753,756,
	1,0,0,0,754,752,1,0,0,0,754,755,1,0,0,0,755,760,1,0,0,0,756,754,1,0,0,0,
	757,758,5,228,0,0,758,761,3,310,155,0,759,761,5,88,0,0,760,757,1,0,0,0,
	760,759,1,0,0,0,760,761,1,0,0,0,761,765,1,0,0,0,762,763,5,753,0,0,763,766,
	3,310,155,0,764,766,5,88,0,0,765,762,1,0,0,0,765,764,1,0,0,0,765,766,1,
	0,0,0,766,768,1,0,0,0,767,769,5,839,0,0,768,767,1,0,0,0,768,769,1,0,0,0,
	769,39,1,0,0,0,770,790,5,376,0,0,771,772,5,836,0,0,772,777,3,92,46,0,773,
	774,5,838,0,0,774,776,3,92,46,0,775,773,1,0,0,0,776,779,1,0,0,0,777,775,
	1,0,0,0,777,778,1,0,0,0,778,780,1,0,0,0,779,777,1,0,0,0,780,781,5,837,0,
	0,781,791,1,0,0,0,782,787,3,92,46,0,783,784,5,838,0,0,784,786,3,92,46,0,
	785,783,1,0,0,0,786,789,1,0,0,0,787,785,1,0,0,0,787,788,1,0,0,0,788,791,
	1,0,0,0,789,787,1,0,0,0,790,771,1,0,0,0,790,782,1,0,0,0,791,41,1,0,0,0,
	792,793,5,72,0,0,793,794,5,369,0,0,794,799,3,276,138,0,795,796,5,836,0,
	0,796,797,3,290,145,0,797,798,5,837,0,0,798,800,1,0,0,0,799,795,1,0,0,0,
	799,800,1,0,0,0,800,810,1,0,0,0,801,802,5,376,0,0,802,807,3,44,22,0,803,
	804,5,838,0,0,804,806,3,44,22,0,805,803,1,0,0,0,806,809,1,0,0,0,807,805,
	1,0,0,0,807,808,1,0,0,0,808,811,1,0,0,0,809,807,1,0,0,0,810,801,1,0,0,0,
	810,811,1,0,0,0,811,812,1,0,0,0,812,813,5,15,0,0,813,817,3,26,13,0,814,
	815,5,376,0,0,815,816,5,45,0,0,816,818,5,235,0,0,817,814,1,0,0,0,817,818,
	1,0,0,0,818,820,1,0,0,0,819,821,5,839,0,0,820,819,1,0,0,0,820,821,1,0,0,
	0,821,43,1,0,0,0,822,823,7,0,0,0,823,45,1,0,0,0,824,825,5,9,0,0,825,826,
	5,338,0,0,826,870,3,274,137,0,827,828,5,314,0,0,828,829,5,836,0,0,829,830,
	5,569,0,0,830,831,5,815,0,0,831,832,7,1,0,0,832,871,5,837,0,0,833,834,5,
	3,0,0,834,871,3,76,38,0,835,836,5,9,0,0,836,837,5,55,0,0,837,871,3,78,39,
	0,838,839,5,102,0,0,839,840,5,55,0,0,840,871,3,310,155,0,841,842,5,102,
	0,0,842,843,5,60,0,0,843,871,3,310,155,0,844,845,5,376,0,0,845,846,5,45,
	0,0,846,847,5,3,0,0,847,848,5,60,0,0,848,849,3,310,155,0,849,850,5,135,
	0,0,850,851,5,171,0,0,851,852,5,836,0,0,852,853,3,290,145,0,853,854,5,837,
	0,0,854,855,5,269,0,0,855,856,3,274,137,0,856,857,5,836,0,0,857,858,3,290,
	145,0,858,859,5,837,0,0,859,871,1,0,0,0,860,861,5,45,0,0,861,862,5,60,0,
	0,862,871,3,310,155,0,863,864,7,2,0,0,864,866,5,351,0,0,865,867,3,310,155,
	0,866,865,1,0,0,0,866,867,1,0,0,0,867,871,1,0,0,0,868,869,5,672,0,0,869,
	871,3,40,20,0,870,827,1,0,0,0,870,833,1,0,0,0,870,835,1,0,0,0,870,838,1,
	0,0,0,870,841,1,0,0,0,870,844,1,0,0,0,870,860,1,0,0,0,870,863,1,0,0,0,870,
	868,1,0,0,0,871,873,1,0,0,0,872,874,5,839,0,0,873,872,1,0,0,0,873,874,1,
	0,0,0,874,47,1,0,0,0,875,876,3,310,155,0,876,877,5,831,0,0,877,878,3,48,
	24,0,878,886,1,0,0,0,879,880,3,310,155,0,880,881,5,831,0,0,881,884,1,0,
	0,0,882,884,3,310,155,0,883,879,1,0,0,0,883,882,1,0,0,0,884,886,1,0,0,0,
	885,875,1,0,0,0,885,883,1,0,0,0,886,49,1,0,0,0,887,888,5,102,0,0,888,891,
	5,157,0,0,889,890,5,152,0,0,890,892,5,118,0,0,891,889,1,0,0,0,891,892,1,
	0,0,0,892,909,1,0,0,0,893,898,3,52,26,0,894,895,5,838,0,0,895,897,3,52,
	26,0,896,894,1,0,0,0,897,900,1,0,0,0,898,896,1,0,0,0,898,899,1,0,0,0,899,
	910,1,0,0,0,900,898,1,0,0,0,901,906,3,54,27,0,902,903,5,838,0,0,903,905,
	3,54,27,0,904,902,1,0,0,0,905,908,1,0,0,0,906,904,1,0,0,0,906,907,1,0,0,
	0,907,910,1,0,0,0,908,906,1,0,0,0,909,893,1,0,0,0,909,901,1,0,0,0,910,912,
	1,0,0,0,911,913,5,839,0,0,912,911,1,0,0,0,912,913,1,0,0,0,913,51,1,0,0,
	0,914,915,3,310,155,0,915,916,5,228,0,0,916,917,3,272,136,0,917,53,1,0,
	0,0,918,919,3,310,155,0,919,920,5,831,0,0,920,922,1,0,0,0,921,918,1,0,0,
	0,921,922,1,0,0,0,922,923,1,0,0,0,923,924,3,310,155,0,924,925,5,831,0,0,
	925,926,3,310,155,0,926,55,1,0,0,0,927,928,5,102,0,0,928,931,5,338,0,0,
	929,930,5,152,0,0,930,932,5,118,0,0,931,929,1,0,0,0,931,932,1,0,0,0,932,
	933,1,0,0,0,933,935,3,274,137,0,934,936,5,839,0,0,935,934,1,0,0,0,935,936,
	1,0,0,0,936,57,1,0,0,0,937,938,5,102,0,0,938,941,5,369,0,0,939,940,5,152,
	0,0,940,942,5,118,0,0,941,939,1,0,0,0,941,942,1,0,0,0,942,943,1,0,0,0,943,
	948,3,276,138,0,944,945,5,838,0,0,945,947,3,276,138,0,946,944,1,0,0,0,947,
	950,1,0,0,0,948,946,1,0,0,0,948,949,1,0,0,0,949,952,1,0,0,0,950,948,1,0,
	0,0,951,953,5,839,0,0,952,951,1,0,0,0,952,953,1,0,0,0,953,59,1,0,0,0,954,
	957,3,62,31,0,955,957,3,64,32,0,956,954,1,0,0,0,956,955,1,0,0,0,957,61,
	1,0,0,0,958,959,5,232,0,0,959,960,5,836,0,0,960,961,3,310,155,0,961,962,
	5,838,0,0,962,963,5,811,0,0,963,964,5,837,0,0,964,63,1,0,0,0,965,966,5,
	231,0,0,966,967,5,836,0,0,967,968,5,811,0,0,968,969,5,838,0,0,969,970,5,
	811,0,0,970,971,5,837,0,0,971,973,5,831,0,0,972,974,3,310,155,0,973,972,
	1,0,0,0,973,974,1,0,0,0,974,975,1,0,0,0,975,977,5,831,0,0,976,978,3,310,
	155,0,977,976,1,0,0,0,977,978,1,0,0,0,978,979,1,0,0,0,979,980,5,831,0,0,
	980,981,3,310,155,0,981,65,1,0,0,0,982,983,5,117,0,0,983,984,3,68,34,0,
	984,67,1,0,0,0,985,986,5,802,0,0,986,988,5,815,0,0,987,985,1,0,0,0,987,
	988,1,0,0,0,988,991,1,0,0,0,989,992,3,282,141,0,990,992,3,96,48,0,991,989,
	1,0,0,0,991,990,1,0,0,0,992,1001,1,0,0,0,993,998,3,70,35,0,994,995,5,838,
	0,0,995,997,3,70,35,0,996,994,1,0,0,0,997,1000,1,0,0,0,998,996,1,0,0,0,
	998,999,1,0,0,0,999,1002,1,0,0,0,1000,998,1,0,0,0,1001,993,1,0,0,0,1001,
	1002,1,0,0,0,1002,1004,1,0,0,0,1003,1005,5,839,0,0,1004,1003,1,0,0,0,1004,
	1005,1,0,0,0,1005,1028,1,0,0,0,1006,1007,5,836,0,0,1007,1012,3,72,36,0,
	1008,1009,5,844,0,0,1009,1011,3,72,36,0,1010,1008,1,0,0,0,1011,1014,1,0,
	0,0,1012,1010,1,0,0,0,1012,1013,1,0,0,0,1013,1015,1,0,0,0,1014,1012,1,0,
	0,0,1015,1022,5,837,0,0,1016,1018,5,15,0,0,1017,1016,1,0,0,0,1017,1018,
	1,0,0,0,1018,1019,1,0,0,0,1019,1020,7,3,0,0,1020,1021,5,815,0,0,1021,1023,
	5,811,0,0,1022,1017,1,0,0,0,1022,1023,1,0,0,0,1023,1025,1,0,0,0,1024,1026,
	5,839,0,0,1025,1024,1,0,0,0,1025,1026,1,0,0,0,1026,1028,1,0,0,0,1027,987,
	1,0,0,0,1027,1006,1,0,0,0,1028,69,1,0,0,0,1029,1030,5,802,0,0,1030,1032,
	5,815,0,0,1031,1029,1,0,0,0,1031,1032,1,0,0,0,1032,1042,1,0,0,0,1033,1036,
	3,94,47,0,1034,1036,3,310,155,0,1035,1033,1,0,0,0,1035,1034,1,0,0,0,1036,
	1038,1,0,0,0,1037,1039,7,4,0,0,1038,1037,1,0,0,0,1038,1039,1,0,0,0,1039,
	1043,1,0,0,0,1040,1043,5,88,0,0,1041,1043,5,222,0,0,1042,1035,1,0,0,0,1042,
	1040,1,0,0,0,1042,1041,1,0,0,0,1043,71,1,0,0,0,1044,1045,7,5,0,0,1045,73,
	1,0,0,0,1046,1053,3,76,38,0,1047,1049,5,838,0,0,1048,1047,1,0,0,0,1048,
	1049,1,0,0,0,1049,1050,1,0,0,0,1050,1052,3,76,38,0,1051,1048,1,0,0,0,1052,
	1055,1,0,0,0,1053,1051,1,0,0,0,1053,1054,1,0,0,0,1054,75,1,0,0,0,1055,1053,
	1,0,0,0,1056,1060,3,78,39,0,1057,1060,3,80,40,0,1058,1060,3,84,42,0,1059,
	1056,1,0,0,0,1059,1057,1,0,0,0,1059,1058,1,0,0,0,1060,77,1,0,0,0,1061,1065,
	3,310,155,0,1062,1066,3,304,152,0,1063,1064,5,15,0,0,1064,1066,3,96,48,
	0,1065,1062,1,0,0,0,1065,1063,1,0,0,0,1066,1069,1,0,0,0,1067,1068,5,54,
	0,0,1068,1070,3,310,155,0,1069,1067,1,0,0,0,1069,1070,1,0,0,0,1070,1072,
	1,0,0,0,1071,1073,3,298,149,0,1072,1071,1,0,0,0,1072,1073,1,0,0,0,1073,
	1095,1,0,0,0,1074,1075,5,60,0,0,1075,1077,3,310,155,0,1076,1074,1,0,0,0,
	1076,1077,1,0,0,0,1077,1078,1,0,0,0,1078,1080,3,300,150,0,1079,1081,3,300,
	150,0,1080,1079,1,0,0,0,1080,1081,1,0,0,0,1081,1096,1,0,0,0,1082,1088,5,
	149,0,0,1083,1084,5,836,0,0,1084,1085,5,807,0,0,1085,1086,5,838,0,0,1086,
	1087,5,807,0,0,1087,1089,5,837,0,0,1088,1083,1,0,0,0,1088,1089,1,0,0,0,
	1089,1093,1,0,0,0,1090,1091,5,219,0,0,1091,1092,5,132,0,0,1092,1094,5,273,
	0,0,1093,1090,1,0,0,0,1093,1094,1,0,0,0,1094,1096,1,0,0,0,1095,1076,1,0,
	0,0,1095,1082,1,0,0,0,1095,1096,1,0,0,0,1096,1098,1,0,0,0,1097,1099,5,290,
	0,0,1098,1097,1,0,0,0,1098,1099,1,0,0,0,1099,1103,1,0,0,0,1100,1102,3,82,
	41,0,1101,1100,1,0,0,0,1102,1105,1,0,0,0,1103,1101,1,0,0,0,1103,1104,1,
	0,0,0,1104,79,1,0,0,0,1105,1103,1,0,0,0,1106,1107,3,310,155,0,1107,1108,
	7,6,0,0,1108,1112,3,96,48,0,1109,1113,5,575,0,0,1110,1111,5,219,0,0,1111,
	1113,5,575,0,0,1112,1109,1,0,0,0,1112,1110,1,0,0,0,1112,1113,1,0,0,0,1113,
	81,1,0,0,0,1114,1115,5,60,0,0,1115,1117,3,310,155,0,1116,1114,1,0,0,0,1116,
	1117,1,0,0,0,1117,1155,1,0,0,0,1118,1119,5,255,0,0,1119,1122,5,171,0,0,
	1120,1122,5,356,0,0,1121,1118,1,0,0,0,1121,1120,1,0,0,0,1122,1124,1,0,0,
	0,1123,1125,3,296,148,0,1124,1123,1,0,0,0,1124,1125,1,0,0,0,1125,1127,1,
	0,0,0,1126,1128,3,90,45,0,1127,1126,1,0,0,0,1127,1128,1,0,0,0,1128,1156,
	1,0,0,0,1129,1133,5,45,0,0,1130,1131,5,219,0,0,1131,1132,5,132,0,0,1132,
	1134,5,273,0,0,1133,1130,1,0,0,0,1133,1134,1,0,0,0,1134,1135,1,0,0,0,1135,
	1136,5,836,0,0,1136,1137,3,130,65,0,1137,1138,5,837,0,0,1138,1156,1,0,0,
	0,1139,1140,5,135,0,0,1140,1142,5,171,0,0,1141,1139,1,0,0,0,1141,1142,1,
	0,0,0,1142,1143,1,0,0,0,1143,1144,5,269,0,0,1144,1145,3,274,137,0,1145,
	1146,5,836,0,0,1146,1147,3,290,145,0,1147,1149,5,837,0,0,1148,1150,3,86,
	43,0,1149,1148,1,0,0,0,1149,1150,1,0,0,0,1150,1152,1,0,0,0,1151,1153,3,
	88,44,0,1152,1151,1,0,0,0,1152,1153,1,0,0,0,1153,1156,1,0,0,0,1154,1156,
	3,298,149,0,1155,1121,1,0,0,0,1155,1129,1,0,0,0,1155,1141,1,0,0,0,1155,
	1154,1,0,0,0,1156,83,1,0,0,0,1157,1158,5,60,0,0,1158,1160,3,310,155,0,1159,
	1157,1,0,0,0,1159,1160,1,0,0,0,1160,1225,1,0,0,0,1161,1162,5,255,0,0,1162,
	1165,5,171,0,0,1163,1165,5,356,0,0,1164,1161,1,0,0,0,1164,1163,1,0,0,0,
	1165,1167,1,0,0,0,1166,1168,3,296,148,0,1167,1166,1,0,0,0,1167,1168,1,0,
	0,0,1168,1169,1,0,0,0,1169,1170,5,836,0,0,1170,1171,3,288,144,0,1171,1173,
	5,837,0,0,1172,1174,3,90,45,0,1173,1172,1,0,0,0,1173,1174,1,0,0,0,1174,
	1177,1,0,0,0,1175,1176,5,228,0,0,1176,1178,3,310,155,0,1177,1175,1,0,0,
	0,1177,1178,1,0,0,0,1178,1226,1,0,0,0,1179,1183,5,45,0,0,1180,1181,5,219,
	0,0,1181,1182,5,132,0,0,1182,1184,5,273,0,0,1183,1180,1,0,0,0,1183,1184,
	1,0,0,0,1184,1185,1,0,0,0,1185,1186,5,836,0,0,1186,1187,3,130,65,0,1187,
	1188,5,837,0,0,1188,1226,1,0,0,0,1189,1191,5,88,0,0,1190,1192,5,836,0,0,
	1191,1190,1,0,0,0,1191,1192,1,0,0,0,1192,1197,1,0,0,0,1193,1198,5,811,0,
	0,1194,1198,5,844,0,0,1195,1198,3,212,106,0,1196,1198,5,807,0,0,1197,1193,
	1,0,0,0,1197,1194,1,0,0,0,1197,1195,1,0,0,0,1197,1196,1,0,0,0,1198,1199,
	1,0,0,0,1199,1197,1,0,0,0,1199,1200,1,0,0,0,1200,1202,1,0,0,0,1201,1203,
	5,837,0,0,1202,1201,1,0,0,0,1202,1203,1,0,0,0,1203,1204,1,0,0,0,1204,1205,
	5,132,0,0,1205,1226,3,310,155,0,1206,1207,5,135,0,0,1207,1208,5,171,0,0,
	1208,1209,5,836,0,0,1209,1210,3,290,145,0,1210,1211,5,837,0,0,1211,1212,
	5,269,0,0,1212,1217,3,274,137,0,1213,1214,5,836,0,0,1214,1215,3,290,145,
	0,1215,1216,5,837,0,0,1216,1218,1,0,0,0,1217,1213,1,0,0,0,1217,1218,1,0,
	0,0,1218,1220,1,0,0,0,1219,1221,3,86,43,0,1220,1219,1,0,0,0,1220,1221,1,
	0,0,0,1221,1223,1,0,0,0,1222,1224,3,88,44,0,1223,1222,1,0,0,0,1223,1224,
	1,0,0,0,1224,1226,1,0,0,0,1225,1164,1,0,0,0,1225,1179,1,0,0,0,1225,1189,
	1,0,0,0,1225,1206,1,0,0,0,1226,85,1,0,0,0,1227,1228,5,228,0,0,1228,1236,
	5,91,0,0,1229,1230,5,610,0,0,1230,1237,5,383,0,0,1231,1237,5,40,0,0,1232,
	1233,5,314,0,0,1233,1237,5,222,0,0,1234,1235,5,314,0,0,1235,1237,5,88,0,
	0,1236,1229,1,0,0,0,1236,1231,1,0,0,0,1236,1232,1,0,0,0,1236,1234,1,0,0,
	0,1237,87,1,0,0,0,1238,1239,5,228,0,0,1239,1247,5,360,0,0,1240,1241,5,610,
	0,0,1241,1248,5,383,0,0,1242,1248,5,40,0,0,1243,1244,5,314,0,0,1244,1248,
	5,222,0,0,1245,1246,5,314,0,0,1246,1248,5,88,0,0,1247,1240,1,0,0,0,1247,
	1242,1,0,0,0,1247,1243,1,0,0,0,1247,1245,1,0,0,0,1248,89,1,0,0,0,1249,1250,
	5,376,0,0,1250,1251,5,836,0,0,1251,1256,3,92,46,0,1252,1253,5,838,0,0,1253,
	1255,3,92,46,0,1254,1252,1,0,0,0,1255,1258,1,0,0,0,1256,1254,1,0,0,0,1256,
	1257,1,0,0,0,1257,1259,1,0,0,0,1258,1256,1,0,0,0,1259,1260,5,837,0,0,1260,
	91,1,0,0,0,1261,1262,3,312,156,0,1262,1266,5,815,0,0,1263,1267,3,312,156,
	0,1264,1267,3,294,147,0,1265,1267,5,807,0,0,1266,1263,1,0,0,0,1266,1264,
	1,0,0,0,1266,1265,1,0,0,0,1267,93,1,0,0,0,1268,1271,3,306,153,0,1269,1271,
	5,802,0,0,1270,1268,1,0,0,0,1270,1269,1,0,0,0,1271,95,1,0,0,0,1272,1273,
	6,48,-1,0,1273,1285,3,98,49,0,1274,1285,3,102,51,0,1275,1285,3,100,50,0,
	1276,1285,3,108,54,0,1277,1285,3,110,55,0,1278,1285,3,212,106,0,1279,1285,
	3,112,56,0,1280,1285,3,286,143,0,1281,1285,3,116,58,0,1282,1285,3,114,57,
	0,1283,1285,3,260,130,0,1284,1272,1,0,0,0,1284,1274,1,0,0,0,1284,1275,1,
	0,0,0,1284,1276,1,0,0,0,1284,1277,1,0,0,0,1284,1278,1,0,0,0,1284,1279,1,
	0,0,0,1284,1280,1,0,0,0,1284,1281,1,0,0,0,1284,1282,1,0,0,0,1284,1283,1,
	0,0,0,1285,1305,1,0,0,0,1286,1287,10,5,0,0,1287,1288,7,7,0,0,1288,1304,
	3,96,48,6,1289,1290,10,4,0,0,1290,1291,7,8,0,0,1291,1304,3,96,48,5,1292,
	1293,10,3,0,0,1293,1294,3,314,157,0,1294,1295,3,96,48,4,1295,1304,1,0,0,
	0,1296,1297,10,2,0,0,1297,1298,3,316,158,0,1298,1299,3,96,48,3,1299,1304,
	1,0,0,0,1300,1301,10,10,0,0,1301,1302,5,54,0,0,1302,1304,3,310,155,0,1303,
	1286,1,0,0,0,1303,1289,1,0,0,0,1303,1292,1,0,0,0,1303,1296,1,0,0,0,1303,
	1300,1,0,0,0,1304,1307,1,0,0,0,1305,1303,1,0,0,0,1305,1306,1,0,0,0,1306,
	97,1,0,0,0,1307,1305,1,0,0,0,1308,1311,5,802,0,0,1309,1310,5,831,0,0,1310,
	1312,3,312,156,0,1311,1309,1,0,0,0,1311,1312,1,0,0,0,1312,1323,1,0,0,0,
	1313,1314,5,840,0,0,1314,1324,3,312,156,0,1315,1316,5,834,0,0,1316,1322,
	5,552,0,0,1317,1318,5,834,0,0,1318,1322,5,794,0,0,1319,1320,5,834,0,0,1320,
	1322,5,795,0,0,1321,1315,1,0,0,0,1321,1317,1,0,0,0,1321,1319,1,0,0,0,1322,
	1324,1,0,0,0,1323,1313,1,0,0,0,1323,1321,1,0,0,0,1323,1324,1,0,0,0,1324,
	99,1,0,0,0,1325,1326,5,803,0,0,1326,101,1,0,0,0,1327,1330,5,804,0,0,1328,
	1329,5,831,0,0,1329,1331,3,312,156,0,1330,1328,1,0,0,0,1330,1331,1,0,0,
	0,1331,1342,1,0,0,0,1332,1333,5,840,0,0,1333,1343,3,312,156,0,1334,1335,
	5,834,0,0,1335,1341,5,552,0,0,1336,1337,5,834,0,0,1337,1341,5,794,0,0,1338,
	1339,5,834,0,0,1339,1341,5,795,0,0,1340,1334,1,0,0,0,1340,1336,1,0,0,0,
	1340,1338,1,0,0,0,1341,1343,1,0,0,0,1342,1332,1,0,0,0,1342,1340,1,0,0,0,
	1342,1343,1,0,0,0,1343,103,1,0,0,0,1344,1347,5,805,0,0,1345,1346,5,831,
	0,0,1346,1348,3,312,156,0,1347,1345,1,0,0,0,1347,1348,1,0,0,0,1348,1353,
	1,0,0,0,1349,1350,5,840,0,0,1350,1354,3,312,156,0,1351,1352,5,849,0,0,1352,
	1354,3,312,156,0,1353,1349,1,0,0,0,1353,1351,1,0,0,0,1353,1354,1,0,0,0,
	1354,105,1,0,0,0,1355,1356,5,806,0,0,1356,107,1,0,0,0,1357,1358,5,1,0,0,
	1358,1359,3,312,156,0,1359,109,1,0,0,0,1360,1365,5,88,0,0,1361,1365,5,222,
	0,0,1362,1365,5,802,0,0,1363,1365,3,306,153,0,1364,1360,1,0,0,0,1364,1361,
	1,0,0,0,1364,1362,1,0,0,0,1364,1363,1,0,0,0,1365,111,1,0,0,0,1366,1367,
	5,41,0,0,1367,1369,3,96,48,0,1368,1370,3,226,113,0,1369,1368,1,0,0,0,1370,
	1371,1,0,0,0,1371,1369,1,0,0,0,1371,1372,1,0,0,0,1372,1375,1,0,0,0,1373,
	1374,5,105,0,0,1374,1376,3,96,48,0,1375,1373,1,0,0,0,1375,1376,1,0,0,0,
	1376,1377,1,0,0,0,1377,1378,5,107,0,0,1378,1392,1,0,0,0,1379,1381,5,41,
	0,0,1380,1382,3,228,114,0,1381,1380,1,0,0,0,1382,1383,1,0,0,0,1383,1381,
	1,0,0,0,1383,1384,1,0,0,0,1384,1387,1,0,0,0,1385,1386,5,105,0,0,1386,1388,
	3,96,48,0,1387,1385,1,0,0,0,1387,1388,1,0,0,0,1388,1389,1,0,0,0,1389,1390,
	5,107,0,0,1390,1392,1,0,0,0,1391,1366,1,0,0,0,1391,1379,1,0,0,0,1392,113,
	1,0,0,0,1393,1394,5,846,0,0,1394,1398,3,96,48,0,1395,1396,7,9,0,0,1396,
	1398,3,96,48,0,1397,1393,1,0,0,0,1397,1395,1,0,0,0,1398,115,1,0,0,0,1399,
	1400,5,836,0,0,1400,1401,3,96,48,0,1401,1402,5,837,0,0,1402,1408,1,0,0,
	0,1403,1404,5,836,0,0,1404,1405,3,120,60,0,1405,1406,5,837,0,0,1406,1408,
	1,0,0,0,1407,1399,1,0,0,0,1407,1403,1,0,0,0,1408,117,1,0,0,0,1409,1418,
	5,222,0,0,1410,1418,3,306,153,0,1411,1418,3,212,106,0,1412,1418,5,802,0,
	0,1413,1414,5,836,0,0,1414,1415,3,118,59,0,1415,1416,5,837,0,0,1416,1418,
	1,0,0,0,1417,1409,1,0,0,0,1417,1410,1,0,0,0,1417,1411,1,0,0,0,1417,1412,
	1,0,0,0,1417,1413,1,0,0,0,1418,119,1,0,0,0,1419,1420,3,26,13,0,1420,121,
	1,0,0,0,1421,1424,5,376,0,0,1422,1423,5,790,0,0,1423,1425,5,838,0,0,1424,
	1422,1,0,0,0,1424,1425,1,0,0,0,1425,1426,1,0,0,0,1426,1431,3,124,62,0,1427,
	1428,5,838,0,0,1428,1430,3,124,62,0,1429,1427,1,0,0,0,1430,1433,1,0,0,0,
	1431,1429,1,0,0,0,1431,1432,1,0,0,0,1432,1448,1,0,0,0,1433,1431,1,0,0,0,
	1434,1435,5,376,0,0,1435,1440,5,31,0,0,1436,1437,5,836,0,0,1437,1438,3,
	202,101,0,1438,1439,5,837,0,0,1439,1441,1,0,0,0,1440,1436,1,0,0,0,1440,
	1441,1,0,0,0,1441,1442,1,0,0,0,1442,1443,5,15,0,0,1443,1444,5,836,0,0,1444,
	1445,3,26,13,0,1445,1446,5,837,0,0,1446,1448,1,0,0,0,1447,1421,1,0,0,0,
	1447,1434,1,0,0,0,1448,123,1,0,0,0,1449,1454,3,310,155,0,1450,1451,5,836,
	0,0,1451,1452,3,290,145,0,1452,1453,5,837,0,0,1453,1455,1,0,0,0,1454,1450,
	1,0,0,0,1454,1455,1,0,0,0,1455,1456,1,0,0,0,1456,1457,5,15,0,0,1457,1458,
	5,836,0,0,1458,1459,3,26,13,0,1459,1460,5,837,0,0,1460,125,1,0,0,0,1461,
	1464,3,286,143,0,1462,1464,5,802,0,0,1463,1461,1,0,0,0,1463,1462,1,0,0,
	0,1464,1467,1,0,0,0,1465,1468,5,815,0,0,1466,1468,3,316,158,0,1467,1465,
	1,0,0,0,1467,1466,1,0,0,0,1468,1469,1,0,0,0,1469,1478,3,96,48,0,1470,1471,
	3,310,155,0,1471,1472,5,831,0,0,1472,1473,3,310,155,0,1473,1474,5,836,0,
	0,1474,1475,3,250,125,0,1475,1476,5,837,0,0,1476,1478,1,0,0,0,1477,1463,
	1,0,0,0,1477,1470,1,0,0,0,1478,127,1,0,0,0,1479,1484,3,130,65,0,1480,1481,
	5,838,0,0,1481,1483,3,130,65,0,1482,1480,1,0,0,0,1483,1486,1,0,0,0,1484,
	1482,1,0,0,0,1484,1485,1,0,0,0,1485,129,1,0,0,0,1486,1484,1,0,0,0,1487,
	1492,3,132,66,0,1488,1489,5,236,0,0,1489,1491,3,132,66,0,1490,1488,1,0,
	0,0,1491,1494,1,0,0,0,1492,1490,1,0,0,0,1492,1493,1,0,0,0,1493,131,1,0,
	0,0,1494,1492,1,0,0,0,1495,1500,3,134,67,0,1496,1497,5,10,0,0,1497,1499,
	3,134,67,0,1498,1496,1,0,0,0,1499,1502,1,0,0,0,1500,1498,1,0,0,0,1500,1501,
	1,0,0,0,1501,133,1,0,0,0,1502,1500,1,0,0,0,1503,1505,5,219,0,0,1504,1503,
	1,0,0,0,1504,1505,1,0,0,0,1505,1506,1,0,0,0,1506,1507,3,136,68,0,1507,135,
	1,0,0,0,1508,1509,5,118,0,0,1509,1510,5,836,0,0,1510,1511,3,120,60,0,1511,
	1512,5,837,0,0,1512,1580,1,0,0,0,1513,1514,3,96,48,0,1514,1515,3,314,157,
	0,1515,1516,3,96,48,0,1516,1580,1,0,0,0,1517,1518,3,96,48,0,1518,1519,3,
	314,157,0,1519,1520,7,10,0,0,1520,1521,5,836,0,0,1521,1522,3,120,60,0,1522,
	1523,5,837,0,0,1523,1580,1,0,0,0,1524,1526,3,96,48,0,1525,1527,5,219,0,
	0,1526,1525,1,0,0,0,1526,1527,1,0,0,0,1527,1528,1,0,0,0,1528,1529,5,28,
	0,0,1529,1530,3,96,48,0,1530,1531,5,10,0,0,1531,1532,3,96,48,0,1532,1580,
	1,0,0,0,1533,1535,3,96,48,0,1534,1536,5,219,0,0,1535,1534,1,0,0,0,1535,
	1536,1,0,0,0,1536,1537,1,0,0,0,1537,1538,5,154,0,0,1538,1541,5,836,0,0,
	1539,1542,3,120,60,0,1540,1542,3,250,125,0,1541,1539,1,0,0,0,1541,1540,
	1,0,0,0,1542,1543,1,0,0,0,1543,1544,5,837,0,0,1544,1580,1,0,0,0,1545,1547,
	3,96,48,0,1546,1548,5,219,0,0,1547,1546,1,0,0,0,1547,1548,1,0,0,0,1548,
	1549,1,0,0,0,1549,1550,5,179,0,0,1550,1553,3,96,48,0,1551,1552,5,110,0,
	0,1552,1554,3,96,48,0,1553,1551,1,0,0,0,1553,1554,1,0,0,0,1554,1580,1,0,
	0,0,1555,1556,3,96,48,0,1556,1557,5,167,0,0,1557,1558,3,298,149,0,1558,
	1580,1,0,0,0,1559,1580,3,104,52,0,1560,1580,3,106,53,0,1561,1564,5,802,
	0,0,1562,1563,5,831,0,0,1563,1565,3,312,156,0,1564,1562,1,0,0,0,1564,1565,
	1,0,0,0,1565,1566,1,0,0,0,1566,1567,5,840,0,0,1567,1580,5,264,0,0,1568,
	1571,5,804,0,0,1569,1570,5,831,0,0,1570,1572,3,312,156,0,1571,1569,1,0,
	0,0,1571,1572,1,0,0,0,1572,1573,1,0,0,0,1573,1574,5,840,0,0,1574,1580,5,
	264,0,0,1575,1576,5,836,0,0,1576,1577,3,130,65,0,1577,1578,5,837,0,0,1578,
	1580,1,0,0,0,1579,1508,1,0,0,0,1579,1513,1,0,0,0,1579,1517,1,0,0,0,1579,
	1524,1,0,0,0,1579,1533,1,0,0,0,1579,1545,1,0,0,0,1579,1555,1,0,0,0,1579,
	1559,1,0,0,0,1579,1560,1,0,0,0,1579,1561,1,0,0,0,1579,1568,1,0,0,0,1579,
	1575,1,0,0,0,1580,137,1,0,0,0,1581,1587,3,142,71,0,1582,1583,5,836,0,0,
	1583,1584,3,138,69,0,1584,1585,5,837,0,0,1585,1587,1,0,0,0,1586,1581,1,
	0,0,0,1586,1582,1,0,0,0,1587,1591,1,0,0,0,1588,1590,3,140,70,0,1589,1588,
	1,0,0,0,1590,1593,1,0,0,0,1591,1589,1,0,0,0,1591,1592,1,0,0,0,1592,139,
	1,0,0,0,1593,1591,1,0,0,0,1594,1596,5,355,0,0,1595,1597,5,5,0,0,1596,1595,
	1,0,0,0,1596,1597,1,0,0,0,1597,1601,1,0,0,0,1598,1601,5,115,0,0,1599,1601,
	5,163,0,0,1600,1594,1,0,0,0,1600,1598,1,0,0,0,1600,1599,1,0,0,0,1601,1607,
	1,0,0,0,1602,1608,3,142,71,0,1603,1604,5,836,0,0,1604,1605,3,138,69,0,1605,
	1606,5,837,0,0,1606,1608,1,0,0,0,1607,1602,1,0,0,0,1607,1603,1,0,0,0,1608,
	141,1,0,0,0,1609,1611,5,304,0,0,1610,1612,7,11,0,0,1611,1610,1,0,0,0,1611,
	1612,1,0,0,0,1612,1614,1,0,0,0,1613,1615,3,144,72,0,1614,1613,1,0,0,0,1614,
	1615,1,0,0,0,1615,1616,1,0,0,0,1616,1619,3,166,83,0,1617,1618,5,164,0,0,
	1618,1620,3,274,137,0,1619,1617,1,0,0,0,1619,1620,1,0,0,0,1620,1623,1,0,
	0,0,1621,1622,5,138,0,0,1622,1624,3,180,90,0,1623,1621,1,0,0,0,1623,1624,
	1,0,0,0,1624,1627,1,0,0,0,1625,1626,5,373,0,0,1626,1628,3,130,65,0,1627,
	1625,1,0,0,0,1627,1628,1,0,0,0,1628,1642,1,0,0,0,1629,1630,5,145,0,0,1630,
	1632,5,37,0,0,1631,1633,5,5,0,0,1632,1631,1,0,0,0,1632,1633,1,0,0,0,1633,
	1634,1,0,0,0,1634,1639,3,158,79,0,1635,1636,5,838,0,0,1636,1638,3,158,79,
	0,1637,1635,1,0,0,0,1638,1641,1,0,0,0,1639,1637,1,0,0,0,1639,1640,1,0,0,
	0,1640,1643,1,0,0,0,1641,1639,1,0,0,0,1642,1629,1,0,0,0,1642,1643,1,0,0,
	0,1643,1646,1,0,0,0,1644,1645,5,146,0,0,1645,1647,3,130,65,0,1646,1644,
	1,0,0,0,1646,1647,1,0,0,0,1647,143,1,0,0,0,1648,1651,5,346,0,0,1649,1652,
	3,146,73,0,1650,1652,3,148,74,0,1651,1649,1,0,0,0,1651,1650,1,0,0,0,1652,
	1655,1,0,0,0,1653,1654,5,376,0,0,1654,1656,5,755,0,0,1655,1653,1,0,0,0,
	1655,1656,1,0,0,0,1656,145,1,0,0,0,1657,1658,7,12,0,0,1658,1665,5,244,0,
	0,1659,1660,5,836,0,0,1660,1661,3,96,48,0,1661,1662,5,837,0,0,1662,1663,
	5,244,0,0,1663,1665,1,0,0,0,1664,1657,1,0,0,0,1664,1659,1,0,0,0,1665,147,
	1,0,0,0,1666,1672,5,807,0,0,1667,1668,5,836,0,0,1668,1669,3,96,48,0,1669,
	1670,5,837,0,0,1670,1672,1,0,0,0,1671,1666,1,0,0,0,1671,1667,1,0,0,0,1672,
	149,1,0,0,0,1673,1674,5,237,0,0,1674,1675,5,37,0,0,1675,1680,3,156,78,0,
	1676,1677,5,838,0,0,1677,1679,3,156,78,0,1678,1676,1,0,0,0,1679,1682,1,
	0,0,0,1680,1678,1,0,0,0,1680,1681,1,0,0,0,1681,1694,1,0,0,0,1682,1680,1,
	0,0,0,1683,1684,5,626,0,0,1684,1685,3,96,48,0,1685,1692,7,13,0,0,1686,1687,
	5,127,0,0,1687,1688,7,14,0,0,1688,1689,3,96,48,0,1689,1690,7,13,0,0,1690,
	1691,5,629,0,0,1691,1693,1,0,0,0,1692,1686,1,0,0,0,1692,1693,1,0,0,0,1693,
	1695,1,0,0,0,1694,1683,1,0,0,0,1694,1695,1,0,0,0,1695,151,1,0,0,0,1696,
	1697,5,132,0,0,1697,1785,5,33,0,0,1698,1699,5,132,0,0,1699,1707,5,788,0,
	0,1700,1704,5,264,0,0,1701,1702,5,836,0,0,1702,1703,5,811,0,0,1703,1705,
	5,837,0,0,1704,1701,1,0,0,0,1704,1705,1,0,0,0,1705,1708,1,0,0,0,1706,1708,
	5,407,0,0,1707,1700,1,0,0,0,1707,1706,1,0,0,0,1708,1712,1,0,0,0,1709,1711,
	3,154,77,0,1710,1709,1,0,0,0,1711,1714,1,0,0,0,1712,1710,1,0,0,0,1712,1713,
	1,0,0,0,1713,1725,1,0,0,0,1714,1712,1,0,0,0,1715,1723,5,838,0,0,1716,1724,
	5,789,0,0,1717,1721,5,791,0,0,1718,1719,5,836,0,0,1719,1720,5,811,0,0,1720,
	1722,5,837,0,0,1721,1718,1,0,0,0,1721,1722,1,0,0,0,1722,1724,1,0,0,0,1723,
	1716,1,0,0,0,1723,1717,1,0,0,0,1724,1726,1,0,0,0,1725,1715,1,0,0,0,1725,
	1726,1,0,0,0,1726,1730,1,0,0,0,1727,1728,5,838,0,0,1728,1729,5,485,0,0,
	1729,1731,7,15,0,0,1730,1727,1,0,0,0,1730,1731,1,0,0,0,1731,1785,1,0,0,
	0,1732,1733,5,132,0,0,1733,1734,5,788,0,0,1734,1738,5,499,0,0,1735,1737,
	3,154,77,0,1736,1735,1,0,0,0,1737,1740,1,0,0,0,1738,1736,1,0,0,0,1738,1739,
	1,0,0,0,1739,1743,1,0,0,0,1740,1738,1,0,0,0,1741,1742,5,838,0,0,1742,1744,
	5,789,0,0,1743,1741,1,0,0,0,1743,1744,1,0,0,0,1744,1785,1,0,0,0,1745,1746,
	5,132,0,0,1746,1747,5,788,0,0,1747,1751,5,642,0,0,1748,1749,5,836,0,0,1749,
	1750,5,811,0,0,1750,1752,5,837,0,0,1751,1748,1,0,0,0,1751,1752,1,0,0,0,
	1752,1756,1,0,0,0,1753,1755,3,154,77,0,1754,1753,1,0,0,0,1755,1758,1,0,
	0,0,1756,1754,1,0,0,0,1756,1757,1,0,0,0,1757,1762,1,0,0,0,1758,1756,1,0,
	0,0,1759,1760,5,838,0,0,1760,1761,5,485,0,0,1761,1763,7,15,0,0,1762,1759,
	1,0,0,0,1762,1763,1,0,0,0,1763,1785,1,0,0,0,1764,1765,5,132,0,0,1765,1766,
	5,550,0,0,1766,1774,7,16,0,0,1767,1768,5,838,0,0,1768,1772,5,694,0,0,1769,
	1770,5,836,0,0,1770,1771,5,811,0,0,1771,1773,5,837,0,0,1772,1769,1,0,0,
	0,1772,1773,1,0,0,0,1773,1775,1,0,0,0,1774,1767,1,0,0,0,1774,1775,1,0,0,
	0,1775,1778,1,0,0,0,1776,1777,5,838,0,0,1777,1779,5,540,0,0,1778,1776,1,
	0,0,0,1778,1779,1,0,0,0,1779,1782,1,0,0,0,1780,1781,5,838,0,0,1781,1783,
	5,785,0,0,1782,1780,1,0,0,0,1782,1783,1,0,0,0,1783,1785,1,0,0,0,1784,1696,
	1,0,0,0,1784,1698,1,0,0,0,1784,1732,1,0,0,0,1784,1745,1,0,0,0,1784,1764,
	1,0,0,0,1785,153,1,0,0,0,1786,1795,5,838,0,0,1787,1796,5,419,0,0,1788,1796,
	5,768,0,0,1789,1793,5,694,0,0,1790,1791,5,836,0,0,1791,1792,5,811,0,0,1792,
	1794,5,837,0,0,1793,1790,1,0,0,0,1793,1794,1,0,0,0,1794,1796,1,0,0,0,1795,
	1787,1,0,0,0,1795,1788,1,0,0,0,1795,1789,1,0,0,0,1796,155,1,0,0,0,1797,
	1799,3,96,48,0,1798,1800,7,17,0,0,1799,1798,1,0,0,0,1799,1800,1,0,0,0,1800,
	157,1,0,0,0,1801,1802,3,96,48,0,1802,159,1,0,0,0,1803,1804,5,235,0,0,1804,
	1805,5,836,0,0,1805,1810,3,162,81,0,1806,1807,5,838,0,0,1807,1809,3,162,
	81,0,1808,1806,1,0,0,0,1809,1812,1,0,0,0,1810,1808,1,0,0,0,1810,1811,1,
	0,0,0,1811,1813,1,0,0,0,1812,1810,1,0,0,0,1813,1814,5,837,0,0,1814,161,
	1,0,0,0,1815,1816,5,504,0,0,1816,1861,5,807,0,0,1817,1818,7,18,0,0,1818,
	1861,5,145,0,0,1819,1820,7,19,0,0,1820,1861,5,355,0,0,1821,1822,7,20,0,
	0,1822,1861,5,169,0,0,1823,1824,5,497,0,0,1824,1861,5,782,0,0,1825,1826,
	5,514,0,0,1826,1861,5,237,0,0,1827,1861,5,536,0,0,1828,1829,5,552,0,0,1829,
	1861,5,250,0,0,1830,1831,5,553,0,0,1831,1861,5,250,0,0,1832,1833,5,585,
	0,0,1833,1861,5,807,0,0,1834,1835,5,586,0,0,1835,1861,5,807,0,0,1836,1837,
	5,632,0,0,1837,1838,5,132,0,0,1838,1839,5,836,0,0,1839,1844,3,164,82,0,
	1840,1841,5,838,0,0,1841,1843,3,164,82,0,1842,1840,1,0,0,0,1843,1846,1,
	0,0,0,1844,1842,1,0,0,0,1844,1845,1,0,0,0,1845,1847,1,0,0,0,1846,1844,1,
	0,0,0,1847,1848,5,837,0,0,1848,1861,1,0,0,0,1849,1850,5,632,0,0,1850,1851,
	5,132,0,0,1851,1861,5,772,0,0,1852,1853,5,638,0,0,1853,1861,7,21,0,0,1854,
	1861,5,674,0,0,1855,1856,5,693,0,0,1856,1861,5,250,0,0,1857,1858,5,363,
	0,0,1858,1859,5,250,0,0,1859,1861,5,811,0,0,1860,1815,1,0,0,0,1860,1817,
	1,0,0,0,1860,1819,1,0,0,0,1860,1821,1,0,0,0,1860,1823,1,0,0,0,1860,1825,
	1,0,0,0,1860,1827,1,0,0,0,1860,1828,1,0,0,0,1860,1830,1,0,0,0,1860,1832,
	1,0,0,0,1860,1834,1,0,0,0,1860,1836,1,0,0,0,1860,1849,1,0,0,0,1860,1852,
	1,0,0,0,1860,1854,1,0,0,0,1860,1855,1,0,0,0,1860,1857,1,0,0,0,1861,163,
	1,0,0,0,1862,1869,5,802,0,0,1863,1870,5,772,0,0,1864,1867,5,815,0,0,1865,
	1868,3,306,153,0,1866,1868,5,222,0,0,1867,1865,1,0,0,0,1867,1866,1,0,0,
	0,1868,1870,1,0,0,0,1869,1863,1,0,0,0,1869,1864,1,0,0,0,1870,165,1,0,0,
	0,1871,1876,3,178,89,0,1872,1873,5,838,0,0,1873,1875,3,178,89,0,1874,1872,
	1,0,0,0,1875,1878,1,0,0,0,1876,1874,1,0,0,0,1876,1877,1,0,0,0,1877,167,
	1,0,0,0,1878,1876,1,0,0,0,1879,1880,5,836,0,0,1880,1885,3,72,36,0,1881,
	1882,5,838,0,0,1882,1884,3,72,36,0,1883,1881,1,0,0,0,1884,1887,1,0,0,0,
	1885,1883,1,0,0,0,1885,1886,1,0,0,0,1886,1888,1,0,0,0,1887,1885,1,0,0,0,
	1888,1889,5,837,0,0,1889,169,1,0,0,0,1890,1891,3,274,137,0,1891,1892,5,
	831,0,0,1892,1894,1,0,0,0,1893,1890,1,0,0,0,1893,1894,1,0,0,0,1894,1895,
	1,0,0,0,1895,1896,5,841,0,0,1896,171,1,0,0,0,1897,1898,3,274,137,0,1898,
	1899,5,831,0,0,1899,1901,1,0,0,0,1900,1897,1,0,0,0,1900,1901,1,0,0,0,1901,
	1907,1,0,0,0,1902,1908,3,310,155,0,1903,1904,5,835,0,0,1904,1908,5,149,
	0,0,1905,1906,5,835,0,0,1906,1908,5,698,0,0,1907,1902,1,0,0,0,1907,1903,
	1,0,0,0,1907,1905,1,0,0,0,1908,1911,1,0,0,0,1909,1911,5,222,0,0,1910,1900,
	1,0,0,0,1910,1909,1,0,0,0,1911,1913,1,0,0,0,1912,1914,3,230,115,0,1913,
	1912,1,0,0,0,1913,1914,1,0,0,0,1914,173,1,0,0,0,1915,1916,3,310,155,0,1916,
	1917,5,831,0,0,1917,1918,3,310,155,0,1918,1920,3,168,84,0,1919,1921,3,230,
	115,0,1920,1919,1,0,0,0,1920,1921,1,0,0,0,1921,1933,1,0,0,0,1922,1923,3,
	310,155,0,1923,1924,5,840,0,0,1924,1925,5,840,0,0,1925,1927,3,310,155,0,
	1926,1928,3,168,84,0,1927,1926,1,0,0,0,1927,1928,1,0,0,0,1928,1930,1,0,
	0,0,1929,1931,3,230,115,0,1930,1929,1,0,0,0,1930,1931,1,0,0,0,1931,1933,
	1,0,0,0,1932,1915,1,0,0,0,1932,1922,1,0,0,0,1933,175,1,0,0,0,1934,1935,
	3,246,123,0,1935,1936,5,815,0,0,1936,1937,3,96,48,0,1937,1943,1,0,0,0,1938,
	1940,3,96,48,0,1939,1941,3,230,115,0,1940,1939,1,0,0,0,1940,1941,1,0,0,
	0,1941,1943,1,0,0,0,1942,1934,1,0,0,0,1942,1938,1,0,0,0,1943,177,1,0,0,
	0,1944,1949,3,170,85,0,1945,1949,3,172,86,0,1946,1949,3,174,87,0,1947,1949,
	3,176,88,0,1948,1944,1,0,0,0,1948,1945,1,0,0,0,1948,1946,1,0,0,0,1948,1947,
	1,0,0,0,1949,179,1,0,0,0,1950,1955,3,182,91,0,1951,1952,5,838,0,0,1952,
	1954,3,182,91,0,1953,1951,1,0,0,0,1954,1957,1,0,0,0,1955,1953,1,0,0,0,1955,
	1956,1,0,0,0,1956,181,1,0,0,0,1957,1955,1,0,0,0,1958,1964,3,184,92,0,1959,
	1960,5,836,0,0,1960,1961,3,184,92,0,1961,1962,5,837,0,0,1962,1964,1,0,0,
	0,1963,1958,1,0,0,0,1963,1959,1,0,0,0,1964,183,1,0,0,0,1965,1969,3,186,
	93,0,1966,1968,3,196,98,0,1967,1966,1,0,0,0,1968,1971,1,0,0,0,1969,1967,
	1,0,0,0,1969,1970,1,0,0,0,1970,185,1,0,0,0,1971,1969,1,0,0,0,1972,1974,
	3,204,102,0,1973,1975,3,232,116,0,1974,1973,1,0,0,0,1974,1975,1,0,0,0,1975,
	2029,1,0,0,0,1976,1978,3,272,136,0,1977,1979,3,232,116,0,1978,1977,1,0,
	0,0,1978,1979,1,0,0,0,1979,2029,1,0,0,0,1980,1982,3,206,103,0,1981,1983,
	3,232,116,0,1982,1981,1,0,0,0,1982,1983,1,0,0,0,1983,2029,1,0,0,0,1984,
	1989,3,210,105,0,1985,1987,3,232,116,0,1986,1988,3,244,122,0,1987,1986,
	1,0,0,0,1987,1988,1,0,0,0,1988,1990,1,0,0,0,1989,1985,1,0,0,0,1989,1990,
	1,0,0,0,1990,2029,1,0,0,0,1991,1992,3,194,97,0,1992,1993,3,232,116,0,1993,
	2029,1,0,0,0,1994,1999,3,212,106,0,1995,1997,3,232,116,0,1996,1998,3,244,
	122,0,1997,1996,1,0,0,0,1997,1998,1,0,0,0,1998,2000,1,0,0,0,1999,1995,1,
	0,0,0,1999,2000,1,0,0,0,2000,2029,1,0,0,0,2001,2003,5,802,0,0,2002,2004,
	3,232,116,0,2003,2002,1,0,0,0,2003,2004,1,0,0,0,2004,2029,1,0,0,0,2005,
	2006,5,802,0,0,2006,2007,5,831,0,0,2007,2012,3,212,106,0,2008,2010,3,232,
	116,0,2009,2011,3,244,122,0,2010,2009,1,0,0,0,2010,2011,1,0,0,0,2011,2013,
	1,0,0,0,2012,2008,1,0,0,0,2012,2013,1,0,0,0,2013,2029,1,0,0,0,2014,2029,
	3,188,94,0,2015,2016,5,840,0,0,2016,2017,5,840,0,0,2017,2019,3,212,106,
	0,2018,2020,3,232,116,0,2019,2018,1,0,0,0,2019,2020,1,0,0,0,2020,2029,1,
	0,0,0,2021,2024,5,802,0,0,2022,2023,5,831,0,0,2023,2025,3,312,156,0,2024,
	2022,1,0,0,0,2024,2025,1,0,0,0,2025,2026,1,0,0,0,2026,2027,5,840,0,0,2027,
	2029,5,264,0,0,2028,1972,1,0,0,0,2028,1976,1,0,0,0,2028,1980,1,0,0,0,2028,
	1984,1,0,0,0,2028,1991,1,0,0,0,2028,1994,1,0,0,0,2028,2001,1,0,0,0,2028,
	2005,1,0,0,0,2028,2014,1,0,0,0,2028,2015,1,0,0,0,2028,2021,1,0,0,0,2029,
	187,1,0,0,0,2030,2031,5,234,0,0,2031,2032,5,836,0,0,2032,2033,3,96,48,0,
	2033,2034,5,838,0,0,2034,2037,3,96,48,0,2035,2036,5,838,0,0,2036,2038,3,
	96,48,0,2037,2035,1,0,0,0,2037,2038,1,0,0,0,2038,2039,1,0,0,0,2039,2045,
	5,837,0,0,2040,2041,5,376,0,0,2041,2042,5,836,0,0,2042,2043,3,190,95,0,
	2043,2044,5,837,0,0,2044,2046,1,0,0,0,2045,2040,1,0,0,0,2045,2046,1,0,0,
	0,2046,189,1,0,0,0,2047,2052,3,192,96,0,2048,2049,5,838,0,0,2049,2051,3,
	192,96,0,2050,2048,1,0,0,0,2051,2054,1,0,0,0,2052,2050,1,0,0,0,2052,2053,
	1,0,0,0,2053,191,1,0,0,0,2054,2052,1,0,0,0,2055,2056,5,808,0,0,2056,2058,
	3,304,152,0,2057,2059,5,811,0,0,2058,2057,1,0,0,0,2058,2059,1,0,0,0,2059,
	193,1,0,0,0,2060,2061,5,43,0,0,2061,2062,5,836,0,0,2062,2063,5,44,0,0,2063,
	2064,3,274,137,0,2064,2065,5,838,0,0,2065,2066,7,22,0,0,2066,2067,5,837,
	0,0,2067,195,1,0,0,0,2068,2070,5,160,0,0,2069,2068,1,0,0,0,2069,2070,1,
	0,0,0,2070,2076,1,0,0,0,2071,2073,7,23,0,0,2072,2074,5,238,0,0,2073,2072,
	1,0,0,0,2073,2074,1,0,0,0,2074,2076,1,0,0,0,2075,2069,1,0,0,0,2075,2071,
	1,0,0,0,2076,2078,1,0,0,0,2077,2079,7,24,0,0,2078,2077,1,0,0,0,2078,2079,
	1,0,0,0,2079,2080,1,0,0,0,2080,2081,5,169,0,0,2081,2082,3,182,91,0,2082,
	2083,5,228,0,0,2083,2084,3,130,65,0,2084,2103,1,0,0,0,2085,2086,5,73,0,
	0,2086,2087,5,169,0,0,2087,2103,3,182,91,0,2088,2089,5,73,0,0,2089,2090,
	5,402,0,0,2090,2103,3,182,91,0,2091,2092,5,238,0,0,2092,2093,5,402,0,0,
	2093,2103,3,182,91,0,2094,2095,5,249,0,0,2095,2096,3,198,99,0,2096,2097,
	3,232,116,0,2097,2103,1,0,0,0,2098,2099,5,358,0,0,2099,2100,3,200,100,0,
	2100,2101,3,232,116,0,2101,2103,1,0,0,0,2102,2075,1,0,0,0,2102,2085,1,0,
	0,0,2102,2088,1,0,0,0,2102,2091,1,0,0,0,2102,2094,1,0,0,0,2102,2098,1,0,
	0,0,2103,197,1,0,0,0,2104,2105,5,836,0,0,2105,2106,3,254,127,0,2106,2107,
	5,132,0,0,2107,2108,3,286,143,0,2108,2109,5,154,0,0,2109,2110,3,244,122,
	0,2110,2111,5,837,0,0,2111,199,1,0,0,0,2112,2113,5,836,0,0,2113,2114,3,
	96,48,0,2114,2115,5,132,0,0,2115,2116,3,286,143,0,2116,2117,5,154,0,0,2117,
	2118,5,836,0,0,2118,2119,3,202,101,0,2119,2120,5,837,0,0,2120,2121,5,837,
	0,0,2121,201,1,0,0,0,2122,2127,3,286,143,0,2123,2124,5,838,0,0,2124,2126,
	3,286,143,0,2125,2123,1,0,0,0,2126,2129,1,0,0,0,2127,2125,1,0,0,0,2127,
	2128,1,0,0,0,2128,203,1,0,0,0,2129,2127,1,0,0,0,2130,2132,3,274,137,0,2131,
	2133,3,236,118,0,2132,2131,1,0,0,0,2132,2133,1,0,0,0,2133,205,1,0,0,0,2134,
	2135,5,233,0,0,2135,2136,5,836,0,0,2136,2137,5,811,0,0,2137,2138,5,838,
	0,0,2138,2139,5,811,0,0,2139,2140,5,838,0,0,2140,2141,5,811,0,0,2141,2161,
	5,837,0,0,2142,2143,5,233,0,0,2143,2144,5,836,0,0,2144,2145,5,36,0,0,2145,
	2146,5,811,0,0,2146,2156,5,838,0,0,2147,2152,3,208,104,0,2148,2149,5,838,
	0,0,2149,2151,3,208,104,0,2150,2148,1,0,0,0,2151,2154,1,0,0,0,2152,2150,
	1,0,0,0,2152,2153,1,0,0,0,2153,2157,1,0,0,0,2154,2152,1,0,0,0,2155,2157,
	3,310,155,0,2156,2147,1,0,0,0,2156,2155,1,0,0,0,2157,2158,1,0,0,0,2158,
	2159,5,837,0,0,2159,2161,1,0,0,0,2160,2134,1,0,0,0,2160,2142,1,0,0,0,2161,
	207,1,0,0,0,2162,2163,3,310,155,0,2163,2164,5,815,0,0,2164,2165,7,25,0,
	0,2165,209,1,0,0,0,2166,2177,3,120,60,0,2167,2168,5,836,0,0,2168,2169,3,
	120,60,0,2169,2170,5,837,0,0,2170,2177,1,0,0,0,2171,2177,3,248,124,0,2172,
	2173,5,836,0,0,2173,2174,3,248,124,0,2174,2175,5,837,0,0,2175,2177,1,0,
	0,0,2176,2166,1,0,0,0,2176,2167,1,0,0,0,2176,2171,1,0,0,0,2176,2172,1,0,
	0,0,2177,211,1,0,0,0,2178,2179,5,420,0,0,2179,2180,5,836,0,0,2180,2181,
	5,841,0,0,2181,2325,5,837,0,0,2182,2183,5,428,0,0,2183,2184,5,836,0,0,2184,
	2185,3,96,48,0,2185,2186,5,15,0,0,2186,2187,3,304,152,0,2187,2188,5,837,
	0,0,2188,2325,1,0,0,0,2189,2190,5,70,0,0,2190,2191,5,836,0,0,2191,2192,
	3,304,152,0,2192,2193,5,838,0,0,2193,2196,3,96,48,0,2194,2195,5,838,0,0,
	2195,2197,3,96,48,0,2196,2194,1,0,0,0,2196,2197,1,0,0,0,2197,2198,1,0,0,
	0,2198,2199,5,837,0,0,2199,2325,1,0,0,0,2200,2201,5,433,0,0,2201,2202,5,
	836,0,0,2202,2203,5,841,0,0,2203,2325,5,837,0,0,2204,2205,5,53,0,0,2205,
	2206,5,836,0,0,2206,2207,3,250,125,0,2207,2208,5,837,0,0,2208,2325,1,0,
	0,0,2209,2325,5,77,0,0,2210,2325,5,78,0,0,2211,2212,5,457,0,0,2212,2213,
	5,836,0,0,2213,2214,5,808,0,0,2214,2215,5,838,0,0,2215,2216,3,96,48,0,2216,
	2217,5,838,0,0,2217,2218,3,96,48,0,2218,2219,5,837,0,0,2219,2325,1,0,0,
	0,2220,2221,5,458,0,0,2221,2222,5,836,0,0,2222,2223,5,808,0,0,2223,2224,
	5,838,0,0,2224,2225,3,96,48,0,2225,2226,5,838,0,0,2226,2227,3,96,48,0,2227,
	2228,5,837,0,0,2228,2325,1,0,0,0,2229,2230,5,459,0,0,2230,2231,5,836,0,
	0,2231,2232,5,808,0,0,2232,2233,5,838,0,0,2233,2234,3,96,48,0,2234,2235,
	5,837,0,0,2235,2325,1,0,0,0,2236,2237,5,460,0,0,2237,2238,5,836,0,0,2238,
	2239,5,808,0,0,2239,2240,5,838,0,0,2240,2241,3,96,48,0,2241,2242,5,837,
	0,0,2242,2325,1,0,0,0,2243,2244,5,522,0,0,2244,2245,5,836,0,0,2245,2325,
	5,837,0,0,2246,2247,5,523,0,0,2247,2248,5,836,0,0,2248,2325,5,837,0,0,2249,
	2250,5,149,0,0,2250,2251,5,836,0,0,2251,2254,3,304,152,0,2252,2253,5,838,
	0,0,2253,2255,5,807,0,0,2254,2252,1,0,0,0,2254,2255,1,0,0,0,2255,2258,1,
	0,0,0,2256,2257,5,838,0,0,2257,2259,5,807,0,0,2258,2256,1,0,0,0,2258,2259,
	1,0,0,0,2259,2260,1,0,0,0,2260,2261,5,837,0,0,2261,2325,1,0,0,0,2262,2325,
	5,593,0,0,2263,2264,5,223,0,0,2264,2265,5,836,0,0,2265,2266,3,96,48,0,2266,
	2267,5,838,0,0,2267,2268,3,96,48,0,2268,2269,5,837,0,0,2269,2325,1,0,0,
	0,2270,2271,5,741,0,0,2271,2272,5,836,0,0,2272,2273,3,96,48,0,2273,2274,
	5,838,0,0,2274,2275,5,807,0,0,2275,2276,5,838,0,0,2276,2277,5,807,0,0,2277,
	2278,5,838,0,0,2278,2279,3,96,48,0,2279,2280,5,837,0,0,2280,2325,1,0,0,
	0,2281,2325,5,313,0,0,2282,2325,5,337,0,0,2283,2284,5,168,0,0,2284,2285,
	5,836,0,0,2285,2286,3,96,48,0,2286,2287,5,838,0,0,2287,2288,3,96,48,0,2288,
	2289,5,837,0,0,2289,2325,1,0,0,0,2290,2325,3,214,107,0,2291,2292,5,153,
	0,0,2292,2293,5,836,0,0,2293,2294,3,130,65,0,2294,2295,5,838,0,0,2295,2296,
	3,96,48,0,2296,2297,5,838,0,0,2297,2298,3,96,48,0,2298,2299,5,837,0,0,2299,
	2325,1,0,0,0,2300,2325,3,252,126,0,2301,2325,3,254,127,0,2302,2325,3,256,
	128,0,2303,2304,3,302,151,0,2304,2306,5,836,0,0,2305,2307,3,250,125,0,2306,
	2305,1,0,0,0,2306,2307,1,0,0,0,2307,2308,1,0,0,0,2308,2309,5,837,0,0,2309,
	2325,1,0,0,0,2310,2311,5,740,0,0,2311,2312,5,836,0,0,2312,2313,3,96,48,
	0,2313,2314,5,838,0,0,2314,2315,3,96,48,0,2315,2322,5,837,0,0,2316,2317,
	5,377,0,0,2317,2318,5,145,0,0,2318,2319,5,836,0,0,2319,2320,3,150,75,0,
	2320,2321,5,837,0,0,2321,2323,1,0,0,0,2322,2316,1,0,0,0,2322,2323,1,0,0,
	0,2323,2325,1,0,0,0,2324,2178,1,0,0,0,2324,2182,1,0,0,0,2324,2189,1,0,0,
	0,2324,2200,1,0,0,0,2324,2204,1,0,0,0,2324,2209,1,0,0,0,2324,2210,1,0,0,
	0,2324,2211,1,0,0,0,2324,2220,1,0,0,0,2324,2229,1,0,0,0,2324,2236,1,0,0,
	0,2324,2243,1,0,0,0,2324,2246,1,0,0,0,2324,2249,1,0,0,0,2324,2262,1,0,0,
	0,2324,2263,1,0,0,0,2324,2270,1,0,0,0,2324,2281,1,0,0,0,2324,2282,1,0,0,
	0,2324,2283,1,0,0,0,2324,2290,1,0,0,0,2324,2291,1,0,0,0,2324,2300,1,0,0,
	0,2324,2301,1,0,0,0,2324,2302,1,0,0,0,2324,2303,1,0,0,0,2324,2310,1,0,0,
	0,2325,213,1,0,0,0,2326,2332,3,216,108,0,2327,2332,3,218,109,0,2328,2332,
	3,220,110,0,2329,2332,3,222,111,0,2330,2332,3,224,112,0,2331,2326,1,0,0,
	0,2331,2327,1,0,0,0,2331,2328,1,0,0,0,2331,2329,1,0,0,0,2331,2330,1,0,0,
	0,2332,215,1,0,0,0,2333,2338,5,802,0,0,2334,2338,5,808,0,0,2335,2338,5,
	113,0,0,2336,2338,3,218,109,0,2337,2333,1,0,0,0,2337,2334,1,0,0,0,2337,
	2335,1,0,0,0,2337,2336,1,0,0,0,2338,2339,1,0,0,0,2339,2340,5,831,0,0,2340,
	2341,5,778,0,0,2341,2342,5,836,0,0,2342,2343,5,811,0,0,2343,2344,5,838,
	0,0,2344,2345,5,811,0,0,2345,2377,5,837,0,0,2346,2351,5,802,0,0,2347,2351,
	5,808,0,0,2348,2351,5,113,0,0,2349,2351,3,218,109,0,2350,2346,1,0,0,0,2350,
	2347,1,0,0,0,2350,2348,1,0,0,0,2350,2349,1,0,0,0,2351,2352,1,0,0,0,2352,
	2353,5,831,0,0,2353,2354,5,696,0,0,2354,2355,5,831,0,0,2355,2356,5,778,
	0,0,2356,2357,5,836,0,0,2357,2358,5,811,0,0,2358,2359,5,838,0,0,2359,2360,
	5,811,0,0,2360,2377,5,837,0,0,2361,2366,5,802,0,0,2362,2366,5,808,0,0,2363,
	2366,5,113,0,0,2364,2366,3,218,109,0,2365,2361,1,0,0,0,2365,2362,1,0,0,
	0,2365,2363,1,0,0,0,2365,2364,1,0,0,0,2366,2367,1,0,0,0,2367,2368,5,831,
	0,0,2368,2369,5,241,0,0,2369,2370,5,831,0,0,2370,2371,5,778,0,0,2371,2372,
	5,836,0,0,2372,2373,5,811,0,0,2373,2374,5,838,0,0,2374,2375,5,811,0,0,2375,
	2377,5,837,0,0,2376,2337,1,0,0,0,2376,2350,1,0,0,0,2376,2365,1,0,0,0,2377,
	217,1,0,0,0,2378,2382,5,802,0,0,2379,2382,5,808,0,0,2380,2382,3,272,136,
	0,2381,2378,1,0,0,0,2381,2379,1,0,0,0,2381,2380,1,0,0,0,2382,2383,1,0,0,
	0,2383,2384,5,831,0,0,2384,2385,5,658,0,0,2385,2386,5,836,0,0,2386,2387,
	5,811,0,0,2387,2401,5,837,0,0,2388,2392,5,802,0,0,2389,2392,5,808,0,0,2390,
	2392,3,272,136,0,2391,2388,1,0,0,0,2391,2389,1,0,0,0,2391,2390,1,0,0,0,
	2392,2393,1,0,0,0,2393,2394,5,831,0,0,2394,2395,5,696,0,0,2395,2396,5,831,
	0,0,2396,2397,5,658,0,0,2397,2398,5,836,0,0,2398,2399,5,811,0,0,2399,2401,
	5,837,0,0,2400,2381,1,0,0,0,2400,2391,1,0,0,0,2401,219,1,0,0,0,2402,2403,
	7,26,0,0,2403,2404,5,831,0,0,2404,2405,5,496,0,0,2405,2406,5,836,0,0,2406,
	2407,5,811,0,0,2407,2408,5,837,0,0,2408,221,1,0,0,0,2409,2410,7,26,0,0,
	2410,2411,5,831,0,0,2411,2412,5,601,0,0,2412,2413,5,836,0,0,2413,2414,5,
	811,0,0,2414,2415,5,837,0,0,2415,223,1,0,0,0,2416,2417,7,26,0,0,2417,2418,
	5,831,0,0,2418,2419,5,614,0,0,2419,2420,5,836,0,0,2420,2421,5,811,0,0,2421,
	2422,5,837,0,0,2422,225,1,0,0,0,2423,2424,5,372,0,0,2424,2425,3,96,48,0,
	2425,2426,5,344,0,0,2426,2427,3,96,48,0,2427,227,1,0,0,0,2428,2429,5,372,
	0,0,2429,2430,3,130,65,0,2430,2431,5,344,0,0,2431,2432,3,96,48,0,2432,229,
	1,0,0,0,2433,2435,5,15,0,0,2434,2433,1,0,0,0,2434,2435,1,0,0,0,2435,2436,
	1,0,0,0,2436,2437,3,246,123,0,2437,231,1,0,0,0,2438,2440,5,15,0,0,2439,
	2438,1,0,0,0,2439,2440,1,0,0,0,2440,2441,1,0,0,0,2441,2442,3,234,117,0,
	2442,233,1,0,0,0,2443,2445,3,310,155,0,2444,2446,3,236,118,0,2445,2444,
	1,0,0,0,2445,2446,1,0,0,0,2446,235,1,0,0,0,2447,2449,5,376,0,0,2448,2447,
	1,0,0,0,2448,2449,1,0,0,0,2449,2450,1,0,0,0,2450,2451,5,836,0,0,2451,2458,
	3,240,120,0,2452,2454,5,838,0,0,2453,2452,1,0,0,0,2453,2454,1,0,0,0,2454,
	2455,1,0,0,0,2455,2457,3,240,120,0,2456,2453,1,0,0,0,2457,2460,1,0,0,0,
	2458,2456,1,0,0,0,2458,2459,1,0,0,0,2459,2461,1,0,0,0,2460,2458,1,0,0,0,
	2461,2462,5,837,0,0,2462,237,1,0,0,0,2463,2464,5,376,0,0,2464,2465,5,836,
	0,0,2465,2472,3,240,120,0,2466,2468,5,838,0,0,2467,2466,1,0,0,0,2467,2468,
	1,0,0,0,2468,2469,1,0,0,0,2469,2471,3,240,120,0,2470,2467,1,0,0,0,2471,
	2474,1,0,0,0,2472,2470,1,0,0,0,2472,2473,1,0,0,0,2473,2475,1,0,0,0,2474,
	2472,1,0,0,0,2475,2476,5,837,0,0,2476,239,1,0,0,0,2477,2479,5,615,0,0,2478,
	2477,1,0,0,0,2478,2479,1,0,0,0,2479,2528,1,0,0,0,2480,2500,5,157,0,0,2481,
	2482,5,836,0,0,2482,2487,3,242,121,0,2483,2484,5,838,0,0,2484,2486,3,242,
	121,0,2485,2483,1,0,0,0,2486,2489,1,0,0,0,2487,2485,1,0,0,0,2487,2488,1,
	0,0,0,2488,2490,1,0,0,0,2489,2487,1,0,0,0,2490,2491,5,837,0,0,2491,2501,
	1,0,0,0,2492,2497,3,242,121,0,2493,2494,5,838,0,0,2494,2496,3,242,121,0,
	2495,2493,1,0,0,0,2496,2499,1,0,0,0,2497,2495,1,0,0,0,2497,2498,1,0,0,0,
	2498,2501,1,0,0,0,2499,2497,1,0,0,0,2500,2481,1,0,0,0,2500,2492,1,0,0,0,
	2501,2529,1,0,0,0,2502,2503,5,157,0,0,2503,2504,5,815,0,0,2504,2529,3,242,
	121,0,2505,2520,5,133,0,0,2506,2507,5,836,0,0,2507,2508,3,242,121,0,2508,
	2509,5,836,0,0,2509,2514,5,808,0,0,2510,2511,5,838,0,0,2511,2513,5,808,
	0,0,2512,2510,1,0,0,0,2513,2516,1,0,0,0,2514,2512,1,0,0,0,2514,2515,1,0,
	0,0,2515,2517,1,0,0,0,2516,2514,1,0,0,0,2517,2518,5,837,0,0,2518,2519,5,
	837,0,0,2519,2521,1,0,0,0,2520,2506,1,0,0,0,2520,2521,1,0,0,0,2521,2529,
	1,0,0,0,2522,2529,5,719,0,0,2523,2529,5,729,0,0,2524,2525,5,730,0,0,2525,
	2526,5,815,0,0,2526,2529,5,807,0,0,2527,2529,5,808,0,0,2528,2480,1,0,0,
	0,2528,2502,1,0,0,0,2528,2505,1,0,0,0,2528,2522,1,0,0,0,2528,2523,1,0,0,
	0,2528,2524,1,0,0,0,2528,2527,1,0,0,0,2529,241,1,0,0,0,2530,2533,3,310,
	155,0,2531,2533,5,807,0,0,2532,2530,1,0,0,0,2532,2531,1,0,0,0,2533,243,
	1,0,0,0,2534,2535,5,836,0,0,2535,2540,3,246,123,0,2536,2537,5,838,0,0,2537,
	2539,3,246,123,0,2538,2536,1,0,0,0,2539,2542,1,0,0,0,2540,2538,1,0,0,0,
	2540,2541,1,0,0,0,2541,2543,1,0,0,0,2542,2540,1,0,0,0,2543,2544,5,837,0,
	0,2544,245,1,0,0,0,2545,2548,3,310,155,0,2546,2548,5,811,0,0,2547,2545,
	1,0,0,0,2547,2546,1,0,0,0,2548,247,1,0,0,0,2549,2550,5,366,0,0,2550,2551,
	5,836,0,0,2551,2552,3,250,125,0,2552,2560,5,837,0,0,2553,2554,5,838,0,0,
	2554,2555,5,836,0,0,2555,2556,3,250,125,0,2556,2557,5,837,0,0,2557,2559,
	1,0,0,0,2558,2553,1,0,0,0,2559,2562,1,0,0,0,2560,2558,1,0,0,0,2560,2561,
	1,0,0,0,2561,249,1,0,0,0,2562,2560,1,0,0,0,2563,2568,3,96,48,0,2564,2565,
	5,838,0,0,2565,2567,3,96,48,0,2566,2564,1,0,0,0,2567,2570,1,0,0,0,2568,
	2566,1,0,0,0,2568,2569,1,0,0,0,2569,251,1,0,0,0,2570,2568,1,0,0,0,2571,
	2572,7,27,0,0,2572,2573,5,836,0,0,2573,2574,5,837,0,0,2574,2582,3,260,130,
	0,2575,2576,5,620,0,0,2576,2577,5,836,0,0,2577,2578,3,96,48,0,2578,2579,
	5,837,0,0,2579,2580,3,260,130,0,2580,2582,1,0,0,0,2581,2571,1,0,0,0,2581,
	2575,1,0,0,0,2582,253,1,0,0,0,2583,2584,7,28,0,0,2584,2585,5,836,0,0,2585,
	2586,3,258,129,0,2586,2588,5,837,0,0,2587,2589,3,260,130,0,2588,2587,1,
	0,0,0,2588,2589,1,0,0,0,2589,2616,1,0,0,0,2590,2591,7,29,0,0,2591,2594,
	5,836,0,0,2592,2595,5,841,0,0,2593,2595,3,258,129,0,2594,2592,1,0,0,0,2594,
	2593,1,0,0,0,2595,2596,1,0,0,0,2596,2598,5,837,0,0,2597,2599,3,260,130,
	0,2598,2597,1,0,0,0,2598,2599,1,0,0,0,2599,2616,1,0,0,0,2600,2601,5,434,
	0,0,2601,2602,5,836,0,0,2602,2603,3,258,129,0,2603,2604,5,837,0,0,2604,
	2616,1,0,0,0,2605,2606,5,527,0,0,2606,2607,5,836,0,0,2607,2608,3,96,48,
	0,2608,2609,5,837,0,0,2609,2616,1,0,0,0,2610,2611,5,528,0,0,2611,2612,5,
	836,0,0,2612,2613,3,250,125,0,2613,2614,5,837,0,0,2614,2616,1,0,0,0,2615,
	2583,1,0,0,0,2615,2590,1,0,0,0,2615,2600,1,0,0,0,2615,2605,1,0,0,0,2615,
	2610,1,0,0,0,2616,255,1,0,0,0,2617,2618,7,30,0,0,2618,2619,5,836,0,0,2619,
	2620,3,96,48,0,2620,2621,5,837,0,0,2621,2622,3,260,130,0,2622,2638,1,0,
	0,0,2623,2624,7,31,0,0,2624,2625,5,836,0,0,2625,2632,3,96,48,0,2626,2627,
	5,838,0,0,2627,2630,3,96,48,0,2628,2629,5,838,0,0,2629,2631,3,96,48,0,2630,
	2628,1,0,0,0,2630,2631,1,0,0,0,2631,2633,1,0,0,0,2632,2626,1,0,0,0,2632,
	2633,1,0,0,0,2633,2634,1,0,0,0,2634,2635,5,837,0,0,2635,2636,3,260,130,
	0,2636,2638,1,0,0,0,2637,2617,1,0,0,0,2637,2623,1,0,0,0,2638,257,1,0,0,
	0,2639,2641,7,11,0,0,2640,2639,1,0,0,0,2640,2641,1,0,0,0,2641,2642,1,0,
	0,0,2642,2643,3,96,48,0,2643,259,1,0,0,0,2644,2645,5,239,0,0,2645,2649,
	5,836,0,0,2646,2647,5,639,0,0,2647,2648,5,37,0,0,2648,2650,3,250,125,0,
	2649,2646,1,0,0,0,2649,2650,1,0,0,0,2650,2652,1,0,0,0,2651,2653,3,150,75,
	0,2652,2651,1,0,0,0,2652,2653,1,0,0,0,2653,2655,1,0,0,0,2654,2656,3,262,
	131,0,2655,2654,1,0,0,0,2655,2656,1,0,0,0,2656,2657,1,0,0,0,2657,2658,5,
	837,0,0,2658,261,1,0,0,0,2659,2660,7,32,0,0,2660,2661,3,264,132,0,2661,
	263,1,0,0,0,2662,2669,3,268,134,0,2663,2664,5,28,0,0,2664,2665,3,266,133,
	0,2665,2666,5,10,0,0,2666,2667,3,266,133,0,2667,2669,1,0,0,0,2668,2662,
	1,0,0,0,2668,2663,1,0,0,0,2669,265,1,0,0,0,2670,2673,3,268,134,0,2671,2673,
	3,270,135,0,2672,2670,1,0,0,0,2672,2671,1,0,0,0,2673,267,1,0,0,0,2674,2675,
	5,770,0,0,2675,2681,5,646,0,0,2676,2677,5,807,0,0,2677,2681,5,646,0,0,2678,
	2679,5,74,0,0,2679,2681,5,696,0,0,2680,2674,1,0,0,0,2680,2676,1,0,0,0,2680,
	2678,1,0,0,0,2681,269,1,0,0,0,2682,2683,5,770,0,0,2683,2687,5,513,0,0,2684,
	2685,5,807,0,0,2685,2687,5,513,0,0,2686,2682,1,0,0,0,2686,2684,1,0,0,0,
	2687,271,1,0,0,0,2688,2689,3,310,155,0,2689,2690,5,831,0,0,2690,2691,3,
	310,155,0,2691,2692,5,831,0,0,2692,2693,3,310,155,0,2693,2694,5,831,0,0,
	2694,2706,1,0,0,0,2695,2696,3,310,155,0,2696,2698,5,831,0,0,2697,2699,3,
	310,155,0,2698,2697,1,0,0,0,2698,2699,1,0,0,0,2699,2700,1,0,0,0,2700,2701,
	5,831,0,0,2701,2706,1,0,0,0,2702,2703,3,310,155,0,2703,2704,5,831,0,0,2704,
	2706,1,0,0,0,2705,2688,1,0,0,0,2705,2695,1,0,0,0,2705,2702,1,0,0,0,2705,
	2706,1,0,0,0,2706,2707,1,0,0,0,2707,2708,3,310,155,0,2708,273,1,0,0,0,2709,
	2710,3,310,155,0,2710,2712,5,831,0,0,2711,2713,3,310,155,0,2712,2711,1,
	0,0,0,2712,2713,1,0,0,0,2713,2714,1,0,0,0,2714,2715,5,831,0,0,2715,2720,
	1,0,0,0,2716,2717,3,310,155,0,2717,2718,5,831,0,0,2718,2720,1,0,0,0,2719,
	2709,1,0,0,0,2719,2716,1,0,0,0,2719,2720,1,0,0,0,2720,2721,1,0,0,0,2721,
	2736,3,310,155,0,2722,2723,3,310,155,0,2723,2725,5,831,0,0,2724,2726,3,
	310,155,0,2725,2724,1,0,0,0,2725,2726,1,0,0,0,2726,2727,1,0,0,0,2727,2728,
	5,831,0,0,2728,2733,1,0,0,0,2729,2730,3,310,155,0,2730,2731,5,831,0,0,2731,
	2733,1,0,0,0,2732,2722,1,0,0,0,2732,2729,1,0,0,0,2732,2733,1,0,0,0,2733,
	2734,1,0,0,0,2734,2736,5,31,0,0,2735,2719,1,0,0,0,2735,2732,1,0,0,0,2736,
	275,1,0,0,0,2737,2738,3,310,155,0,2738,2739,5,831,0,0,2739,2741,1,0,0,0,
	2740,2737,1,0,0,0,2740,2741,1,0,0,0,2741,2742,1,0,0,0,2742,2743,3,310,155,
	0,2743,277,1,0,0,0,2744,2745,3,310,155,0,2745,2746,5,831,0,0,2746,2748,
	1,0,0,0,2747,2744,1,0,0,0,2747,2748,1,0,0,0,2748,2749,1,0,0,0,2749,2750,
	3,310,155,0,2750,279,1,0,0,0,2751,2763,3,278,139,0,2752,2753,3,310,155,
	0,2753,2755,5,831,0,0,2754,2756,3,310,155,0,2755,2754,1,0,0,0,2755,2756,
	1,0,0,0,2756,2757,1,0,0,0,2757,2758,5,831,0,0,2758,2760,1,0,0,0,2759,2752,
	1,0,0,0,2759,2760,1,0,0,0,2760,2761,1,0,0,0,2761,2763,3,310,155,0,2762,
	2751,1,0,0,0,2762,2759,1,0,0,0,2763,281,1,0,0,0,2764,2778,3,280,140,0,2765,
	2766,3,310,155,0,2766,2767,5,831,0,0,2767,2768,3,310,155,0,2768,2770,5,
	831,0,0,2769,2771,3,310,155,0,2770,2769,1,0,0,0,2770,2771,1,0,0,0,2771,
	2772,1,0,0,0,2772,2773,5,831,0,0,2773,2775,1,0,0,0,2774,2765,1,0,0,0,2774,
	2775,1,0,0,0,2775,2776,1,0,0,0,2776,2778,3,310,155,0,2777,2764,1,0,0,0,
	2777,2774,1,0,0,0,2778,283,1,0,0,0,2779,2782,3,272,136,0,2780,2782,5,802,
	0,0,2781,2779,1,0,0,0,2781,2780,1,0,0,0,2782,285,1,0,0,0,2783,2784,3,274,
	137,0,2784,2785,5,831,0,0,2785,2787,1,0,0,0,2786,2783,1,0,0,0,2786,2787,
	1,0,0,0,2787,2788,1,0,0,0,2788,2832,3,310,155,0,2789,2790,3,274,137,0,2790,
	2791,5,831,0,0,2791,2793,1,0,0,0,2792,2789,1,0,0,0,2792,2793,1,0,0,0,2793,
	2794,1,0,0,0,2794,2832,5,439,0,0,2795,2796,3,274,137,0,2796,2797,5,831,
	0,0,2797,2799,1,0,0,0,2798,2795,1,0,0,0,2798,2799,1,0,0,0,2799,2800,1,0,
	0,0,2800,2832,5,735,0,0,2801,2802,3,274,137,0,2802,2803,5,831,0,0,2803,
	2805,1,0,0,0,2804,2801,1,0,0,0,2804,2805,1,0,0,0,2805,2806,1,0,0,0,2806,
	2832,5,661,0,0,2807,2808,3,274,137,0,2808,2809,5,831,0,0,2809,2811,1,0,
	0,0,2810,2807,1,0,0,0,2810,2811,1,0,0,0,2811,2812,1,0,0,0,2812,2832,5,403,
	0,0,2813,2814,3,274,137,0,2814,2815,5,831,0,0,2815,2817,1,0,0,0,2816,2813,
	1,0,0,0,2816,2817,1,0,0,0,2817,2818,1,0,0,0,2818,2832,5,400,0,0,2819,2820,
	3,274,137,0,2820,2821,5,831,0,0,2821,2823,1,0,0,0,2822,2819,1,0,0,0,2822,
	2823,1,0,0,0,2823,2824,1,0,0,0,2824,2832,5,399,0,0,2825,2826,3,274,137,
	0,2826,2827,5,831,0,0,2827,2829,1,0,0,0,2828,2825,1,0,0,0,2828,2829,1,0,
	0,0,2829,2830,1,0,0,0,2830,2832,5,398,0,0,2831,2786,1,0,0,0,2831,2792,1,
	0,0,0,2831,2798,1,0,0,0,2831,2804,1,0,0,0,2831,2810,1,0,0,0,2831,2816,1,
	0,0,0,2831,2822,1,0,0,0,2831,2828,1,0,0,0,2832,287,1,0,0,0,2833,2835,3,
	310,155,0,2834,2836,7,17,0,0,2835,2834,1,0,0,0,2835,2836,1,0,0,0,2836,2844,
	1,0,0,0,2837,2838,5,838,0,0,2838,2840,3,310,155,0,2839,2841,7,17,0,0,2840,
	2839,1,0,0,0,2840,2841,1,0,0,0,2841,2843,1,0,0,0,2842,2837,1,0,0,0,2843,
	2846,1,0,0,0,2844,2842,1,0,0,0,2844,2845,1,0,0,0,2845,289,1,0,0,0,2846,
	2844,1,0,0,0,2847,2852,3,310,155,0,2848,2849,5,838,0,0,2849,2851,3,310,
	155,0,2850,2848,1,0,0,0,2851,2854,1,0,0,0,2852,2850,1,0,0,0,2852,2853,1,
	0,0,0,2853,291,1,0,0,0,2854,2852,1,0,0,0,2855,2858,3,310,155,0,2856,2858,
	5,802,0,0,2857,2855,1,0,0,0,2857,2856,1,0,0,0,2858,293,1,0,0,0,2859,2860,
	7,33,0,0,2860,295,1,0,0,0,2861,2862,7,34,0,0,2862,297,1,0,0,0,2863,2865,
	5,219,0,0,2864,2863,1,0,0,0,2864,2865,1,0,0,0,2865,2866,1,0,0,0,2866,2867,
	5,222,0,0,2867,299,1,0,0,0,2868,2876,3,298,149,0,2869,2870,5,88,0,0,2870,
	2873,3,118,59,0,2871,2872,5,376,0,0,2872,2874,5,366,0,0,2873,2871,1,0,0,
	0,2873,2874,1,0,0,0,2874,2876,1,0,0,0,2875,2868,1,0,0,0,2875,2869,1,0,0,
	0,2876,301,1,0,0,0,2877,2883,3,282,141,0,2878,2883,5,286,0,0,2879,2883,
	5,176,0,0,2880,2883,5,420,0,0,2881,2883,5,433,0,0,2882,2877,1,0,0,0,2882,
	2878,1,0,0,0,2882,2879,1,0,0,0,2882,2880,1,0,0,0,2882,2881,1,0,0,0,2883,
	303,1,0,0,0,2884,2886,3,310,155,0,2885,2887,5,149,0,0,2886,2885,1,0,0,0,
	2886,2887,1,0,0,0,2887,2895,1,0,0,0,2888,2889,5,836,0,0,2889,2892,7,35,
	0,0,2890,2891,5,838,0,0,2891,2893,5,807,0,0,2892,2890,1,0,0,0,2892,2893,
	1,0,0,0,2893,2894,1,0,0,0,2894,2896,5,837,0,0,2895,2888,1,0,0,0,2895,2896,
	1,0,0,0,2896,2906,1,0,0,0,2897,2899,5,99,0,0,2898,2900,5,253,0,0,2899,2898,
	1,0,0,0,2899,2900,1,0,0,0,2900,2906,1,0,0,0,2901,2906,5,546,0,0,2902,2906,
	5,759,0,0,2903,2906,5,728,0,0,2904,2906,5,418,0,0,2905,2884,1,0,0,0,2905,
	2897,1,0,0,0,2905,2901,1,0,0,0,2905,2902,1,0,0,0,2905,2903,1,0,0,0,2905,
	2904,1,0,0,0,2906,305,1,0,0,0,2907,2923,5,811,0,0,2908,2923,5,812,0,0,2909,
	2911,3,308,154,0,2910,2909,1,0,0,0,2910,2911,1,0,0,0,2911,2912,1,0,0,0,
	2912,2923,5,807,0,0,2913,2915,3,308,154,0,2914,2913,1,0,0,0,2914,2915,1,
	0,0,0,2915,2916,1,0,0,0,2916,2923,7,12,0,0,2917,2919,3,308,154,0,2918,2917,
	1,0,0,0,2918,2919,1,0,0,0,2919,2920,1,0,0,0,2920,2921,5,835,0,0,2921,2923,
	7,36,0,0,2922,2907,1,0,0,0,2922,2908,1,0,0,0,2922,2910,1,0,0,0,2922,2914,
	1,0,0,0,2922,2918,1,0,0,0,2923,307,1,0,0,0,2924,2925,7,9,0,0,2925,309,1,
	0,0,0,2926,2930,3,312,156,0,2927,2930,5,799,0,0,2928,2930,5,801,0,0,2929,
	2926,1,0,0,0,2929,2927,1,0,0,0,2929,2928,1,0,0,0,2930,311,1,0,0,0,2931,
	2932,7,37,0,0,2932,313,1,0,0,0,2933,2944,5,815,0,0,2934,2944,5,818,0,0,
	2935,2944,5,817,0,0,2936,2944,5,820,0,0,2937,2944,5,819,0,0,2938,2944,5,
	816,0,0,2939,2940,5,821,0,0,2940,2944,5,817,0,0,2941,2942,5,821,0,0,2942,
	2944,5,818,0,0,2943,2933,1,0,0,0,2943,2934,1,0,0,0,2943,2935,1,0,0,0,2943,
	2936,1,0,0,0,2943,2937,1,0,0,0,2943,2938,1,0,0,0,2943,2939,1,0,0,0,2943,
	2941,1,0,0,0,2944,315,1,0,0,0,2945,2946,7,38,0,0,2946,317,1,0,0,0,409,321,
	330,334,338,344,356,362,365,370,375,378,385,391,393,398,404,410,415,421,
	428,433,438,443,446,450,454,458,462,467,471,475,478,486,490,493,497,500,
	504,511,515,517,519,522,525,528,534,537,545,547,550,554,557,563,566,570,
	573,576,583,586,590,593,596,599,602,610,612,616,619,627,631,635,642,646,
	648,650,653,656,659,667,673,679,681,685,688,693,698,701,705,708,722,726,
	729,733,736,744,749,754,760,765,768,777,787,790,799,807,810,817,820,866,
	870,873,883,885,891,898,906,909,912,921,931,935,941,948,952,956,973,977,
	987,991,998,1001,1004,1012,1017,1022,1025,1027,1031,1035,1038,1042,1048,
	1053,1059,1065,1069,1072,1076,1080,1088,1093,1095,1098,1103,1112,1116,1121,
	1124,1127,1133,1141,1149,1152,1155,1159,1164,1167,1173,1177,1183,1191,1197,
	1199,1202,1217,1220,1223,1225,1236,1247,1256,1266,1270,1284,1303,1305,1311,
	1321,1323,1330,1340,1342,1347,1353,1364,1371,1375,1383,1387,1391,1397,1407,
	1417,1424,1431,1440,1447,1454,1463,1467,1477,1484,1492,1500,1504,1526,1535,
	1541,1547,1553,1564,1571,1579,1586,1591,1596,1600,1607,1611,1614,1619,1623,
	1627,1632,1639,1642,1646,1651,1655,1664,1671,1680,1692,1694,1704,1707,1712,
	1721,1723,1725,1730,1738,1743,1751,1756,1762,1772,1774,1778,1782,1784,1793,
	1795,1799,1810,1844,1860,1867,1869,1876,1885,1893,1900,1907,1910,1913,1920,
	1927,1930,1932,1940,1942,1948,1955,1963,1969,1974,1978,1982,1987,1989,1997,
	1999,2003,2010,2012,2019,2024,2028,2037,2045,2052,2058,2069,2073,2075,2078,
	2102,2127,2132,2152,2156,2160,2176,2196,2254,2258,2306,2322,2324,2331,2337,
	2350,2365,2376,2381,2391,2400,2434,2439,2445,2448,2453,2458,2467,2472,2478,
	2487,2497,2500,2514,2520,2528,2532,2540,2547,2560,2568,2581,2588,2594,2598,
	2615,2630,2632,2637,2640,2649,2652,2655,2668,2672,2680,2686,2698,2705,2712,
	2719,2725,2732,2735,2740,2747,2755,2759,2762,2770,2774,2777,2781,2786,2792,
	2798,2804,2810,2816,2822,2828,2831,2835,2840,2844,2852,2857,2864,2873,2875,
	2882,2886,2892,2895,2899,2905,2910,2914,2918,2922,2929,2943];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MocaSqlParser.__ATN) {
			MocaSqlParser.__ATN = new ATNDeserializer().deserialize(MocaSqlParser._serializedATN);
		}

		return MocaSqlParser.__ATN;
	}


	static DecisionsToDFA = MocaSqlParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Moca_sql_scriptContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(MocaSqlParser.EOF, 0);
	}
	public batch_list(): BatchContext[] {
		return this.getTypedRuleContexts(BatchContext) as BatchContext[];
	}
	public batch(i: number): BatchContext {
		return this.getTypedRuleContext(BatchContext, i) as BatchContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_moca_sql_script;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterMoca_sql_script) {
	 		listener.enterMoca_sql_script(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitMoca_sql_script) {
	 		listener.exitMoca_sql_script(this);
		}
	}
}


export class BatchContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sql_clauses(): Sql_clausesContext {
		return this.getTypedRuleContext(Sql_clausesContext, 0) as Sql_clausesContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_batch;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterBatch) {
	 		listener.enterBatch(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitBatch) {
	 		listener.exitBatch(this);
		}
	}
}


export class Sql_clausesContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sql_clause_list(): Sql_clauseContext[] {
		return this.getTypedRuleContexts(Sql_clauseContext) as Sql_clauseContext[];
	}
	public sql_clause(i: number): Sql_clauseContext {
		return this.getTypedRuleContext(Sql_clauseContext, i) as Sql_clauseContext;
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_sql_clauses;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSql_clauses) {
	 		listener.enterSql_clauses(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSql_clauses) {
	 		listener.exitSql_clauses(this);
		}
	}
}


export class Sql_clauseContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dml_clause(): Dml_clauseContext {
		return this.getTypedRuleContext(Dml_clauseContext, 0) as Dml_clauseContext;
	}
	public ddl_clause(): Ddl_clauseContext {
		return this.getTypedRuleContext(Ddl_clauseContext, 0) as Ddl_clauseContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_sql_clause;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSql_clause) {
	 		listener.enterSql_clause(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSql_clause) {
	 		listener.exitSql_clause(this);
		}
	}
}


export class Dml_clauseContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public delete_statement(): Delete_statementContext {
		return this.getTypedRuleContext(Delete_statementContext, 0) as Delete_statementContext;
	}
	public insert_statement(): Insert_statementContext {
		return this.getTypedRuleContext(Insert_statementContext, 0) as Insert_statementContext;
	}
	public select_statement(): Select_statementContext {
		return this.getTypedRuleContext(Select_statementContext, 0) as Select_statementContext;
	}
	public update_statement(): Update_statementContext {
		return this.getTypedRuleContext(Update_statementContext, 0) as Update_statementContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_dml_clause;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDml_clause) {
	 		listener.enterDml_clause(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDml_clause) {
	 		listener.exitDml_clause(this);
		}
	}
}


export class Ddl_clauseContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public create_sequence(): Create_sequenceContext {
		return this.getTypedRuleContext(Create_sequenceContext, 0) as Create_sequenceContext;
	}
	public alter_sequence(): Alter_sequenceContext {
		return this.getTypedRuleContext(Alter_sequenceContext, 0) as Alter_sequenceContext;
	}
	public drop_sequence(): Drop_sequenceContext {
		return this.getTypedRuleContext(Drop_sequenceContext, 0) as Drop_sequenceContext;
	}
	public create_table(): Create_tableContext {
		return this.getTypedRuleContext(Create_tableContext, 0) as Create_tableContext;
	}
	public alter_table(): Alter_tableContext {
		return this.getTypedRuleContext(Alter_tableContext, 0) as Alter_tableContext;
	}
	public drop_table(): Drop_tableContext {
		return this.getTypedRuleContext(Drop_tableContext, 0) as Drop_tableContext;
	}
	public create_index(): Create_indexContext {
		return this.getTypedRuleContext(Create_indexContext, 0) as Create_indexContext;
	}
	public drop_index(): Drop_indexContext {
		return this.getTypedRuleContext(Drop_indexContext, 0) as Drop_indexContext;
	}
	public create_view(): Create_viewContext {
		return this.getTypedRuleContext(Create_viewContext, 0) as Create_viewContext;
	}
	public drop_view(): Drop_viewContext {
		return this.getTypedRuleContext(Drop_viewContext, 0) as Drop_viewContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_ddl_clause;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDdl_clause) {
	 		listener.enterDdl_clause(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDdl_clause) {
	 		listener.exitDdl_clause(this);
		}
	}
}


export class Drop_sequenceContext extends ParserRuleContext {
	public _database_name!: IdContext;
	public _schema_name!: IdContext;
	public _sequence_name!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(MocaSqlParser.DROP, 0);
	}
	public SEQUENCE(): TerminalNode {
		return this.getToken(MocaSqlParser.SEQUENCE, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(MocaSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(MocaSqlParser.EXISTS, 0);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_drop_sequence;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDrop_sequence) {
	 		listener.enterDrop_sequence(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDrop_sequence) {
	 		listener.exitDrop_sequence(this);
		}
	}
}


export class Alter_sequenceContext extends ParserRuleContext {
	public _schema_name!: IdContext;
	public _sequence_name!: IdContext;
	public _sequnce_increment!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALTER(): TerminalNode {
		return this.getToken(MocaSqlParser.ALTER, 0);
	}
	public SEQUENCE(): TerminalNode {
		return this.getToken(MocaSqlParser.SEQUENCE, 0);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public RESTART(): TerminalNode {
		return this.getToken(MocaSqlParser.RESTART, 0);
	}
	public INCREMENT(): TerminalNode {
		return this.getToken(MocaSqlParser.INCREMENT, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(MocaSqlParser.BY, 0);
	}
	public MINVALUE(): TerminalNode {
		return this.getToken(MocaSqlParser.MINVALUE, 0);
	}
	public DECIMAL_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DECIMAL);
	}
	public DECIMAL(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, i);
	}
	public NO_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.NO);
	}
	public NO(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.NO, i);
	}
	public MAXVALUE(): TerminalNode {
		return this.getToken(MocaSqlParser.MAXVALUE, 0);
	}
	public CYCLE(): TerminalNode {
		return this.getToken(MocaSqlParser.CYCLE, 0);
	}
	public CACHE(): TerminalNode {
		return this.getToken(MocaSqlParser.CACHE, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(MocaSqlParser.WITH, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_alter_sequence;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterAlter_sequence) {
	 		listener.enterAlter_sequence(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitAlter_sequence) {
	 		listener.exitAlter_sequence(this);
		}
	}
}


export class Create_sequenceContext extends ParserRuleContext {
	public _schema_name!: IdContext;
	public _sequence_name!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(MocaSqlParser.CREATE, 0);
	}
	public SEQUENCE(): TerminalNode {
		return this.getToken(MocaSqlParser.SEQUENCE, 0);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(MocaSqlParser.AS, 0);
	}
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
	}
	public START(): TerminalNode {
		return this.getToken(MocaSqlParser.START, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(MocaSqlParser.WITH, 0);
	}
	public DECIMAL_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DECIMAL);
	}
	public DECIMAL(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, i);
	}
	public INCREMENT(): TerminalNode {
		return this.getToken(MocaSqlParser.INCREMENT, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(MocaSqlParser.BY, 0);
	}
	public MINVALUE(): TerminalNode {
		return this.getToken(MocaSqlParser.MINVALUE, 0);
	}
	public NO_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.NO);
	}
	public NO(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.NO, i);
	}
	public MAXVALUE(): TerminalNode {
		return this.getToken(MocaSqlParser.MAXVALUE, 0);
	}
	public CYCLE(): TerminalNode {
		return this.getToken(MocaSqlParser.CYCLE, 0);
	}
	public CACHE(): TerminalNode {
		return this.getToken(MocaSqlParser.CACHE, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(MocaSqlParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_create_sequence;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterCreate_sequence) {
	 		listener.enterCreate_sequence(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitCreate_sequence) {
	 		listener.exitCreate_sequence(this);
		}
	}
}


export class Delete_statementContext extends ParserRuleContext {
	public _cursor_var!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DELETE(): TerminalNode {
		return this.getToken(MocaSqlParser.DELETE, 0);
	}
	public delete_statement_from(): Delete_statement_fromContext {
		return this.getTypedRuleContext(Delete_statement_fromContext, 0) as Delete_statement_fromContext;
	}
	public with_expression(): With_expressionContext {
		return this.getTypedRuleContext(With_expressionContext, 0) as With_expressionContext;
	}
	public TOP(): TerminalNode {
		return this.getToken(MocaSqlParser.TOP, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, 0);
	}
	public FROM_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.FROM);
	}
	public FROM(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.FROM, i);
	}
	public insert_with_table_hints(): Insert_with_table_hintsContext {
		return this.getTypedRuleContext(Insert_with_table_hintsContext, 0) as Insert_with_table_hintsContext;
	}
	public output_clause(): Output_clauseContext {
		return this.getTypedRuleContext(Output_clauseContext, 0) as Output_clauseContext;
	}
	public table_sources(): Table_sourcesContext {
		return this.getTypedRuleContext(Table_sourcesContext, 0) as Table_sourcesContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(MocaSqlParser.WHERE, 0);
	}
	public for_clause(): For_clauseContext {
		return this.getTypedRuleContext(For_clauseContext, 0) as For_clauseContext;
	}
	public option_clause(): Option_clauseContext {
		return this.getTypedRuleContext(Option_clauseContext, 0) as Option_clauseContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI, 0);
	}
	public search_condition(): Search_conditionContext {
		return this.getTypedRuleContext(Search_conditionContext, 0) as Search_conditionContext;
	}
	public CURRENT(): TerminalNode {
		return this.getToken(MocaSqlParser.CURRENT, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(MocaSqlParser.OF, 0);
	}
	public PERCENT(): TerminalNode {
		return this.getToken(MocaSqlParser.PERCENT, 0);
	}
	public cursor_name(): Cursor_nameContext {
		return this.getTypedRuleContext(Cursor_nameContext, 0) as Cursor_nameContext;
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(MocaSqlParser.GLOBAL, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_delete_statement;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDelete_statement) {
	 		listener.enterDelete_statement(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDelete_statement) {
	 		listener.exitDelete_statement(this);
		}
	}
}


export class Delete_statement_fromContext extends ParserRuleContext {
	public _table_var!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ddl_object(): Ddl_objectContext {
		return this.getTypedRuleContext(Ddl_objectContext, 0) as Ddl_objectContext;
	}
	public table_alias(): Table_aliasContext {
		return this.getTypedRuleContext(Table_aliasContext, 0) as Table_aliasContext;
	}
	public rowset_function_limited(): Rowset_function_limitedContext {
		return this.getTypedRuleContext(Rowset_function_limitedContext, 0) as Rowset_function_limitedContext;
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_delete_statement_from;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDelete_statement_from) {
	 		listener.enterDelete_statement_from(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDelete_statement_from) {
	 		listener.exitDelete_statement_from(this);
		}
	}
}


export class Insert_statementContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INSERT(): TerminalNode {
		return this.getToken(MocaSqlParser.INSERT, 0);
	}
	public insert_statement_value(): Insert_statement_valueContext {
		return this.getTypedRuleContext(Insert_statement_valueContext, 0) as Insert_statement_valueContext;
	}
	public ddl_object(): Ddl_objectContext {
		return this.getTypedRuleContext(Ddl_objectContext, 0) as Ddl_objectContext;
	}
	public rowset_function_limited(): Rowset_function_limitedContext {
		return this.getTypedRuleContext(Rowset_function_limitedContext, 0) as Rowset_function_limitedContext;
	}
	public with_expression(): With_expressionContext {
		return this.getTypedRuleContext(With_expressionContext, 0) as With_expressionContext;
	}
	public TOP(): TerminalNode {
		return this.getToken(MocaSqlParser.TOP, 0);
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, i);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, i);
	}
	public INTO(): TerminalNode {
		return this.getToken(MocaSqlParser.INTO, 0);
	}
	public insert_with_table_hints(): Insert_with_table_hintsContext {
		return this.getTypedRuleContext(Insert_with_table_hintsContext, 0) as Insert_with_table_hintsContext;
	}
	public column_name_list(): Column_name_listContext {
		return this.getTypedRuleContext(Column_name_listContext, 0) as Column_name_listContext;
	}
	public output_clause(): Output_clauseContext {
		return this.getTypedRuleContext(Output_clauseContext, 0) as Output_clauseContext;
	}
	public for_clause(): For_clauseContext {
		return this.getTypedRuleContext(For_clauseContext, 0) as For_clauseContext;
	}
	public option_clause(): Option_clauseContext {
		return this.getTypedRuleContext(Option_clauseContext, 0) as Option_clauseContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI, 0);
	}
	public PERCENT(): TerminalNode {
		return this.getToken(MocaSqlParser.PERCENT, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_insert_statement;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterInsert_statement) {
	 		listener.enterInsert_statement(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitInsert_statement) {
	 		listener.exitInsert_statement(this);
		}
	}
}


export class Insert_statement_valueContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_value_constructor(): Table_value_constructorContext {
		return this.getTypedRuleContext(Table_value_constructorContext, 0) as Table_value_constructorContext;
	}
	public derived_table(): Derived_tableContext {
		return this.getTypedRuleContext(Derived_tableContext, 0) as Derived_tableContext;
	}
	public execute_statement(): Execute_statementContext {
		return this.getTypedRuleContext(Execute_statementContext, 0) as Execute_statementContext;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(MocaSqlParser.DEFAULT, 0);
	}
	public VALUES(): TerminalNode {
		return this.getToken(MocaSqlParser.VALUES, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_insert_statement_value;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterInsert_statement_value) {
	 		listener.enterInsert_statement_value(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitInsert_statement_value) {
	 		listener.exitInsert_statement_value(this);
		}
	}
}


export class Select_statementContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public query_expression(): Query_expressionContext {
		return this.getTypedRuleContext(Query_expressionContext, 0) as Query_expressionContext;
	}
	public with_expression(): With_expressionContext {
		return this.getTypedRuleContext(With_expressionContext, 0) as With_expressionContext;
	}
	public order_by_clause(): Order_by_clauseContext {
		return this.getTypedRuleContext(Order_by_clauseContext, 0) as Order_by_clauseContext;
	}
	public for_clause(): For_clauseContext {
		return this.getTypedRuleContext(For_clauseContext, 0) as For_clauseContext;
	}
	public option_clause(): Option_clauseContext {
		return this.getTypedRuleContext(Option_clauseContext, 0) as Option_clauseContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_select_statement;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSelect_statement) {
	 		listener.enterSelect_statement(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSelect_statement) {
	 		listener.exitSelect_statement(this);
		}
	}
}


export class Update_statementContext extends ParserRuleContext {
	public _cursor_var!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UPDATE(): TerminalNode {
		return this.getToken(MocaSqlParser.UPDATE, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(MocaSqlParser.SET, 0);
	}
	public update_elem_list(): Update_elemContext[] {
		return this.getTypedRuleContexts(Update_elemContext) as Update_elemContext[];
	}
	public update_elem(i: number): Update_elemContext {
		return this.getTypedRuleContext(Update_elemContext, i) as Update_elemContext;
	}
	public ddl_object(): Ddl_objectContext {
		return this.getTypedRuleContext(Ddl_objectContext, 0) as Ddl_objectContext;
	}
	public rowset_function_limited(): Rowset_function_limitedContext {
		return this.getTypedRuleContext(Rowset_function_limitedContext, 0) as Rowset_function_limitedContext;
	}
	public with_expression(): With_expressionContext {
		return this.getTypedRuleContext(With_expressionContext, 0) as With_expressionContext;
	}
	public TOP(): TerminalNode {
		return this.getToken(MocaSqlParser.TOP, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public with_table_hints(): With_table_hintsContext {
		return this.getTypedRuleContext(With_table_hintsContext, 0) as With_table_hintsContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public output_clause(): Output_clauseContext {
		return this.getTypedRuleContext(Output_clauseContext, 0) as Output_clauseContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(MocaSqlParser.FROM, 0);
	}
	public table_sources(): Table_sourcesContext {
		return this.getTypedRuleContext(Table_sourcesContext, 0) as Table_sourcesContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(MocaSqlParser.WHERE, 0);
	}
	public for_clause(): For_clauseContext {
		return this.getTypedRuleContext(For_clauseContext, 0) as For_clauseContext;
	}
	public option_clause(): Option_clauseContext {
		return this.getTypedRuleContext(Option_clauseContext, 0) as Option_clauseContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI, 0);
	}
	public search_condition_list(): Search_condition_listContext {
		return this.getTypedRuleContext(Search_condition_listContext, 0) as Search_condition_listContext;
	}
	public CURRENT(): TerminalNode {
		return this.getToken(MocaSqlParser.CURRENT, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(MocaSqlParser.OF, 0);
	}
	public PERCENT(): TerminalNode {
		return this.getToken(MocaSqlParser.PERCENT, 0);
	}
	public cursor_name(): Cursor_nameContext {
		return this.getTypedRuleContext(Cursor_nameContext, 0) as Cursor_nameContext;
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(MocaSqlParser.GLOBAL, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_update_statement;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterUpdate_statement) {
	 		listener.enterUpdate_statement(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitUpdate_statement) {
	 		listener.exitUpdate_statement(this);
		}
	}
}


export class Output_clauseContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(MocaSqlParser.OUTPUT, 0);
	}
	public output_dml_list_elem_list(): Output_dml_list_elemContext[] {
		return this.getTypedRuleContexts(Output_dml_list_elemContext) as Output_dml_list_elemContext[];
	}
	public output_dml_list_elem(i: number): Output_dml_list_elemContext {
		return this.getTypedRuleContext(Output_dml_list_elemContext, i) as Output_dml_list_elemContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public INTO(): TerminalNode {
		return this.getToken(MocaSqlParser.INTO, 0);
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public column_name_list(): Column_name_listContext {
		return this.getTypedRuleContext(Column_name_listContext, 0) as Column_name_listContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_output_clause;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOutput_clause) {
	 		listener.enterOutput_clause(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOutput_clause) {
	 		listener.exitOutput_clause(this);
		}
	}
}


export class Output_dml_list_elemContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public output_column_name(): Output_column_nameContext {
		return this.getTypedRuleContext(Output_column_nameContext, 0) as Output_column_nameContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public as_column_alias(): As_column_aliasContext {
		return this.getTypedRuleContext(As_column_aliasContext, 0) as As_column_aliasContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_output_dml_list_elem;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOutput_dml_list_elem) {
	 		listener.enterOutput_dml_list_elem(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOutput_dml_list_elem) {
	 		listener.exitOutput_dml_list_elem(this);
		}
	}
}


export class Output_column_nameContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public DELETED(): TerminalNode {
		return this.getToken(MocaSqlParser.DELETED, 0);
	}
	public INSERTED(): TerminalNode {
		return this.getToken(MocaSqlParser.INSERTED, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(MocaSqlParser.STAR, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public DOLLAR_ACTION(): TerminalNode {
		return this.getToken(MocaSqlParser.DOLLAR_ACTION, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_output_column_name;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOutput_column_name) {
	 		listener.enterOutput_column_name(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOutput_column_name) {
	 		listener.exitOutput_column_name(this);
		}
	}
}


export class Create_indexContext extends ParserRuleContext {
	public _where!: Search_conditionContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(MocaSqlParser.CREATE, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(MocaSqlParser.INDEX, 0);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public ON_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.ON);
	}
	public ON(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.ON, i);
	}
	public table_name_with_hint(): Table_name_with_hintContext {
		return this.getTypedRuleContext(Table_name_with_hintContext, 0) as Table_name_with_hintContext;
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, i);
	}
	public column_name_list_with_order(): Column_name_list_with_orderContext {
		return this.getTypedRuleContext(Column_name_list_with_orderContext, 0) as Column_name_list_with_orderContext;
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, i);
	}
	public UNIQUE(): TerminalNode {
		return this.getToken(MocaSqlParser.UNIQUE, 0);
	}
	public clustered(): ClusteredContext {
		return this.getTypedRuleContext(ClusteredContext, 0) as ClusteredContext;
	}
	public INCLUDE(): TerminalNode {
		return this.getToken(MocaSqlParser.INCLUDE, 0);
	}
	public column_name_list(): Column_name_listContext {
		return this.getTypedRuleContext(Column_name_listContext, 0) as Column_name_listContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(MocaSqlParser.WHERE, 0);
	}
	public index_options(): Index_optionsContext {
		return this.getTypedRuleContext(Index_optionsContext, 0) as Index_optionsContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI, 0);
	}
	public search_condition(): Search_conditionContext {
		return this.getTypedRuleContext(Search_conditionContext, 0) as Search_conditionContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_create_index;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterCreate_index) {
	 		listener.enterCreate_index(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitCreate_index) {
	 		listener.exitCreate_index(this);
		}
	}
}


export class Create_tableContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(MocaSqlParser.CREATE, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.TABLE, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public column_def_table_constraints(): Column_def_table_constraintsContext {
		return this.getTypedRuleContext(Column_def_table_constraintsContext, 0) as Column_def_table_constraintsContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public LOCK(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCK, 0);
	}
	public simple_id(): Simple_idContext {
		return this.getTypedRuleContext(Simple_idContext, 0) as Simple_idContext;
	}
	public table_options_list(): Table_optionsContext[] {
		return this.getTypedRuleContexts(Table_optionsContext) as Table_optionsContext[];
	}
	public table_options(i: number): Table_optionsContext {
		return this.getTypedRuleContext(Table_optionsContext, i) as Table_optionsContext;
	}
	public ON(): TerminalNode {
		return this.getToken(MocaSqlParser.ON, 0);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public DEFAULT_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DEFAULT);
	}
	public DEFAULT(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DEFAULT, i);
	}
	public TEXTIMAGE_ON(): TerminalNode {
		return this.getToken(MocaSqlParser.TEXTIMAGE_ON, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_create_table;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterCreate_table) {
	 		listener.enterCreate_table(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitCreate_table) {
	 		listener.exitCreate_table(this);
		}
	}
}


export class Table_optionsContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(MocaSqlParser.WITH, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public index_option_list(): Index_optionContext[] {
		return this.getTypedRuleContexts(Index_optionContext) as Index_optionContext[];
	}
	public index_option(i: number): Index_optionContext {
		return this.getTypedRuleContext(Index_optionContext, i) as Index_optionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_table_options;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTable_options) {
	 		listener.enterTable_options(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTable_options) {
	 		listener.exitTable_options(this);
		}
	}
}


export class Create_viewContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(MocaSqlParser.CREATE, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(MocaSqlParser.VIEW, 0);
	}
	public simple_name(): Simple_nameContext {
		return this.getTypedRuleContext(Simple_nameContext, 0) as Simple_nameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(MocaSqlParser.AS, 0);
	}
	public select_statement(): Select_statementContext {
		return this.getTypedRuleContext(Select_statementContext, 0) as Select_statementContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public column_name_list(): Column_name_listContext {
		return this.getTypedRuleContext(Column_name_listContext, 0) as Column_name_listContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public WITH_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.WITH);
	}
	public WITH(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.WITH, i);
	}
	public view_attribute_list(): View_attributeContext[] {
		return this.getTypedRuleContexts(View_attributeContext) as View_attributeContext[];
	}
	public view_attribute(i: number): View_attributeContext {
		return this.getTypedRuleContext(View_attributeContext, i) as View_attributeContext;
	}
	public CHECK(): TerminalNode {
		return this.getToken(MocaSqlParser.CHECK, 0);
	}
	public OPTION(): TerminalNode {
		return this.getToken(MocaSqlParser.OPTION, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_create_view;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterCreate_view) {
	 		listener.enterCreate_view(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitCreate_view) {
	 		listener.exitCreate_view(this);
		}
	}
}


export class View_attributeContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENCRYPTION(): TerminalNode {
		return this.getToken(MocaSqlParser.ENCRYPTION, 0);
	}
	public SCHEMABINDING(): TerminalNode {
		return this.getToken(MocaSqlParser.SCHEMABINDING, 0);
	}
	public VIEW_METADATA(): TerminalNode {
		return this.getToken(MocaSqlParser.VIEW_METADATA, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_view_attribute;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterView_attribute) {
	 		listener.enterView_attribute(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitView_attribute) {
	 		listener.exitView_attribute(this);
		}
	}
}


export class Alter_tableContext extends ParserRuleContext {
	public _constraint!: IdContext;
	public _fk!: Column_name_listContext;
	public _pk!: Column_name_listContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALTER_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.ALTER);
	}
	public ALTER(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.ALTER, i);
	}
	public TABLE_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.TABLE);
	}
	public TABLE(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.TABLE, i);
	}
	public table_name_list(): Table_nameContext[] {
		return this.getTypedRuleContexts(Table_nameContext) as Table_nameContext[];
	}
	public table_name(i: number): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, i) as Table_nameContext;
	}
	public SET(): TerminalNode {
		return this.getToken(MocaSqlParser.SET, 0);
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, i);
	}
	public LOCK_ESCALATION(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCK_ESCALATION, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.EQUAL, 0);
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, i);
	}
	public ADD(): TerminalNode {
		return this.getToken(MocaSqlParser.ADD, 0);
	}
	public column_def_table_constraint(): Column_def_table_constraintContext {
		return this.getTypedRuleContext(Column_def_table_constraintContext, 0) as Column_def_table_constraintContext;
	}
	public COLUMN(): TerminalNode {
		return this.getToken(MocaSqlParser.COLUMN, 0);
	}
	public column_definition(): Column_definitionContext {
		return this.getTypedRuleContext(Column_definitionContext, 0) as Column_definitionContext;
	}
	public DROP(): TerminalNode {
		return this.getToken(MocaSqlParser.DROP, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(MocaSqlParser.CONSTRAINT, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(MocaSqlParser.WITH, 0);
	}
	public CHECK(): TerminalNode {
		return this.getToken(MocaSqlParser.CHECK, 0);
	}
	public FOREIGN(): TerminalNode {
		return this.getToken(MocaSqlParser.FOREIGN, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(MocaSqlParser.KEY, 0);
	}
	public REFERENCES(): TerminalNode {
		return this.getToken(MocaSqlParser.REFERENCES, 0);
	}
	public TRIGGER(): TerminalNode {
		return this.getToken(MocaSqlParser.TRIGGER, 0);
	}
	public REBUILD(): TerminalNode {
		return this.getToken(MocaSqlParser.REBUILD, 0);
	}
	public table_options(): Table_optionsContext {
		return this.getTypedRuleContext(Table_optionsContext, 0) as Table_optionsContext;
	}
	public AUTO(): TerminalNode {
		return this.getToken(MocaSqlParser.AUTO, 0);
	}
	public DISABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.DISABLE, 0);
	}
	public column_name_list_list(): Column_name_listContext[] {
		return this.getTypedRuleContexts(Column_name_listContext) as Column_name_listContext[];
	}
	public column_name_list(i: number): Column_name_listContext {
		return this.getTypedRuleContext(Column_name_listContext, i) as Column_name_listContext;
	}
	public ENABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.ENABLE, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_alter_table;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterAlter_table) {
	 		listener.enterAlter_table(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitAlter_table) {
	 		listener.exitAlter_table(this);
		}
	}
}


export class HostContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public host(): HostContext {
		return this.getTypedRuleContext(HostContext, 0) as HostContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_host;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterHost) {
	 		listener.enterHost(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitHost) {
	 		listener.exitHost(this);
		}
	}
}


export class Drop_indexContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(MocaSqlParser.DROP, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(MocaSqlParser.INDEX, 0);
	}
	public drop_relational_or_xml_or_spatial_index_list(): Drop_relational_or_xml_or_spatial_indexContext[] {
		return this.getTypedRuleContexts(Drop_relational_or_xml_or_spatial_indexContext) as Drop_relational_or_xml_or_spatial_indexContext[];
	}
	public drop_relational_or_xml_or_spatial_index(i: number): Drop_relational_or_xml_or_spatial_indexContext {
		return this.getTypedRuleContext(Drop_relational_or_xml_or_spatial_indexContext, i) as Drop_relational_or_xml_or_spatial_indexContext;
	}
	public drop_backward_compatible_index_list(): Drop_backward_compatible_indexContext[] {
		return this.getTypedRuleContexts(Drop_backward_compatible_indexContext) as Drop_backward_compatible_indexContext[];
	}
	public drop_backward_compatible_index(i: number): Drop_backward_compatible_indexContext {
		return this.getTypedRuleContext(Drop_backward_compatible_indexContext, i) as Drop_backward_compatible_indexContext;
	}
	public IF(): TerminalNode {
		return this.getToken(MocaSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(MocaSqlParser.EXISTS, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_drop_index;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDrop_index) {
	 		listener.enterDrop_index(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDrop_index) {
	 		listener.exitDrop_index(this);
		}
	}
}


export class Drop_relational_or_xml_or_spatial_indexContext extends ParserRuleContext {
	public _index_name!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(MocaSqlParser.ON, 0);
	}
	public full_table_name(): Full_table_nameContext {
		return this.getTypedRuleContext(Full_table_nameContext, 0) as Full_table_nameContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_drop_relational_or_xml_or_spatial_index;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDrop_relational_or_xml_or_spatial_index) {
	 		listener.enterDrop_relational_or_xml_or_spatial_index(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDrop_relational_or_xml_or_spatial_index) {
	 		listener.exitDrop_relational_or_xml_or_spatial_index(this);
		}
	}
}


export class Drop_backward_compatible_indexContext extends ParserRuleContext {
	public _owner_name!: IdContext;
	public _table_or_view_name!: IdContext;
	public _index_name!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, i);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_drop_backward_compatible_index;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDrop_backward_compatible_index) {
	 		listener.enterDrop_backward_compatible_index(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDrop_backward_compatible_index) {
	 		listener.exitDrop_backward_compatible_index(this);
		}
	}
}


export class Drop_tableContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(MocaSqlParser.DROP, 0);
	}
	public TABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.TABLE, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(MocaSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(MocaSqlParser.EXISTS, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_drop_table;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDrop_table) {
	 		listener.enterDrop_table(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDrop_table) {
	 		listener.exitDrop_table(this);
		}
	}
}


export class Drop_viewContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(MocaSqlParser.DROP, 0);
	}
	public VIEW(): TerminalNode {
		return this.getToken(MocaSqlParser.VIEW, 0);
	}
	public simple_name_list(): Simple_nameContext[] {
		return this.getTypedRuleContexts(Simple_nameContext) as Simple_nameContext[];
	}
	public simple_name(i: number): Simple_nameContext {
		return this.getTypedRuleContext(Simple_nameContext, i) as Simple_nameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(MocaSqlParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(MocaSqlParser.EXISTS, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public SEMI(): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_drop_view;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDrop_view) {
	 		listener.enterDrop_view(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDrop_view) {
	 		listener.exitDrop_view(this);
		}
	}
}


export class Rowset_function_limitedContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public openquery(): OpenqueryContext {
		return this.getTypedRuleContext(OpenqueryContext, 0) as OpenqueryContext;
	}
	public opendatasource(): OpendatasourceContext {
		return this.getTypedRuleContext(OpendatasourceContext, 0) as OpendatasourceContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_rowset_function_limited;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterRowset_function_limited) {
	 		listener.enterRowset_function_limited(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitRowset_function_limited) {
	 		listener.exitRowset_function_limited(this);
		}
	}
}


export class OpenqueryContext extends ParserRuleContext {
	public _linked_server!: IdContext;
	public _query!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPENQUERY(): TerminalNode {
		return this.getToken(MocaSqlParser.OPENQUERY, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_openquery;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOpenquery) {
	 		listener.enterOpenquery(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOpenquery) {
	 		listener.exitOpenquery(this);
		}
	}
}


export class OpendatasourceContext extends ParserRuleContext {
	public _provider!: Token;
	public _init!: Token;
	public _database!: IdContext;
	public _scheme!: IdContext;
	public _table!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPENDATASOURCE(): TerminalNode {
		return this.getToken(MocaSqlParser.OPENDATASOURCE, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, i);
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, i);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_opendatasource;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOpendatasource) {
	 		listener.enterOpendatasource(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOpendatasource) {
	 		listener.exitOpendatasource(this);
		}
	}
}


export class Execute_statementContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXECUTE(): TerminalNode {
		return this.getToken(MocaSqlParser.EXECUTE, 0);
	}
	public execute_body(): Execute_bodyContext {
		return this.getTypedRuleContext(Execute_bodyContext, 0) as Execute_bodyContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_execute_statement;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterExecute_statement) {
	 		listener.enterExecute_statement(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitExecute_statement) {
	 		listener.exitExecute_statement(this);
		}
	}
}


export class Execute_bodyContext extends ParserRuleContext {
	public _return_status!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public func_proc_name_server_database_schema(): Func_proc_name_server_database_schemaContext {
		return this.getTypedRuleContext(Func_proc_name_server_database_schemaContext, 0) as Func_proc_name_server_database_schemaContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.EQUAL, 0);
	}
	public execute_statement_arg_list(): Execute_statement_argContext[] {
		return this.getTypedRuleContexts(Execute_statement_argContext) as Execute_statement_argContext[];
	}
	public execute_statement_arg(i: number): Execute_statement_argContext {
		return this.getTypedRuleContext(Execute_statement_argContext, i) as Execute_statement_argContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI, 0);
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public execute_var_string_list(): Execute_var_stringContext[] {
		return this.getTypedRuleContexts(Execute_var_stringContext) as Execute_var_stringContext[];
	}
	public execute_var_string(i: number): Execute_var_stringContext {
		return this.getTypedRuleContext(Execute_var_stringContext, i) as Execute_var_stringContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public PLUS_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.PLUS);
	}
	public PLUS(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.PLUS, i);
	}
	public STRING(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, 0);
	}
	public LOGIN(): TerminalNode {
		return this.getToken(MocaSqlParser.LOGIN, 0);
	}
	public USER(): TerminalNode {
		return this.getToken(MocaSqlParser.USER, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(MocaSqlParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_execute_body;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterExecute_body) {
	 		listener.enterExecute_body(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitExecute_body) {
	 		listener.exitExecute_body(this);
		}
	}
}


export class Execute_statement_argContext extends ParserRuleContext {
	public _parameter!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(MocaSqlParser.DEFAULT, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(MocaSqlParser.NULL, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.EQUAL, 0);
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public constant_LOCAL_ID(): Constant_LOCAL_IDContext {
		return this.getTypedRuleContext(Constant_LOCAL_IDContext, 0) as Constant_LOCAL_IDContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(MocaSqlParser.OUTPUT, 0);
	}
	public OUT(): TerminalNode {
		return this.getToken(MocaSqlParser.OUT, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_execute_statement_arg;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterExecute_statement_arg) {
	 		listener.enterExecute_statement_arg(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitExecute_statement_arg) {
	 		listener.exitExecute_statement_arg(this);
		}
	}
}


export class Execute_var_stringContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_execute_var_string;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterExecute_var_string) {
	 		listener.enterExecute_var_string(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitExecute_var_string) {
	 		listener.exitExecute_var_string(this);
		}
	}
}


export class Column_def_table_constraintsContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public column_def_table_constraint_list(): Column_def_table_constraintContext[] {
		return this.getTypedRuleContexts(Column_def_table_constraintContext) as Column_def_table_constraintContext[];
	}
	public column_def_table_constraint(i: number): Column_def_table_constraintContext {
		return this.getTypedRuleContext(Column_def_table_constraintContext, i) as Column_def_table_constraintContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_column_def_table_constraints;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterColumn_def_table_constraints) {
	 		listener.enterColumn_def_table_constraints(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitColumn_def_table_constraints) {
	 		listener.exitColumn_def_table_constraints(this);
		}
	}
}


export class Column_def_table_constraintContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public column_definition(): Column_definitionContext {
		return this.getTypedRuleContext(Column_definitionContext, 0) as Column_definitionContext;
	}
	public materialized_column_definition(): Materialized_column_definitionContext {
		return this.getTypedRuleContext(Materialized_column_definitionContext, 0) as Materialized_column_definitionContext;
	}
	public table_constraint(): Table_constraintContext {
		return this.getTypedRuleContext(Table_constraintContext, 0) as Table_constraintContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_column_def_table_constraint;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterColumn_def_table_constraint) {
	 		listener.enterColumn_def_table_constraint(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitColumn_def_table_constraint) {
	 		listener.exitColumn_def_table_constraint(this);
		}
	}
}


export class Column_definitionContext extends ParserRuleContext {
	public _constraint!: IdContext;
	public _seed!: Token;
	public _increment!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
	}
	public AS(): TerminalNode {
		return this.getToken(MocaSqlParser.AS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COLLATE(): TerminalNode {
		return this.getToken(MocaSqlParser.COLLATE, 0);
	}
	public null_notnull(): Null_notnullContext {
		return this.getTypedRuleContext(Null_notnullContext, 0) as Null_notnullContext;
	}
	public null_or_default_list(): Null_or_defaultContext[] {
		return this.getTypedRuleContexts(Null_or_defaultContext) as Null_or_defaultContext[];
	}
	public null_or_default(i: number): Null_or_defaultContext {
		return this.getTypedRuleContext(Null_or_defaultContext, i) as Null_or_defaultContext;
	}
	public IDENTITY(): TerminalNode {
		return this.getToken(MocaSqlParser.IDENTITY, 0);
	}
	public ROWGUIDCOL(): TerminalNode {
		return this.getToken(MocaSqlParser.ROWGUIDCOL, 0);
	}
	public column_constraint_list(): Column_constraintContext[] {
		return this.getTypedRuleContexts(Column_constraintContext) as Column_constraintContext[];
	}
	public column_constraint(i: number): Column_constraintContext {
		return this.getTypedRuleContext(Column_constraintContext, i) as Column_constraintContext;
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(MocaSqlParser.CONSTRAINT, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(MocaSqlParser.NOT, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(MocaSqlParser.FOR, 0);
	}
	public REPLICATION(): TerminalNode {
		return this.getToken(MocaSqlParser.REPLICATION, 0);
	}
	public DECIMAL_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DECIMAL);
	}
	public DECIMAL(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_column_definition;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterColumn_definition) {
	 		listener.enterColumn_definition(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitColumn_definition) {
	 		listener.exitColumn_definition(this);
		}
	}
}


export class Materialized_column_definitionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COMPUTE(): TerminalNode {
		return this.getToken(MocaSqlParser.COMPUTE, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(MocaSqlParser.AS, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(MocaSqlParser.MATERIALIZED, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(MocaSqlParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_materialized_column_definition;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterMaterialized_column_definition) {
	 		listener.enterMaterialized_column_definition(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitMaterialized_column_definition) {
	 		listener.exitMaterialized_column_definition(this);
		}
	}
}


export class Column_constraintContext extends ParserRuleContext {
	public _constraint!: IdContext;
	public _pk!: Column_name_listContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHECK(): TerminalNode {
		return this.getToken(MocaSqlParser.CHECK, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public search_condition(): Search_conditionContext {
		return this.getTypedRuleContext(Search_conditionContext, 0) as Search_conditionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public REFERENCES(): TerminalNode {
		return this.getToken(MocaSqlParser.REFERENCES, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public null_notnull(): Null_notnullContext {
		return this.getTypedRuleContext(Null_notnullContext, 0) as Null_notnullContext;
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(MocaSqlParser.CONSTRAINT, 0);
	}
	public column_name_list(): Column_name_listContext {
		return this.getTypedRuleContext(Column_name_listContext, 0) as Column_name_listContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public PRIMARY(): TerminalNode {
		return this.getToken(MocaSqlParser.PRIMARY, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(MocaSqlParser.KEY, 0);
	}
	public UNIQUE(): TerminalNode {
		return this.getToken(MocaSqlParser.UNIQUE, 0);
	}
	public clustered(): ClusteredContext {
		return this.getTypedRuleContext(ClusteredContext, 0) as ClusteredContext;
	}
	public index_options(): Index_optionsContext {
		return this.getTypedRuleContext(Index_optionsContext, 0) as Index_optionsContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(MocaSqlParser.NOT, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(MocaSqlParser.FOR, 0);
	}
	public REPLICATION(): TerminalNode {
		return this.getToken(MocaSqlParser.REPLICATION, 0);
	}
	public FOREIGN(): TerminalNode {
		return this.getToken(MocaSqlParser.FOREIGN, 0);
	}
	public on_delete(): On_deleteContext {
		return this.getTypedRuleContext(On_deleteContext, 0) as On_deleteContext;
	}
	public on_update(): On_updateContext {
		return this.getTypedRuleContext(On_updateContext, 0) as On_updateContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_column_constraint;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterColumn_constraint) {
	 		listener.enterColumn_constraint(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitColumn_constraint) {
	 		listener.exitColumn_constraint(this);
		}
	}
}


export class Table_constraintContext extends ParserRuleContext {
	public _constraint!: IdContext;
	public _fk!: Column_name_listContext;
	public _pk!: Column_name_listContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, i);
	}
	public column_name_list_with_order(): Column_name_list_with_orderContext {
		return this.getTypedRuleContext(Column_name_list_with_orderContext, 0) as Column_name_list_with_orderContext;
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, i);
	}
	public CHECK(): TerminalNode {
		return this.getToken(MocaSqlParser.CHECK, 0);
	}
	public search_condition(): Search_conditionContext {
		return this.getTypedRuleContext(Search_conditionContext, 0) as Search_conditionContext;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(MocaSqlParser.DEFAULT, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(MocaSqlParser.FOR, 0);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public FOREIGN(): TerminalNode {
		return this.getToken(MocaSqlParser.FOREIGN, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(MocaSqlParser.KEY, 0);
	}
	public REFERENCES(): TerminalNode {
		return this.getToken(MocaSqlParser.REFERENCES, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(MocaSqlParser.CONSTRAINT, 0);
	}
	public column_name_list_list(): Column_name_listContext[] {
		return this.getTypedRuleContexts(Column_name_listContext) as Column_name_listContext[];
	}
	public column_name_list(i: number): Column_name_listContext {
		return this.getTypedRuleContext(Column_name_listContext, i) as Column_name_listContext;
	}
	public PRIMARY(): TerminalNode {
		return this.getToken(MocaSqlParser.PRIMARY, 0);
	}
	public UNIQUE(): TerminalNode {
		return this.getToken(MocaSqlParser.UNIQUE, 0);
	}
	public clustered(): ClusteredContext {
		return this.getTypedRuleContext(ClusteredContext, 0) as ClusteredContext;
	}
	public index_options(): Index_optionsContext {
		return this.getTypedRuleContext(Index_optionsContext, 0) as Index_optionsContext;
	}
	public ON(): TerminalNode {
		return this.getToken(MocaSqlParser.ON, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(MocaSqlParser.NOT, 0);
	}
	public REPLICATION(): TerminalNode {
		return this.getToken(MocaSqlParser.REPLICATION, 0);
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, i);
	}
	public PLUS_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.PLUS);
	}
	public PLUS(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.PLUS, i);
	}
	public function_call_list(): Function_callContext[] {
		return this.getTypedRuleContexts(Function_callContext) as Function_callContext[];
	}
	public function_call(i: number): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, i) as Function_callContext;
	}
	public DECIMAL_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DECIMAL);
	}
	public DECIMAL(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, i);
	}
	public on_delete(): On_deleteContext {
		return this.getTypedRuleContext(On_deleteContext, 0) as On_deleteContext;
	}
	public on_update(): On_updateContext {
		return this.getTypedRuleContext(On_updateContext, 0) as On_updateContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_table_constraint;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTable_constraint) {
	 		listener.enterTable_constraint(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTable_constraint) {
	 		listener.exitTable_constraint(this);
		}
	}
}


export class On_deleteContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(MocaSqlParser.ON, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(MocaSqlParser.DELETE, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(MocaSqlParser.NO, 0);
	}
	public ACTION(): TerminalNode {
		return this.getToken(MocaSqlParser.ACTION, 0);
	}
	public CASCADE(): TerminalNode {
		return this.getToken(MocaSqlParser.CASCADE, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(MocaSqlParser.SET, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(MocaSqlParser.NULL, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(MocaSqlParser.DEFAULT, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_on_delete;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOn_delete) {
	 		listener.enterOn_delete(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOn_delete) {
	 		listener.exitOn_delete(this);
		}
	}
}


export class On_updateContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(MocaSqlParser.ON, 0);
	}
	public UPDATE(): TerminalNode {
		return this.getToken(MocaSqlParser.UPDATE, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(MocaSqlParser.NO, 0);
	}
	public ACTION(): TerminalNode {
		return this.getToken(MocaSqlParser.ACTION, 0);
	}
	public CASCADE(): TerminalNode {
		return this.getToken(MocaSqlParser.CASCADE, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(MocaSqlParser.SET, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(MocaSqlParser.NULL, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(MocaSqlParser.DEFAULT, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_on_update;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOn_update) {
	 		listener.enterOn_update(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOn_update) {
	 		listener.exitOn_update(this);
		}
	}
}


export class Index_optionsContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(MocaSqlParser.WITH, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public index_option_list(): Index_optionContext[] {
		return this.getTypedRuleContexts(Index_optionContext) as Index_optionContext[];
	}
	public index_option(i: number): Index_optionContext {
		return this.getTypedRuleContext(Index_optionContext, i) as Index_optionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_index_options;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterIndex_options) {
	 		listener.enterIndex_options(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitIndex_options) {
	 		listener.exitIndex_options(this);
		}
	}
}


export class Index_optionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_id_list(): Simple_idContext[] {
		return this.getTypedRuleContexts(Simple_idContext) as Simple_idContext[];
	}
	public simple_id(i: number): Simple_idContext {
		return this.getTypedRuleContext(Simple_idContext, i) as Simple_idContext;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.EQUAL, 0);
	}
	public on_off(): On_offContext {
		return this.getTypedRuleContext(On_offContext, 0) as On_offContext;
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_index_option;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterIndex_option) {
	 		listener.enterIndex_option(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitIndex_option) {
	 		listener.exitIndex_option(this);
		}
	}
}


export class Constant_LOCAL_IDContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_constant_LOCAL_ID;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterConstant_LOCAL_ID) {
	 		listener.enterConstant_LOCAL_ID(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitConstant_LOCAL_ID) {
	 		listener.exitConstant_LOCAL_ID(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _op!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public moca_at_variable(): Moca_at_variableContext {
		return this.getTypedRuleContext(Moca_at_variableContext, 0) as Moca_at_variableContext;
	}
	public moca_at_minus_variable(): Moca_at_minus_variableContext {
		return this.getTypedRuleContext(Moca_at_minus_variableContext, 0) as Moca_at_minus_variableContext;
	}
	public moca_environment_variable(): Moca_environment_variableContext {
		return this.getTypedRuleContext(Moca_environment_variableContext, 0) as Moca_environment_variableContext;
	}
	public moca_integration_variable(): Moca_integration_variableContext {
		return this.getTypedRuleContext(Moca_integration_variableContext, 0) as Moca_integration_variableContext;
	}
	public primitive_expression(): Primitive_expressionContext {
		return this.getTypedRuleContext(Primitive_expressionContext, 0) as Primitive_expressionContext;
	}
	public function_call(): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, 0) as Function_callContext;
	}
	public case_expression(): Case_expressionContext {
		return this.getTypedRuleContext(Case_expressionContext, 0) as Case_expressionContext;
	}
	public full_column_name(): Full_column_nameContext {
		return this.getTypedRuleContext(Full_column_nameContext, 0) as Full_column_nameContext;
	}
	public bracket_expression(): Bracket_expressionContext {
		return this.getTypedRuleContext(Bracket_expressionContext, 0) as Bracket_expressionContext;
	}
	public unary_operator_expression(): Unary_operator_expressionContext {
		return this.getTypedRuleContext(Unary_operator_expressionContext, 0) as Unary_operator_expressionContext;
	}
	public over_clause(): Over_clauseContext {
		return this.getTypedRuleContext(Over_clauseContext, 0) as Over_clauseContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(MocaSqlParser.STAR, 0);
	}
	public DIVIDE(): TerminalNode {
		return this.getToken(MocaSqlParser.DIVIDE, 0);
	}
	public MODULE(): TerminalNode {
		return this.getToken(MocaSqlParser.MODULE, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(MocaSqlParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(MocaSqlParser.MINUS, 0);
	}
	public BIT_AND(): TerminalNode {
		return this.getToken(MocaSqlParser.BIT_AND, 0);
	}
	public BIT_XOR(): TerminalNode {
		return this.getToken(MocaSqlParser.BIT_XOR, 0);
	}
	public BIT_OR(): TerminalNode {
		return this.getToken(MocaSqlParser.BIT_OR, 0);
	}
	public DOUBLE_BAR(): TerminalNode {
		return this.getToken(MocaSqlParser.DOUBLE_BAR, 0);
	}
	public comparison_operator(): Comparison_operatorContext {
		return this.getTypedRuleContext(Comparison_operatorContext, 0) as Comparison_operatorContext;
	}
	public assignment_operator(): Assignment_operatorContext {
		return this.getTypedRuleContext(Assignment_operatorContext, 0) as Assignment_operatorContext;
	}
	public COLLATE(): TerminalNode {
		return this.getToken(MocaSqlParser.COLLATE, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_expression;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
}


export class Moca_at_variableContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public simple_id_list(): Simple_idContext[] {
		return this.getTypedRuleContexts(Simple_idContext) as Simple_idContext[];
	}
	public simple_id(i: number): Simple_idContext {
		return this.getTypedRuleContext(Simple_idContext, i) as Simple_idContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(MocaSqlParser.COLON, 0);
	}
	public SHARP(): TerminalNode {
		return this.getToken(MocaSqlParser.SHARP, 0);
	}
	public KEEP(): TerminalNode {
		return this.getToken(MocaSqlParser.KEEP, 0);
	}
	public MOCA_ONSTACK(): TerminalNode {
		return this.getToken(MocaSqlParser.MOCA_ONSTACK, 0);
	}
	public MOCA_IGNORE(): TerminalNode {
		return this.getToken(MocaSqlParser.MOCA_IGNORE, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_moca_at_variable;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterMoca_at_variable) {
	 		listener.enterMoca_at_variable(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitMoca_at_variable) {
	 		listener.exitMoca_at_variable(this);
		}
	}
}


export class Moca_environment_variableContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MOCA_ENVIRONMENT_VARIABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.MOCA_ENVIRONMENT_VARIABLE, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_moca_environment_variable;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterMoca_environment_variable) {
	 		listener.enterMoca_environment_variable(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitMoca_environment_variable) {
	 		listener.exitMoca_environment_variable(this);
		}
	}
}


export class Moca_at_minus_variableContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MOCA_AT_MINUS_VARIABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.MOCA_AT_MINUS_VARIABLE, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public simple_id_list(): Simple_idContext[] {
		return this.getTypedRuleContexts(Simple_idContext) as Simple_idContext[];
	}
	public simple_id(i: number): Simple_idContext {
		return this.getTypedRuleContext(Simple_idContext, i) as Simple_idContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(MocaSqlParser.COLON, 0);
	}
	public SHARP(): TerminalNode {
		return this.getToken(MocaSqlParser.SHARP, 0);
	}
	public KEEP(): TerminalNode {
		return this.getToken(MocaSqlParser.KEEP, 0);
	}
	public MOCA_ONSTACK(): TerminalNode {
		return this.getToken(MocaSqlParser.MOCA_ONSTACK, 0);
	}
	public MOCA_IGNORE(): TerminalNode {
		return this.getToken(MocaSqlParser.MOCA_IGNORE, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_moca_at_minus_variable;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterMoca_at_minus_variable) {
	 		listener.enterMoca_at_minus_variable(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitMoca_at_minus_variable) {
	 		listener.exitMoca_at_minus_variable(this);
		}
	}
}


export class Moca_at_plus_variableContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MOCA_AT_PLUS_VARIABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.MOCA_AT_PLUS_VARIABLE, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public simple_id_list(): Simple_idContext[] {
		return this.getTypedRuleContexts(Simple_idContext) as Simple_idContext[];
	}
	public simple_id(i: number): Simple_idContext {
		return this.getTypedRuleContext(Simple_idContext, i) as Simple_idContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(MocaSqlParser.COLON, 0);
	}
	public BIT_XOR(): TerminalNode {
		return this.getToken(MocaSqlParser.BIT_XOR, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_moca_at_plus_variable;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterMoca_at_plus_variable) {
	 		listener.enterMoca_at_plus_variable(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitMoca_at_plus_variable) {
	 		listener.exitMoca_at_plus_variable(this);
		}
	}
}


export class Moca_at_starContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MOCA_AT_STAR(): TerminalNode {
		return this.getToken(MocaSqlParser.MOCA_AT_STAR, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_moca_at_star;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterMoca_at_star) {
	 		listener.enterMoca_at_star(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitMoca_at_star) {
	 		listener.exitMoca_at_star(this);
		}
	}
}


export class Moca_integration_variableContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_id(): Simple_idContext {
		return this.getTypedRuleContext(Simple_idContext, 0) as Simple_idContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_moca_integration_variable;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterMoca_integration_variable) {
	 		listener.enterMoca_integration_variable(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitMoca_integration_variable) {
	 		listener.exitMoca_integration_variable(this);
		}
	}
}


export class Primitive_expressionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(MocaSqlParser.DEFAULT, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(MocaSqlParser.NULL, 0);
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_primitive_expression;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterPrimitive_expression) {
	 		listener.enterPrimitive_expression(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitPrimitive_expression) {
	 		listener.exitPrimitive_expression(this);
		}
	}
}


export class Case_expressionContext extends ParserRuleContext {
	public _caseExpr!: ExpressionContext;
	public _elseExpr!: ExpressionContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CASE(): TerminalNode {
		return this.getToken(MocaSqlParser.CASE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(MocaSqlParser.END, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public switch_section_list(): Switch_sectionContext[] {
		return this.getTypedRuleContexts(Switch_sectionContext) as Switch_sectionContext[];
	}
	public switch_section(i: number): Switch_sectionContext {
		return this.getTypedRuleContext(Switch_sectionContext, i) as Switch_sectionContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(MocaSqlParser.ELSE, 0);
	}
	public switch_search_condition_section_list(): Switch_search_condition_sectionContext[] {
		return this.getTypedRuleContexts(Switch_search_condition_sectionContext) as Switch_search_condition_sectionContext[];
	}
	public switch_search_condition_section(i: number): Switch_search_condition_sectionContext {
		return this.getTypedRuleContext(Switch_search_condition_sectionContext, i) as Switch_search_condition_sectionContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_case_expression;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterCase_expression) {
	 		listener.enterCase_expression(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitCase_expression) {
	 		listener.exitCase_expression(this);
		}
	}
}


export class Unary_operator_expressionContext extends ParserRuleContext {
	public _op!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BIT_NOT(): TerminalNode {
		return this.getToken(MocaSqlParser.BIT_NOT, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(MocaSqlParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(MocaSqlParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_unary_operator_expression;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterUnary_operator_expression) {
	 		listener.enterUnary_operator_expression(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitUnary_operator_expression) {
	 		listener.exitUnary_operator_expression(this);
		}
	}
}


export class Bracket_expressionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public subquery(): SubqueryContext {
		return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_bracket_expression;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterBracket_expression) {
	 		listener.enterBracket_expression(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitBracket_expression) {
	 		listener.exitBracket_expression(this);
		}
	}
}


export class Constant_expressionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NULL(): TerminalNode {
		return this.getToken(MocaSqlParser.NULL, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
	public function_call(): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, 0) as Function_callContext;
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public constant_expression(): Constant_expressionContext {
		return this.getTypedRuleContext(Constant_expressionContext, 0) as Constant_expressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_constant_expression;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterConstant_expression) {
	 		listener.enterConstant_expression(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitConstant_expression) {
	 		listener.exitConstant_expression(this);
		}
	}
}


export class SubqueryContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_statement(): Select_statementContext {
		return this.getTypedRuleContext(Select_statementContext, 0) as Select_statementContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_subquery;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSubquery) {
	 		listener.enterSubquery(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSubquery) {
	 		listener.exitSubquery(this);
		}
	}
}


export class With_expressionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(MocaSqlParser.WITH, 0);
	}
	public common_table_expression_list(): Common_table_expressionContext[] {
		return this.getTypedRuleContexts(Common_table_expressionContext) as Common_table_expressionContext[];
	}
	public common_table_expression(i: number): Common_table_expressionContext {
		return this.getTypedRuleContext(Common_table_expressionContext, i) as Common_table_expressionContext;
	}
	public XMLNAMESPACES(): TerminalNode {
		return this.getToken(MocaSqlParser.XMLNAMESPACES, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public BLOCKING_HIERARCHY(): TerminalNode {
		return this.getToken(MocaSqlParser.BLOCKING_HIERARCHY, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(MocaSqlParser.AS, 0);
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, i);
	}
	public select_statement(): Select_statementContext {
		return this.getTypedRuleContext(Select_statementContext, 0) as Select_statementContext;
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, i);
	}
	public full_column_name_list(): Full_column_name_listContext {
		return this.getTypedRuleContext(Full_column_name_listContext, 0) as Full_column_name_listContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_with_expression;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterWith_expression) {
	 		listener.enterWith_expression(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitWith_expression) {
	 		listener.exitWith_expression(this);
		}
	}
}


export class Common_table_expressionContext extends ParserRuleContext {
	public _expression_name!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS(): TerminalNode {
		return this.getToken(MocaSqlParser.AS, 0);
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, i);
	}
	public select_statement(): Select_statementContext {
		return this.getTypedRuleContext(Select_statementContext, 0) as Select_statementContext;
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, i);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public column_name_list(): Column_name_listContext {
		return this.getTypedRuleContext(Column_name_listContext, 0) as Column_name_listContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_common_table_expression;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterCommon_table_expression) {
	 		listener.enterCommon_table_expression(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitCommon_table_expression) {
	 		listener.exitCommon_table_expression(this);
		}
	}
}


export class Update_elemContext extends ParserRuleContext {
	public _udt_column_name!: IdContext;
	public _method_name!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public full_column_name(): Full_column_nameContext {
		return this.getTypedRuleContext(Full_column_nameContext, 0) as Full_column_nameContext;
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.EQUAL, 0);
	}
	public assignment_operator(): Assignment_operatorContext {
		return this.getTypedRuleContext(Assignment_operatorContext, 0) as Assignment_operatorContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public expression_list(): Expression_listContext {
		return this.getTypedRuleContext(Expression_listContext, 0) as Expression_listContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_update_elem;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterUpdate_elem) {
	 		listener.enterUpdate_elem(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitUpdate_elem) {
	 		listener.exitUpdate_elem(this);
		}
	}
}


export class Search_condition_listContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public search_condition_list(): Search_conditionContext[] {
		return this.getTypedRuleContexts(Search_conditionContext) as Search_conditionContext[];
	}
	public search_condition(i: number): Search_conditionContext {
		return this.getTypedRuleContext(Search_conditionContext, i) as Search_conditionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_search_condition_list;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSearch_condition_list) {
	 		listener.enterSearch_condition_list(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSearch_condition_list) {
	 		listener.exitSearch_condition_list(this);
		}
	}
}


export class Search_conditionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public search_condition_and_list(): Search_condition_andContext[] {
		return this.getTypedRuleContexts(Search_condition_andContext) as Search_condition_andContext[];
	}
	public search_condition_and(i: number): Search_condition_andContext {
		return this.getTypedRuleContext(Search_condition_andContext, i) as Search_condition_andContext;
	}
	public OR_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.OR);
	}
	public OR(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.OR, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_search_condition;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSearch_condition) {
	 		listener.enterSearch_condition(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSearch_condition) {
	 		listener.exitSearch_condition(this);
		}
	}
}


export class Search_condition_andContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public search_condition_not_list(): Search_condition_notContext[] {
		return this.getTypedRuleContexts(Search_condition_notContext) as Search_condition_notContext[];
	}
	public search_condition_not(i: number): Search_condition_notContext {
		return this.getTypedRuleContext(Search_condition_notContext, i) as Search_condition_notContext;
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.AND, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_search_condition_and;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSearch_condition_and) {
	 		listener.enterSearch_condition_and(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSearch_condition_and) {
	 		listener.exitSearch_condition_and(this);
		}
	}
}


export class Search_condition_notContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public predicate(): PredicateContext {
		return this.getTypedRuleContext(PredicateContext, 0) as PredicateContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(MocaSqlParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_search_condition_not;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSearch_condition_not) {
	 		listener.enterSearch_condition_not(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSearch_condition_not) {
	 		listener.exitSearch_condition_not(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXISTS(): TerminalNode {
		return this.getToken(MocaSqlParser.EXISTS, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public subquery(): SubqueryContext {
		return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public comparison_operator(): Comparison_operatorContext {
		return this.getTypedRuleContext(Comparison_operatorContext, 0) as Comparison_operatorContext;
	}
	public ALL(): TerminalNode {
		return this.getToken(MocaSqlParser.ALL, 0);
	}
	public SOME(): TerminalNode {
		return this.getToken(MocaSqlParser.SOME, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(MocaSqlParser.ANY, 0);
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(MocaSqlParser.BETWEEN, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(MocaSqlParser.AND, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(MocaSqlParser.NOT, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(MocaSqlParser.IN, 0);
	}
	public expression_list(): Expression_listContext {
		return this.getTypedRuleContext(Expression_listContext, 0) as Expression_listContext;
	}
	public LIKE(): TerminalNode {
		return this.getToken(MocaSqlParser.LIKE, 0);
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(MocaSqlParser.ESCAPE, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(MocaSqlParser.IS, 0);
	}
	public null_notnull(): Null_notnullContext {
		return this.getTypedRuleContext(Null_notnullContext, 0) as Null_notnullContext;
	}
	public moca_at_plus_variable(): Moca_at_plus_variableContext {
		return this.getTypedRuleContext(Moca_at_plus_variableContext, 0) as Moca_at_plus_variableContext;
	}
	public moca_at_star(): Moca_at_starContext {
		return this.getTypedRuleContext(Moca_at_starContext, 0) as Moca_at_starContext;
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MocaSqlParser.COLON, 0);
	}
	public RAW(): TerminalNode {
		return this.getToken(MocaSqlParser.RAW, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public simple_id(): Simple_idContext {
		return this.getTypedRuleContext(Simple_idContext, 0) as Simple_idContext;
	}
	public MOCA_AT_MINUS_VARIABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.MOCA_AT_MINUS_VARIABLE, 0);
	}
	public search_condition(): Search_conditionContext {
		return this.getTypedRuleContext(Search_conditionContext, 0) as Search_conditionContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_predicate;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterPredicate) {
	 		listener.enterPredicate(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitPredicate) {
	 		listener.exitPredicate(this);
		}
	}
}


export class Query_expressionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public query_specification(): Query_specificationContext {
		return this.getTypedRuleContext(Query_specificationContext, 0) as Query_specificationContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public query_expression(): Query_expressionContext {
		return this.getTypedRuleContext(Query_expressionContext, 0) as Query_expressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public sql_union_list(): Sql_unionContext[] {
		return this.getTypedRuleContexts(Sql_unionContext) as Sql_unionContext[];
	}
	public sql_union(i: number): Sql_unionContext {
		return this.getTypedRuleContext(Sql_unionContext, i) as Sql_unionContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_query_expression;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterQuery_expression) {
	 		listener.enterQuery_expression(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitQuery_expression) {
	 		listener.exitQuery_expression(this);
		}
	}
}


export class Sql_unionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNION(): TerminalNode {
		return this.getToken(MocaSqlParser.UNION, 0);
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(MocaSqlParser.EXCEPT, 0);
	}
	public INTERSECT(): TerminalNode {
		return this.getToken(MocaSqlParser.INTERSECT, 0);
	}
	public query_specification(): Query_specificationContext {
		return this.getTypedRuleContext(Query_specificationContext, 0) as Query_specificationContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public query_expression(): Query_expressionContext {
		return this.getTypedRuleContext(Query_expressionContext, 0) as Query_expressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(MocaSqlParser.ALL, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_sql_union;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSql_union) {
	 		listener.enterSql_union(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSql_union) {
	 		listener.exitSql_union(this);
		}
	}
}


export class Query_specificationContext extends ParserRuleContext {
	public _where!: Search_conditionContext;
	public _having!: Search_conditionContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT(): TerminalNode {
		return this.getToken(MocaSqlParser.SELECT, 0);
	}
	public select_list(): Select_listContext {
		return this.getTypedRuleContext(Select_listContext, 0) as Select_listContext;
	}
	public top_clause(): Top_clauseContext {
		return this.getTypedRuleContext(Top_clauseContext, 0) as Top_clauseContext;
	}
	public INTO(): TerminalNode {
		return this.getToken(MocaSqlParser.INTO, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(MocaSqlParser.FROM, 0);
	}
	public table_sources(): Table_sourcesContext {
		return this.getTypedRuleContext(Table_sourcesContext, 0) as Table_sourcesContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(MocaSqlParser.WHERE, 0);
	}
	public GROUP(): TerminalNode {
		return this.getToken(MocaSqlParser.GROUP, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(MocaSqlParser.BY, 0);
	}
	public group_by_item_list(): Group_by_itemContext[] {
		return this.getTypedRuleContexts(Group_by_itemContext) as Group_by_itemContext[];
	}
	public group_by_item(i: number): Group_by_itemContext {
		return this.getTypedRuleContext(Group_by_itemContext, i) as Group_by_itemContext;
	}
	public HAVING(): TerminalNode {
		return this.getToken(MocaSqlParser.HAVING, 0);
	}
	public ALL_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.ALL);
	}
	public ALL(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.ALL, i);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(MocaSqlParser.DISTINCT, 0);
	}
	public search_condition_list(): Search_conditionContext[] {
		return this.getTypedRuleContexts(Search_conditionContext) as Search_conditionContext[];
	}
	public search_condition(i: number): Search_conditionContext {
		return this.getTypedRuleContext(Search_conditionContext, i) as Search_conditionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_query_specification;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterQuery_specification) {
	 		listener.enterQuery_specification(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitQuery_specification) {
	 		listener.exitQuery_specification(this);
		}
	}
}


export class Top_clauseContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOP(): TerminalNode {
		return this.getToken(MocaSqlParser.TOP, 0);
	}
	public top_percent(): Top_percentContext {
		return this.getTypedRuleContext(Top_percentContext, 0) as Top_percentContext;
	}
	public top_count(): Top_countContext {
		return this.getTypedRuleContext(Top_countContext, 0) as Top_countContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(MocaSqlParser.WITH, 0);
	}
	public TIES(): TerminalNode {
		return this.getToken(MocaSqlParser.TIES, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_top_clause;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTop_clause) {
	 		listener.enterTop_clause(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTop_clause) {
	 		listener.exitTop_clause(this);
		}
	}
}


export class Top_percentContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PERCENT(): TerminalNode {
		return this.getToken(MocaSqlParser.PERCENT, 0);
	}
	public REAL(): TerminalNode {
		return this.getToken(MocaSqlParser.REAL, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(MocaSqlParser.FLOAT, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_top_percent;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTop_percent) {
	 		listener.enterTop_percent(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTop_percent) {
	 		listener.exitTop_percent(this);
		}
	}
}


export class Top_countContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_top_count;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTop_count) {
	 		listener.enterTop_count(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTop_count) {
	 		listener.exitTop_count(this);
		}
	}
}


export class Order_by_clauseContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ORDER(): TerminalNode {
		return this.getToken(MocaSqlParser.ORDER, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(MocaSqlParser.BY, 0);
	}
	public order_by_expression_list(): Order_by_expressionContext[] {
		return this.getTypedRuleContexts(Order_by_expressionContext) as Order_by_expressionContext[];
	}
	public order_by_expression(i: number): Order_by_expressionContext {
		return this.getTypedRuleContext(Order_by_expressionContext, i) as Order_by_expressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public OFFSET(): TerminalNode {
		return this.getToken(MocaSqlParser.OFFSET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public ROW_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.ROW);
	}
	public ROW(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.ROW, i);
	}
	public ROWS_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.ROWS);
	}
	public ROWS(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.ROWS, i);
	}
	public FETCH(): TerminalNode {
		return this.getToken(MocaSqlParser.FETCH, 0);
	}
	public ONLY(): TerminalNode {
		return this.getToken(MocaSqlParser.ONLY, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(MocaSqlParser.FIRST, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(MocaSqlParser.NEXT, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_order_by_clause;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOrder_by_clause) {
	 		listener.enterOrder_by_clause(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOrder_by_clause) {
	 		listener.exitOrder_by_clause(this);
		}
	}
}


export class For_clauseContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(MocaSqlParser.FOR, 0);
	}
	public BROWSE(): TerminalNode {
		return this.getToken(MocaSqlParser.BROWSE, 0);
	}
	public XML(): TerminalNode {
		return this.getToken(MocaSqlParser.XML, 0);
	}
	public RAW(): TerminalNode {
		return this.getToken(MocaSqlParser.RAW, 0);
	}
	public AUTO(): TerminalNode {
		return this.getToken(MocaSqlParser.AUTO, 0);
	}
	public xml_common_directives_list(): Xml_common_directivesContext[] {
		return this.getTypedRuleContexts(Xml_common_directivesContext) as Xml_common_directivesContext[];
	}
	public xml_common_directives(i: number): Xml_common_directivesContext {
		return this.getTypedRuleContext(Xml_common_directivesContext, i) as Xml_common_directivesContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public ELEMENTS(): TerminalNode {
		return this.getToken(MocaSqlParser.ELEMENTS, 0);
	}
	public XSINIL(): TerminalNode {
		return this.getToken(MocaSqlParser.XSINIL, 0);
	}
	public ABSENT(): TerminalNode {
		return this.getToken(MocaSqlParser.ABSENT, 0);
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, i);
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, i);
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, i);
	}
	public XMLDATA(): TerminalNode {
		return this.getToken(MocaSqlParser.XMLDATA, 0);
	}
	public XMLSCHEMA(): TerminalNode {
		return this.getToken(MocaSqlParser.XMLSCHEMA, 0);
	}
	public EXPLICIT(): TerminalNode {
		return this.getToken(MocaSqlParser.EXPLICIT, 0);
	}
	public PATH(): TerminalNode {
		return this.getToken(MocaSqlParser.PATH, 0);
	}
	public JSON(): TerminalNode {
		return this.getToken(MocaSqlParser.JSON, 0);
	}
	public ROOT(): TerminalNode {
		return this.getToken(MocaSqlParser.ROOT, 0);
	}
	public INCLUDE_NULL_VALUES(): TerminalNode {
		return this.getToken(MocaSqlParser.INCLUDE_NULL_VALUES, 0);
	}
	public WITHOUT_ARRAY_WRAPPER(): TerminalNode {
		return this.getToken(MocaSqlParser.WITHOUT_ARRAY_WRAPPER, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_for_clause;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterFor_clause) {
	 		listener.enterFor_clause(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitFor_clause) {
	 		listener.exitFor_clause(this);
		}
	}
}


export class Xml_common_directivesContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public BINARY_BASE64(): TerminalNode {
		return this.getToken(MocaSqlParser.BINARY_BASE64, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(MocaSqlParser.TYPE, 0);
	}
	public ROOT(): TerminalNode {
		return this.getToken(MocaSqlParser.ROOT, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_xml_common_directives;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterXml_common_directives) {
	 		listener.enterXml_common_directives(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitXml_common_directives) {
	 		listener.exitXml_common_directives(this);
		}
	}
}


export class Order_by_expressionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public ASC(): TerminalNode {
		return this.getToken(MocaSqlParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(MocaSqlParser.DESC, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_order_by_expression;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOrder_by_expression) {
	 		listener.enterOrder_by_expression(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOrder_by_expression) {
	 		listener.exitOrder_by_expression(this);
		}
	}
}


export class Group_by_itemContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_group_by_item;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterGroup_by_item) {
	 		listener.enterGroup_by_item(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitGroup_by_item) {
	 		listener.exitGroup_by_item(this);
		}
	}
}


export class Option_clauseContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPTION(): TerminalNode {
		return this.getToken(MocaSqlParser.OPTION, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public option_list(): OptionContext[] {
		return this.getTypedRuleContexts(OptionContext) as OptionContext[];
	}
	public option(i: number): OptionContext {
		return this.getTypedRuleContext(OptionContext, i) as OptionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_option_clause;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOption_clause) {
	 		listener.enterOption_clause(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOption_clause) {
	 		listener.exitOption_clause(this);
		}
	}
}


export class OptionContext extends ParserRuleContext {
	public _number_rows!: Token;
	public _number_of_processors!: Token;
	public _number_recursion!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FAST(): TerminalNode {
		return this.getToken(MocaSqlParser.FAST, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, 0);
	}
	public GROUP(): TerminalNode {
		return this.getToken(MocaSqlParser.GROUP, 0);
	}
	public HASH(): TerminalNode {
		return this.getToken(MocaSqlParser.HASH, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(MocaSqlParser.ORDER, 0);
	}
	public UNION(): TerminalNode {
		return this.getToken(MocaSqlParser.UNION, 0);
	}
	public MERGE(): TerminalNode {
		return this.getToken(MocaSqlParser.MERGE, 0);
	}
	public CONCAT(): TerminalNode {
		return this.getToken(MocaSqlParser.CONCAT, 0);
	}
	public JOIN(): TerminalNode {
		return this.getToken(MocaSqlParser.JOIN, 0);
	}
	public LOOP(): TerminalNode {
		return this.getToken(MocaSqlParser.LOOP, 0);
	}
	public EXPAND(): TerminalNode {
		return this.getToken(MocaSqlParser.EXPAND, 0);
	}
	public VIEWS(): TerminalNode {
		return this.getToken(MocaSqlParser.VIEWS, 0);
	}
	public FORCE(): TerminalNode {
		return this.getToken(MocaSqlParser.FORCE, 0);
	}
	public IGNORE_NONCLUSTERED_COLUMNSTORE_INDEX(): TerminalNode {
		return this.getToken(MocaSqlParser.IGNORE_NONCLUSTERED_COLUMNSTORE_INDEX, 0);
	}
	public KEEP(): TerminalNode {
		return this.getToken(MocaSqlParser.KEEP, 0);
	}
	public PLAN(): TerminalNode {
		return this.getToken(MocaSqlParser.PLAN, 0);
	}
	public KEEPFIXED(): TerminalNode {
		return this.getToken(MocaSqlParser.KEEPFIXED, 0);
	}
	public MAXDOP(): TerminalNode {
		return this.getToken(MocaSqlParser.MAXDOP, 0);
	}
	public MAXRECURSION(): TerminalNode {
		return this.getToken(MocaSqlParser.MAXRECURSION, 0);
	}
	public OPTIMIZE(): TerminalNode {
		return this.getToken(MocaSqlParser.OPTIMIZE, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(MocaSqlParser.FOR, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public optimize_for_arg_list(): Optimize_for_argContext[] {
		return this.getTypedRuleContexts(Optimize_for_argContext) as Optimize_for_argContext[];
	}
	public optimize_for_arg(i: number): Optimize_for_argContext {
		return this.getTypedRuleContext(Optimize_for_argContext, i) as Optimize_for_argContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public UNKNOWN(): TerminalNode {
		return this.getToken(MocaSqlParser.UNKNOWN, 0);
	}
	public PARAMETERIZATION(): TerminalNode {
		return this.getToken(MocaSqlParser.PARAMETERIZATION, 0);
	}
	public SIMPLE(): TerminalNode {
		return this.getToken(MocaSqlParser.SIMPLE, 0);
	}
	public FORCED(): TerminalNode {
		return this.getToken(MocaSqlParser.FORCED, 0);
	}
	public RECOMPILE(): TerminalNode {
		return this.getToken(MocaSqlParser.RECOMPILE, 0);
	}
	public ROBUST(): TerminalNode {
		return this.getToken(MocaSqlParser.ROBUST, 0);
	}
	public USE(): TerminalNode {
		return this.getToken(MocaSqlParser.USE, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_option;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOption) {
	 		listener.enterOption(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOption) {
	 		listener.exitOption(this);
		}
	}
}


export class Optimize_for_argContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public UNKNOWN(): TerminalNode {
		return this.getToken(MocaSqlParser.UNKNOWN, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.EQUAL, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
	public NULL(): TerminalNode {
		return this.getToken(MocaSqlParser.NULL, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_optimize_for_arg;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOptimize_for_arg) {
	 		listener.enterOptimize_for_arg(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOptimize_for_arg) {
	 		listener.exitOptimize_for_arg(this);
		}
	}
}


export class Select_listContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_list_elem_list(): Select_list_elemContext[] {
		return this.getTypedRuleContexts(Select_list_elemContext) as Select_list_elemContext[];
	}
	public select_list_elem(i: number): Select_list_elemContext {
		return this.getTypedRuleContext(Select_list_elemContext, i) as Select_list_elemContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_select_list;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSelect_list) {
	 		listener.enterSelect_list(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSelect_list) {
	 		listener.exitSelect_list(this);
		}
	}
}


export class Udt_method_argumentsContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public execute_var_string_list(): Execute_var_stringContext[] {
		return this.getTypedRuleContexts(Execute_var_stringContext) as Execute_var_stringContext[];
	}
	public execute_var_string(i: number): Execute_var_stringContext {
		return this.getTypedRuleContext(Execute_var_stringContext, i) as Execute_var_stringContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_udt_method_arguments;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterUdt_method_arguments) {
	 		listener.enterUdt_method_arguments(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitUdt_method_arguments) {
	 		listener.exitUdt_method_arguments(this);
		}
	}
}


export class AsteriskContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(MocaSqlParser.STAR, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_asterisk;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterAsterisk) {
	 		listener.enterAsterisk(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitAsterisk) {
	 		listener.exitAsterisk(this);
		}
	}
}


export class Column_elemContext extends ParserRuleContext {
	public _column_name!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NULL(): TerminalNode {
		return this.getToken(MocaSqlParser.NULL, 0);
	}
	public as_column_alias(): As_column_aliasContext {
		return this.getTypedRuleContext(As_column_aliasContext, 0) as As_column_aliasContext;
	}
	public DOLLAR(): TerminalNode {
		return this.getToken(MocaSqlParser.DOLLAR, 0);
	}
	public IDENTITY(): TerminalNode {
		return this.getToken(MocaSqlParser.IDENTITY, 0);
	}
	public ROWGUID(): TerminalNode {
		return this.getToken(MocaSqlParser.ROWGUID, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_column_elem;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterColumn_elem) {
	 		listener.enterColumn_elem(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitColumn_elem) {
	 		listener.exitColumn_elem(this);
		}
	}
}


export class Udt_elemContext extends ParserRuleContext {
	public _udt_column_name!: IdContext;
	public _non_static_attr!: IdContext;
	public _static_attr!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public udt_method_arguments(): Udt_method_argumentsContext {
		return this.getTypedRuleContext(Udt_method_argumentsContext, 0) as Udt_method_argumentsContext;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public as_column_alias(): As_column_aliasContext {
		return this.getTypedRuleContext(As_column_aliasContext, 0) as As_column_aliasContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COLON, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_udt_elem;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterUdt_elem) {
	 		listener.enterUdt_elem(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitUdt_elem) {
	 		listener.exitUdt_elem(this);
		}
	}
}


export class Expression_elemContext extends ParserRuleContext {
	public _eq!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public column_alias(): Column_aliasContext {
		return this.getTypedRuleContext(Column_aliasContext, 0) as Column_aliasContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.EQUAL, 0);
	}
	public as_column_alias(): As_column_aliasContext {
		return this.getTypedRuleContext(As_column_aliasContext, 0) as As_column_aliasContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_expression_elem;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterExpression_elem) {
	 		listener.enterExpression_elem(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitExpression_elem) {
	 		listener.exitExpression_elem(this);
		}
	}
}


export class Select_list_elemContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public asterisk(): AsteriskContext {
		return this.getTypedRuleContext(AsteriskContext, 0) as AsteriskContext;
	}
	public column_elem(): Column_elemContext {
		return this.getTypedRuleContext(Column_elemContext, 0) as Column_elemContext;
	}
	public udt_elem(): Udt_elemContext {
		return this.getTypedRuleContext(Udt_elemContext, 0) as Udt_elemContext;
	}
	public expression_elem(): Expression_elemContext {
		return this.getTypedRuleContext(Expression_elemContext, 0) as Expression_elemContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_select_list_elem;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSelect_list_elem) {
	 		listener.enterSelect_list_elem(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSelect_list_elem) {
	 		listener.exitSelect_list_elem(this);
		}
	}
}


export class Table_sourcesContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_source_list(): Table_sourceContext[] {
		return this.getTypedRuleContexts(Table_sourceContext) as Table_sourceContext[];
	}
	public table_source(i: number): Table_sourceContext {
		return this.getTypedRuleContext(Table_sourceContext, i) as Table_sourceContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_table_sources;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTable_sources) {
	 		listener.enterTable_sources(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTable_sources) {
	 		listener.exitTable_sources(this);
		}
	}
}


export class Table_sourceContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_source_item_joined(): Table_source_item_joinedContext {
		return this.getTypedRuleContext(Table_source_item_joinedContext, 0) as Table_source_item_joinedContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_table_source;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTable_source) {
	 		listener.enterTable_source(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTable_source) {
	 		listener.exitTable_source(this);
		}
	}
}


export class Table_source_item_joinedContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_source_item(): Table_source_itemContext {
		return this.getTypedRuleContext(Table_source_itemContext, 0) as Table_source_itemContext;
	}
	public join_part_list(): Join_partContext[] {
		return this.getTypedRuleContexts(Join_partContext) as Join_partContext[];
	}
	public join_part(i: number): Join_partContext {
		return this.getTypedRuleContext(Join_partContext, i) as Join_partContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_table_source_item_joined;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTable_source_item_joined) {
	 		listener.enterTable_source_item_joined(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTable_source_item_joined) {
	 		listener.exitTable_source_item_joined(this);
		}
	}
}


export class Table_source_itemContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name_with_hint(): Table_name_with_hintContext {
		return this.getTypedRuleContext(Table_name_with_hintContext, 0) as Table_name_with_hintContext;
	}
	public as_table_alias(): As_table_aliasContext {
		return this.getTypedRuleContext(As_table_aliasContext, 0) as As_table_aliasContext;
	}
	public full_table_name(): Full_table_nameContext {
		return this.getTypedRuleContext(Full_table_nameContext, 0) as Full_table_nameContext;
	}
	public rowset_function(): Rowset_functionContext {
		return this.getTypedRuleContext(Rowset_functionContext, 0) as Rowset_functionContext;
	}
	public derived_table(): Derived_tableContext {
		return this.getTypedRuleContext(Derived_tableContext, 0) as Derived_tableContext;
	}
	public column_alias_list(): Column_alias_listContext {
		return this.getTypedRuleContext(Column_alias_listContext, 0) as Column_alias_listContext;
	}
	public change_table(): Change_tableContext {
		return this.getTypedRuleContext(Change_tableContext, 0) as Change_tableContext;
	}
	public function_call(): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, 0) as Function_callContext;
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public open_xml(): Open_xmlContext {
		return this.getTypedRuleContext(Open_xmlContext, 0) as Open_xmlContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COLON, i);
	}
	public RAW(): TerminalNode {
		return this.getToken(MocaSqlParser.RAW, 0);
	}
	public simple_id(): Simple_idContext {
		return this.getTypedRuleContext(Simple_idContext, 0) as Simple_idContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_table_source_item;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTable_source_item) {
	 		listener.enterTable_source_item(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTable_source_item) {
	 		listener.exitTable_source_item(this);
		}
	}
}


export class Open_xmlContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPENXML(): TerminalNode {
		return this.getToken(MocaSqlParser.OPENXML, 0);
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, i);
	}
	public WITH(): TerminalNode {
		return this.getToken(MocaSqlParser.WITH, 0);
	}
	public schema_declaration(): Schema_declarationContext {
		return this.getTypedRuleContext(Schema_declarationContext, 0) as Schema_declarationContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_open_xml;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOpen_xml) {
	 		listener.enterOpen_xml(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOpen_xml) {
	 		listener.exitOpen_xml(this);
		}
	}
}


export class Schema_declarationContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public column_declaration_list(): Column_declarationContext[] {
		return this.getTypedRuleContexts(Column_declarationContext) as Column_declarationContext[];
	}
	public column_declaration(i: number): Column_declarationContext {
		return this.getTypedRuleContext(Column_declarationContext, i) as Column_declarationContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_schema_declaration;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSchema_declaration) {
	 		listener.enterSchema_declaration(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSchema_declaration) {
	 		listener.exitSchema_declaration(this);
		}
	}
}


export class Column_declarationContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MocaSqlParser.ID, 0);
	}
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_column_declaration;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterColumn_declaration) {
	 		listener.enterColumn_declaration(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitColumn_declaration) {
	 		listener.exitColumn_declaration(this);
		}
	}
}


export class Change_tableContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHANGETABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.CHANGETABLE, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public CHANGES(): TerminalNode {
		return this.getToken(MocaSqlParser.CHANGES, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(MocaSqlParser.NULL, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, 0);
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_change_table;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterChange_table) {
	 		listener.enterChange_table(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitChange_table) {
	 		listener.exitChange_table(this);
		}
	}
}


export class Join_partContext extends ParserRuleContext {
	public _join_type!: Token;
	public _join_hint!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public JOIN(): TerminalNode {
		return this.getToken(MocaSqlParser.JOIN, 0);
	}
	public table_source(): Table_sourceContext {
		return this.getTypedRuleContext(Table_sourceContext, 0) as Table_sourceContext;
	}
	public ON(): TerminalNode {
		return this.getToken(MocaSqlParser.ON, 0);
	}
	public search_condition(): Search_conditionContext {
		return this.getTypedRuleContext(Search_conditionContext, 0) as Search_conditionContext;
	}
	public LEFT(): TerminalNode {
		return this.getToken(MocaSqlParser.LEFT, 0);
	}
	public RIGHT(): TerminalNode {
		return this.getToken(MocaSqlParser.RIGHT, 0);
	}
	public FULL(): TerminalNode {
		return this.getToken(MocaSqlParser.FULL, 0);
	}
	public INNER(): TerminalNode {
		return this.getToken(MocaSqlParser.INNER, 0);
	}
	public OUTER(): TerminalNode {
		return this.getToken(MocaSqlParser.OUTER, 0);
	}
	public LOOP(): TerminalNode {
		return this.getToken(MocaSqlParser.LOOP, 0);
	}
	public HASH(): TerminalNode {
		return this.getToken(MocaSqlParser.HASH, 0);
	}
	public MERGE(): TerminalNode {
		return this.getToken(MocaSqlParser.MERGE, 0);
	}
	public REMOTE(): TerminalNode {
		return this.getToken(MocaSqlParser.REMOTE, 0);
	}
	public CROSS(): TerminalNode {
		return this.getToken(MocaSqlParser.CROSS, 0);
	}
	public APPLY(): TerminalNode {
		return this.getToken(MocaSqlParser.APPLY, 0);
	}
	public PIVOT(): TerminalNode {
		return this.getToken(MocaSqlParser.PIVOT, 0);
	}
	public pivot_clause(): Pivot_clauseContext {
		return this.getTypedRuleContext(Pivot_clauseContext, 0) as Pivot_clauseContext;
	}
	public as_table_alias(): As_table_aliasContext {
		return this.getTypedRuleContext(As_table_aliasContext, 0) as As_table_aliasContext;
	}
	public UNPIVOT(): TerminalNode {
		return this.getToken(MocaSqlParser.UNPIVOT, 0);
	}
	public unpivot_clause(): Unpivot_clauseContext {
		return this.getTypedRuleContext(Unpivot_clauseContext, 0) as Unpivot_clauseContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_join_part;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterJoin_part) {
	 		listener.enterJoin_part(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitJoin_part) {
	 		listener.exitJoin_part(this);
		}
	}
}


export class Pivot_clauseContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public aggregate_windowed_function(): Aggregate_windowed_functionContext {
		return this.getTypedRuleContext(Aggregate_windowed_functionContext, 0) as Aggregate_windowed_functionContext;
	}
	public FOR(): TerminalNode {
		return this.getToken(MocaSqlParser.FOR, 0);
	}
	public full_column_name(): Full_column_nameContext {
		return this.getTypedRuleContext(Full_column_nameContext, 0) as Full_column_nameContext;
	}
	public IN(): TerminalNode {
		return this.getToken(MocaSqlParser.IN, 0);
	}
	public column_alias_list(): Column_alias_listContext {
		return this.getTypedRuleContext(Column_alias_listContext, 0) as Column_alias_listContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_pivot_clause;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterPivot_clause) {
	 		listener.enterPivot_clause(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitPivot_clause) {
	 		listener.exitPivot_clause(this);
		}
	}
}


export class Unpivot_clauseContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, i);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public FOR(): TerminalNode {
		return this.getToken(MocaSqlParser.FOR, 0);
	}
	public full_column_name(): Full_column_nameContext {
		return this.getTypedRuleContext(Full_column_nameContext, 0) as Full_column_nameContext;
	}
	public IN(): TerminalNode {
		return this.getToken(MocaSqlParser.IN, 0);
	}
	public full_column_name_list(): Full_column_name_listContext {
		return this.getTypedRuleContext(Full_column_name_listContext, 0) as Full_column_name_listContext;
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_unpivot_clause;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterUnpivot_clause) {
	 		listener.enterUnpivot_clause(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitUnpivot_clause) {
	 		listener.exitUnpivot_clause(this);
		}
	}
}


export class Full_column_name_listContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public full_column_name_list(): Full_column_nameContext[] {
		return this.getTypedRuleContexts(Full_column_nameContext) as Full_column_nameContext[];
	}
	public full_column_name(i: number): Full_column_nameContext {
		return this.getTypedRuleContext(Full_column_nameContext, i) as Full_column_nameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_full_column_name_list;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterFull_column_name_list) {
	 		listener.enterFull_column_name_list(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitFull_column_name_list) {
	 		listener.exitFull_column_name_list(this);
		}
	}
}


export class Table_name_with_hintContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public with_table_hints(): With_table_hintsContext {
		return this.getTypedRuleContext(With_table_hintsContext, 0) as With_table_hintsContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_table_name_with_hint;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTable_name_with_hint) {
	 		listener.enterTable_name_with_hint(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTable_name_with_hint) {
	 		listener.exitTable_name_with_hint(this);
		}
	}
}


export class Rowset_functionContext extends ParserRuleContext {
	public _provider_name!: Token;
	public _connectionString!: Token;
	public _sql!: Token;
	public _data_file!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPENROWSET(): TerminalNode {
		return this.getToken(MocaSqlParser.OPENROWSET, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, i);
	}
	public BULK(): TerminalNode {
		return this.getToken(MocaSqlParser.BULK, 0);
	}
	public bulk_option_list(): Bulk_optionContext[] {
		return this.getTypedRuleContexts(Bulk_optionContext) as Bulk_optionContext[];
	}
	public bulk_option(i: number): Bulk_optionContext {
		return this.getTypedRuleContext(Bulk_optionContext, i) as Bulk_optionContext;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_rowset_function;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterRowset_function) {
	 		listener.enterRowset_function(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitRowset_function) {
	 		listener.exitRowset_function(this);
		}
	}
}


export class Bulk_optionContext extends ParserRuleContext {
	public _bulk_option_value!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.EQUAL, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_bulk_option;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterBulk_option) {
	 		listener.enterBulk_option(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitBulk_option) {
	 		listener.exitBulk_option(this);
		}
	}
}


export class Derived_tableContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public subquery(): SubqueryContext {
		return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public table_value_constructor(): Table_value_constructorContext {
		return this.getTypedRuleContext(Table_value_constructorContext, 0) as Table_value_constructorContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_derived_table;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDerived_table) {
	 		listener.enterDerived_table(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDerived_table) {
	 		listener.exitDerived_table(this);
		}
	}
}


export class Function_callContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_function_call;
	}
	public copyFrom(ctx: Function_callContext): void {
		super.copyFrom(ctx);
	}
}
export class CURRENT_USERContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_USER(): TerminalNode {
		return this.getToken(MocaSqlParser.CURRENT_USER, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterCURRENT_USER) {
	 		listener.enterCURRENT_USER(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitCURRENT_USER) {
	 		listener.exitCURRENT_USER(this);
		}
	}
}
export class DATEADDContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DATEADD(): TerminalNode {
		return this.getToken(MocaSqlParser.DATEADD, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(MocaSqlParser.ID, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDATEADD) {
	 		listener.enterDATEADD(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDATEADD) {
	 		listener.exitDATEADD(this);
		}
	}
}
export class CHECKSUMContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHECKSUM(): TerminalNode {
		return this.getToken(MocaSqlParser.CHECKSUM, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(MocaSqlParser.STAR, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterCHECKSUM) {
	 		listener.enterCHECKSUM(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitCHECKSUM) {
	 		listener.exitCHECKSUM(this);
		}
	}
}
export class CURRENT_TIMESTAMPContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURRENT_TIMESTAMP(): TerminalNode {
		return this.getToken(MocaSqlParser.CURRENT_TIMESTAMP, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterCURRENT_TIMESTAMP) {
	 		listener.enterCURRENT_TIMESTAMP(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitCURRENT_TIMESTAMP) {
	 		listener.exitCURRENT_TIMESTAMP(this);
		}
	}
}
export class BINARY_CHECKSUMContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BINARY_CHECKSUM(): TerminalNode {
		return this.getToken(MocaSqlParser.BINARY_CHECKSUM, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(MocaSqlParser.STAR, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterBINARY_CHECKSUM) {
	 		listener.enterBINARY_CHECKSUM(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitBINARY_CHECKSUM) {
	 		listener.exitBINARY_CHECKSUM(this);
		}
	}
}
export class IFFContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IIF(): TerminalNode {
		return this.getToken(MocaSqlParser.IIF, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public search_condition(): Search_conditionContext {
		return this.getTypedRuleContext(Search_conditionContext, 0) as Search_conditionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterIFF) {
	 		listener.enterIFF(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitIFF) {
	 		listener.exitIFF(this);
		}
	}
}
export class SYSTEM_USERContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SYSTEM_USER(): TerminalNode {
		return this.getToken(MocaSqlParser.SYSTEM_USER, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSYSTEM_USER) {
	 		listener.enterSYSTEM_USER(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSYSTEM_USER) {
	 		listener.exitSYSTEM_USER(this);
		}
	}
}
export class NULLIFContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NULLIF(): TerminalNode {
		return this.getToken(MocaSqlParser.NULLIF, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterNULLIF) {
	 		listener.enterNULLIF(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitNULLIF) {
	 		listener.exitNULLIF(this);
		}
	}
}
export class SESSION_USERContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SESSION_USER(): TerminalNode {
		return this.getToken(MocaSqlParser.SESSION_USER, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSESSION_USER) {
	 		listener.enterSESSION_USER(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSESSION_USER) {
	 		listener.exitSESSION_USER(this);
		}
	}
}
export class CONVERTContext extends Function_callContext {
	public _convert_data_type!: Data_typeContext;
	public _convert_expression!: ExpressionContext;
	public _style!: ExpressionContext;
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CONVERT(): TerminalNode {
		return this.getToken(MocaSqlParser.CONVERT, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterCONVERT) {
	 		listener.enterCONVERT(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitCONVERT) {
	 		listener.exitCONVERT(this);
		}
	}
}
export class XML_DATA_TYPE_FUNCContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public xml_data_type_methods(): Xml_data_type_methodsContext {
		return this.getTypedRuleContext(Xml_data_type_methodsContext, 0) as Xml_data_type_methodsContext;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterXML_DATA_TYPE_FUNC) {
	 		listener.enterXML_DATA_TYPE_FUNC(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitXML_DATA_TYPE_FUNC) {
	 		listener.exitXML_DATA_TYPE_FUNC(this);
		}
	}
}
export class COALESCEContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COALESCE(): TerminalNode {
		return this.getToken(MocaSqlParser.COALESCE, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public expression_list(): Expression_listContext {
		return this.getTypedRuleContext(Expression_listContext, 0) as Expression_listContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterCOALESCE) {
	 		listener.enterCOALESCE(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitCOALESCE) {
	 		listener.exitCOALESCE(this);
		}
	}
}
export class CASTContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CAST(): TerminalNode {
		return this.getToken(MocaSqlParser.CAST, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(MocaSqlParser.AS, 0);
	}
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterCAST) {
	 		listener.enterCAST(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitCAST) {
	 		listener.exitCAST(this);
		}
	}
}
export class MIN_ACTIVE_ROWVERSIONContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MIN_ACTIVE_ROWVERSION(): TerminalNode {
		return this.getToken(MocaSqlParser.MIN_ACTIVE_ROWVERSION, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterMIN_ACTIVE_ROWVERSION) {
	 		listener.enterMIN_ACTIVE_ROWVERSION(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitMIN_ACTIVE_ROWVERSION) {
	 		listener.exitMIN_ACTIVE_ROWVERSION(this);
		}
	}
}
export class SCALAR_FUNCTIONContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public scalar_function_name(): Scalar_function_nameContext {
		return this.getTypedRuleContext(Scalar_function_nameContext, 0) as Scalar_function_nameContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public expression_list(): Expression_listContext {
		return this.getTypedRuleContext(Expression_listContext, 0) as Expression_listContext;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSCALAR_FUNCTION) {
	 		listener.enterSCALAR_FUNCTION(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSCALAR_FUNCTION) {
	 		listener.exitSCALAR_FUNCTION(this);
		}
	}
}
export class DATEPARTContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DATEPART(): TerminalNode {
		return this.getToken(MocaSqlParser.DATEPART, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(MocaSqlParser.ID, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDATEPART) {
	 		listener.enterDATEPART(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDATEPART) {
	 		listener.exitDATEPART(this);
		}
	}
}
export class STUFFContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STUFF(): TerminalNode {
		return this.getToken(MocaSqlParser.STUFF, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public DECIMAL_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DECIMAL);
	}
	public DECIMAL(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, i);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSTUFF) {
	 		listener.enterSTUFF(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSTUFF) {
	 		listener.exitSTUFF(this);
		}
	}
}
export class AGGREGATE_WINDOWED_FUNCContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public aggregate_windowed_function(): Aggregate_windowed_functionContext {
		return this.getTypedRuleContext(Aggregate_windowed_functionContext, 0) as Aggregate_windowed_functionContext;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterAGGREGATE_WINDOWED_FUNC) {
	 		listener.enterAGGREGATE_WINDOWED_FUNC(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitAGGREGATE_WINDOWED_FUNC) {
	 		listener.exitAGGREGATE_WINDOWED_FUNC(this);
		}
	}
}
export class IDENTITYContext extends Function_callContext {
	public _seed!: Token;
	public _increment!: Token;
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENTITY(): TerminalNode {
		return this.getToken(MocaSqlParser.IDENTITY, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public DECIMAL_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DECIMAL);
	}
	public DECIMAL(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, i);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterIDENTITY) {
	 		listener.enterIDENTITY(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitIDENTITY) {
	 		listener.exitIDENTITY(this);
		}
	}
}
export class RANKING_WINDOWED_FUNCContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ranking_windowed_function(): Ranking_windowed_functionContext {
		return this.getTypedRuleContext(Ranking_windowed_functionContext, 0) as Ranking_windowed_functionContext;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterRANKING_WINDOWED_FUNC) {
	 		listener.enterRANKING_WINDOWED_FUNC(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitRANKING_WINDOWED_FUNC) {
	 		listener.exitRANKING_WINDOWED_FUNC(this);
		}
	}
}
export class DATENAMEContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DATENAME(): TerminalNode {
		return this.getToken(MocaSqlParser.DATENAME, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(MocaSqlParser.ID, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDATENAME) {
	 		listener.enterDATENAME(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDATENAME) {
	 		listener.exitDATENAME(this);
		}
	}
}
export class GETUTCDATEContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GETUTCDATE(): TerminalNode {
		return this.getToken(MocaSqlParser.GETUTCDATE, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterGETUTCDATE) {
	 		listener.enterGETUTCDATE(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitGETUTCDATE) {
	 		listener.exitGETUTCDATE(this);
		}
	}
}
export class ANALYTIC_WINDOWED_FUNCContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public analytic_windowed_function(): Analytic_windowed_functionContext {
		return this.getTypedRuleContext(Analytic_windowed_functionContext, 0) as Analytic_windowed_functionContext;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterANALYTIC_WINDOWED_FUNC) {
	 		listener.enterANALYTIC_WINDOWED_FUNC(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitANALYTIC_WINDOWED_FUNC) {
	 		listener.exitANALYTIC_WINDOWED_FUNC(this);
		}
	}
}
export class ISNULLContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ISNULL(): TerminalNode {
		return this.getToken(MocaSqlParser.ISNULL, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterISNULL) {
	 		listener.enterISNULL(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitISNULL) {
	 		listener.exitISNULL(this);
		}
	}
}
export class DATEDIFFContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DATEDIFF(): TerminalNode {
		return this.getToken(MocaSqlParser.DATEDIFF, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(MocaSqlParser.ID, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDATEDIFF) {
	 		listener.enterDATEDIFF(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDATEDIFF) {
	 		listener.exitDATEDIFF(this);
		}
	}
}
export class GETDATEContext extends Function_callContext {
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GETDATE(): TerminalNode {
		return this.getToken(MocaSqlParser.GETDATE, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterGETDATE) {
	 		listener.enterGETDATE(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitGETDATE) {
	 		listener.exitGETDATE(this);
		}
	}
}
export class STRINGAGGContext extends Function_callContext {
	public _expr!: ExpressionContext;
	public _separator!: ExpressionContext;
	constructor(parser: MocaSqlParser, ctx: Function_callContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING_AGG(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING_AGG, 0);
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, i);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public WITHIN(): TerminalNode {
		return this.getToken(MocaSqlParser.WITHIN, 0);
	}
	public GROUP(): TerminalNode {
		return this.getToken(MocaSqlParser.GROUP, 0);
	}
	public order_by_clause(): Order_by_clauseContext {
		return this.getTypedRuleContext(Order_by_clauseContext, 0) as Order_by_clauseContext;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSTRINGAGG) {
	 		listener.enterSTRINGAGG(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSTRINGAGG) {
	 		listener.exitSTRINGAGG(this);
		}
	}
}


export class Xml_data_type_methodsContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value_method(): Value_methodContext {
		return this.getTypedRuleContext(Value_methodContext, 0) as Value_methodContext;
	}
	public query_method(): Query_methodContext {
		return this.getTypedRuleContext(Query_methodContext, 0) as Query_methodContext;
	}
	public exist_method(): Exist_methodContext {
		return this.getTypedRuleContext(Exist_methodContext, 0) as Exist_methodContext;
	}
	public modify_method(): Modify_methodContext {
		return this.getTypedRuleContext(Modify_methodContext, 0) as Modify_methodContext;
	}
	public nodes_method(): Nodes_methodContext {
		return this.getTypedRuleContext(Nodes_methodContext, 0) as Nodes_methodContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_xml_data_type_methods;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterXml_data_type_methods) {
	 		listener.enterXml_data_type_methods(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitXml_data_type_methods) {
	 		listener.exitXml_data_type_methods(this);
		}
	}
}


export class Value_methodContext extends ParserRuleContext {
	public _xquery!: Token;
	public _sqltype!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, i);
	}
	public VALUE(): TerminalNode {
		return this.getToken(MocaSqlParser.VALUE, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, i);
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(MocaSqlParser.ID, 0);
	}
	public EVENTDATA(): TerminalNode {
		return this.getToken(MocaSqlParser.EVENTDATA, 0);
	}
	public query_method(): Query_methodContext {
		return this.getTypedRuleContext(Query_methodContext, 0) as Query_methodContext;
	}
	public ROW(): TerminalNode {
		return this.getToken(MocaSqlParser.ROW, 0);
	}
	public PARAM_NODE(): TerminalNode {
		return this.getToken(MocaSqlParser.PARAM_NODE, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_value_method;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterValue_method) {
	 		listener.enterValue_method(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitValue_method) {
	 		listener.exitValue_method(this);
		}
	}
}


export class Query_methodContext extends ParserRuleContext {
	public _xquery!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, i);
	}
	public QUERY(): TerminalNode {
		return this.getToken(MocaSqlParser.QUERY, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, 0);
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(MocaSqlParser.ID, 0);
	}
	public full_table_name(): Full_table_nameContext {
		return this.getTypedRuleContext(Full_table_nameContext, 0) as Full_table_nameContext;
	}
	public ROW(): TerminalNode {
		return this.getToken(MocaSqlParser.ROW, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_query_method;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterQuery_method) {
	 		listener.enterQuery_method(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitQuery_method) {
	 		listener.exitQuery_method(this);
		}
	}
}


export class Exist_methodContext extends ParserRuleContext {
	public _xquery!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public EXIST(): TerminalNode {
		return this.getToken(MocaSqlParser.EXIST, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(MocaSqlParser.ID, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_exist_method;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterExist_method) {
	 		listener.enterExist_method(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitExist_method) {
	 		listener.exitExist_method(this);
		}
	}
}


export class Modify_methodContext extends ParserRuleContext {
	public _xml_dml!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public MODIFY(): TerminalNode {
		return this.getToken(MocaSqlParser.MODIFY, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(MocaSqlParser.ID, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_modify_method;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterModify_method) {
	 		listener.enterModify_method(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitModify_method) {
	 		listener.exitModify_method(this);
		}
	}
}


export class Nodes_methodContext extends ParserRuleContext {
	public _xquery!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public NODES(): TerminalNode {
		return this.getToken(MocaSqlParser.NODES, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(MocaSqlParser.ID, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_nodes_method;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterNodes_method) {
	 		listener.enterNodes_method(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitNodes_method) {
	 		listener.exitNodes_method(this);
		}
	}
}


export class Switch_sectionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN(): TerminalNode {
		return this.getToken(MocaSqlParser.WHEN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(MocaSqlParser.THEN, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_switch_section;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSwitch_section) {
	 		listener.enterSwitch_section(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSwitch_section) {
	 		listener.exitSwitch_section(this);
		}
	}
}


export class Switch_search_condition_sectionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN(): TerminalNode {
		return this.getToken(MocaSqlParser.WHEN, 0);
	}
	public search_condition(): Search_conditionContext {
		return this.getTypedRuleContext(Search_conditionContext, 0) as Search_conditionContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(MocaSqlParser.THEN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_switch_search_condition_section;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSwitch_search_condition_section) {
	 		listener.enterSwitch_search_condition_section(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSwitch_search_condition_section) {
	 		listener.exitSwitch_search_condition_section(this);
		}
	}
}


export class As_column_aliasContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public column_alias(): Column_aliasContext {
		return this.getTypedRuleContext(Column_aliasContext, 0) as Column_aliasContext;
	}
	public AS(): TerminalNode {
		return this.getToken(MocaSqlParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_as_column_alias;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterAs_column_alias) {
	 		listener.enterAs_column_alias(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitAs_column_alias) {
	 		listener.exitAs_column_alias(this);
		}
	}
}


export class As_table_aliasContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_alias(): Table_aliasContext {
		return this.getTypedRuleContext(Table_aliasContext, 0) as Table_aliasContext;
	}
	public AS(): TerminalNode {
		return this.getToken(MocaSqlParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_as_table_alias;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterAs_table_alias) {
	 		listener.enterAs_table_alias(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitAs_table_alias) {
	 		listener.exitAs_table_alias(this);
		}
	}
}


export class Table_aliasContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public with_table_hints(): With_table_hintsContext {
		return this.getTypedRuleContext(With_table_hintsContext, 0) as With_table_hintsContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_table_alias;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTable_alias) {
	 		listener.enterTable_alias(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTable_alias) {
	 		listener.exitTable_alias(this);
		}
	}
}


export class With_table_hintsContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public table_hint_list(): Table_hintContext[] {
		return this.getTypedRuleContexts(Table_hintContext) as Table_hintContext[];
	}
	public table_hint(i: number): Table_hintContext {
		return this.getTypedRuleContext(Table_hintContext, i) as Table_hintContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(MocaSqlParser.WITH, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_with_table_hints;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterWith_table_hints) {
	 		listener.enterWith_table_hints(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitWith_table_hints) {
	 		listener.exitWith_table_hints(this);
		}
	}
}


export class Insert_with_table_hintsContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(MocaSqlParser.WITH, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public table_hint_list(): Table_hintContext[] {
		return this.getTypedRuleContexts(Table_hintContext) as Table_hintContext[];
	}
	public table_hint(i: number): Table_hintContext {
		return this.getTypedRuleContext(Table_hintContext, i) as Table_hintContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_insert_with_table_hints;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterInsert_with_table_hints) {
	 		listener.enterInsert_with_table_hints(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitInsert_with_table_hints) {
	 		listener.exitInsert_with_table_hints(this);
		}
	}
}


export class Table_hintContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INDEX(): TerminalNode {
		return this.getToken(MocaSqlParser.INDEX, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.EQUAL, 0);
	}
	public index_value_list(): Index_valueContext[] {
		return this.getTypedRuleContexts(Index_valueContext) as Index_valueContext[];
	}
	public index_value(i: number): Index_valueContext {
		return this.getTypedRuleContext(Index_valueContext, i) as Index_valueContext;
	}
	public FORCESEEK(): TerminalNode {
		return this.getToken(MocaSqlParser.FORCESEEK, 0);
	}
	public SERIALIZABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.SERIALIZABLE, 0);
	}
	public SNAPSHOT(): TerminalNode {
		return this.getToken(MocaSqlParser.SNAPSHOT, 0);
	}
	public SPATIAL_WINDOW_MAX_CELLS(): TerminalNode {
		return this.getToken(MocaSqlParser.SPATIAL_WINDOW_MAX_CELLS, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, 0);
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.ID, i);
	}
	public NOEXPAND(): TerminalNode {
		return this.getToken(MocaSqlParser.NOEXPAND, 0);
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, i);
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_table_hint;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTable_hint) {
	 		listener.enterTable_hint(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTable_hint) {
	 		listener.exitTable_hint(this);
		}
	}
}


export class Index_valueContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_index_value;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterIndex_value) {
	 		listener.enterIndex_value(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitIndex_value) {
	 		listener.exitIndex_value(this);
		}
	}
}


export class Column_alias_listContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public column_alias_list(): Column_aliasContext[] {
		return this.getTypedRuleContexts(Column_aliasContext) as Column_aliasContext[];
	}
	public column_alias(i: number): Column_aliasContext {
		return this.getTypedRuleContext(Column_aliasContext, i) as Column_aliasContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_column_alias_list;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterColumn_alias_list) {
	 		listener.enterColumn_alias_list(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitColumn_alias_list) {
	 		listener.exitColumn_alias_list(this);
		}
	}
}


export class Column_aliasContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_column_alias;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterColumn_alias) {
	 		listener.enterColumn_alias(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitColumn_alias) {
	 		listener.exitColumn_alias(this);
		}
	}
}


export class Table_value_constructorContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VALUES(): TerminalNode {
		return this.getToken(MocaSqlParser.VALUES, 0);
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, i);
	}
	public expression_list_list(): Expression_listContext[] {
		return this.getTypedRuleContexts(Expression_listContext) as Expression_listContext[];
	}
	public expression_list(i: number): Expression_listContext {
		return this.getTypedRuleContext(Expression_listContext, i) as Expression_listContext;
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_table_value_constructor;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTable_value_constructor) {
	 		listener.enterTable_value_constructor(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTable_value_constructor) {
	 		listener.exitTable_value_constructor(this);
		}
	}
}


export class Expression_listContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_expression_list;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterExpression_list) {
	 		listener.enterExpression_list(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitExpression_list) {
	 		listener.exitExpression_list(this);
		}
	}
}


export class Ranking_windowed_functionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public over_clause(): Over_clauseContext {
		return this.getTypedRuleContext(Over_clauseContext, 0) as Over_clauseContext;
	}
	public RANK(): TerminalNode {
		return this.getToken(MocaSqlParser.RANK, 0);
	}
	public DENSE_RANK(): TerminalNode {
		return this.getToken(MocaSqlParser.DENSE_RANK, 0);
	}
	public ROW_NUMBER(): TerminalNode {
		return this.getToken(MocaSqlParser.ROW_NUMBER, 0);
	}
	public NTILE(): TerminalNode {
		return this.getToken(MocaSqlParser.NTILE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_ranking_windowed_function;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterRanking_windowed_function) {
	 		listener.enterRanking_windowed_function(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitRanking_windowed_function) {
	 		listener.exitRanking_windowed_function(this);
		}
	}
}


export class Aggregate_windowed_functionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public all_distinct_expression(): All_distinct_expressionContext {
		return this.getTypedRuleContext(All_distinct_expressionContext, 0) as All_distinct_expressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public AVG(): TerminalNode {
		return this.getToken(MocaSqlParser.AVG, 0);
	}
	public MAX(): TerminalNode {
		return this.getToken(MocaSqlParser.MAX, 0);
	}
	public MIN(): TerminalNode {
		return this.getToken(MocaSqlParser.MIN, 0);
	}
	public SUM(): TerminalNode {
		return this.getToken(MocaSqlParser.SUM, 0);
	}
	public STDEV(): TerminalNode {
		return this.getToken(MocaSqlParser.STDEV, 0);
	}
	public STDEVP(): TerminalNode {
		return this.getToken(MocaSqlParser.STDEVP, 0);
	}
	public VAR(): TerminalNode {
		return this.getToken(MocaSqlParser.VAR, 0);
	}
	public VARP(): TerminalNode {
		return this.getToken(MocaSqlParser.VARP, 0);
	}
	public over_clause(): Over_clauseContext {
		return this.getTypedRuleContext(Over_clauseContext, 0) as Over_clauseContext;
	}
	public COUNT(): TerminalNode {
		return this.getToken(MocaSqlParser.COUNT, 0);
	}
	public COUNT_BIG(): TerminalNode {
		return this.getToken(MocaSqlParser.COUNT_BIG, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(MocaSqlParser.STAR, 0);
	}
	public CHECKSUM_AGG(): TerminalNode {
		return this.getToken(MocaSqlParser.CHECKSUM_AGG, 0);
	}
	public GROUPING(): TerminalNode {
		return this.getToken(MocaSqlParser.GROUPING, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public GROUPING_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.GROUPING_ID, 0);
	}
	public expression_list(): Expression_listContext {
		return this.getTypedRuleContext(Expression_listContext, 0) as Expression_listContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_aggregate_windowed_function;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterAggregate_windowed_function) {
	 		listener.enterAggregate_windowed_function(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitAggregate_windowed_function) {
	 		listener.exitAggregate_windowed_function(this);
		}
	}
}


export class Analytic_windowed_functionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public over_clause(): Over_clauseContext {
		return this.getTypedRuleContext(Over_clauseContext, 0) as Over_clauseContext;
	}
	public FIRST_VALUE(): TerminalNode {
		return this.getToken(MocaSqlParser.FIRST_VALUE, 0);
	}
	public LAST_VALUE(): TerminalNode {
		return this.getToken(MocaSqlParser.LAST_VALUE, 0);
	}
	public LAG(): TerminalNode {
		return this.getToken(MocaSqlParser.LAG, 0);
	}
	public LEAD(): TerminalNode {
		return this.getToken(MocaSqlParser.LEAD, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_analytic_windowed_function;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterAnalytic_windowed_function) {
	 		listener.enterAnalytic_windowed_function(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitAnalytic_windowed_function) {
	 		listener.exitAnalytic_windowed_function(this);
		}
	}
}


export class All_distinct_expressionContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public ALL(): TerminalNode {
		return this.getToken(MocaSqlParser.ALL, 0);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(MocaSqlParser.DISTINCT, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_all_distinct_expression;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterAll_distinct_expression) {
	 		listener.enterAll_distinct_expression(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitAll_distinct_expression) {
	 		listener.exitAll_distinct_expression(this);
		}
	}
}


export class Over_clauseContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OVER(): TerminalNode {
		return this.getToken(MocaSqlParser.OVER, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public PARTITION(): TerminalNode {
		return this.getToken(MocaSqlParser.PARTITION, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(MocaSqlParser.BY, 0);
	}
	public expression_list(): Expression_listContext {
		return this.getTypedRuleContext(Expression_listContext, 0) as Expression_listContext;
	}
	public order_by_clause(): Order_by_clauseContext {
		return this.getTypedRuleContext(Order_by_clauseContext, 0) as Order_by_clauseContext;
	}
	public row_or_range_clause(): Row_or_range_clauseContext {
		return this.getTypedRuleContext(Row_or_range_clauseContext, 0) as Row_or_range_clauseContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_over_clause;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOver_clause) {
	 		listener.enterOver_clause(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOver_clause) {
	 		listener.exitOver_clause(this);
		}
	}
}


export class Row_or_range_clauseContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public window_frame_extent(): Window_frame_extentContext {
		return this.getTypedRuleContext(Window_frame_extentContext, 0) as Window_frame_extentContext;
	}
	public ROWS(): TerminalNode {
		return this.getToken(MocaSqlParser.ROWS, 0);
	}
	public RANGE(): TerminalNode {
		return this.getToken(MocaSqlParser.RANGE, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_row_or_range_clause;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterRow_or_range_clause) {
	 		listener.enterRow_or_range_clause(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitRow_or_range_clause) {
	 		listener.exitRow_or_range_clause(this);
		}
	}
}


export class Window_frame_extentContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public window_frame_preceding(): Window_frame_precedingContext {
		return this.getTypedRuleContext(Window_frame_precedingContext, 0) as Window_frame_precedingContext;
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(MocaSqlParser.BETWEEN, 0);
	}
	public window_frame_bound_list(): Window_frame_boundContext[] {
		return this.getTypedRuleContexts(Window_frame_boundContext) as Window_frame_boundContext[];
	}
	public window_frame_bound(i: number): Window_frame_boundContext {
		return this.getTypedRuleContext(Window_frame_boundContext, i) as Window_frame_boundContext;
	}
	public AND(): TerminalNode {
		return this.getToken(MocaSqlParser.AND, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_window_frame_extent;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterWindow_frame_extent) {
	 		listener.enterWindow_frame_extent(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitWindow_frame_extent) {
	 		listener.exitWindow_frame_extent(this);
		}
	}
}


export class Window_frame_boundContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public window_frame_preceding(): Window_frame_precedingContext {
		return this.getTypedRuleContext(Window_frame_precedingContext, 0) as Window_frame_precedingContext;
	}
	public window_frame_following(): Window_frame_followingContext {
		return this.getTypedRuleContext(Window_frame_followingContext, 0) as Window_frame_followingContext;
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_window_frame_bound;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterWindow_frame_bound) {
	 		listener.enterWindow_frame_bound(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitWindow_frame_bound) {
	 		listener.exitWindow_frame_bound(this);
		}
	}
}


export class Window_frame_precedingContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNBOUNDED(): TerminalNode {
		return this.getToken(MocaSqlParser.UNBOUNDED, 0);
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(MocaSqlParser.PRECEDING, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(MocaSqlParser.CURRENT, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(MocaSqlParser.ROW, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_window_frame_preceding;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterWindow_frame_preceding) {
	 		listener.enterWindow_frame_preceding(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitWindow_frame_preceding) {
	 		listener.exitWindow_frame_preceding(this);
		}
	}
}


export class Window_frame_followingContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNBOUNDED(): TerminalNode {
		return this.getToken(MocaSqlParser.UNBOUNDED, 0);
	}
	public FOLLOWING(): TerminalNode {
		return this.getToken(MocaSqlParser.FOLLOWING, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_window_frame_following;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterWindow_frame_following) {
	 		listener.enterWindow_frame_following(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitWindow_frame_following) {
	 		listener.exitWindow_frame_following(this);
		}
	}
}


export class Full_table_nameContext extends ParserRuleContext {
	public _server!: IdContext;
	public _database!: IdContext;
	public _schema!: IdContext;
	public _table!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_full_table_name;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterFull_table_name) {
	 		listener.enterFull_table_name(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitFull_table_name) {
	 		listener.exitFull_table_name(this);
		}
	}
}


export class Table_nameContext extends ParserRuleContext {
	public _database!: IdContext;
	public _schema!: IdContext;
	public _table!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, i);
	}
	public BLOCKING_HIERARCHY(): TerminalNode {
		return this.getToken(MocaSqlParser.BLOCKING_HIERARCHY, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_table_name;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterTable_name) {
	 		listener.enterTable_name(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitTable_name) {
	 		listener.exitTable_name(this);
		}
	}
}


export class Simple_nameContext extends ParserRuleContext {
	public _schema!: IdContext;
	public _name!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_simple_name;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSimple_name) {
	 		listener.enterSimple_name(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSimple_name) {
	 		listener.exitSimple_name(this);
		}
	}
}


export class Func_proc_name_schemaContext extends ParserRuleContext {
	public _schema!: IdContext;
	public _procedure!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_func_proc_name_schema;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterFunc_proc_name_schema) {
	 		listener.enterFunc_proc_name_schema(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitFunc_proc_name_schema) {
	 		listener.exitFunc_proc_name_schema(this);
		}
	}
}


export class Func_proc_name_database_schemaContext extends ParserRuleContext {
	public _database!: IdContext;
	public _schema!: IdContext;
	public _procedure!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public func_proc_name_schema(): Func_proc_name_schemaContext {
		return this.getTypedRuleContext(Func_proc_name_schemaContext, 0) as Func_proc_name_schemaContext;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_func_proc_name_database_schema;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterFunc_proc_name_database_schema) {
	 		listener.enterFunc_proc_name_database_schema(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitFunc_proc_name_database_schema) {
	 		listener.exitFunc_proc_name_database_schema(this);
		}
	}
}


export class Func_proc_name_server_database_schemaContext extends ParserRuleContext {
	public _server!: IdContext;
	public _database!: IdContext;
	public _schema!: IdContext;
	public _procedure!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public func_proc_name_database_schema(): Func_proc_name_database_schemaContext {
		return this.getTypedRuleContext(Func_proc_name_database_schemaContext, 0) as Func_proc_name_database_schemaContext;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_func_proc_name_server_database_schema;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterFunc_proc_name_server_database_schema) {
	 		listener.enterFunc_proc_name_server_database_schema(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitFunc_proc_name_server_database_schema) {
	 		listener.exitFunc_proc_name_server_database_schema(this);
		}
	}
}


export class Ddl_objectContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public full_table_name(): Full_table_nameContext {
		return this.getTypedRuleContext(Full_table_nameContext, 0) as Full_table_nameContext;
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_ddl_object;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterDdl_object) {
	 		listener.enterDdl_object(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitDdl_object) {
	 		listener.exitDdl_object(this);
		}
	}
}


export class Full_column_nameContext extends ParserRuleContext {
	public _column_name!: IdContext;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOT, 0);
	}
	public COMPATIBILITY_LEVEL(): TerminalNode {
		return this.getToken(MocaSqlParser.COMPATIBILITY_LEVEL, 0);
	}
	public STATUS(): TerminalNode {
		return this.getToken(MocaSqlParser.STATUS, 0);
	}
	public QUOTED_IDENTIFIER(): TerminalNode {
		return this.getToken(MocaSqlParser.QUOTED_IDENTIFIER, 0);
	}
	public ARITHABORT(): TerminalNode {
		return this.getToken(MocaSqlParser.ARITHABORT, 0);
	}
	public ANSI_WARNINGS(): TerminalNode {
		return this.getToken(MocaSqlParser.ANSI_WARNINGS, 0);
	}
	public ANSI_PADDING(): TerminalNode {
		return this.getToken(MocaSqlParser.ANSI_PADDING, 0);
	}
	public ANSI_NULLS(): TerminalNode {
		return this.getToken(MocaSqlParser.ANSI_NULLS, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_full_column_name;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterFull_column_name) {
	 		listener.enterFull_column_name(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitFull_column_name) {
	 		listener.exitFull_column_name(this);
		}
	}
}


export class Column_name_list_with_orderContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
	public ASC_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.ASC);
	}
	public ASC(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.ASC, i);
	}
	public DESC_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DESC);
	}
	public DESC(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DESC, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_column_name_list_with_order;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterColumn_name_list_with_order) {
	 		listener.enterColumn_name_list_with_order(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitColumn_name_list_with_order) {
	 		listener.exitColumn_name_list_with_order(this);
		}
	}
}


export class Column_name_listContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_column_name_list;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterColumn_name_list) {
	 		listener.enterColumn_name_list(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitColumn_name_list) {
	 		listener.exitColumn_name_list(this);
		}
	}
}


export class Cursor_nameContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public LOCAL_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL_ID, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_cursor_name;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterCursor_name) {
	 		listener.enterCursor_name(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitCursor_name) {
	 		listener.exitCursor_name(this);
		}
	}
}


export class On_offContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(MocaSqlParser.ON, 0);
	}
	public OFF(): TerminalNode {
		return this.getToken(MocaSqlParser.OFF, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_on_off;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterOn_off) {
	 		listener.enterOn_off(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitOn_off) {
	 		listener.exitOn_off(this);
		}
	}
}


export class ClusteredContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLUSTERED(): TerminalNode {
		return this.getToken(MocaSqlParser.CLUSTERED, 0);
	}
	public NONCLUSTERED(): TerminalNode {
		return this.getToken(MocaSqlParser.NONCLUSTERED, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_clustered;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterClustered) {
	 		listener.enterClustered(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitClustered) {
	 		listener.exitClustered(this);
		}
	}
}


export class Null_notnullContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NULL(): TerminalNode {
		return this.getToken(MocaSqlParser.NULL, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(MocaSqlParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_null_notnull;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterNull_notnull) {
	 		listener.enterNull_notnull(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitNull_notnull) {
	 		listener.exitNull_notnull(this);
		}
	}
}


export class Null_or_defaultContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public null_notnull(): Null_notnullContext {
		return this.getTypedRuleContext(Null_notnullContext, 0) as Null_notnullContext;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(MocaSqlParser.DEFAULT, 0);
	}
	public constant_expression(): Constant_expressionContext {
		return this.getTypedRuleContext(Constant_expressionContext, 0) as Constant_expressionContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(MocaSqlParser.WITH, 0);
	}
	public VALUES(): TerminalNode {
		return this.getToken(MocaSqlParser.VALUES, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_null_or_default;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterNull_or_default) {
	 		listener.enterNull_or_default(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitNull_or_default) {
	 		listener.exitNull_or_default(this);
		}
	}
}


export class Scalar_function_nameContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public func_proc_name_server_database_schema(): Func_proc_name_server_database_schemaContext {
		return this.getTypedRuleContext(Func_proc_name_server_database_schemaContext, 0) as Func_proc_name_server_database_schemaContext;
	}
	public RIGHT(): TerminalNode {
		return this.getToken(MocaSqlParser.RIGHT, 0);
	}
	public LEFT(): TerminalNode {
		return this.getToken(MocaSqlParser.LEFT, 0);
	}
	public BINARY_CHECKSUM(): TerminalNode {
		return this.getToken(MocaSqlParser.BINARY_CHECKSUM, 0);
	}
	public CHECKSUM(): TerminalNode {
		return this.getToken(MocaSqlParser.CHECKSUM, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_scalar_function_name;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterScalar_function_name) {
	 		listener.enterScalar_function_name(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitScalar_function_name) {
	 		listener.exitScalar_function_name(this);
		}
	}
}


export class Data_typeContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public IDENTITY(): TerminalNode {
		return this.getToken(MocaSqlParser.IDENTITY, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(MocaSqlParser.RR_BRACKET, 0);
	}
	public DECIMAL_list(): TerminalNode[] {
	    	return this.getTokens(MocaSqlParser.DECIMAL);
	}
	public DECIMAL(i: number): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, i);
	}
	public MAX(): TerminalNode {
		return this.getToken(MocaSqlParser.MAX, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMA, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(MocaSqlParser.DOUBLE, 0);
	}
	public PRECISION(): TerminalNode {
		return this.getToken(MocaSqlParser.PRECISION, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(MocaSqlParser.INT, 0);
	}
	public TINYINT(): TerminalNode {
		return this.getToken(MocaSqlParser.TINYINT, 0);
	}
	public SMALLINT(): TerminalNode {
		return this.getToken(MocaSqlParser.SMALLINT, 0);
	}
	public BIGINT(): TerminalNode {
		return this.getToken(MocaSqlParser.BIGINT, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_data_type;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterData_type) {
	 		listener.enterData_type(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitData_type) {
	 		listener.exitData_type(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public _dollar!: Token;
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING, 0);
	}
	public BINARY(): TerminalNode {
		return this.getToken(MocaSqlParser.BINARY, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(MocaSqlParser.DECIMAL, 0);
	}
	public sign(): SignContext {
		return this.getTypedRuleContext(SignContext, 0) as SignContext;
	}
	public REAL(): TerminalNode {
		return this.getToken(MocaSqlParser.REAL, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(MocaSqlParser.FLOAT, 0);
	}
	public DOLLAR(): TerminalNode {
		return this.getToken(MocaSqlParser.DOLLAR, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_constant;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterConstant) {
	 		listener.enterConstant(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitConstant) {
	 		listener.exitConstant(this);
		}
	}
}


export class SignContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLUS(): TerminalNode {
		return this.getToken(MocaSqlParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(MocaSqlParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_sign;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSign) {
	 		listener.enterSign(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSign) {
	 		listener.exitSign(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_id(): Simple_idContext {
		return this.getTypedRuleContext(Simple_idContext, 0) as Simple_idContext;
	}
	public DOUBLE_QUOTE_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.DOUBLE_QUOTE_ID, 0);
	}
	public SQUARE_BRACKET_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.SQUARE_BRACKET_ID, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_id;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterId) {
	 		listener.enterId(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitId) {
	 		listener.exitId(this);
		}
	}
}


export class Simple_idContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MocaSqlParser.ID, 0);
	}
	public ABSOLUTE(): TerminalNode {
		return this.getToken(MocaSqlParser.ABSOLUTE, 0);
	}
	public ACCENT_SENSITIVITY(): TerminalNode {
		return this.getToken(MocaSqlParser.ACCENT_SENSITIVITY, 0);
	}
	public ACTION(): TerminalNode {
		return this.getToken(MocaSqlParser.ACTION, 0);
	}
	public ACTIVATION(): TerminalNode {
		return this.getToken(MocaSqlParser.ACTIVATION, 0);
	}
	public ACTIVE(): TerminalNode {
		return this.getToken(MocaSqlParser.ACTIVE, 0);
	}
	public ADDRESS(): TerminalNode {
		return this.getToken(MocaSqlParser.ADDRESS, 0);
	}
	public AES_128(): TerminalNode {
		return this.getToken(MocaSqlParser.AES_128, 0);
	}
	public AES_192(): TerminalNode {
		return this.getToken(MocaSqlParser.AES_192, 0);
	}
	public AES_256(): TerminalNode {
		return this.getToken(MocaSqlParser.AES_256, 0);
	}
	public AFFINITY(): TerminalNode {
		return this.getToken(MocaSqlParser.AFFINITY, 0);
	}
	public AFTER(): TerminalNode {
		return this.getToken(MocaSqlParser.AFTER, 0);
	}
	public AGGREGATE(): TerminalNode {
		return this.getToken(MocaSqlParser.AGGREGATE, 0);
	}
	public ALGORITHM(): TerminalNode {
		return this.getToken(MocaSqlParser.ALGORITHM, 0);
	}
	public ALLOW_ENCRYPTED_VALUE_MODIFICATIONS(): TerminalNode {
		return this.getToken(MocaSqlParser.ALLOW_ENCRYPTED_VALUE_MODIFICATIONS, 0);
	}
	public ALLOW_SNAPSHOT_ISOLATION(): TerminalNode {
		return this.getToken(MocaSqlParser.ALLOW_SNAPSHOT_ISOLATION, 0);
	}
	public ALLOWED(): TerminalNode {
		return this.getToken(MocaSqlParser.ALLOWED, 0);
	}
	public ANSI_NULL_DEFAULT(): TerminalNode {
		return this.getToken(MocaSqlParser.ANSI_NULL_DEFAULT, 0);
	}
	public ANSI_NULLS(): TerminalNode {
		return this.getToken(MocaSqlParser.ANSI_NULLS, 0);
	}
	public ANSI_PADDING(): TerminalNode {
		return this.getToken(MocaSqlParser.ANSI_PADDING, 0);
	}
	public ANSI_WARNINGS(): TerminalNode {
		return this.getToken(MocaSqlParser.ANSI_WARNINGS, 0);
	}
	public APPLICATION_LOG(): TerminalNode {
		return this.getToken(MocaSqlParser.APPLICATION_LOG, 0);
	}
	public APPLY(): TerminalNode {
		return this.getToken(MocaSqlParser.APPLY, 0);
	}
	public ARITHABORT(): TerminalNode {
		return this.getToken(MocaSqlParser.ARITHABORT, 0);
	}
	public ASSEMBLY(): TerminalNode {
		return this.getToken(MocaSqlParser.ASSEMBLY, 0);
	}
	public AUDIT(): TerminalNode {
		return this.getToken(MocaSqlParser.AUDIT, 0);
	}
	public AUDIT_GUID(): TerminalNode {
		return this.getToken(MocaSqlParser.AUDIT_GUID, 0);
	}
	public AUTO(): TerminalNode {
		return this.getToken(MocaSqlParser.AUTO, 0);
	}
	public AUTO_CLEANUP(): TerminalNode {
		return this.getToken(MocaSqlParser.AUTO_CLEANUP, 0);
	}
	public AUTO_CLOSE(): TerminalNode {
		return this.getToken(MocaSqlParser.AUTO_CLOSE, 0);
	}
	public AUTO_CREATE_STATISTICS(): TerminalNode {
		return this.getToken(MocaSqlParser.AUTO_CREATE_STATISTICS, 0);
	}
	public AUTO_SHRINK(): TerminalNode {
		return this.getToken(MocaSqlParser.AUTO_SHRINK, 0);
	}
	public AUTO_UPDATE_STATISTICS(): TerminalNode {
		return this.getToken(MocaSqlParser.AUTO_UPDATE_STATISTICS, 0);
	}
	public AUTO_UPDATE_STATISTICS_ASYNC(): TerminalNode {
		return this.getToken(MocaSqlParser.AUTO_UPDATE_STATISTICS_ASYNC, 0);
	}
	public AVAILABILITY(): TerminalNode {
		return this.getToken(MocaSqlParser.AVAILABILITY, 0);
	}
	public AVG(): TerminalNode {
		return this.getToken(MocaSqlParser.AVG, 0);
	}
	public BACKUP_PRIORITY(): TerminalNode {
		return this.getToken(MocaSqlParser.BACKUP_PRIORITY, 0);
	}
	public BEGIN_DIALOG(): TerminalNode {
		return this.getToken(MocaSqlParser.BEGIN_DIALOG, 0);
	}
	public BIGINT(): TerminalNode {
		return this.getToken(MocaSqlParser.BIGINT, 0);
	}
	public BINARY_BASE64(): TerminalNode {
		return this.getToken(MocaSqlParser.BINARY_BASE64, 0);
	}
	public BINARY_CHECKSUM(): TerminalNode {
		return this.getToken(MocaSqlParser.BINARY_CHECKSUM, 0);
	}
	public BINDING(): TerminalNode {
		return this.getToken(MocaSqlParser.BINDING, 0);
	}
	public BLOB_STORAGE(): TerminalNode {
		return this.getToken(MocaSqlParser.BLOB_STORAGE, 0);
	}
	public BROKER(): TerminalNode {
		return this.getToken(MocaSqlParser.BROKER, 0);
	}
	public BROKER_INSTANCE(): TerminalNode {
		return this.getToken(MocaSqlParser.BROKER_INSTANCE, 0);
	}
	public BULK_LOGGED(): TerminalNode {
		return this.getToken(MocaSqlParser.BULK_LOGGED, 0);
	}
	public CALLED(): TerminalNode {
		return this.getToken(MocaSqlParser.CALLED, 0);
	}
	public CALLER(): TerminalNode {
		return this.getToken(MocaSqlParser.CALLER, 0);
	}
	public CAP_CPU_PERCENT(): TerminalNode {
		return this.getToken(MocaSqlParser.CAP_CPU_PERCENT, 0);
	}
	public CAST(): TerminalNode {
		return this.getToken(MocaSqlParser.CAST, 0);
	}
	public CATALOG(): TerminalNode {
		return this.getToken(MocaSqlParser.CATALOG, 0);
	}
	public CATCH(): TerminalNode {
		return this.getToken(MocaSqlParser.CATCH, 0);
	}
	public CHANGE_RETENTION(): TerminalNode {
		return this.getToken(MocaSqlParser.CHANGE_RETENTION, 0);
	}
	public CHANGE_TRACKING(): TerminalNode {
		return this.getToken(MocaSqlParser.CHANGE_TRACKING, 0);
	}
	public CHECKSUM(): TerminalNode {
		return this.getToken(MocaSqlParser.CHECKSUM, 0);
	}
	public CHECKSUM_AGG(): TerminalNode {
		return this.getToken(MocaSqlParser.CHECKSUM_AGG, 0);
	}
	public CLEANUP(): TerminalNode {
		return this.getToken(MocaSqlParser.CLEANUP, 0);
	}
	public COLLECTION(): TerminalNode {
		return this.getToken(MocaSqlParser.COLLECTION, 0);
	}
	public COLUMN_MASTER_KEY(): TerminalNode {
		return this.getToken(MocaSqlParser.COLUMN_MASTER_KEY, 0);
	}
	public COMMITTED(): TerminalNode {
		return this.getToken(MocaSqlParser.COMMITTED, 0);
	}
	public COMPATIBILITY_LEVEL(): TerminalNode {
		return this.getToken(MocaSqlParser.COMPATIBILITY_LEVEL, 0);
	}
	public CONCAT(): TerminalNode {
		return this.getToken(MocaSqlParser.CONCAT, 0);
	}
	public CONCAT_NULL_YIELDS_NULL(): TerminalNode {
		return this.getToken(MocaSqlParser.CONCAT_NULL_YIELDS_NULL, 0);
	}
	public CONTENT(): TerminalNode {
		return this.getToken(MocaSqlParser.CONTENT, 0);
	}
	public CONTROL(): TerminalNode {
		return this.getToken(MocaSqlParser.CONTROL, 0);
	}
	public COOKIE(): TerminalNode {
		return this.getToken(MocaSqlParser.COOKIE, 0);
	}
	public COUNT(): TerminalNode {
		return this.getToken(MocaSqlParser.COUNT, 0);
	}
	public COUNT_BIG(): TerminalNode {
		return this.getToken(MocaSqlParser.COUNT_BIG, 0);
	}
	public COUNTER(): TerminalNode {
		return this.getToken(MocaSqlParser.COUNTER, 0);
	}
	public CPU(): TerminalNode {
		return this.getToken(MocaSqlParser.CPU, 0);
	}
	public CREATE_NEW(): TerminalNode {
		return this.getToken(MocaSqlParser.CREATE_NEW, 0);
	}
	public CREATION_DISPOSITION(): TerminalNode {
		return this.getToken(MocaSqlParser.CREATION_DISPOSITION, 0);
	}
	public CREDENTIAL(): TerminalNode {
		return this.getToken(MocaSqlParser.CREDENTIAL, 0);
	}
	public CRYPTOGRAPHIC(): TerminalNode {
		return this.getToken(MocaSqlParser.CRYPTOGRAPHIC, 0);
	}
	public CURSOR_CLOSE_ON_COMMIT(): TerminalNode {
		return this.getToken(MocaSqlParser.CURSOR_CLOSE_ON_COMMIT, 0);
	}
	public CURSOR_DEFAULT(): TerminalNode {
		return this.getToken(MocaSqlParser.CURSOR_DEFAULT, 0);
	}
	public DATA(): TerminalNode {
		return this.getToken(MocaSqlParser.DATA, 0);
	}
	public DATA_COMPRESSION(): TerminalNode {
		return this.getToken(MocaSqlParser.DATA_COMPRESSION, 0);
	}
	public DATE_CORRELATION_OPTIMIZATION(): TerminalNode {
		return this.getToken(MocaSqlParser.DATE_CORRELATION_OPTIMIZATION, 0);
	}
	public DATEADD(): TerminalNode {
		return this.getToken(MocaSqlParser.DATEADD, 0);
	}
	public DATEDIFF(): TerminalNode {
		return this.getToken(MocaSqlParser.DATEDIFF, 0);
	}
	public DATENAME(): TerminalNode {
		return this.getToken(MocaSqlParser.DATENAME, 0);
	}
	public DATEPART(): TerminalNode {
		return this.getToken(MocaSqlParser.DATEPART, 0);
	}
	public DAYS(): TerminalNode {
		return this.getToken(MocaSqlParser.DAYS, 0);
	}
	public DB_CHAINING(): TerminalNode {
		return this.getToken(MocaSqlParser.DB_CHAINING, 0);
	}
	public DB_FAILOVER(): TerminalNode {
		return this.getToken(MocaSqlParser.DB_FAILOVER, 0);
	}
	public DECRYPTION(): TerminalNode {
		return this.getToken(MocaSqlParser.DECRYPTION, 0);
	}
	public DEFAULT_DOUBLE_QUOTE(): TerminalNode {
		return this.getToken(MocaSqlParser.DEFAULT_DOUBLE_QUOTE, 0);
	}
	public DEFAULT_FULLTEXT_LANGUAGE(): TerminalNode {
		return this.getToken(MocaSqlParser.DEFAULT_FULLTEXT_LANGUAGE, 0);
	}
	public DEFAULT_LANGUAGE(): TerminalNode {
		return this.getToken(MocaSqlParser.DEFAULT_LANGUAGE, 0);
	}
	public DELAY(): TerminalNode {
		return this.getToken(MocaSqlParser.DELAY, 0);
	}
	public DELAYED_DURABILITY(): TerminalNode {
		return this.getToken(MocaSqlParser.DELAYED_DURABILITY, 0);
	}
	public DELETED(): TerminalNode {
		return this.getToken(MocaSqlParser.DELETED, 0);
	}
	public DENSE_RANK(): TerminalNode {
		return this.getToken(MocaSqlParser.DENSE_RANK, 0);
	}
	public DEPENDENTS(): TerminalNode {
		return this.getToken(MocaSqlParser.DEPENDENTS, 0);
	}
	public DES(): TerminalNode {
		return this.getToken(MocaSqlParser.DES, 0);
	}
	public DESCRIPTION(): TerminalNode {
		return this.getToken(MocaSqlParser.DESCRIPTION, 0);
	}
	public DESX(): TerminalNode {
		return this.getToken(MocaSqlParser.DESX, 0);
	}
	public DHCP(): TerminalNode {
		return this.getToken(MocaSqlParser.DHCP, 0);
	}
	public DIALOG(): TerminalNode {
		return this.getToken(MocaSqlParser.DIALOG, 0);
	}
	public DIRECTORY_NAME(): TerminalNode {
		return this.getToken(MocaSqlParser.DIRECTORY_NAME, 0);
	}
	public DISABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.DISABLE, 0);
	}
	public DISABLE_BROKER(): TerminalNode {
		return this.getToken(MocaSqlParser.DISABLE_BROKER, 0);
	}
	public DISABLED(): TerminalNode {
		return this.getToken(MocaSqlParser.DISABLED, 0);
	}
	public DISK_DRIVE(): TerminalNode {
		return this.getToken(MocaSqlParser.DISK_DRIVE, 0);
	}
	public DOCUMENT(): TerminalNode {
		return this.getToken(MocaSqlParser.DOCUMENT, 0);
	}
	public DYNAMIC(): TerminalNode {
		return this.getToken(MocaSqlParser.DYNAMIC, 0);
	}
	public EMERGENCY(): TerminalNode {
		return this.getToken(MocaSqlParser.EMERGENCY, 0);
	}
	public EMPTY(): TerminalNode {
		return this.getToken(MocaSqlParser.EMPTY, 0);
	}
	public ENABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.ENABLE, 0);
	}
	public ENABLE_BROKER(): TerminalNode {
		return this.getToken(MocaSqlParser.ENABLE_BROKER, 0);
	}
	public ENCRYPTED_VALUE(): TerminalNode {
		return this.getToken(MocaSqlParser.ENCRYPTED_VALUE, 0);
	}
	public ENCRYPTION(): TerminalNode {
		return this.getToken(MocaSqlParser.ENCRYPTION, 0);
	}
	public ENDPOINT_URL(): TerminalNode {
		return this.getToken(MocaSqlParser.ENDPOINT_URL, 0);
	}
	public ERROR_BROKER_CONVERSATIONS(): TerminalNode {
		return this.getToken(MocaSqlParser.ERROR_BROKER_CONVERSATIONS, 0);
	}
	public EVENTDATA(): TerminalNode {
		return this.getToken(MocaSqlParser.EVENTDATA, 0);
	}
	public EXCLUSIVE(): TerminalNode {
		return this.getToken(MocaSqlParser.EXCLUSIVE, 0);
	}
	public EXECUTABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.EXECUTABLE, 0);
	}
	public EXIST(): TerminalNode {
		return this.getToken(MocaSqlParser.EXIST, 0);
	}
	public EXPAND(): TerminalNode {
		return this.getToken(MocaSqlParser.EXPAND, 0);
	}
	public EXPIREDATE(): TerminalNode {
		return this.getToken(MocaSqlParser.EXPIREDATE, 0);
	}
	public EXPIRY_DATE(): TerminalNode {
		return this.getToken(MocaSqlParser.EXPIRY_DATE, 0);
	}
	public EXPLICIT(): TerminalNode {
		return this.getToken(MocaSqlParser.EXPLICIT, 0);
	}
	public FAIL_OPERATION(): TerminalNode {
		return this.getToken(MocaSqlParser.FAIL_OPERATION, 0);
	}
	public FAILOVER_MODE(): TerminalNode {
		return this.getToken(MocaSqlParser.FAILOVER_MODE, 0);
	}
	public FAILURE(): TerminalNode {
		return this.getToken(MocaSqlParser.FAILURE, 0);
	}
	public FAILURE_CONDITION_LEVEL(): TerminalNode {
		return this.getToken(MocaSqlParser.FAILURE_CONDITION_LEVEL, 0);
	}
	public FAST(): TerminalNode {
		return this.getToken(MocaSqlParser.FAST, 0);
	}
	public FAST_FORWARD(): TerminalNode {
		return this.getToken(MocaSqlParser.FAST_FORWARD, 0);
	}
	public FILEGROUP(): TerminalNode {
		return this.getToken(MocaSqlParser.FILEGROUP, 0);
	}
	public FILEGROWTH(): TerminalNode {
		return this.getToken(MocaSqlParser.FILEGROWTH, 0);
	}
	public FILENAME(): TerminalNode {
		return this.getToken(MocaSqlParser.FILENAME, 0);
	}
	public FILEPATH(): TerminalNode {
		return this.getToken(MocaSqlParser.FILEPATH, 0);
	}
	public FILESTREAM(): TerminalNode {
		return this.getToken(MocaSqlParser.FILESTREAM, 0);
	}
	public FILLFACTOR(): TerminalNode {
		return this.getToken(MocaSqlParser.FILLFACTOR, 0);
	}
	public FILTER(): TerminalNode {
		return this.getToken(MocaSqlParser.FILTER, 0);
	}
	public FIRST(): TerminalNode {
		return this.getToken(MocaSqlParser.FIRST, 0);
	}
	public FIRST_VALUE(): TerminalNode {
		return this.getToken(MocaSqlParser.FIRST_VALUE, 0);
	}
	public FOLLOWING(): TerminalNode {
		return this.getToken(MocaSqlParser.FOLLOWING, 0);
	}
	public FORCE(): TerminalNode {
		return this.getToken(MocaSqlParser.FORCE, 0);
	}
	public FORCE_FAILOVER_ALLOW_DATA_LOSS(): TerminalNode {
		return this.getToken(MocaSqlParser.FORCE_FAILOVER_ALLOW_DATA_LOSS, 0);
	}
	public FORCED(): TerminalNode {
		return this.getToken(MocaSqlParser.FORCED, 0);
	}
	public FORCESEEK(): TerminalNode {
		return this.getToken(MocaSqlParser.FORCESEEK, 0);
	}
	public FORMAT(): TerminalNode {
		return this.getToken(MocaSqlParser.FORMAT, 0);
	}
	public FORWARD_ONLY(): TerminalNode {
		return this.getToken(MocaSqlParser.FORWARD_ONLY, 0);
	}
	public FULLSCAN(): TerminalNode {
		return this.getToken(MocaSqlParser.FULLSCAN, 0);
	}
	public FULLTEXT(): TerminalNode {
		return this.getToken(MocaSqlParser.FULLTEXT, 0);
	}
	public GB(): TerminalNode {
		return this.getToken(MocaSqlParser.GB, 0);
	}
	public GETDATE(): TerminalNode {
		return this.getToken(MocaSqlParser.GETDATE, 0);
	}
	public GETUTCDATE(): TerminalNode {
		return this.getToken(MocaSqlParser.GETUTCDATE, 0);
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(MocaSqlParser.GLOBAL, 0);
	}
	public GO(): TerminalNode {
		return this.getToken(MocaSqlParser.GO, 0);
	}
	public GROUP_MAX_REQUESTS(): TerminalNode {
		return this.getToken(MocaSqlParser.GROUP_MAX_REQUESTS, 0);
	}
	public GROUPING(): TerminalNode {
		return this.getToken(MocaSqlParser.GROUPING, 0);
	}
	public GROUPING_ID(): TerminalNode {
		return this.getToken(MocaSqlParser.GROUPING_ID, 0);
	}
	public HADR(): TerminalNode {
		return this.getToken(MocaSqlParser.HADR, 0);
	}
	public HASH(): TerminalNode {
		return this.getToken(MocaSqlParser.HASH, 0);
	}
	public HEALTH_CHECK_TIMEOUT(): TerminalNode {
		return this.getToken(MocaSqlParser.HEALTH_CHECK_TIMEOUT, 0);
	}
	public HIGH(): TerminalNode {
		return this.getToken(MocaSqlParser.HIGH, 0);
	}
	public HONOR_BROKER_PRIORITY(): TerminalNode {
		return this.getToken(MocaSqlParser.HONOR_BROKER_PRIORITY, 0);
	}
	public HOURS(): TerminalNode {
		return this.getToken(MocaSqlParser.HOURS, 0);
	}
	public IDENTITY_VALUE(): TerminalNode {
		return this.getToken(MocaSqlParser.IDENTITY_VALUE, 0);
	}
	public IGNORE_NONCLUSTERED_COLUMNSTORE_INDEX(): TerminalNode {
		return this.getToken(MocaSqlParser.IGNORE_NONCLUSTERED_COLUMNSTORE_INDEX, 0);
	}
	public IMMEDIATE(): TerminalNode {
		return this.getToken(MocaSqlParser.IMMEDIATE, 0);
	}
	public IMPERSONATE(): TerminalNode {
		return this.getToken(MocaSqlParser.IMPERSONATE, 0);
	}
	public IMPORTANCE(): TerminalNode {
		return this.getToken(MocaSqlParser.IMPORTANCE, 0);
	}
	public INCREMENTAL(): TerminalNode {
		return this.getToken(MocaSqlParser.INCREMENTAL, 0);
	}
	public INIT(): TerminalNode {
		return this.getToken(MocaSqlParser.INIT, 0);
	}
	public INITIATOR(): TerminalNode {
		return this.getToken(MocaSqlParser.INITIATOR, 0);
	}
	public INPUT(): TerminalNode {
		return this.getToken(MocaSqlParser.INPUT, 0);
	}
	public INSENSITIVE(): TerminalNode {
		return this.getToken(MocaSqlParser.INSENSITIVE, 0);
	}
	public INSERTED(): TerminalNode {
		return this.getToken(MocaSqlParser.INSERTED, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(MocaSqlParser.INT, 0);
	}
	public IP(): TerminalNode {
		return this.getToken(MocaSqlParser.IP, 0);
	}
	public ISOLATION(): TerminalNode {
		return this.getToken(MocaSqlParser.ISOLATION, 0);
	}
	public KB(): TerminalNode {
		return this.getToken(MocaSqlParser.KB, 0);
	}
	public KEEP(): TerminalNode {
		return this.getToken(MocaSqlParser.KEEP, 0);
	}
	public KEEPFIXED(): TerminalNode {
		return this.getToken(MocaSqlParser.KEEPFIXED, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(MocaSqlParser.KEY, 0);
	}
	public KEY_SOURCE(): TerminalNode {
		return this.getToken(MocaSqlParser.KEY_SOURCE, 0);
	}
	public KEYS(): TerminalNode {
		return this.getToken(MocaSqlParser.KEYS, 0);
	}
	public KEYSET(): TerminalNode {
		return this.getToken(MocaSqlParser.KEYSET, 0);
	}
	public LAG(): TerminalNode {
		return this.getToken(MocaSqlParser.LAG, 0);
	}
	public LAST(): TerminalNode {
		return this.getToken(MocaSqlParser.LAST, 0);
	}
	public LAST_VALUE(): TerminalNode {
		return this.getToken(MocaSqlParser.LAST_VALUE, 0);
	}
	public LEAD(): TerminalNode {
		return this.getToken(MocaSqlParser.LEAD, 0);
	}
	public LEVEL(): TerminalNode {
		return this.getToken(MocaSqlParser.LEVEL, 0);
	}
	public LIST(): TerminalNode {
		return this.getToken(MocaSqlParser.LIST, 0);
	}
	public LISTENER(): TerminalNode {
		return this.getToken(MocaSqlParser.LISTENER, 0);
	}
	public LISTENER_URL(): TerminalNode {
		return this.getToken(MocaSqlParser.LISTENER_URL, 0);
	}
	public LOB_COMPACTION(): TerminalNode {
		return this.getToken(MocaSqlParser.LOB_COMPACTION, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCAL, 0);
	}
	public LOCATION(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCATION, 0);
	}
	public LOCK(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCK, 0);
	}
	public LOCK_ESCALATION(): TerminalNode {
		return this.getToken(MocaSqlParser.LOCK_ESCALATION, 0);
	}
	public LOGIN(): TerminalNode {
		return this.getToken(MocaSqlParser.LOGIN, 0);
	}
	public LOOP(): TerminalNode {
		return this.getToken(MocaSqlParser.LOOP, 0);
	}
	public LOW(): TerminalNode {
		return this.getToken(MocaSqlParser.LOW, 0);
	}
	public MANUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.MANUAL, 0);
	}
	public MARK(): TerminalNode {
		return this.getToken(MocaSqlParser.MARK, 0);
	}
	public MASTER(): TerminalNode {
		return this.getToken(MocaSqlParser.MASTER, 0);
	}
	public MATERIALIZED(): TerminalNode {
		return this.getToken(MocaSqlParser.MATERIALIZED, 0);
	}
	public MAX(): TerminalNode {
		return this.getToken(MocaSqlParser.MAX, 0);
	}
	public MAX_CPU_PERCENT(): TerminalNode {
		return this.getToken(MocaSqlParser.MAX_CPU_PERCENT, 0);
	}
	public MAX_DOP(): TerminalNode {
		return this.getToken(MocaSqlParser.MAX_DOP, 0);
	}
	public MAX_FILES(): TerminalNode {
		return this.getToken(MocaSqlParser.MAX_FILES, 0);
	}
	public MAX_IOPS_PER_VOLUME(): TerminalNode {
		return this.getToken(MocaSqlParser.MAX_IOPS_PER_VOLUME, 0);
	}
	public MAX_MEMORY(): TerminalNode {
		return this.getToken(MocaSqlParser.MAX_MEMORY, 0);
	}
	public MAX_MEMORY_PERCENT(): TerminalNode {
		return this.getToken(MocaSqlParser.MAX_MEMORY_PERCENT, 0);
	}
	public MAX_PROCESSES(): TerminalNode {
		return this.getToken(MocaSqlParser.MAX_PROCESSES, 0);
	}
	public MAX_QUEUE_READERS(): TerminalNode {
		return this.getToken(MocaSqlParser.MAX_QUEUE_READERS, 0);
	}
	public MAX_ROLLOVER_FILES(): TerminalNode {
		return this.getToken(MocaSqlParser.MAX_ROLLOVER_FILES, 0);
	}
	public MAXDOP(): TerminalNode {
		return this.getToken(MocaSqlParser.MAXDOP, 0);
	}
	public MAXRECURSION(): TerminalNode {
		return this.getToken(MocaSqlParser.MAXRECURSION, 0);
	}
	public MAXSIZE(): TerminalNode {
		return this.getToken(MocaSqlParser.MAXSIZE, 0);
	}
	public MB(): TerminalNode {
		return this.getToken(MocaSqlParser.MB, 0);
	}
	public MEDIUM(): TerminalNode {
		return this.getToken(MocaSqlParser.MEDIUM, 0);
	}
	public MEMORY_OPTIMIZED_DATA(): TerminalNode {
		return this.getToken(MocaSqlParser.MEMORY_OPTIMIZED_DATA, 0);
	}
	public MESSAGE(): TerminalNode {
		return this.getToken(MocaSqlParser.MESSAGE, 0);
	}
	public MIN(): TerminalNode {
		return this.getToken(MocaSqlParser.MIN, 0);
	}
	public MIN_ACTIVE_ROWVERSION(): TerminalNode {
		return this.getToken(MocaSqlParser.MIN_ACTIVE_ROWVERSION, 0);
	}
	public MIN_CPU_PERCENT(): TerminalNode {
		return this.getToken(MocaSqlParser.MIN_CPU_PERCENT, 0);
	}
	public MIN_IOPS_PER_VOLUME(): TerminalNode {
		return this.getToken(MocaSqlParser.MIN_IOPS_PER_VOLUME, 0);
	}
	public MIN_MEMORY_PERCENT(): TerminalNode {
		return this.getToken(MocaSqlParser.MIN_MEMORY_PERCENT, 0);
	}
	public MINUTES(): TerminalNode {
		return this.getToken(MocaSqlParser.MINUTES, 0);
	}
	public MIRROR_ADDRESS(): TerminalNode {
		return this.getToken(MocaSqlParser.MIRROR_ADDRESS, 0);
	}
	public MIXED_PAGE_ALLOCATION(): TerminalNode {
		return this.getToken(MocaSqlParser.MIXED_PAGE_ALLOCATION, 0);
	}
	public MODE(): TerminalNode {
		return this.getToken(MocaSqlParser.MODE, 0);
	}
	public MODIFY(): TerminalNode {
		return this.getToken(MocaSqlParser.MODIFY, 0);
	}
	public MOVE(): TerminalNode {
		return this.getToken(MocaSqlParser.MOVE, 0);
	}
	public MULTI_USER(): TerminalNode {
		return this.getToken(MocaSqlParser.MULTI_USER, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(MocaSqlParser.NAME, 0);
	}
	public NESTED_TRIGGERS(): TerminalNode {
		return this.getToken(MocaSqlParser.NESTED_TRIGGERS, 0);
	}
	public NEW_ACCOUNT(): TerminalNode {
		return this.getToken(MocaSqlParser.NEW_ACCOUNT, 0);
	}
	public NEW_BROKER(): TerminalNode {
		return this.getToken(MocaSqlParser.NEW_BROKER, 0);
	}
	public NEW_PASSWORD(): TerminalNode {
		return this.getToken(MocaSqlParser.NEW_PASSWORD, 0);
	}
	public NEXT(): TerminalNode {
		return this.getToken(MocaSqlParser.NEXT, 0);
	}
	public NO(): TerminalNode {
		return this.getToken(MocaSqlParser.NO, 0);
	}
	public NO_TRUNCATE(): TerminalNode {
		return this.getToken(MocaSqlParser.NO_TRUNCATE, 0);
	}
	public NO_WAIT(): TerminalNode {
		return this.getToken(MocaSqlParser.NO_WAIT, 0);
	}
	public NOCOUNT(): TerminalNode {
		return this.getToken(MocaSqlParser.NOCOUNT, 0);
	}
	public NODES(): TerminalNode {
		return this.getToken(MocaSqlParser.NODES, 0);
	}
	public NOEXPAND(): TerminalNode {
		return this.getToken(MocaSqlParser.NOEXPAND, 0);
	}
	public NON_TRANSACTED_ACCESS(): TerminalNode {
		return this.getToken(MocaSqlParser.NON_TRANSACTED_ACCESS, 0);
	}
	public NORECOMPUTE(): TerminalNode {
		return this.getToken(MocaSqlParser.NORECOMPUTE, 0);
	}
	public NORECOVERY(): TerminalNode {
		return this.getToken(MocaSqlParser.NORECOVERY, 0);
	}
	public NOWAIT(): TerminalNode {
		return this.getToken(MocaSqlParser.NOWAIT, 0);
	}
	public NTILE(): TerminalNode {
		return this.getToken(MocaSqlParser.NTILE, 0);
	}
	public NUMANODE(): TerminalNode {
		return this.getToken(MocaSqlParser.NUMANODE, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MocaSqlParser.NUMBER, 0);
	}
	public NUMERIC_ROUNDABORT(): TerminalNode {
		return this.getToken(MocaSqlParser.NUMERIC_ROUNDABORT, 0);
	}
	public OBJECT(): TerminalNode {
		return this.getToken(MocaSqlParser.OBJECT, 0);
	}
	public OFFLINE(): TerminalNode {
		return this.getToken(MocaSqlParser.OFFLINE, 0);
	}
	public OFFSET(): TerminalNode {
		return this.getToken(MocaSqlParser.OFFSET, 0);
	}
	public OFFSETS(): TerminalNode {
		return this.getToken(MocaSqlParser.OFFSETS, 0);
	}
	public OLD_ACCOUNT(): TerminalNode {
		return this.getToken(MocaSqlParser.OLD_ACCOUNT, 0);
	}
	public ONLINE(): TerminalNode {
		return this.getToken(MocaSqlParser.ONLINE, 0);
	}
	public ONLY(): TerminalNode {
		return this.getToken(MocaSqlParser.ONLY, 0);
	}
	public OPEN_EXISTING(): TerminalNode {
		return this.getToken(MocaSqlParser.OPEN_EXISTING, 0);
	}
	public OPTIMISTIC(): TerminalNode {
		return this.getToken(MocaSqlParser.OPTIMISTIC, 0);
	}
	public OPTIMIZE(): TerminalNode {
		return this.getToken(MocaSqlParser.OPTIMIZE, 0);
	}
	public OUT(): TerminalNode {
		return this.getToken(MocaSqlParser.OUT, 0);
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(MocaSqlParser.OUTPUT, 0);
	}
	public OWNER(): TerminalNode {
		return this.getToken(MocaSqlParser.OWNER, 0);
	}
	public PAGE(): TerminalNode {
		return this.getToken(MocaSqlParser.PAGE, 0);
	}
	public PAGE_VERIFY(): TerminalNode {
		return this.getToken(MocaSqlParser.PAGE_VERIFY, 0);
	}
	public PARAMETERIZATION(): TerminalNode {
		return this.getToken(MocaSqlParser.PARAMETERIZATION, 0);
	}
	public PARTITION(): TerminalNode {
		return this.getToken(MocaSqlParser.PARTITION, 0);
	}
	public PARTITIONS(): TerminalNode {
		return this.getToken(MocaSqlParser.PARTITIONS, 0);
	}
	public PARTNER(): TerminalNode {
		return this.getToken(MocaSqlParser.PARTNER, 0);
	}
	public PATH(): TerminalNode {
		return this.getToken(MocaSqlParser.PATH, 0);
	}
	public POISON_MESSAGE_HANDLING(): TerminalNode {
		return this.getToken(MocaSqlParser.POISON_MESSAGE_HANDLING, 0);
	}
	public POLICY(): TerminalNode {
		return this.getToken(MocaSqlParser.POLICY, 0);
	}
	public POOL(): TerminalNode {
		return this.getToken(MocaSqlParser.POOL, 0);
	}
	public PORT(): TerminalNode {
		return this.getToken(MocaSqlParser.PORT, 0);
	}
	public PRECEDING(): TerminalNode {
		return this.getToken(MocaSqlParser.PRECEDING, 0);
	}
	public PRECISION(): TerminalNode {
		return this.getToken(MocaSqlParser.PRECISION, 0);
	}
	public PRIMARY_ROLE(): TerminalNode {
		return this.getToken(MocaSqlParser.PRIMARY_ROLE, 0);
	}
	public PRIOR(): TerminalNode {
		return this.getToken(MocaSqlParser.PRIOR, 0);
	}
	public PRIORITY(): TerminalNode {
		return this.getToken(MocaSqlParser.PRIORITY, 0);
	}
	public PRIORITY_LEVEL(): TerminalNode {
		return this.getToken(MocaSqlParser.PRIORITY_LEVEL, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(MocaSqlParser.PRIVATE, 0);
	}
	public PRIVATE_KEY(): TerminalNode {
		return this.getToken(MocaSqlParser.PRIVATE_KEY, 0);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(MocaSqlParser.PRIVILEGES, 0);
	}
	public PROCEDURE_NAME(): TerminalNode {
		return this.getToken(MocaSqlParser.PROCEDURE_NAME, 0);
	}
	public PROPERTY(): TerminalNode {
		return this.getToken(MocaSqlParser.PROPERTY, 0);
	}
	public PROVIDER(): TerminalNode {
		return this.getToken(MocaSqlParser.PROVIDER, 0);
	}
	public PROVIDER_KEY_NAME(): TerminalNode {
		return this.getToken(MocaSqlParser.PROVIDER_KEY_NAME, 0);
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(MocaSqlParser.PUBLIC, 0);
	}
	public QUERY(): TerminalNode {
		return this.getToken(MocaSqlParser.QUERY, 0);
	}
	public QUEUE(): TerminalNode {
		return this.getToken(MocaSqlParser.QUEUE, 0);
	}
	public QUEUE_DELAY(): TerminalNode {
		return this.getToken(MocaSqlParser.QUEUE_DELAY, 0);
	}
	public QUOTED_IDENTIFIER(): TerminalNode {
		return this.getToken(MocaSqlParser.QUOTED_IDENTIFIER, 0);
	}
	public R(): TerminalNode {
		return this.getToken(MocaSqlParser.R, 0);
	}
	public RANGE(): TerminalNode {
		return this.getToken(MocaSqlParser.RANGE, 0);
	}
	public RANK(): TerminalNode {
		return this.getToken(MocaSqlParser.RANK, 0);
	}
	public RAW(): TerminalNode {
		return this.getToken(MocaSqlParser.RAW, 0);
	}
	public RC2(): TerminalNode {
		return this.getToken(MocaSqlParser.RC2, 0);
	}
	public RC4(): TerminalNode {
		return this.getToken(MocaSqlParser.RC4, 0);
	}
	public RC4_128(): TerminalNode {
		return this.getToken(MocaSqlParser.RC4_128, 0);
	}
	public READ_COMMITTED_SNAPSHOT(): TerminalNode {
		return this.getToken(MocaSqlParser.READ_COMMITTED_SNAPSHOT, 0);
	}
	public READ_ONLY(): TerminalNode {
		return this.getToken(MocaSqlParser.READ_ONLY, 0);
	}
	public READ_ONLY_ROUTING_LIST(): TerminalNode {
		return this.getToken(MocaSqlParser.READ_ONLY_ROUTING_LIST, 0);
	}
	public READ_WRITE(): TerminalNode {
		return this.getToken(MocaSqlParser.READ_WRITE, 0);
	}
	public READONLY(): TerminalNode {
		return this.getToken(MocaSqlParser.READONLY, 0);
	}
	public REBUILD(): TerminalNode {
		return this.getToken(MocaSqlParser.REBUILD, 0);
	}
	public RECEIVE(): TerminalNode {
		return this.getToken(MocaSqlParser.RECEIVE, 0);
	}
	public RECOMPILE(): TerminalNode {
		return this.getToken(MocaSqlParser.RECOMPILE, 0);
	}
	public RECOVERY(): TerminalNode {
		return this.getToken(MocaSqlParser.RECOVERY, 0);
	}
	public RECURSIVE_TRIGGERS(): TerminalNode {
		return this.getToken(MocaSqlParser.RECURSIVE_TRIGGERS, 0);
	}
	public RELATIVE(): TerminalNode {
		return this.getToken(MocaSqlParser.RELATIVE, 0);
	}
	public REMOTE(): TerminalNode {
		return this.getToken(MocaSqlParser.REMOTE, 0);
	}
	public REMOTE_SERVICE_NAME(): TerminalNode {
		return this.getToken(MocaSqlParser.REMOTE_SERVICE_NAME, 0);
	}
	public REMOVE(): TerminalNode {
		return this.getToken(MocaSqlParser.REMOVE, 0);
	}
	public REORGANIZE(): TerminalNode {
		return this.getToken(MocaSqlParser.REORGANIZE, 0);
	}
	public REPEATABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.REPEATABLE, 0);
	}
	public REPLICA(): TerminalNode {
		return this.getToken(MocaSqlParser.REPLICA, 0);
	}
	public REQUEST_MAX_CPU_TIME_SEC(): TerminalNode {
		return this.getToken(MocaSqlParser.REQUEST_MAX_CPU_TIME_SEC, 0);
	}
	public REQUEST_MAX_MEMORY_GRANT_PERCENT(): TerminalNode {
		return this.getToken(MocaSqlParser.REQUEST_MAX_MEMORY_GRANT_PERCENT, 0);
	}
	public REQUEST_MEMORY_GRANT_TIMEOUT_SEC(): TerminalNode {
		return this.getToken(MocaSqlParser.REQUEST_MEMORY_GRANT_TIMEOUT_SEC, 0);
	}
	public REQUIRED_SYNCHRONIZED_SECONDARIES_TO_COMMIT(): TerminalNode {
		return this.getToken(MocaSqlParser.REQUIRED_SYNCHRONIZED_SECONDARIES_TO_COMMIT, 0);
	}
	public RESERVE_DISK_SPACE(): TerminalNode {
		return this.getToken(MocaSqlParser.RESERVE_DISK_SPACE, 0);
	}
	public RESOURCE(): TerminalNode {
		return this.getToken(MocaSqlParser.RESOURCE, 0);
	}
	public RESOURCE_MANAGER_LOCATION(): TerminalNode {
		return this.getToken(MocaSqlParser.RESOURCE_MANAGER_LOCATION, 0);
	}
	public RESTRICTED_USER(): TerminalNode {
		return this.getToken(MocaSqlParser.RESTRICTED_USER, 0);
	}
	public RETENTION(): TerminalNode {
		return this.getToken(MocaSqlParser.RETENTION, 0);
	}
	public RETURN(): TerminalNode {
		return this.getToken(MocaSqlParser.RETURN, 0);
	}
	public RETURNS(): TerminalNode {
		return this.getToken(MocaSqlParser.RETURNS, 0);
	}
	public ROBUST(): TerminalNode {
		return this.getToken(MocaSqlParser.ROBUST, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(MocaSqlParser.ROLE, 0);
	}
	public ROOT(): TerminalNode {
		return this.getToken(MocaSqlParser.ROOT, 0);
	}
	public ROUTE(): TerminalNode {
		return this.getToken(MocaSqlParser.ROUTE, 0);
	}
	public ROW(): TerminalNode {
		return this.getToken(MocaSqlParser.ROW, 0);
	}
	public ROW_NUMBER(): TerminalNode {
		return this.getToken(MocaSqlParser.ROW_NUMBER, 0);
	}
	public ROWCOUNT(): TerminalNode {
		return this.getToken(MocaSqlParser.ROWCOUNT, 0);
	}
	public ROWGUID(): TerminalNode {
		return this.getToken(MocaSqlParser.ROWGUID, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(MocaSqlParser.ROWS, 0);
	}
	public SAFETY(): TerminalNode {
		return this.getToken(MocaSqlParser.SAFETY, 0);
	}
	public SAMPLE(): TerminalNode {
		return this.getToken(MocaSqlParser.SAMPLE, 0);
	}
	public SCHEMABINDING(): TerminalNode {
		return this.getToken(MocaSqlParser.SCHEMABINDING, 0);
	}
	public SCOPED(): TerminalNode {
		return this.getToken(MocaSqlParser.SCOPED, 0);
	}
	public SCROLL(): TerminalNode {
		return this.getToken(MocaSqlParser.SCROLL, 0);
	}
	public SCROLL_LOCKS(): TerminalNode {
		return this.getToken(MocaSqlParser.SCROLL_LOCKS, 0);
	}
	public SEARCH(): TerminalNode {
		return this.getToken(MocaSqlParser.SEARCH, 0);
	}
	public SECONDARY(): TerminalNode {
		return this.getToken(MocaSqlParser.SECONDARY, 0);
	}
	public SECONDARY_ONLY(): TerminalNode {
		return this.getToken(MocaSqlParser.SECONDARY_ONLY, 0);
	}
	public SECONDARY_ROLE(): TerminalNode {
		return this.getToken(MocaSqlParser.SECONDARY_ROLE, 0);
	}
	public SECONDS(): TerminalNode {
		return this.getToken(MocaSqlParser.SECONDS, 0);
	}
	public SECRET(): TerminalNode {
		return this.getToken(MocaSqlParser.SECRET, 0);
	}
	public SECURITY(): TerminalNode {
		return this.getToken(MocaSqlParser.SECURITY, 0);
	}
	public SECURITY_LOG(): TerminalNode {
		return this.getToken(MocaSqlParser.SECURITY_LOG, 0);
	}
	public SEEDING_MODE(): TerminalNode {
		return this.getToken(MocaSqlParser.SEEDING_MODE, 0);
	}
	public SELF(): TerminalNode {
		return this.getToken(MocaSqlParser.SELF, 0);
	}
	public SEMI_SENSITIVE(): TerminalNode {
		return this.getToken(MocaSqlParser.SEMI_SENSITIVE, 0);
	}
	public SEND(): TerminalNode {
		return this.getToken(MocaSqlParser.SEND, 0);
	}
	public SENT(): TerminalNode {
		return this.getToken(MocaSqlParser.SENT, 0);
	}
	public SEQUENCE(): TerminalNode {
		return this.getToken(MocaSqlParser.SEQUENCE, 0);
	}
	public SERIALIZABLE(): TerminalNode {
		return this.getToken(MocaSqlParser.SERIALIZABLE, 0);
	}
	public SERVER(): TerminalNode {
		return this.getToken(MocaSqlParser.SERVER, 0);
	}
	public SESSION_TIMEOUT(): TerminalNode {
		return this.getToken(MocaSqlParser.SESSION_TIMEOUT, 0);
	}
	public SETERROR(): TerminalNode {
		return this.getToken(MocaSqlParser.SETERROR, 0);
	}
	public SHARE(): TerminalNode {
		return this.getToken(MocaSqlParser.SHARE, 0);
	}
	public SHOWPLAN(): TerminalNode {
		return this.getToken(MocaSqlParser.SHOWPLAN, 0);
	}
	public SID(): TerminalNode {
		return this.getToken(MocaSqlParser.SID, 0);
	}
	public SIGNATURE(): TerminalNode {
		return this.getToken(MocaSqlParser.SIGNATURE, 0);
	}
	public SIMPLE(): TerminalNode {
		return this.getToken(MocaSqlParser.SIMPLE, 0);
	}
	public SINGLE_USER(): TerminalNode {
		return this.getToken(MocaSqlParser.SINGLE_USER, 0);
	}
	public SIZE(): TerminalNode {
		return this.getToken(MocaSqlParser.SIZE, 0);
	}
	public SMALLINT(): TerminalNode {
		return this.getToken(MocaSqlParser.SMALLINT, 0);
	}
	public SNAPSHOT(): TerminalNode {
		return this.getToken(MocaSqlParser.SNAPSHOT, 0);
	}
	public SOURCE(): TerminalNode {
		return this.getToken(MocaSqlParser.SOURCE, 0);
	}
	public SPATIAL_WINDOW_MAX_CELLS(): TerminalNode {
		return this.getToken(MocaSqlParser.SPATIAL_WINDOW_MAX_CELLS, 0);
	}
	public SPLIT(): TerminalNode {
		return this.getToken(MocaSqlParser.SPLIT, 0);
	}
	public STANDBY(): TerminalNode {
		return this.getToken(MocaSqlParser.STANDBY, 0);
	}
	public START(): TerminalNode {
		return this.getToken(MocaSqlParser.START, 0);
	}
	public START_DATE(): TerminalNode {
		return this.getToken(MocaSqlParser.START_DATE, 0);
	}
	public STATE(): TerminalNode {
		return this.getToken(MocaSqlParser.STATE, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(MocaSqlParser.STATIC, 0);
	}
	public STATS_STREAM(): TerminalNode {
		return this.getToken(MocaSqlParser.STATS_STREAM, 0);
	}
	public STATUS(): TerminalNode {
		return this.getToken(MocaSqlParser.STATUS, 0);
	}
	public STDEV(): TerminalNode {
		return this.getToken(MocaSqlParser.STDEV, 0);
	}
	public STDEVP(): TerminalNode {
		return this.getToken(MocaSqlParser.STDEVP, 0);
	}
	public STOP(): TerminalNode {
		return this.getToken(MocaSqlParser.STOP, 0);
	}
	public STOPLIST(): TerminalNode {
		return this.getToken(MocaSqlParser.STOPLIST, 0);
	}
	public STRING_AGG(): TerminalNode {
		return this.getToken(MocaSqlParser.STRING_AGG, 0);
	}
	public STUFF(): TerminalNode {
		return this.getToken(MocaSqlParser.STUFF, 0);
	}
	public SUBJECT(): TerminalNode {
		return this.getToken(MocaSqlParser.SUBJECT, 0);
	}
	public SUM(): TerminalNode {
		return this.getToken(MocaSqlParser.SUM, 0);
	}
	public SUSPEND(): TerminalNode {
		return this.getToken(MocaSqlParser.SUSPEND, 0);
	}
	public SYMMETRIC(): TerminalNode {
		return this.getToken(MocaSqlParser.SYMMETRIC, 0);
	}
	public SYNCHRONOUS_COMMIT(): TerminalNode {
		return this.getToken(MocaSqlParser.SYNCHRONOUS_COMMIT, 0);
	}
	public SYNONYM(): TerminalNode {
		return this.getToken(MocaSqlParser.SYNONYM, 0);
	}
	public SYSTEM(): TerminalNode {
		return this.getToken(MocaSqlParser.SYSTEM, 0);
	}
	public TAKE(): TerminalNode {
		return this.getToken(MocaSqlParser.TAKE, 0);
	}
	public TARGET(): TerminalNode {
		return this.getToken(MocaSqlParser.TARGET, 0);
	}
	public TARGET_RECOVERY_TIME(): TerminalNode {
		return this.getToken(MocaSqlParser.TARGET_RECOVERY_TIME, 0);
	}
	public TB(): TerminalNode {
		return this.getToken(MocaSqlParser.TB, 0);
	}
	public TEXTIMAGE_ON(): TerminalNode {
		return this.getToken(MocaSqlParser.TEXTIMAGE_ON, 0);
	}
	public THROW(): TerminalNode {
		return this.getToken(MocaSqlParser.THROW, 0);
	}
	public TIES(): TerminalNode {
		return this.getToken(MocaSqlParser.TIES, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(MocaSqlParser.TIME, 0);
	}
	public TIMEOUT(): TerminalNode {
		return this.getToken(MocaSqlParser.TIMEOUT, 0);
	}
	public TIMER(): TerminalNode {
		return this.getToken(MocaSqlParser.TIMER, 0);
	}
	public TINYINT(): TerminalNode {
		return this.getToken(MocaSqlParser.TINYINT, 0);
	}
	public TORN_PAGE_DETECTION(): TerminalNode {
		return this.getToken(MocaSqlParser.TORN_PAGE_DETECTION, 0);
	}
	public TRANSFORM_NOISE_WORDS(): TerminalNode {
		return this.getToken(MocaSqlParser.TRANSFORM_NOISE_WORDS, 0);
	}
	public TRIPLE_DES(): TerminalNode {
		return this.getToken(MocaSqlParser.TRIPLE_DES, 0);
	}
	public TRIPLE_DES_3KEY(): TerminalNode {
		return this.getToken(MocaSqlParser.TRIPLE_DES_3KEY, 0);
	}
	public TRUSTWORTHY(): TerminalNode {
		return this.getToken(MocaSqlParser.TRUSTWORTHY, 0);
	}
	public TRY(): TerminalNode {
		return this.getToken(MocaSqlParser.TRY, 0);
	}
	public TSQL(): TerminalNode {
		return this.getToken(MocaSqlParser.TSQL, 0);
	}
	public TWO_DIGIT_YEAR_CUTOFF(): TerminalNode {
		return this.getToken(MocaSqlParser.TWO_DIGIT_YEAR_CUTOFF, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(MocaSqlParser.TYPE, 0);
	}
	public TYPE_WARNING(): TerminalNode {
		return this.getToken(MocaSqlParser.TYPE_WARNING, 0);
	}
	public UNBOUNDED(): TerminalNode {
		return this.getToken(MocaSqlParser.UNBOUNDED, 0);
	}
	public UNCOMMITTED(): TerminalNode {
		return this.getToken(MocaSqlParser.UNCOMMITTED, 0);
	}
	public UNKNOWN(): TerminalNode {
		return this.getToken(MocaSqlParser.UNKNOWN, 0);
	}
	public UNLIMITED(): TerminalNode {
		return this.getToken(MocaSqlParser.UNLIMITED, 0);
	}
	public URL(): TerminalNode {
		return this.getToken(MocaSqlParser.URL, 0);
	}
	public USING(): TerminalNode {
		return this.getToken(MocaSqlParser.USING, 0);
	}
	public VALID_XML(): TerminalNode {
		return this.getToken(MocaSqlParser.VALID_XML, 0);
	}
	public VALIDATION(): TerminalNode {
		return this.getToken(MocaSqlParser.VALIDATION, 0);
	}
	public VALUE(): TerminalNode {
		return this.getToken(MocaSqlParser.VALUE, 0);
	}
	public VAR(): TerminalNode {
		return this.getToken(MocaSqlParser.VAR, 0);
	}
	public VARP(): TerminalNode {
		return this.getToken(MocaSqlParser.VARP, 0);
	}
	public VIEW_METADATA(): TerminalNode {
		return this.getToken(MocaSqlParser.VIEW_METADATA, 0);
	}
	public VIEWS(): TerminalNode {
		return this.getToken(MocaSqlParser.VIEWS, 0);
	}
	public WAIT(): TerminalNode {
		return this.getToken(MocaSqlParser.WAIT, 0);
	}
	public WELL_FORMED_XML(): TerminalNode {
		return this.getToken(MocaSqlParser.WELL_FORMED_XML, 0);
	}
	public WORK(): TerminalNode {
		return this.getToken(MocaSqlParser.WORK, 0);
	}
	public WORKLOAD(): TerminalNode {
		return this.getToken(MocaSqlParser.WORKLOAD, 0);
	}
	public XML(): TerminalNode {
		return this.getToken(MocaSqlParser.XML, 0);
	}
	public XMLNAMESPACES(): TerminalNode {
		return this.getToken(MocaSqlParser.XMLNAMESPACES, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_simple_id;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterSimple_id) {
	 		listener.enterSimple_id(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitSimple_id) {
	 		listener.exitSimple_id(this);
		}
	}
}


export class Comparison_operatorContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.EQUAL, 0);
	}
	public LESS(): TerminalNode {
		return this.getToken(MocaSqlParser.LESS, 0);
	}
	public GREATER(): TerminalNode {
		return this.getToken(MocaSqlParser.GREATER, 0);
	}
	public LESS_EQUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.LESS_EQUAL, 0);
	}
	public GREATER_EQUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.GREATER_EQUAL, 0);
	}
	public NOT_EQUAL(): TerminalNode {
		return this.getToken(MocaSqlParser.NOT_EQUAL, 0);
	}
	public EXCLAMATION(): TerminalNode {
		return this.getToken(MocaSqlParser.EXCLAMATION, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_comparison_operator;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterComparison_operator) {
	 		listener.enterComparison_operator(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitComparison_operator) {
	 		listener.exitComparison_operator(this);
		}
	}
}


export class Assignment_operatorContext extends ParserRuleContext {
	constructor(parser?: MocaSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLUS_ASSIGN(): TerminalNode {
		return this.getToken(MocaSqlParser.PLUS_ASSIGN, 0);
	}
	public MINUS_ASSIGN(): TerminalNode {
		return this.getToken(MocaSqlParser.MINUS_ASSIGN, 0);
	}
	public MULT_ASSIGN(): TerminalNode {
		return this.getToken(MocaSqlParser.MULT_ASSIGN, 0);
	}
	public DIV_ASSIGN(): TerminalNode {
		return this.getToken(MocaSqlParser.DIV_ASSIGN, 0);
	}
	public MOD_ASSIGN(): TerminalNode {
		return this.getToken(MocaSqlParser.MOD_ASSIGN, 0);
	}
	public AND_ASSIGN(): TerminalNode {
		return this.getToken(MocaSqlParser.AND_ASSIGN, 0);
	}
	public XOR_ASSIGN(): TerminalNode {
		return this.getToken(MocaSqlParser.XOR_ASSIGN, 0);
	}
	public OR_ASSIGN(): TerminalNode {
		return this.getToken(MocaSqlParser.OR_ASSIGN, 0);
	}
    public get ruleIndex(): number {
    	return MocaSqlParser.RULE_assignment_operator;
	}
	public enterRule(listener: MocaSqlListener): void {
	    if(listener.enterAssignment_operator) {
	 		listener.enterAssignment_operator(this);
		}
	}
	public exitRule(listener: MocaSqlListener): void {
	    if(listener.exitAssignment_operator) {
	 		listener.exitAssignment_operator(this);
		}
	}
}
