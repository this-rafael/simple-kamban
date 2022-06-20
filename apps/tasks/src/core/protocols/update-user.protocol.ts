import { PartialAnd } from '../../../../../libs/global-types/src'
import { UserModel } from '../models/user.model'

export abstract class UpdateUserProtocol {
  abstract updateUser(
    user: PartialAnd<UserModel, { externalId: string }>,
  ): Promise<UserModel>
}
