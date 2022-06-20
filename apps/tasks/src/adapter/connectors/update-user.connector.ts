import { PartialAnd } from '../../../../../libs/global-types/src'
import { Decorators } from '../../../../../libs/nestjs-helpers/src'
import { UserModel } from '../../core/models/user.model'
import { UpdateUserProtocol } from '../../core/protocols/update-user.protocol'
import { PrismaHandler } from '../../infra/handler/prisma.handler'

@Decorators.Inject()
export class UpdateUserConnector implements UpdateUserProtocol {
  constructor(private readonly prisma: PrismaHandler) {}

  async updateUser({
    externalId: external_id,

    nickname,
  }: PartialAnd<UserModel, { externalId: string }>): Promise<UserModel> {
    const response = await this.prisma.users.update({
      where: {
        external_id,
      },
      data: {
        nickname,
      },
    })

    return {
      externalId: response.external_id,
      id: Number(response.id),
      nickname: response.nickname,
    }
  }
}
