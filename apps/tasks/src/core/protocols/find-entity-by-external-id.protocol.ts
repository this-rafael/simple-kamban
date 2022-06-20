import { PartialAnd } from '../../../../../libs/global-types/src'

export abstract class FindEntityByExternalIdProtocol<T> {
  abstract perform(externalId: string): Promise<T & { externalId: string }>
}
