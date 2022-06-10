import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: './apps/tasks/schema.graphql',
      buildSchemaOptions: {
        orphanedTypes: [],
      },
    }),
  ],
  controllers: [UsersCont],
  providers: [],
})
export class TasksModule {}
