import { InMemoryDBModule } from "@nestjs-addons/in-memory-db";
import { Module } from "@nestjs/common";
import { AssetMetricsService } from "./asset-metrics.service";
import { AssetsResolver } from "./assets.resolver";

@Module({
    imports: [InMemoryDBModule.forFeature('asset', {})],
    providers: [AssetsResolver, AssetMetricsService],
    exports: []
})
export class AssetsModule { }
