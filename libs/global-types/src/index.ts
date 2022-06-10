export type PartialTypeWithId<T extends { externalId: string }> = Partial<T> & {
  externalId: string
}

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T
