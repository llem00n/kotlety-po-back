import { DataSourceOptions } from 'typeorm';
import dotenv from 'dotenv'
dotenv.config();

export function getConfig(): DataSourceOptions {
  return {
    type: process.env.DB_PROVIDER,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
      __dirname + '/../**/*.model.ts',
    ],
    migrations: ['migrations/*{.ts,.js}'],
  } as any
}