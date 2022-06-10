import { UpdateOrCreateUserMessage } from '../../../../../libs/handler-kafka/src/messages/update-or-create-user.message'
import { Decorators } from '../../../../../libs/nestjs-helpers/src'

@Decorators.Inject()
export class UsersService {
  constructor(
    
  ){}

  async updateOrCreateUser(user: UpdateOrCreateUserMessage): Promise<void> {}
}
