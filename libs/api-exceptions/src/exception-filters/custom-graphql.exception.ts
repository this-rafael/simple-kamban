import { GraphQLError } from 'graphql'
import { EnvironmentModel } from '../../../shared-env/src'
import { ApiError } from '../api-errors/api.error'
import { BussinessRuleException } from '../bussiness-rule-exception/bussiness-rule.exception'

export class CustomGraphqlError extends GraphQLError {
  constructor(
    builder:
      | BussinessRuleException<unknown, unknown>
      | ApiError<unknown, unknown>,
  ) {
    const { name, message, httpStatus } = builder

    super(`Error ${name}. Message: ${message}`, {
      extensions: {
        exception: {
          code: `${httpStatus}`,
          stacktrace:
            EnvironmentModel.vars.NODE_ENV === 'DEV' ? undefined : [''],
        },
      },
    })

    if (builder instanceof BussinessRuleException) {
      const { code, calledWith, name, originalError, stack, httpStatus } =
        builder

      Object.assign(this, {
        code,
        calledWith,
        name,
        originalError,
        stack,
        httpStatus,
      })
    } else if (builder instanceof ApiError) {
      const { code, calledWith, name, primalError, stack, httpStatus } = builder
      Object.assign(this, {
        code,
        calledWith,
        name,
        primalError,
        stack,
        httpStatus,
      })
    }
  }
}
