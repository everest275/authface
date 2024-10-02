import Model from '../../components/ORM-factory/pool-builder'

const Schema = new Model({

    abilitie_user: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "users",
            field: "id"
        }
    },
    abilitie_type: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "type_values",
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
    comment: {
        type: "TEXT",
        nullable: false
    },
    abilitie_state: {
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

export default Schema.exportModel("portfolio_abilities", Schema)

