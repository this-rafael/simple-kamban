import { PartialAnd } from '../../../../../libs/global-types/src'
import { Decorators } from '../../../../../libs/nestjs-helpers/src'
import { TaskStatus } from '../../core/enums/task.status'
import { TaskModel } from '../../core/models/task.model'
import { UserModel } from '../../core/models/user.model'
import { FindEntityByExternalIdProtocol } from '../../core/protocols/find-entity-by-external-id.protocol'
import { PrismaHandler } from '../../infra/handler/prisma.handler'

@Decorators.Inject()
export class FindOneTaskByIdConnector
  implements FindEntityByExternalIdProtocol<TaskModel>
{
  constructor(private readonly prisma: PrismaHandler) {}

  async perform(
    externalId: string,
  ): Promise<TaskModel & { externalId: string }> {
    const task = await this.prisma.tasks.findUnique({
      where: {
        external_id: externalId,
      },
      include: {
        users_tasks_created_byTousers: true,
        tasks_allocation: {
          include: {
            users: true,
          },
        },
      },
    })

    return {
      externalId: task.external_id,
      createdAt: task.create_at,
      description: task.description,
      title: task.title,
      status: TaskStatus.IN_PROGRESS,
      createdBy: {
        externalId: task.users_tasks_created_byTousers.external_id,
      },
      assignedTo: task.tasks_allocation.map(taskAllocation => ({
        externalId: taskAllocation.users.external_id,
        nickname: taskAllocation.users.nickname,
      })),
    }
  }
}
