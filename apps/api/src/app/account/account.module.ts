import { Module } from '@nestjs/common';
import { AccountService } from './services/account.service';
import { AccountResolver } from './resolvers/account.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../entities/account.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Account
    ])
  ],
  providers: [
    AccountResolver,
    AccountService
  ],
})
export class AccountModule {}
