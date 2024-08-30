import Model from '../../components/ORM-factory/pool-builder'

const Schema = new Model({

    user_name: {
        type: "VARCHAR(255)",
        nullable: false
    },
    name: {
        type: "VARCHAR(255)",
        nullable: false
    },
    email: {
        type: "VARCHAR(255)",
        nullable: false
    },
    gender: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: 'type_values',
            field: 'id'
        },
    },
    birth: {
        type: "TIMESTAMP",
        nullable: false
    },
    password: {
        type: "VARCHAR(255)",
        nullable: false
    },

    user_membership: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: 'memberships',
            field: 'id'
        },
    },
    user_state: {
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

export default Schema.exportModel("users", Schema)

