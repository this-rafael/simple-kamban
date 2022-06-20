import { Field, InputType, ObjectType } from '@nestjs/graphql'

@InputType()
@ObjectType()
export class ExternalIdDTO {
  @Field(() => String)
  externalId: string

  constructor(externalId: string) {
    this.externalId = externalId
  }
}
