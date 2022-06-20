import { Controller, Injectable } from '@nestjs/common'

import { KafkaTopics } from '../../../../../../libs/handler-kafka/src'
import { GetKafkaMessageValue } from '../../../../../../libs/nestjs-helpers/src'

import { UpdateOrCreateUserMessage } from '../../../../../../libs/handler-kafka/src/messages/update-or-create-user.message'
import { UsersService } from '../../../adapter/service/users.service'
import { MessagePattern, Payload } from '@nestjs/microservices'

@Controller()
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @MessagePattern(KafkaTopics.UPDATE_OR_CREATE_USER)
  async updateOrCreateCreateUser(
    @Payload(new GetKafkaMessageValue<UpdateOrCreateUserMessage>())
    user: UpdateOrCreateUserMessage,
  ): Promise<void> {
    try {
      await this.service.updateOrCreateUser(user)
    } catch (error) {
      console.log(error)
    }
  }
}
