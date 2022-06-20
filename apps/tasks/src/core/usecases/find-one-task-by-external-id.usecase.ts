import { Inject, OnModuleInit } from '@nestjs/common'
import {
  Decorators,
  StrategyAnalyzer,
} from '../../../../../libs/nestjs-helpers/src'
import { TaskModel } from '../models/task.model'
import { FindEntityByExternalIdProtocol } from '../protocols/find-entity-by-external-id.protocol'

import { FindOneTaskStrategy } from '../strategies/find-one-task.strategy'

@Decorators.Inject()
export class FindOneTaskByExternalIdUsecase
  implements FindOneTaskStrategy, OnModuleInit
{
  private findOneTaskProtocol!: FindEntityByExternalIdProtocol<TaskModel>

  constructor(
    @Inject('FindEntityByExternalIdProtocol')
    private readonly findEntityAnalizer: StrategyAnalyzer<
      FindEntityByExternalIdProtocol<TaskModel>
    >,
  ) {}

  onModuleInit() {
    this.findOneTaskProtocol = this.findEntityAnalizer.analyze({
      context: 'task',
    })
  }

  async perform(criteria: string): Promise<TaskModel> {
    return await this.findOneTaskProtocol.perform(criteria)
  }
}
