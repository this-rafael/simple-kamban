import { CreateUserModel } from '../models/create-user.model'
import { UserModel } from '../models/user.model'

export abstract class CreateUserStrategy {
  abstract createUser(user: CreateUserModel): Promise<UserModel>
}
