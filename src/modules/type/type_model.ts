// import PgModel from '../abstract_factory/pool_factory/pool.model'
import TypeModel from '../abstract_factory/pool_factory/pool_builder'

const model = new TypeModel()

const TypeSchema = model.Schema({

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

export default model.ExportModel("Type", TypeSchema, "types")

