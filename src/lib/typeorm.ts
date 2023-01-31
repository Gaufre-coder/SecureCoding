import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from '../entities/user'

// require('dotenv').config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: testUndefined("DB_HOST"),
    port: 5432,
    username: testUndefined("DB_USERNAME"),
    password: testUndefined("DB_PASSWORD"),
    database: testUndefined("DB_DATABASE"),
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})

function testUndefined(value:string) {
    const val = process.env[value]
    
    if (val === 'undefined') {
        throw new SyntaxError("Undefined value");
    }
    return process.env[value]
}

