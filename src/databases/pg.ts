import { Pool } from 'pg'
import { loadEnv } from '../config/env'

loadEnv();

export const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: String(process.env.DATABASE_HOST),
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: Number(process.env.DATABASE_PORT)
})
export const testDBConnection = async () => {
    try {
        // Realizar una consulta simple para verificar la conexión
        const res = await pool.query('SELECT NOW()');
        console.log('Conexión exitosa a la base de datos:', res.rows[0].now);
    } catch (err) {
        console.error('Error al conectar con la base de datos:', err);
    }
};