import { Decorators } from '../../../../../libs/nestjs-helpers/src'
import { CreateTaskProtocol } from '../../core/protocols/create-task.protocol'

@Decorators.Inject()
export class CreateTaskConnector implements CreateTaskProtocol {}
