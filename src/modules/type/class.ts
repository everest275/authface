import AbstractModel from '../abstract/pg_model/pg.model'

const TypeModel = new AbstractModel()

const schema = TypeModel.Schema({

    id: {
        type: "SERIAL PRIMARY KEY"
    },
    type_name: {
        type: "VARCHAR(255)"
    },
    type_description: {
        type: "VARCHAR(255)"
    },
    state: {
        type: "VARCHAR(255)"
    }
},
    {
        times: true
    })

export default TypeModel.ExportModel("Type", schema, "types")

