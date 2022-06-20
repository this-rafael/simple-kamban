import { TaskStatus } from '../enums/task.status'

export abstract class DetermineTaskStatusStrategy {
  abstract perform(status: String): TaskStatus
}
