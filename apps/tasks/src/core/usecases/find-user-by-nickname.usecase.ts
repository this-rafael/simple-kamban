import {
  BussinessRuleException,
  ClientErrorHttpStatus,
} from '../../../../../libs/api-exceptions/src/bussiness-rule-exception/bussiness-rule.exception'
import { ErrorCodes } from '../../../../../libs/api-exceptions/src/errors.codes'
import { Decorators } from '../../../../../libs/nestjs-helpers/src'
import { UserModel } from '../models/user.model'
import { FindUserByNicknameProtocol } from '../protocols/find-user.protocol'
import { FindUserStrategy } from '../strategies/find-user.strategy'

@Decorators.Inject()
export class FindUserByNicknameUsecase implements FindUserStrategy<string> {
  constructor(private readonly findUserProtocol: FindUserByNicknameProtocol) {}

  async call({
    value,
    take,
  }: {
    value: string
    take: number
  }): Promise<UserModel[]> {
    try {
      return await this.findUserProtocol.call({
        nickname: value,
        take,
      })
    } catch {
      throw new BussinessRuleException({
        throwedIn: FindUserByNicknameUsecase,
        calledWith: { value, take },
        code: ErrorCodes.CANNON_FIND_USER_ERROR,
        httpStatus: ClientErrorHttpStatus.BAD_REQUEST,
      })
    }
  }
}
