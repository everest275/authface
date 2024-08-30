import Model from '../../components/ORM-factory/pool-builder'

const Schema = new Model({
    membership: {
        type: "VARCHAR(255)",
        nullable: false
    },
    membership_description: {
        type: "VARCHAR(255)",
        nullable: false
    },
    membership_duration_days: {
        type: "INT",
        nullable: true
    },
    membership_range: {
        type: "VARCHAR(255)",
        nullable: false,
        references: {
            table: "type_values",
            field: "id"
        }
    },
    membership_state: {
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

export default Schema.exportModel("memberships", Schema)

