import { TaskModel } from '../models/task.model'

export abstract class FindOneTaskStrategy {
  abstract perform(criteria: string): Promise<TaskModel>
}
