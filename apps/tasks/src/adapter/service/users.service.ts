import { Inject } from '@nestjs/common'
import { UpdateOrCreateUserMessage } from '../../../../../libs/handler-kafka/src/messages/update-or-create-user.message'
import {
  Decorators,
  StrategyAnalyzer,
} from '../../../../../libs/nestjs-helpers/src'
import { CreateUserStrategy } from '../../core/strategies/create-user.strategy'
import { FindUserStrategy } from '../../core/strategies/find-user.strategy'
import { UpdateUserStrategy } from '../../core/strategies/update-user.strategy'

@Decorators.Inject()
export class UsersService {
  constructor(
    @Inject('FindUserStrategy')
    private readonly findUserSrategyAnalyzer: StrategyAnalyzer<
      FindUserStrategy<string>
    >,
    private readonly updateUserStrategy: UpdateUserStrategy,
    private readonly createUserStrategy: CreateUserStrategy,
  ) {}

  async updateOrCreateUser(user: UpdateOrCreateUserMessage): Promise<void> {
    const strategy = this.findUserSrategyAnalyzer.analyze({
      context: 'nickname',
    })

    const data = await strategy.call({
      take: 1,
      value: user.nickname,
    })

    if (data.length === 0) {
      await this.createUserStrategy.createUser(user)
    } else {
      await this.updateUserStrategy.updateUser(user)
    }
  }
}
