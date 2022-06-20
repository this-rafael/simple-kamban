import { Module } from '@nestjs/common'
import { PrismaHandler } from '../handler/prisma.handler'

@Module({
  providers: [PrismaHandler],
  exports: [PrismaHandler],
})
export class PrismaModule {}
