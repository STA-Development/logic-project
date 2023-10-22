import {DataSource} from 'typeorm'
import * as dotenv from 'dotenv'
import {CustomerInfo} from '../entities/customer-info'
import {DesiredLanes} from '../entities/desired-lanes'

dotenv.config()

  export const dbmsMysql = new DataSource({
    type :"sqlite",
    database: "dbName",
     //host: process.env.DB_HOST,
     //username: process.env.DB_USER,
    //password: process.env.DB_PASSWORD,
    //database: process.env.DB_NAME,
    //port: parseInt(process.env.DB_PORT || '3306'),
    entities: [CustomerInfo,DesiredLanes],
    synchronize: false,
})
