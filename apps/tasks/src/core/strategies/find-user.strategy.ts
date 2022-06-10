import { UserModel } from '../models/user.model'

export abstract class FindUserStrategy<T> {
  abstract call(criterias: { value: T; take: number }): Promise<UserModel[]>
}
