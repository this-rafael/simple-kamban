@Decorators.Inject()
export class UpdateUserStrategyUsecase implements UpdateUserStrategyStrategy {
  constructor(private readonly updateUserStrategyProtocol: UpdateUserStrategyProtocol) { }


}