import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from '../services/account.service';
import { Account } from '../../entities/account.entity';
import { UpdateAccountInput } from '../dto/update-account.input';
import { CreateAccountInput } from '../dto/create-account.input';

// import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
// import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
// import * as Upload from 'graphql-upload/Upload.js';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';

@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Query(() => [Account])
  async getAccounts(): Promise<Account[]> {
    return this.accountService.findAll();
  }

  @Query(() => Account)
  async getAccount(
    @Args('id', { type: () => Int }) id: number
  ): Promise<Account> {
    return this.accountService.findOne(id);
  }

  @Mutation(() => Account)
  async createAccount(
    @Args('input') input: CreateAccountInput
  ): Promise<Account> {
    return this.accountService.create(input);
  }

  @Mutation(() => Account)
  async updateAccount(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateAccountInput
  ): Promise<Account> {
    return this.accountService.update(id, input);
  }

  @Mutation(() => Account)
  async deleteAccount(
    @Args('id', { type: () => Int }) id: number
  ): Promise<Account> {
    return this.accountService.delete(id);
  }

  @Mutation(() => Boolean)
  async singleUpload(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload
  ) {
    return new Promise((resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./uploads/${filename}`))
        .on('finish', () => resolve(true))
        .on('error', () => reject(false))
    );
  }
}
