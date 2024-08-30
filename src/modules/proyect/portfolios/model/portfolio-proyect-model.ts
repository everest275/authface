import Model from '../../../../components/ORM-factory/pool-builder'

const Schema = new Model({

    proyect_user: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "users",
            field: "id"
        }
    },
    portfolio: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "portfolios",
            field: "id"
        }
    },
    title: {
        type: "VARCHAR(255)",
        nullable: false
    },
    position: {
        type: "VARCHAR(255)",
        nullable: false
    },
    description: {
        type: "VARCHAR(255)",
        nullable: false
    },
    proyect_state: {
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

export default Schema.exportModel("portfolio_proyects", Schema)

