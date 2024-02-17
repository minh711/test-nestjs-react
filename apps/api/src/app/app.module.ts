import { Module } from '@nestjs/common';

import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities';
import { GraphQLModule } from '@nestjs/graphql';

import { DatabaseModule } from '../../../api-gateway/src/app/databases/database.module';
import { join } from 'path';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: { federation: 2 },
    }),
    TypeOrmModule.forFeature([Account]),
    DatabaseModule,
    AccountModule
  ],
})
export class AppModule {}
