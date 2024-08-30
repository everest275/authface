import Model from '../../../components/ORM-factory/pool-builder'

const Schema = new Model({

    picture_user: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: 'users',
            field: 'id'
        },
    },
    portfolio: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: 'portfolios',
            field: 'id'
        },
    },
    picture_data: {
        type: "TEXT",
        nullable: false
    },
    picture_state: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: 'type_values',
            field: 'id'
        },
    }
},
    {
        times: true
    })

export default Schema.exportModel("portfolio_pictures", Schema)

