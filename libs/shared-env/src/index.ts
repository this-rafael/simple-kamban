import { config } from 'dotenv'
import { EnvironmentModel } from './environment.model'

export * from './environment.model'

export function configEnvironment(): void {
  config()

  const { env } = process

  if (env.NODE_ENV === 'prod') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    EnvironmentModel.setVars(env as any)
  }
}
