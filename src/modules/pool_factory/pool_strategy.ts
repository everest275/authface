import { pool } from '../../databases/pg';
import { QueryResult } from 'pg';

export default class AuthfaceService {
    private table: string;

    constructor(table: string) {
        this.table = table;
    }

    //Get all data from table
    public async getAll() {
        try {
            const response: QueryResult = await pool.query(`SELECT * FROM ${this.table}`);
            const filter = response.rows
            return filter;
        } catch (error) {
            throw error;
        }
    }

    //Get by Id from table
    public async getById(id: string) {
        try {
            const response: QueryResult = await pool.query(`SELECT * FROM ${this.table} WHERE id = $1`, [id]);
            const filter = response.rows[0]
            return filter;
        } catch (error) {
            throw error;
        }
    }


    //Post data to table
    public async post(data: { [key: string]: any }) {
        const columns = Object.keys(data).join(', ');
        const values = Object.values(data);
        const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');
        try {
            const result = await pool.query(
                `INSERT INTO ${this.table} (${columns}) VALUES (${placeholders}) RETURNING *`,
                values
            );
            const filter = result.rows[0]
            return filter;
        } catch (error) {
            throw error;
        }
    }

    //Put data to table
    public async put(id: string, data: { [key: string]: any }) {
        const columns = Object.keys(data);
        const values = Object.values(data);
        const setClause = columns.map((column, index) => `${column} = $${index + 1}`).join(', ');
        try {
            const result = await pool.query(
                `UPDATE ${this.table} SET ${setClause} WHERE id = $${columns.length + 1} RETURNING *`,
                [...values, id]
            );
            const filter = result.rows[0]
            return filter;
        } catch (error) {
            throw error;
        }
    }

    //Delete data in table
    public async remove(id: string) {
        try {
            const result: QueryResult = await pool.query(`DELETE FROM ${this.table} WHERE id = $1 RETURNING *`, [id]);
            const filter = result.rows[0]
            return filter;
        } catch (error) {
            throw error;
        }
    }

    //Get entire Object from table
    public async getByFields(fields: { [key: string]: any }) {
        try {
            const keys = Object.keys(fields);
            const values = Object.values(fields);
            const conditions = keys.map((key, index) => `${key} = $${index + 1}`).join(' AND ');
            const query = `SELECT * FROM ${this.table} WHERE ${conditions}`;
            const result: QueryResult = await pool.query(query, values);
            const toArray: any = result.rows.length !== 0 ? result.rows : false;
            if (!toArray) {
                return false;
            }
            const objectResult: any = toArray;
            return objectResult;
        } catch (error) {
            throw error;
        }
    }

    //Get all table names from database
    public async getAllTables() {
        try {
            const query = `SELECT table_name FROM information_schema.tables WHERE table_schema='public'`;
            const result: QueryResult = await pool.query(query);
            return result.rows.map(row => row.table_name);
        } catch (error) {
            throw error;
        }
    }

    // Crear una nueva tabla en la base de datos a partir de un esquema definido con AbstractModel
    public async createTableFromAbstractModel(createTableQuery: string) {
        try {
            // Ejecutar la consulta SQL para crear la tabla
            pool.query(createTableQuery)
                .then(_res => {
                    console.log(`${this.table} created`);
                    // Realizar otras operaciones si es necesario
                })
                .catch(err => {
                    console.error('Error al crear la tabla:', err);
                });
        } catch (error) {
            console.error('Error al crear la tabla:', error);
            throw error;
        }
    }


}


