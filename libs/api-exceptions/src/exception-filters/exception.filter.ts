/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line max-classes-per-file
import { ArgumentsHost, Catch, HttpException, HttpStatus } from '@nestjs/common'
import { GqlExceptionFilter } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { EnvironmentModel } from '../../../shared-env/src'
import { ApiError } from '../api-errors/api.error'
import { BussinessRuleException } from '../bussiness-rule-exception/bussiness-rule.exception'
import { CustomGraphqlError } from './custom-graphql.exception'

@Catch(ApiError, BussinessRuleException, Error)
export class ExceptionFilter implements GqlExceptionFilter {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  catch(exception: any, host: ArgumentsHost): GraphQLError {
    if (EnvironmentModel.vars.NODE_ENV === 'DEV') {
      // eslint-disable-next-line no-console
      console.log(
        `\n🕗 ${new Date()}\n ⚠️⚠️ \n \u001B[34m${JSON.stringify(
          exception,
        )}\u001B[0m \n ⚠️`,
      )
    }

    if (
      exception instanceof ApiError ||
      exception instanceof BussinessRuleException
    ) {
      return new CustomGraphqlError(exception)
    }

    return new GraphQLError(JSON.stringify(exception), {
      extensions: {
        exception: {
          stacktrace:
            EnvironmentModel.vars.NODE_ENV === 'DEV' ? undefined : [''],
        },
      },
    })
  }

  getBussinessRuleExceptionMessage({
    code,
    message,
    name,
    stack,
    calledWith,
  }: BussinessRuleException<any, any>): string {
    return JSON.stringify({
      title: 'BussinessRuleException',
      env: EnvironmentModel.vars.NODE_ENV as string,
      code,
      message,
      stack,
      calledWith,
    })
  }
}
