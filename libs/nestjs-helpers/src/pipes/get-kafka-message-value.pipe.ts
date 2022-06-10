import { PipeTransform, Injectable } from '@nestjs/common'
import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface'

/**
 * @description Transform a kafka message to a value T
 * @author Rafael S Pereira
 * @date 28/05/2022
 * @export
 * @class GetKafkaMessageValue
 * @implements {PipeTransform<KafkaMessage>}
 * @template T
 */
@Injectable()
export class GetKafkaMessageValue<T> implements PipeTransform<KafkaMessage> {
  /**
   * @description Transform a kafka message to a value T
   * @author Rafael S Pereira
   * @date 28/05/2022
   * @param {KafkaMessage} { value }
   * @return {*}  {T}
   * @memberof GetKafkaMessageValue
   */
  transform({ value }: KafkaMessage): T {
    // convert buffer to json and json to object
    return value as unknown as T
  }
}
