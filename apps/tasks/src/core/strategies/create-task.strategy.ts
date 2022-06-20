import { TaskModel } from '../models/task.model'

export default abstract class CreateTaskStrategy {
  abstract perform(input: TaskModel): TaskModel
}
