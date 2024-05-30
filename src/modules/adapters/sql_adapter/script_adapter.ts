type ColumnDefinition = {
    type: string;
    references?: {
        table: string;
        field: string;
    };
    nullable?: boolean;
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
        let foreignKeys = '';

        for (const key in this.schema) {
            if (this.schema.hasOwnProperty(key)) {
                const column = this.schema[key];
                let columnDef = `${key} ${column.type}`;

                if (column.nullable === false) {
                    columnDef += ' NOT NULL';
                }

                columns += `${columnDef},\n`;

                const references = column.references;
                if (references) {
                    const { table, field } = references;
                    foreignKeys += `FOREIGN KEY (${key}) REFERENCES ${table}(${field}),\n`;
                }
            }
        }

        // Remove the last comma and newline from columns and foreignKeys
        columns = columns.trim().slice(0, -1);
        foreignKeys = foreignKeys.trim().slice(0, -1);

        const scriptSql = `
        CREATE TABLE IF NOT EXISTS ${tableName} (
        ${columns}${foreignKeys ? ',\n' + foreignKeys : ''}
        );
        `;
        return scriptSql;
    }
}


