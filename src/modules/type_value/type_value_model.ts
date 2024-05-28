// import PgModel from '../abstract_factory/pool_factory/pool.model'
import TypeModel from '../abstract_factory/pool_factory/pool_model'

const TypeSchema = TypeModel.Schema({

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

export default TypeModel.ExportModel("Type", TypeSchema, "types")

