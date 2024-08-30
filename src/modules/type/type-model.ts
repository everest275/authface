import Model from '../../components/ORM-factory/pool-builder'

const Schema = new Model({

    type_name: {
        type: "VARCHAR(255)",
        nullable: false
    },
    type_description: {
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

export default Schema.exportModel("types",Schema)

