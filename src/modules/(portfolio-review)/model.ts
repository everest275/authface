import Model from '../../components/ORM-factory/pool-builder'

const Schema = new Model({
    reviewer_user: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "users",
            field: "id"
        }
    },
    review_user: {
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
    comment: {
        type: "TEXT",
        nullable: false
    },
    is_accept: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "type_values",
            field: "id"
        }
    },
    review_state: {
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

export default Schema.exportModel("portfolio_reviews", Schema)

