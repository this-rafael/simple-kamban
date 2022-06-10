import { ClientErrorHttpStatus } from '../bussiness-rule-exception/bussiness-rule.exception'
import { ErrorCodes } from '../errors.codes'
import { ApiErrorsNames } from './api-errors.names'

// type to express http status code about errors caused by server 5.xx family
export enum ServerErrorHttpStatus {
  // 5xx
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
  VARIANT_ALSO_NEGOTIATES = 506,
  INSUFFICIENT_STORAGE = 507,
  LOOP_DETECTED = 508,
  BANDWIDTH_LIMIT_EXCEEDED = 509,
  NOT_EXTENDED = 510,
  NETWORK_AUTHENTICATION_REQUIRED = 511,
}

export class ApiError<T = unknown, L = unknown> implements Error {
  code!: ErrorCodes

  calledWith?: T

  name!: string

  message!: string

  stack?: string

  httpStatus!: ServerErrorHttpStatus | ClientErrorHttpStatus

  primalError?: unknown

  constructor({
    code,
    calledWith,
    name,
    throwedIn,
    stack,
    httpStatus,
    primalError,
  }: {
    code: ErrorCodes
    calledWith?: T
    name: ApiErrorsNames
    throwedIn: L
    stack?: string
    httpStatus: ServerErrorHttpStatus
    primalError?: unknown
  }) {
    this.code = code
    this.calledWith = calledWith
    this.name = name as unknown as string
    this.message = `${name} error. Throwed in class called: ${throwedIn}`
    this.stack = stack
    this.httpStatus = httpStatus
    this.primalError = primalError
  }

  get getBasicData(): {
    code: ErrorCodes
    calledWith?: T
    name: string
    primalError?: Error
  } {
    const error =
      this.primalError instanceof Error
        ? this.primalError
        : new Error(`${this.primalError}`)

    const data = {
      code: this.code,
      calledWith: this.calledWith,
      name: this.name,
      primalError: error,
    }

    return data
  }
}
