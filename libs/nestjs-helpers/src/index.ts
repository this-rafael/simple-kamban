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

export class StrategyType<T> {
  token: string
  factory: (...types: T[]) => StrategyAnalyzer<T>
  injections: Type<T>[]
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

  feature<A, B extends A, C, D extends C>(
    strategy: Type<A> | InjectionToken,
    usecase: Type<B>,
    protocol: Type<C> | InjectionToken,
    connector: Type<D>,
  ): Provider[] {
    return [
      Generate.provider<A, B>(strategy, usecase),
      Generate.provider<C, D>(protocol, connector),
    ]
  },

  strategyFeature<A, C, B extends A, D extends C>({
    strategy,
    protocols,
  }: {
    strategy: {
      strategyBuilder: StrategyType<A> | Type<A> | InjectionToken
      usecaseBuidler?: Type<B>
    }
    protocols?: {
      protocolBuilder: StrategyType<C> | Type<C> | InjectionToken
      connectorBuilder?: Type<D>
    }[]
  }): Provider[] {
    let strategyProvider: Provider<unknown>[] = []
    let protocolProvider: Provider<unknown>[] = []

    const strategyLike = (strategy.strategyBuilder as StrategyType<A>)?.token

    if (strategyLike) {
      strategyProvider = Generate.strategyProvider<A>(
        strategy.strategyBuilder as StrategyType<A>,
      )
    } else {
      ok(strategy.usecaseBuidler)
      strategyProvider = [
        Generate.provider(
          strategy.strategyBuilder as Type<A> | InjectionToken,
          strategy.usecaseBuidler,
        ),
      ]
    }
    if (protocols) {
      for (const protocol of protocols) {
        const protocolLike = (protocol.protocolBuilder as StrategyType<C>)
          ?.token
        if (protocolLike) {
          protocolProvider.push(
            ...Generate.strategyProvider<C>(
              protocol.protocolBuilder as StrategyType<C>,
            ),
          )
        } else {
          ok(protocol.connectorBuilder)
          protocolProvider.push(
            Generate.provider(
              protocol.protocolBuilder as Type<C> | InjectionToken,
              protocol.connectorBuilder,
            ),
          )
        }
      }
    }

    return [...strategyProvider, ...protocolProvider]
  },

  strategyProvider<T>({
    token,
    factory,
    injections,
  }: StrategyType<T>): Provider<unknown>[] {
    const inject = injections ?? []
    const strategy = {
      provide: token,
      inject,
      useFactory: factory,
    }

    return [strategy, ...inject]
  },
}

export const {
  useValue,
  mockedProvider,
  strategyProvider,
  provider,
  feature,
  strategyFeature,
} = Generate
