import Model from '../../components/ORM-factory/pool-builder'

const Schema = new Model({
    portfolio_user: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "users",
            field: "id"
        }
    },
    portfolio_type: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "type_values",
            field: "id"
        }
    },
    portfolio_style: {
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

    title: {
        type: "VARCHAR(255)",
        nullable: false
    },
    description: {
        type: "VARCHAR(255)",
        nullable: false
    },
    about: {
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
    portfolio_state: {
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

export default Schema.exportModel("portfolios", Schema)

