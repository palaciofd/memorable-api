import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { AssetType } from "./asset-types.entity";

@ObjectType()
export class Asset implements InMemoryDBEntity {
    @Field()
    id: string;

    @Field()
    type: AssetType;

    @Field()
    fileName: string;

    @Field()
    extension: string;

    @Field(() => Int, { nullable: true })
    scoreType1?: number;

    @Field(() => Int, { nullable: true })
    scoreType2?: number;

    @Field(() => Int, { nullable: true })
    scoreType3?: number;
}