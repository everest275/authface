import { Pool } from 'pg'

process.loadEnvFile("env/.env")
export const pool= new Pool({
    connectionString: process.env.PG_URL
})