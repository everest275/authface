import Services from './pool_strategy'
import SqlAdapter from '../../adapters/sql_adapter/script_adapter'

export default abstract class AbstractPool {

    private model: { [key: string]: any }

    constructor() {
        this.model = [
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

    New(newData: { [key: string]: any }) {
        this.setData(newData)
        return this
    }

    ModelName(name: string) {
        this.setModelName(name)
        return this.getModelName()
    }

    Schema(schema: { [key: string]: any }, configOne: { [key: string]: any }) {
        const filter = schema
        if (configOne.times) {
            filter.created_at = {
                type: "TIMESTAMP"
            }
            filter.updated_at = {
                type: "TIMESTAMP"
            }
        }

        filter.id = {
            type: "VARCHAR(255) PRIMARY KEY"
        }
        return [{ schema, configOne }]
    }

    ExportModel(modelKey: string, schema: { [key: string]: any }, modelName: string) {
        this.setKey(modelKey)
        this.setModelName(modelName)
        this.setSchema(schema[0].schema)
        return this;
    }

    async findById(id: string) {
        await this.createTables()
        const service = new Services(this.getModelName())
        try {
            const result = await service.getById(id)
            return result

        } catch (error) {
            console.log(error)
            return error
        }
    }

    async findOne(i: { [key: string]: any }) {
        await this.createTables()
        const service = new Services(this.getModelName())
        try {
            const result = await service.getByFields(i)
            return result

        } catch (error) {
            console.log(error)
            return error
        }
    }

    async getTables() {
        const service = new Services(this.getModelName())
        const tables = await service.getAllTables()
        return tables
    }

    async save() {
        await this.createTables()
        const service = new Services(this.getModelName())
        try {
            let data = this.getData()
            data.id = this.setUID()
            data.created_at = new Date()
            data.updated_at = new Date()
            const result = await service.post(data)
            return result
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async findByIdAndUpdate(id: string, newData: { [key: string]: any }) {
        await this.createTables()
        const service = new Services(this.getModelName())
        try {
            const filter = newData
            filter.updated_at = new Date().toISOString()
            console.log(filter)
            const result = await service.put(id, filter)

            return result

        } catch (error) {
            console.log(error)
            return error
        }
    }

    async findByIdAndDelete(id: string) {
        await this.createTables()
        const service = new Services(this.getModelName())
        try {
            const result = await service.remove(id)
            return result
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async Find(findObject?: { [key: string]: any }) {

        await this.createTables()

        const service = new Services(this.getModelName())
        try {
            let result = await service.getAll()
            const filter = []
            if (findObject) {
                for (const _row of result) {
                    let result = []
                    if (findObject[0]) {
                        result = await this.findOne(findObject[0]);
                        if (result) {
                            result = await this.findOne(findObject[0]);
                        }
                    }
                    result = await this.findOne(findObject);
                    if (result) {
                        if (findObject[1]) {
                            result = await this.findOne(findObject[1]);
                            filter.push(result);
                        } else {
                            filter.push(result);
                        }
                    }
                }
                result = filter[0]
            }

            return result

        } catch (error) {
            console.log(error)
            return this;
        }

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



