import Model from '../../components/ORM-factory/pool-builder'

const Schema = new Model({
    store_user: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "users",
            field: "id"
        }
    },
    store_type: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "type_values",
            field: "id"
        }
    },
    store_style: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "type_values",
            field: "id"
        }
    },
    name: {
        type: "VARCHAR(255)",
        nullable: false
    },
    description: {
        type: "VARCHAR(255)",
        nullable: false
    },
    telephone: {
        type: "VARCHAR(255)",
        nullable: false
    },
    email: {
        type: "VARCHAR(255)",
        nullable: false
    },
    openingDate: {
        type: "VARCHAR(255)",
        nullable: false
    },
    country: {
        type: "VARCHAR(255)",
        nullable: false
    },
    city: {
        type: "VARCHAR(255)",
        nullable: false
    },
    store_state: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "type_values",
            field: "id"
        }
    }
},
    {
        times: true
    })

export default Schema.exportModel("stores", Schema)

