import { Decorators } from '../../../../../libs/nestjs-helpers/src'
import { UserModel } from '../../core/models/user.model'
import { FindUserByNicknameProtocol } from '../../core/protocols/find-user.protocol'
import { PrismaHandler } from '../../infra/handler/prisma.handler'

@Decorators.Inject()
export class FindUserByNicknameConnector implements FindUserByNicknameProtocol {
  constructor(private readonly prisma: PrismaHandler) {}

  async call({
    nickname,
    take,
  }: {
    nickname: string
    take: number
  }): Promise<UserModel[]> {
    try {
      const databaseUsers = await this.prisma.users.findMany({
        take,
        where: {
          nickname,
        },
      })

      const response: UserModel[] = []

      for (const user of databaseUsers) {
        response.push({
          id: Number(user.id),
          nickname: user.nickname,
          externalId: user.externalid,
        })
      }

      return response
    } catch (error) {
      console.log(error)

      throw error
    }
  }
}
