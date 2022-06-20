import { NestFactory } from '@nestjs/core'
import { configEnvironment } from '../../../libs/shared-env/src'
import { TasksModule } from './infra/modules/main.module'

async function bootstrap(): Promise<void> {
  console.log('bbbbbbbbbbb')

  const app = await NestFactory.create(TasksModule)
  console.log('aaaaaaaaaaaaa')

  await app.listen(14000)
}

//configEnvironment()
bootstrap().then(a => console.log('funcionou'))
