import { Decorators } from '../../../../../libs/nestjs-helpers/src'
import { CreateUserModel } from '../../core/models/create-user.model'
import { UserModel } from '../../core/models/user.model'
import { CreateUserProtocol } from '../../core/protocols/create-user.protocol'
import { PrismaHandler } from '../../infra/handler/prisma.handler'

@Decorators.Inject()
export class CreateUserConnector implements CreateUserProtocol {
  constructor(private readonly prisma: PrismaHandler) {}

  async createUser({
    externalId: external_id,
    nickname,
  }: CreateUserModel): Promise<UserModel> {
    const { external_id: externalId, id } = await this.prisma.users.create({
      data: {
        nickname,
        external_id,
      },
    })

    return {
      externalId,
      id: Number(id),
      nickname,
    }
  }
}
