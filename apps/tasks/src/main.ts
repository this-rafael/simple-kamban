import { NestFactory } from '@nestjs/core'
import { configEnvironment } from '../../../libs/shared-env/src'
import { TasksModule } from './tasks.module'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(TasksModule)
  await app.listen(3000)
}

configEnvironment()
bootstrap()
