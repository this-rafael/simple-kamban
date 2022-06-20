import { CreateUserModel } from "../models/create-user.model";
import { UserModel } from "../models/user.model";

export abstract class CreateUserProtocol {
  abstract createUser(user: CreateUserModel): Promise<UserModel>
}
