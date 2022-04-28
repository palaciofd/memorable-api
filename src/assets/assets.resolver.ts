import { InjectInMemoryDBService, InMemoryDBService } from "@nestjs-addons/in-memory-db";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AssetMetricsService } from "./asset-metrics.service";
import { Asset } from "./asset.entity";
import { AssetPostInput, AssetScoresPutInput, AverageScoreInput } from "./assets.inputs";
import { AverageScoreResult } from "./assets.responses";

@Resolver(() => Asset)
export class AssetsResolver {

    constructor(
        @InjectInMemoryDBService('asset') private assetService: InMemoryDBService<Asset>,
        private readonly assetMetricsService: AssetMetricsService) {
    }

    @Query(() => Asset)
    async get(@Args('id') id: string): Promise<Asset> {
        return this.assetService.get(id);
    }

    @Query(() => [Asset])
    async getAll(): Promise<Asset[]> {
        return this.assetService.getAll();
    }

    @Mutation(() => Asset)
    async post(@Args('data') data: AssetPostInput): Promise<Asset> {
        return this.assetService.create(data);
    }

    @Mutation(() => Asset)
    async putScores(@Args('data') data: AssetScoresPutInput): Promise<Asset> {
        const target = this.assetService.get(data.id);
        const updated = Object.assign(target, data);
        this.assetService.update(updated);
        return updated;
    }

    @Query(() => AverageScoreResult)
    async getAverage(@Args('data') data: AverageScoreInput): Promise<AverageScoreResult> {
        return this.assetMetricsService.getAverage(data);
    }

}

