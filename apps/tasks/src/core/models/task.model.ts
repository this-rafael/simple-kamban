import { PartialAnd } from '../../../../../libs/global-types/src'
import { TaskStatus } from '../enums/task.status'
import { UserModel } from './user.model'

export interface TaskModel {
  externalId?: string
  title: string
  description: string
  status: TaskStatus
  createdAt?: Date
  createdBy: PartialAnd<UserModel, { externalId: string }>
  assignedTo: PartialAnd<UserModel, { externalId: string }>[]
  superTask?: PartialAnd<TaskModel, { externalId: string }>
  subTasks?: PartialAnd<TaskModel, { externalId: string }>[]
}
