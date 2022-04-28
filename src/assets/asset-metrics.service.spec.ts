import { InMemoryDBModule } from "@nestjs-addons/in-memory-db";
import { Test } from "@nestjs/testing";
import { AssetMetricsService } from "./asset-metrics.service";
import { getInMemoryDBServiceToken } from "@nestjs-addons/in-memory-db/src/common";

const assetsServiceMock = {
    //mock implementation
    getAll: () => {
        return [
            {
                "id": "795d9279-a147-4b89-be07-cf963367a831",
                "fileName": "testfile1",
                "extension": "txt",
                "type": 1,
                "scoreType1": 20,
                "scoreType2": 20,
                "scoreType3": 20
            },
            {
                "id": "795d9279-a147-4b89-be07-cf963367a831",
                "fileName": "testfile2",
                "extension": "txt",
                "type": 1,
                "scoreType1": 20,
                "scoreType2": 20,
                "scoreType3": 20
            }
        ]
    }
}

describe('AssetMetricsService', () => {
    let assetMetricsService: AssetMetricsService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [InMemoryDBModule.forFeature('asset', {})],
            providers: [
                {
                    provide: getInMemoryDBServiceToken('asset'),
                    useValue: assetsServiceMock,
                },
                AssetMetricsService
            ]
        })
            .compile();

        assetMetricsService = moduleRef.get(AssetMetricsService);
    });

    it('should return null for assetType 2', async () => {
        const result = { "averageScore": null };
        expect(assetMetricsService.getAverage({ assetType: 2, scoreType: 1 })).toEqual(result);
    });

    it('should return 20 for assetType 1', async () => {
        const result = { "averageScore": 20 };
        expect(assetMetricsService.getAverage({ assetType: 1, scoreType: 1 })).toEqual(result);
    });
});