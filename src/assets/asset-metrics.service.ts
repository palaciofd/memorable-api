import { InjectInMemoryDBService, InMemoryDBService } from "@nestjs-addons/in-memory-db";
import { Injectable } from "@nestjs/common";
import { ScoreType } from "./asset-types.entity";
import { Asset } from "./asset.entity";
import { AverageScoreInput } from "./assets.inputs";
import { AverageScoreResult } from "./assets.responses";

@Injectable()
export class AssetMetricsService {

    constructor(@InjectInMemoryDBService('asset') private assetService: InMemoryDBService<Asset>) {
    }

    getAverage(data: AverageScoreInput) {
        const assets = this.assetService.getAll()?.filter(x => x.type == data.assetType);
        let result = new AverageScoreResult();
        result.averageScore = this.calculateAverage(assets, data.scoreType);
        return result;
    }

    private calculateAverage(assets: Asset[], scoreType: ScoreType): number {
        let property = '';
        switch (scoreType) {
            case ScoreType.TYPE1:

                property = "scoreType1";
                break;
            case ScoreType.TYPE2:
                property = "scoreType2";
                break;
            case ScoreType.TYPE3:
                property = "scoreType3";
                break;
            default:
                null;
        }
        const filteredAssets = assets?.filter(x => x[property]);
        const assetsScoreSum = filteredAssets?.map(a => a[property])?.reduce(function (a, b) {
            return a + b;
        }, 0);

        if (assetsScoreSum)
            return assetsScoreSum / filteredAssets.length;

        return null;
    }
}