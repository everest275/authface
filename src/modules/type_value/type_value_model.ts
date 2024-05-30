import Model from '../abstract_factory/pool_factory/pool_builder'

const model = new Model()
const Schema = model.Schema({

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

export default model.ExportModel("TypeValue", Schema, "type_values")

