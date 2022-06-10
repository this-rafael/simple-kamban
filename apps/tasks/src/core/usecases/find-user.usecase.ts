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
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
