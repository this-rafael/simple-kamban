import {
  BussinessRuleException,
  ClientErrorHttpStatus,
} from '../../../../../libs/api-exceptions/src/bussiness-rule-exception/bussiness-rule.exception'
import { ErrorCodes } from '../../../../../libs/api-exceptions/src/errors.codes'
import { PartialAnd } from '../../../../../libs/global-types/src'
import { Decorators } from '../../../../../libs/nestjs-helpers/src'
import { UserModel } from '../models/user.model'
import { UpdateUserProtocol } from '../protocols/update-user.protocol'
import { UpdateUserStrategy } from '../strategies/update-user.strategy'

@Decorators.Inject()
export class UpdateUserUsecase implements UpdateUserStrategy {
  constructor(private readonly updateUserProtocol: UpdateUserProtocol) {}

  async updateUser(
    user: PartialAnd<UserModel, { externalId: string }>,
  ): Promise<UserModel> {
    try {
      return this.updateUserProtocol.updateUser(user)
    } catch {
      throw new BussinessRuleException({
        code: ErrorCodes.CANNOT_UPDATE_USER_ERROR,
        httpStatus: ClientErrorHttpStatus.BAD_REQUEST,
        throwedIn: UpdateUserUsecase,
        calledWith: user,
      })
    }
  }
}
