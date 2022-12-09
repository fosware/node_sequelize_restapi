
import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

export const sequelize = new Sequelize(
    process.env.DBNAME, 
    process.env.DBUSER, 
    process.env.DBPASSWORD, {
        host: process.env.DBHOST, 
        dialect: process.env.DBDIALECT, 
    }
)
;
