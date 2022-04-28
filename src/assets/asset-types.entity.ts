import { registerEnumType } from "@nestjs/graphql";

export enum AssetType {
    VIDEO = 1,
    IMAGE = 2
}

export enum ScoreType {
    TYPE1 = 1,
    TYPE2 = 2,
    TYPE3 = 3
}

registerEnumType(AssetType, {
    name: 'AssetType',
    description: 'Available asset types'
});

registerEnumType(ScoreType, {
    name: 'ScoreType',
    description: 'Available score types'
});