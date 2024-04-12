/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
// import { graphqlUploadExpress } from 'graphql-upload/graphqlUploadExpress.js';
import { graphqlUploadExpress } from 'graphql-upload';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  
  app.enableCors();
  
  app.setGlobalPrefix(globalPrefix);
  
  // const { default: graphqlUploadExpress } = await import(
  //   'graphql-upload/graphqlUploadExpress.js'
  // );

  // app.use(
  //   '/graphql',
  //   graphqlUploadExpress({ maxFileSize: 100000000, maxFiles: 10 })
  // );

  app.use(graphqlUploadExpress({maxFileSize: 1000000, maxFiles: 10 }));

  const port = process.env.PORT || process.env.API_PORT || 5001;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
