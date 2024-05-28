type ColumnDefinition = {
    type: string;
};

type TableDefinition = {
    [key: string]: ColumnDefinition;
};

export default class AdapterSql {
    schema: TableDefinition = {};

    constructor(schema: { [key: string]: any }) {
        this.schema = schema;
    }

    objectToSql(tableName: string) {
        let columns = '';
        for (const key in this.schema) {
            if (this.schema.hasOwnProperty(key)) {
                const columnDef = `${key} ${this.schema[key].type}`;
                columns += `${columnDef},\n`;
            }
        }

        // Remove the last comma and newline
        columns = columns.trim().slice(0, -1);

        const scriptSql = `
        CREATE TABLE IF NOT EXISTS ${tableName} (
        ${columns}
        );
        `;
        return scriptSql;
    }
}

// Ejemplo de uso:
const schema = {
    id: { type: 'INT' },
    name: { type: 'VARCHAR(255)' }
};

const adapter = new AdapterSql(schema);
adapter.objectToSql('types');
