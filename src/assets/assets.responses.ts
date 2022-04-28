import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AverageScoreResult {
    @Field(() => Int, { nullable: true })
    averageScore: number;
}