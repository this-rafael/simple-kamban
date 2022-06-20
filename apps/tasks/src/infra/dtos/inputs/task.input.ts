import { Field, InputType } from '@nestjs/graphql'
import { TaskStatus } from '../../../core/enums/task.status'
import { TaskModel } from '../../../core/models/task.model'
import { ExternalIdDTO } from '../external-id.dto'

@InputType()
export class TaskInput {
  @Field(() => String, {
    nullable: true,
  })
  externalId?: string

  @Field(() => String)
  title: string

  @Field(() => String)
  description: string

  @Field(() => String, {
    defaultValue: TaskStatus.READY,
    middleware: [console.log],
    nullable: true,
  })
  status?: String = TaskStatus.READY

  @Field(() => Date, {
    nullable: true,
  })
  createdAt?: Date

  @Field(() => ExternalIdDTO)
  createdBy: ExternalIdDTO

  @Field(() => [ExternalIdDTO])
  assignedTo: ExternalIdDTO[]

  @Field(() => ExternalIdDTO, {
    nullable: true,
  })
  superTask?: ExternalIdDTO

  @Field(() => [ExternalIdDTO], {
    nullable: true,
  })
  subTasks?: ExternalIdDTO[]

  constructor(builder: TaskModel) {
    Object.assign(this, builder)
  }
}
