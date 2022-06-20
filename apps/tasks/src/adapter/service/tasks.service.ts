import { Inject } from '@nestjs/common'
import {
  Decorators,
  StrategyAnalyzer,
} from '../../../../../libs/nestjs-helpers/src'
import CreateTaskStrategy from '../../core/strategies/create-task.strategy'
import { DetermineTaskStatusStrategy } from '../../core/strategies/determine-task-status.strategy'
import { TaskInput } from '../../infra/dtos/inputs/task.input'
import { TaskObject } from '../../infra/dtos/objects/task.object'

@Decorators.Inject()
export class TasksService {
  constructor(
    // @Inject('FindOneTaskStrategy')
    // private readonly findTaskStrategyAnalyzer: StrategyAnalyzer,
    // private readonly createTaskStrategy: CreateTaskStrategy,
    private readonly determineTaskStatusStrategy: DetermineTaskStatusStrategy,
  ) {}

  async createTask(input: TaskInput): Promise<TaskObject | void> {
    // const status = this.determineTaskStatusStrategy.perform(input.status)
    // const assignedTo = input.assignedTo.map(({ externalId }) => ({
    //   externalId,
    // }))
    // const result = await this.createTaskStrategy.perform({
    //   status,
    //   createdBy: {
    //     externalId: input.createdBy.externalId,
    //   },
    //   title: input.title,
    //   description: input.description,
    //   assignedTo: assignedTo,
    // })
    // return new TaskObject(result)
  }
  getOneTask(externalId: string): TaskObject | void {
    // const getTask = this.findTaskStrategyAnalyzer.analyze({
    //   context: 'nickname',
    // })
    // return getTask.perform(externalId)
  }
}
