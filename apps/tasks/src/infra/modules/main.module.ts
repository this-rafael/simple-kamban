import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo'
import { UsersController } from '../controllers/kafka/users.controller'

import {
  feature,
  provider,
  StrategyAnalyzer,
  strategyFeature,
  strategyProvider,
} from '../../../../../libs/nestjs-helpers/src'
import { FindUserByNicknameUsecase } from '../../core/usecases/find-user-by-nickname.usecase'

import { FindUserByNicknameProtocol } from '../../core/protocols/find-user.protocol'
import { FindUserByNicknameConnector } from '../../adapter/connectors/find-user.connector'
import { UpdateUserStrategy } from '../../core/strategies/update-user.strategy'
import { UpdateUserUsecase } from '../../core/usecases/update-user.usecase'
import { UpdateUserProtocol } from '../../core/protocols/update-user.protocol'
import { UpdateUserConnector } from '../../adapter/connectors/update-user.connector'
import { UsersService } from '../../adapter/service/users.service'
import { CreateUserStrategy } from '../../core/strategies/create-user.strategy'
import { CreateUserProtocol } from '../../core/protocols/create-user.protocol'
import { CreateUserConnector } from '../../adapter/connectors/create-user.connector'
import { CreateUserUsecase } from '../../core/usecases/create-user.usecase'
import { TasksResolver } from '../resolvers/tasks.resolver'
import { PrismaHandler } from '../handler/prisma.handler'
import { FindOneTaskByExternalIdUsecase } from '../../core/usecases/find-one-task-by-external-id.usecase'
import { FindOneTaskStrategy } from '../../core/strategies/find-one-task.strategy'
import { TasksService } from '../../adapter/service/tasks.service'
import CreateTaskStrategy from '../../core/strategies/create-task.strategy'
import { CreateTaskUsecase } from '../../core/usecases/create-task.usecase'
import { CreateTaskConnector } from '../../adapter/connectors/create-task.connector'
import { CreateTaskProtocol } from '../../core/protocols/create-task.protocol'
import { DetermineTaskStatusStrategy } from '../../core/strategies/determine-task-status.strategy'
import { DetermineTaskStatusUsecase } from '../../core/usecases/determine-task-status.usecase'
import { TestController } from '../controllers/rest/test.controller'
import { PrismaModule } from './prisma.module'

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: './apps/tasks/schema.graphql',
      buildSchemaOptions: {
        orphanedTypes: [],
      },
    }),
  ],
  controllers: [TestController, UsersController],
  providers: [
    PrismaHandler,
    TasksResolver,
    UsersService,
    // TasksService,
    ...strategyFeature({
      strategy: {
        strategyBuilder: {
          token: 'FindUserStrategy',
          factory: (nickname: FindUserByNicknameUsecase) =>
            new StrategyAnalyzer({
              nickname,
            }),
          injections: [FindUserByNicknameUsecase],
        },
      },
      protocols: [
        {
          protocolBuilder: FindUserByNicknameProtocol,
          connectorBuilder: FindUserByNicknameConnector,
        },
      ],
    }),
    ...feature(
      UpdateUserStrategy,
      UpdateUserUsecase,
      UpdateUserProtocol,
      UpdateUserConnector,
    ),
    ...feature(
      CreateUserStrategy,
      CreateUserUsecase,
      CreateUserProtocol,
      CreateUserConnector,
    ),
    ...strategyProvider({
      token: 'FindEntityByExternalIdProtocol',
      factory: (task: FindOneTaskByExternalIdUsecase) =>
        new StrategyAnalyzer({
          task,
        }),
      injections: [FindOneTaskByExternalIdUsecase],
    }),
    ...strategyProvider({
      token: 'FindOneTaskStrategy',
      factory: (externalId: FindOneTaskByExternalIdUsecase) =>
        new StrategyAnalyzer<FindOneTaskStrategy>({
          externalId,
        }),
      injections: [FindOneTaskByExternalIdUsecase],
    }),

    provider(CreateTaskStrategy, CreateTaskUsecase),
    provider(DetermineTaskStatusStrategy, DetermineTaskStatusUsecase),
    ...feature(
      CreateTaskStrategy,
      CreateTaskUsecase,
      CreateTaskProtocol,
      CreateTaskConnector,
    ),
  ],
})
export class TasksModule {}
