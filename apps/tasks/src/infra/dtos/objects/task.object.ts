import { Field, ObjectType, PartialType } from '@nestjs/graphql'
import { TaskStatus } from '../../../core/enums/task.status'
import { TaskModel } from '../../../core/models/task.model'
import { ExternalIdDTO } from '../external-id.dto'
import { UserObject } from './user.object'

@ObjectType()
export class TaskObject {
  @Field(() => String)
  externalId: string

  @Field(() => String)
  title: string

  @Field(() => String)
  description: string

  @Field(() => String)
  status: String

  @Field(() => Date, {
    nullable: true,
  })
  createdAt?: Date

  @Field(() => UserObject)
  createdBy: UserObject

  @Field(() => [UserObject])
  assignedTo: UserObject[]

  @Field(() => TaskObject, {
    nullable: true,
  })
  superTask?: TaskObject

  @Field(() => [TaskObject], {
    nullable: true,
  })
  subTasks?: TaskObject

  constructor(builder: TaskModel) {
    Object.assign(this, builder)
  }
}
