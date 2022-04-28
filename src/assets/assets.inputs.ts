import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, Max, MaxLength, Min, MinLength } from 'class-validator';
import { AssetType, ScoreType } from './asset-types.entity';
import { Asset } from './asset.entity';

@InputType()
export class AssetPostInput implements Partial<Asset>  {
    @Field()
    @IsNotEmpty()
    type: AssetType;

    @Field()
    @IsNotEmpty()
    fileName: string;

    @Field()
    @MinLength(3)
    @MaxLength(4)
    extension: string;

    @Field(() => Int, { nullable: true })
    @IsOptional()
    @Min(0)
    @Max(100)
    scoreType1?: number;

    @Field(() => Int, { nullable: true })
    @IsOptional()
    @Min(0)
    @Max(100)
    scoreType2?: number;

    @Field(() => Int, { nullable: true })
    @IsOptional()
    @Min(0)
    @Max(100)
    scoreType3?: number;
}

@InputType()
export class AssetScoresPutInput implements Partial<Asset>  {
    @Field()
    @IsNotEmpty()
    id: string;

    @Field(() => Int)
    @IsNotEmpty()
    @Min(0)
    @Max(100)
    scoreType1?: number;

    @Field(() => Int)
    @IsNotEmpty()
    @Min(0)
    @Max(100)
    scoreType2?: number;

    @Field(() => Int)
    @IsNotEmpty()
    @Min(0)
    @Max(100)
    scoreType3?: number;
}

@InputType()
export class AverageScoreInput {
    @Field()
    @IsNotEmpty()
    assetType: AssetType;

    @Field()
    @IsNotEmpty()
    scoreType: ScoreType;
}