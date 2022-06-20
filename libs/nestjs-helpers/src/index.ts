import { Injectable, InjectionToken, Provider, Type } from '@nestjs/common'
import assert, { ok } from 'node:assert'

export * from './pipes/get-kafka-message-value.pipe'

export const Decorators = {
  Inject: Injectable,
}

export type Matchers<L> = {
  [key: string | symbol]: L
}

@Decorators.Inject()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class StrategyAnalyzer<L = any> {
  constructor(private readonly matchers: Matchers<L>) {}

  analyze({ context }: { context: string | symbol }): L {
    const matcher = this.matchers[context]
    if (matcher) {
      return matcher
    }
    throw new Error('Strategy not found')
  }
}

export const Generate = {
  useValue<T>(subClass: T): { useValue: T } {
    return {
      useValue: subClass,
    }
  },

  mockedProvider<T>(provide: InjectionToken, subClass: T): Provider {
    return {
      provide,
      ...Generate.useValue(subClass),
    }
  },

  provider<T, K extends T>(
    abstraction: Type<T> | InjectionToken,
    s: Type<K>,
  ): Provider<T> {
    return {
      provide: abstraction,
      useClass: s,
    }
  },

  strategyProvider<T>(
    {
      token,
      factory,
    }: {
      token: string
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      factory: (...types: T[]) => StrategyAnalyzer<T>
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...injections: Type<T>[]
  ): Provider<unknown>[] {
    const strategy = {
      provide: token,
      inject: injections,
      useFactory: factory,
    }
    return [strategy, ...injections]
  },
}

export const { useValue, mockedProvider, strategyProvider, provider } = Generate
