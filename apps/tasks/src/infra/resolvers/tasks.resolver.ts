import { Args, Field, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ExternalIdDTO } from '../dtos/external-id.dto'
import { UserObject } from '../dtos/objects/user.object'
import { faker } from '@faker-js/faker'
import { TaskObject } from '../dtos/objects/task.object'
import { TaskInput } from '../dtos/inputs/task.input'
import { TaskStatus } from '../../core/enums/task.status'
import { TasksService } from '../../adapter/service/tasks.service'

@Resolver(() => TaskObject)
export class TasksResolver {
  // constructor(private readonly service: TasksService) {}

  @Query(() => TaskObject)
  async getOneTask(
    @Args('id') { externalId }: ExternalIdDTO,
  ): Promise<TaskObject> {
    return {
      assignedTo: [],
      createdBy: new UserObject({
        externalId: faker.datatype.uuid(),
        id: 1,
        nickname: faker.name.findName(),
      }),
      description: faker.lorem.sentence(),
      externalId: faker.datatype.uuid(),
      status: TaskStatus.READY,
      title: faker.name.findName(),
    }
  }

  // @Mutation(() => TaskObject)
  // async createTask(@Args('input') input: TaskInput): Promise<TaskObject> {
  //   const result = await this.service.createTask(input)
  //   return new TaskObject({
  //     externalId: faker.datatype.uuid(),
  //     title: faker.name.findName(),
  //     createdBy: {
  //       externalId: faker.datatype.uuid(),
  //     },
  //     description: faker.lorem.sentence(),
  //     status: TaskStatus.READY,
  //     assignedTo: [
  //       {
  //         externalId: faker.datatype.uuid(),
  //       },
  //     ],
  //   })
  // }
}
