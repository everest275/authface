import Model from '../../components/ORM-factory/pool-builder'

const Schema = new Model({

    type: {
        type: "VARCHAR(255)",
        references: {
            table: 'types',
            field: 'id'
        },
        nullable: false
    },
    type_value: {
        type: "VARCHAR(255)",
        nullable: false
    },
    state: {
        type: "VARCHAR(255)",
        nullable: false
    }
},
    {
        times: true
    })

export default Schema.exportModel("type_values",Schema)

