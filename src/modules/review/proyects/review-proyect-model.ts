import Model from '../../../components/ORM-factory/pool-builder'

const Schema = new Model({
    viewer_user: {
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
    proyect: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "portfolio_proyects",
            field: "id"
        }
    },
    comment: {
        type: "TEXT",
        nullable: false
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

