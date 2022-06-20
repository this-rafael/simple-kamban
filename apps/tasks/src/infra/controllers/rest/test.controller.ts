import { Controller, Get } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaHandler } from '../../handler/prisma.handler'

@Controller()
export class TestController {
  constructor(private readonly prisma: PrismaHandler) {}

  @Get('/')
  async test(): Promise<any> {
    console.time('test')
    const response = await this.prisma.tasks.findUnique({
      where: {
        external_id: '1a1fef24-c4be-478a-915c-caaa360218ec',
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

    console.timeEnd('test')
    console.table(response.tasks_allocation)

    return response.toString()
  }
}
