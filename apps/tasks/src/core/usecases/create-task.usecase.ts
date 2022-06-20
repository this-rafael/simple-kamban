import { Decorators } from '../../../../../libs/nestjs-helpers/src'
import { TaskModel } from '../models/task.model'
import { CreateTaskProtocol } from '../protocols/create-task.protocol'
import CreateTaskStrategy from '../strategies/create-task.strategy'

@Decorators.Inject()
export class CreateTaskUsecase implements CreateTaskStrategy {
  constructor(private readonly createTaskProtocol: CreateTaskProtocol) {}

  perform(input: TaskModel): TaskModel {
    throw new Error('Method not implemented.')
  }
}
