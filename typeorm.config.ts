import { DataSource } from "typeorm";
import * as dotenv from 'dotenv'
import { getConfig } from "src/datasource.config";
dotenv.config();

export default new DataSource(getConfig())