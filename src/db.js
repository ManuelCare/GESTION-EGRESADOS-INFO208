import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: "estudiante",
    password: "123456",
    port: 3306,
    database: 'proyecto'
})