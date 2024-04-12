import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const postgresqlDataSource: DataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  // port: parseInt(process.env.POSTGRES_PORT),
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  migrations: ['apps/api-gateway/src/app/databases/postgres/migrations/*.ts'],
  migrationsTableName: 'migrations',
});

export default postgresqlDataSource;
