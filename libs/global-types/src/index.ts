import { type } from 'os'
import { UserModel } from '../../../apps/tasks/src/core/models/user.model'

export type PartialTypeWithId<T extends { externalId: string }> = Partial<T> & {
  externalId: string
}

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

export type PartialAnd<T, X> = Partial<T> & X
