import { Pool } from 'pg'

export const pool= new Pool({
    user:"postgres",
    host:"localhost",
    password:"Josuenito01",
    database:"authface",
    port:5432
})