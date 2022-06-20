import { ApiError } from '../api-errors/api.error'
import { ErrorCodes } from '../errors.codes'
import { BussinessErrorsNames } from './bussiness-errors.names'

// type to express http status code about errors caused by server 4.xx family
export enum ClientErrorHttpStatus {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  PAYLOAD_TOO_LARGE = 413,
  URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  IM_A_TEAPOT = 418,
  MISDIRECTED_REQUEST = 421,
  UNPROCESSABLE_ENTITY = 422,
  LOCKED = 423,
  FAILED_DEPENDENCY = 424,
  TOO_EARLY = 425,
  UPGRADE_REQUIRED = 426,
  PRECONDITION_REQUIRED = 428,
  TOO_MANY_REQUESTS = 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
}

export class BussinessRuleException<T = unknown, L = unknown> implements Error {
  code!: ErrorCodes

  calledWith?: T

  name!: string

  message!: string

  stack?: string

  httpStatus!: ClientErrorHttpStatus

  originalError?: { code: ErrorCodes; calledWith?: unknown; name: string }

  constructor({
    code,
    calledWith,
    throwedIn,
    stack,
    httpStatus,
    originalError,
  }: {
    code: ErrorCodes
    calledWith?: T
    throwedIn: L
    stack?: string
    httpStatus: ClientErrorHttpStatus
    originalError?: unknown
  }) {
    this.code = code
    this.calledWith = calledWith
    this.name = `Error: ${code};`

    this.message = `Error: ${code}. Throwed in class called: ${
      (throwedIn as unknown as { name: string }).name
    }`

    this.stack = stack
    this.httpStatus = httpStatus

    const error =
      originalError instanceof ApiError ? originalError.getBasicData : undefined
    this.originalError = error
  }
}
