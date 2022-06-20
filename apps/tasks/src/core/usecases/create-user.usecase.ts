import { BussinessErrorsNames } from '../../../../../libs/api-exceptions/src/bussiness-rule-exception/bussiness-errors.names'
import { BussinessRuleException } from '../../../../../libs/api-exceptions/src/bussiness-rule-exception/bussiness-rule.exception'
import { ErrorCodes } from '../../../../../libs/api-exceptions/src/errors.codes'
import { Decorators } from '../../../../../libs/nestjs-helpers/src'
import { CreateUserModel } from '../models/create-user.model'
import { UserModel } from '../models/user.model'
import { CreateUserProtocol } from '../protocols/create-user.protocol'
import { CreateUserStrategy } from '../strategies/create-user.strategy'

@Decorators.Inject()
export class CreateUserUsecase implements CreateUserStrategy {
  constructor(private readonly createUserProtocol: CreateUserProtocol) {}

  async createUser(user: CreateUserModel): Promise<UserModel> {
    try {
      return await this.createUserProtocol.createUser(user)
    } catch (error) {
      throw new BussinessRuleException({
        code: ErrorCodes.CANNOT_CREATE_USER_ERROR,
        httpStatus: 400,
        throwedIn: CreateUserUsecase,
        calledWith: user,
      })
    }
  }
}
