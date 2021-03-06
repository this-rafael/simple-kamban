export enum ErrorCodes {
    //  Service-Message system specific error codes
    MESSAGE_SYSTEM_ERROR_UNKNOWN_SERVER_ERROR = 1074,
    MESSAGE_SYSTEM_ERROR_NONE = 1075,
    MESSAGE_SYSTEM_ERROR_OFFSET_OUT_OF_RANGE = 1076,
    MESSAGE_SYSTEM_ERROR_CORRUPT_MESSAGE = 1077,
    MESSAGE_SYSTEM_ERROR_UNKNOWN_TOPIC_OR_PARTITION = 1078,
    MESSAGE_SYSTEM_ERROR_INVALID_FETCH_SIZE = 1079,
    MESSAGE_SYSTEM_ERROR_LEADER_NOT_AVAILABLE = 1080,
    MESSAGE_SYSTEM_ERROR_NOT_LEADER_FOR_PARTITION = 1081,
    MESSAGE_SYSTEM_ERROR_REQUEST_TIMED_OUT = 1082,
    MESSAGE_SYSTEM_ERROR_BROKER_NOT_AVAILABLE = 1083,
    MESSAGE_SYSTEM_ERROR_REPLICA_NOT_AVAILABLE = 1084,
    MESSAGE_SYSTEM_ERROR_MESSAGE_TOO_LARGE = 1085,
    MESSAGE_SYSTEM_ERROR_STALE_CONTROLLER_EPOCH = 1086,
    MESSAGE_SYSTEM_ERROR_OFFSET_METADATA_TOO_LARGE = 1087,
    MESSAGE_SYSTEM_ERROR_NETWORK_EXCEPTION = 1088,
    MESSAGE_SYSTEM_ERROR_COORDINATOR_LOAD_IN_PROGRESS = 1089,
    MESSAGE_SYSTEM_ERROR_COORDINATOR_NOT_AVAILABLE = 1090,
    MESSAGE_SYSTEM_ERROR_NOT_COORDINATOR = 1091,
    MESSAGE_SYSTEM_ERROR_INVALID_TOPIC_EXCEPTION = 1092,
    MESSAGE_SYSTEM_ERROR_RECORD_LIST_TOO_LARGE = 1093,
    MESSAGE_SYSTEM_ERROR_NOT_ENOUGH_REPLICAS = 1094,
    MESSAGE_SYSTEM_ERROR_NOT_ENOUGH_REPLICAS_AFTER_APPEND = 1095,
    MESSAGE_SYSTEM_ERROR_INVALID_REQUIRED_ACKS = 1096,
    MESSAGE_SYSTEM_ERROR_ILLEGAL_GENERATION = 1097,
    MESSAGE_SYSTEM_ERROR_INCONSISTENT_GROUP_PROTOCOL = 1098,
    MESSAGE_SYSTEM_ERROR_INVALID_GROUP_ID = 1099,
    MESSAGE_SYSTEM_ERROR_UNKNOWN_MEMBER_ID = 1100,
    MESSAGE_SYSTEM_ERROR_INVALID_SESSION_TIMEOUT = 1101,
    MESSAGE_SYSTEM_ERROR_REBALANCE_IN_PROGRESS = 1102,
    MESSAGE_SYSTEM_ERROR_INVALID_COMMIT_OFFSET_SIZE = 1103,
    MESSAGE_SYSTEM_ERROR_TOPIC_AUTHORIZATION_FAILED = 1104,
    MESSAGE_SYSTEM_ERROR_GROUP_AUTHORIZATION_FAILED = 1105,
    MESSAGE_SYSTEM_ERROR_CLUSTER_AUTHORIZATION_FAILED = 1106,
    MESSAGE_SYSTEM_ERROR_INVALID_TIMESTAMP = 1107,
    MESSAGE_SYSTEM_ERROR_UNSUPPORTED_SASL_MECHANISM = 1108,
    MESSAGE_SYSTEM_ERROR_ILLEGAL_SASL_STATE = 1109,
    MESSAGE_SYSTEM_ERROR_UNSUPPORTED_VERSION = 1110,
    MESSAGE_SYSTEM_ERROR_TOPIC_ALREADY_EXISTS = 1112,
    MESSAGE_SYSTEM_ERROR_INVALID_PARTITIONS = 1113,
    MESSAGE_SYSTEM_ERROR_INVALID_REPLICATION_FACTOR = 1114,
    MESSAGE_SYSTEM_ERROR_INVALID_REPLICA_ASSIGNMENT = 1115,
    MESSAGE_SYSTEM_ERROR_INVALID_CONFIG = 1116,
    MESSAGE_SYSTEM_ERROR_NOT_CONTROLLER = 1117,
    MESSAGE_SYSTEM_ERROR_INVALID_REQUEST = 1118,
    MESSAGE_SYSTEM_ERROR_UNSUPPORTED_FOR_MESSAGE_FORMAT = 1119,
    MESSAGE_SYSTEM_ERROR_POLICY_VIOLATION = 1120,
    MESSAGE_SYSTEM_ERROR_OUT_OF_ORDER_SEQUENCE_NUMBER = 1121,
    MESSAGE_SYSTEM_ERROR_DUPLICATE_SEQUENCE_NUMBER = 1122,
    MESSAGE_SYSTEM_ERROR_INVALID_PRODUCER_EPOCH = 1123,
    MESSAGE_SYSTEM_ERROR_INVALID_TXN_STATE = 1124,
    MESSAGE_SYSTEM_ERROR_INVALID_PRODUCER_ID_MAPPING = 1125,
    MESSAGE_SYSTEM_ERROR_INVALID_TRANSACTION_TIMEOUT = 1126,
    MESSAGE_SYSTEM_ERROR_CONCURRENT_TRANSACTIONS = 1127,
    MESSAGE_SYSTEM_ERROR_TRANSACTION_COORDINATOR_FENCED = 1128,
    MESSAGE_SYSTEM_ERROR_TRANSACTIONAL_ID_AUTHORIZATION_FAILED = 1129,
    MESSAGE_SYSTEM_ERROR_SECURITY_DISABLED = 1130,
    MESSAGE_SYSTEM_ERROR_OPERATION_NOT_ATTEMPTED = 1131,
    MESSAGE_SYSTEM_ERROR_KAFKA_STORAGE_ERROR = 1132,
    MESSAGE_SYSTEM_ERROR_LOG_DIR_NOT_FOUND = 1133,
    MESSAGE_SYSTEM_ERROR_SASL_AUTHENTICATION_FAILED = 1134,
    MESSAGE_SYSTEM_ERROR_UNKNOWN_PRODUCER_ID = 1135,
    MESSAGE_SYSTEM_ERROR_REASSIGNMENT_IN_PROGRESS = 1136,
    MESSAGE_SYSTEM_ERROR_DELEGATION_TOKEN_AUTH_DISABLED = 1137,
    MESSAGE_SYSTEM_ERROR_DELEGATION_TOKEN_NOT_FOUND = 1138,
    MESSAGE_SYSTEM_ERROR_DELEGATION_TOKEN_OWNER_MISMATCH = 1139,
    MESSAGE_SYSTEM_ERROR_DELEGATION_TOKEN_REQUEST_NOT_ALLOWED = 1140,
    MESSAGE_SYSTEM_ERROR_DELEGATION_TOKEN_AUTHORIZATION_FAILED = 1141,
    MESSAGE_SYSTEM_ERROR_DELEGATION_TOKEN_EXPIRED = 1142,
    MESSAGE_SYSTEM_ERROR_INVALID_PRINCIPAL_TYPE = 1143,
    MESSAGE_SYSTEM_ERROR_NON_EMPTY_GROUP = 1144,
    MESSAGE_SYSTEM_ERROR_GROUP_ID_NOT_FOUND = 1145,
    MESSAGE_SYSTEM_ERROR_FETCH_SESSION_ID_NOT_FOUND = 1146,
    MESSAGE_SYSTEM_ERROR_INVALID_FETCH_SESSION_EPOCH = 1147,
    MESSAGE_SYSTEM_ERROR_LISTENER_NOT_FOUND = 1148,


  ENCRYPTION_ERROR = 1,
  INCORRECT_PASSWORD_ERROR = 2,
  USER_NOT_USE_EMAIL_AND_PASSWORD_AUTHENTICATION_ERROR = 3,
  EMIT_TOKEN_ERROR = 4,
  MISSING_PROPERTY_ERROR = 5,
  USER_NOT_FOUND_ERROR = 6,
  PASSWORD_MATCHING_ERROR = 7,
  CANNON_FIND_USER_ERROR = 8,
  CANNOT_CREATE_USER_ERROR = 9,
  CANNOT_UPDATE_USER_ERROR = 14,
  SAVE_TOKEN_ERROR = 10,
  CANNOT_STORE_2FA_TOKEN = 11,
  SEND_TOKEN_ERROR = 12,
  SCHEDULE_REMOVE_2FA_TOKEN_ERROR = 13,
}
