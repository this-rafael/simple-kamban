import { Field, Int, ObjectType } from '@nestjs/graphql'
import { UserModel } from '../../../core/models/user.model'

@ObjectType()
export class UserObject {
  @Field(() => Int)
  id: number

  @Field(() => String)
  nickname: string

  @Field(() => String)
  externalId: string

  constructor(builder: UserModel) {
    Object.assign(this, builder)
  }
}
