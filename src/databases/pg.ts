import { Pool } from 'pg'
import { config } from 'dotenv';
config()

export const pool= new Pool({
    user: process.env.DATABASE_USER || 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    password: process.env.DATABASE_PASSWORD || 'Josuenito01',
    database: process.env.DATABASE_NAME || 'authface',
    port: Number(process.env.DATABASE_PORT) || 5432
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