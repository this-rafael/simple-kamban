import { UserModel } from '../models/user.model'

export abstract class FindUserByNicknameProtocol {
  abstract call(criterias: {
    nickname: string
    take: number
  }): Promise<UserModel[]>
}
