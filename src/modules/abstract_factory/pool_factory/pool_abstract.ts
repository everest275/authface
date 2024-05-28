import Services from './pool_strategy'
import SqlAdapter from '../../adapters/sql_adapter/script_adapter'

abstract class AbstractPool {

    private model: { [key: string]: any }

    constructor() {
        this.model =
            [
                {
                    name: "",
                    key: ""
                },
                {
                    _id: "",
                    schema: {},
                    data: {}
                },
                {
                    times: false
                }
            ]
    }

    //Services
    getServices(module: string) {
        const serivces = new Services(module)
        return serivces
    }

    //Key
    setKey(key: string) {
        return this.model[0].key = key
    }
    getKey() {
        return this.model[0].key
    }

    //Model
    getModelName() {
        return this.model[0].name
    }
    setModelName(name: string) {
        this.model[0].name = name
    }

    //UUID
    setUID() {
        const newRandomId = this.model[1]._id = crypto.randomUUID()
        return newRandomId
    }


    //Schema
    setSchema(schema: { [key: string]: any }) {
        this.model[1].schema = schema
    }
    getSchema() {
        return this.model[1].schema
    }

    //Data
    setData(data: { [key: string]: any }) {
        this.model[1].data = data
    }
    getData() {
        return this.model[1].data
    }

    //Times
    setTimes() {
        if (this.model[2].times) {
            this.model[1].data.created_at = new Date()
            this.model[1].data.updated_at = new Date()
        }
    }

    async createTables() {

        const service = new Services(this.getModelName())

        try {
            const tables = await service.getAllTables()
            const isTableCreated = tables.includes(this.getModelName()) ? false : true
            isTableCreated ? await service.createTableFromAbstractModel(new SqlAdapter(this.getSchema()).objectToSql(this.getModelName())) : null
        } catch (error) {
            console.log(error)
        }
    }
}

export const PoolAbstract = AbstractPool

