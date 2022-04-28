import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      path: '/api/graphql',
      autoSchemaFile: true,
      driver: ApolloDriver
    }),
    AssetsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
