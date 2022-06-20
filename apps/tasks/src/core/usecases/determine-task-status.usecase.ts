import { Decorators } from '../../../../../libs/nestjs-helpers/src'
import { TaskStatus } from '../enums/task.status'
import { DetermineTaskStatusStrategy } from '../strategies/determine-task-status.strategy'

@Decorators.Inject()
export class DetermineTaskStatusUsecase implements DetermineTaskStatusStrategy {
  perform(status: String): TaskStatus {
    switch(status) {
      case 'READY':
        return TaskStatus.READY
      case 'IN_PROGRESS':
        return TaskStatus.IN_PROGRESS
      case 'DONE':
        return TaskStatus.DONE
      default:
        return TaskStatus.STOPPED
    }
  }
}
