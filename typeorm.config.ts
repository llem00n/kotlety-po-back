import { DataSource } from "typeorm";
import * as dotenv from 'dotenv'
dotenv.config();

export default new DataSource({
  type: process.env.DB_PROVIDER as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    __dirname + '/../**/*.model.ts',
  ],
  migrations: ['migrations/*{.ts,.js}'],
})