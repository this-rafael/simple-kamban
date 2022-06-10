import { ErrorCodes } from '../errors.codes'
import { ApiErrorsNames } from './api-errors.names'
import { ApiError, ServerErrorHttpStatus } from './api.error'

export class MessageCommunicationError<T, L> extends ApiError<T, L> {
  static factory<T, L>({
    errorCode: originalErrorCode,
    info,
    throwedIn,
    stack,
  }: {
    errorCode: number
    info: T
    throwedIn: L
    stack?: string
  }): MessageCommunicationError<T, L> {
    let exceptionCode: ErrorCodes
    switch (originalErrorCode) {
      case -1:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_UNKNOWN_SERVER_ERROR
        break
      case 1:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_OFFSET_OUT_OF_RANGE
        break
      case 2:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_CORRUPT_MESSAGE
        break
      case 3:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_UNKNOWN_TOPIC_OR_PARTITION
        break
      case 4:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_FETCH_SIZE
        break
      case 5:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_LEADER_NOT_AVAILABLE
        break
      case 6:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_NOT_LEADER_FOR_PARTITION
        break
      case 7:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_REQUEST_TIMED_OUT
        break
      case 8:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_BROKER_NOT_AVAILABLE
        break
      case 9:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_REPLICA_NOT_AVAILABLE
        break
      case 10:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_MESSAGE_TOO_LARGE
        break
      case 11:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_STALE_CONTROLLER_EPOCH
        break
      case 12:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_OFFSET_METADATA_TOO_LARGE
        break
      case 13:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_NETWORK_EXCEPTION
        break
      case 14:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_COORDINATOR_LOAD_IN_PROGRESS
        break
      case 15:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_COORDINATOR_NOT_AVAILABLE
        break
      case 16:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_NOT_COORDINATOR
        break
      case 17:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_TOPIC_EXCEPTION
        break
      case 18:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_RECORD_LIST_TOO_LARGE
        break
      case 19:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_NOT_ENOUGH_REPLICAS
        break
      case 20:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_NOT_ENOUGH_REPLICAS_AFTER_APPEND
        break
      case 21:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_REQUIRED_ACKS
        break
      case 22:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_ILLEGAL_GENERATION
        break
      case 23:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_INCONSISTENT_GROUP_PROTOCOL
        break
      case 24:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_GROUP_ID
        break
      case 25:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_UNKNOWN_MEMBER_ID
        break
      case 26:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_SESSION_TIMEOUT
        break
      case 27:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_REBALANCE_IN_PROGRESS
        break
      case 28:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_COMMIT_OFFSET_SIZE
        break
      case 29:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_TOPIC_AUTHORIZATION_FAILED
        break
      case 30:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_GROUP_AUTHORIZATION_FAILED
        break
      case 31:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_CLUSTER_AUTHORIZATION_FAILED
        break
      case 32:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_TIMESTAMP
        break
      case 33:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_UNSUPPORTED_SASL_MECHANISM
        break
      case 34:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_ILLEGAL_SASL_STATE
        break
      case 35:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_UNSUPPORTED_VERSION
        break
      case 36:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_TOPIC_ALREADY_EXISTS
        break
      case 37:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_PARTITIONS
        break
      case 38:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_REPLICATION_FACTOR
        break
      case 39:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_REPLICA_ASSIGNMENT
        break
      case 40:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_CONFIG
        break
      case 41:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_NOT_CONTROLLER
        break
      case 42:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_REQUEST
        break
      case 43:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_UNSUPPORTED_FOR_MESSAGE_FORMAT
        break
      case 44:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_POLICY_VIOLATION
        break
      case 45:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_OUT_OF_ORDER_SEQUENCE_NUMBER
        break
      case 46:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_DUPLICATE_SEQUENCE_NUMBER
        break
      case 47:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_PRODUCER_EPOCH
        break
      case 48:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_TXN_STATE
        break
      case 49:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_PRODUCER_ID_MAPPING
        break
      case 50:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_TRANSACTION_TIMEOUT
        break
      case 51:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_CONCURRENT_TRANSACTIONS
        break
      case 52:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_TRANSACTION_COORDINATOR_FENCED
        break
      case 53:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_TRANSACTIONAL_ID_AUTHORIZATION_FAILED
        break
      case 54:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_SECURITY_DISABLED
        break
      case 55:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_OPERATION_NOT_ATTEMPTED
        break
      case 56:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_KAFKA_STORAGE_ERROR
        break
      case 57:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_LOG_DIR_NOT_FOUND
        break
      case 58:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_SASL_AUTHENTICATION_FAILED
        break
      case 59:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_UNKNOWN_PRODUCER_ID
        break
      case 60:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_REASSIGNMENT_IN_PROGRESS
        break
      case 61:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_DELEGATION_TOKEN_AUTH_DISABLED
        break
      case 62:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_DELEGATION_TOKEN_NOT_FOUND
        break
      case 63:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_DELEGATION_TOKEN_OWNER_MISMATCH
        break
      case 64:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_DELEGATION_TOKEN_REQUEST_NOT_ALLOWED
        break
      case 65:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_DELEGATION_TOKEN_AUTHORIZATION_FAILED
        break
      case 66:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_DELEGATION_TOKEN_EXPIRED
        break
      case 67:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_PRINCIPAL_TYPE
        break
      case 68:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_NON_EMPTY_GROUP
        break
      case 69:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_GROUP_ID_NOT_FOUND
        break
      case 70:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_FETCH_SESSION_ID_NOT_FOUND
        break
      case 71:
        exceptionCode =
          ErrorCodes.MESSAGE_SYSTEM_ERROR_INVALID_FETCH_SESSION_EPOCH
        break
      case 72:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_LISTENER_NOT_FOUND
        break
      default:
        exceptionCode = ErrorCodes.MESSAGE_SYSTEM_ERROR_UNKNOWN_SERVER_ERROR
    }

    return new MessageCommunicationError<T, L>({
      code: exceptionCode,
      throwedIn,
      calledWith: info,
      stack,
    })
  }

  constructor({
    code,
    calledWith,
    throwedIn,
    stack,
  }: {
    code: ErrorCodes
    calledWith?: T

    throwedIn: L
    stack?: string
  }) {
    super({
      name: ApiErrorsNames.ASYNC_COMMUNICATION_ERROR,
      stack,
      code,
      httpStatus: ServerErrorHttpStatus.INTERNAL_SERVER_ERROR,
      calledWith,
      throwedIn,
    })
    // this.code = code
    // this.calledWith = calledWith
    // this.name = name as unknown as string
    // this.message = `${name} error. Throwed in class called: ${throwedIn}`
    // this.stack = stack
    // this.httpStatus = httpStatus
  }
}
