import {DataSource} from 'typeorm'
import * as dotenv from 'dotenv'
import {CustomerInfo} from './entities/company'

dotenv.config()

export const dbmsMysql = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [CustomerInfo],
  synchronize: true,
})
