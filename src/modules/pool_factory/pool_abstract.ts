import Services from './pool_strategy'
import SqlAdapter from './pool_adapter'

export default abstract class AbstractPool {

    private model: { [key: string]: any }

    constructor(newSchema: { [key: string]: any }, newConfigOne: { [key: string]: any }) {
        this.model = [
            {
                name: ""
            },
            {
                _id: "",
                schema: newSchema,
                data: {}
            },
            newConfigOne
        ]
    }

    getModelName() {
        return this.model[0].name
    }
    setModelName(name: string) {
        this.model[0].name = name
    }
    setUID() {
        const newRandomId = this.model[1]._id = crypto.randomUUID()
        return newRandomId
    }
    setSchema(schema: { [key: string]: any }) {
        this.model[1].schema = schema
    }
    setConfigOne(configOne: { [key: string]: any }) {
        this.model[2] = configOne
    }
    getConfigOne() {
        return this.model[2]
    }
    getTimes() {
        return this.model[2].times
    }
    getSchema() {
        return this.model[1].schema
    }
    setData(data: { [key: string]: any }) {
        this.model[1].data = data
    }
    getData() {
        return this.model[1].data
    }
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

     getNewService(modelName:string){
        return  new Services(modelName)
    }
    async getTables() {
        const service = new Services(this.getModelName())
        const tables = await service.getAllTables()
        return tables
    }

    //To Export and Service
    New(newData: { [key: string]: any }) {
        this.setData(newData)
        return this
    }

    NewSchema(schema: { [key: string]: any }, configOne: { [key: string]: any }) {
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

        return filter
    }

    ExportModel(modelName: string, schema: any) {
        this.setModelName(modelName)
        this.setConfigOne(schema.getConfigOne())
        this.setSchema(this.NewSchema(schema.getSchema(), schema.getConfigOne()))

        return this;
    }

    Find = async (findObject?: { [key: string]: any }) => {
        await this.createTables()
        const service = new Services(this.getModelName())
        try {
            let result = await service.getAll()
            const filter = []
            if (findObject) {
                for (const _row of result) {
                    let result = []
                    if (findObject[0]) {
                        result = await this.FindOne(findObject[0]);
                        if (result) {
                            result = await this.FindOne(findObject[0]);
                        }
                    }
                    result = await this.FindOne(findObject);
                    if (result) {
                        if (findObject[1]) {
                            result = await this.FindOne(findObject[1]);
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
            return error;
        }
    }

    async FindById(id: string) {
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

    async FindOne(i: { [key: string]: any }) {
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

    async Save(newData: { [key: string]: any }) {
        await this.createTables()
        const service = new Services(this.getModelName())
        try {
            let data = newData
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

    async FindByIdAndUpdate(id: string, newData: { [key: string]: any }) {
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

    async FindByIdAndDelete(id: string) {
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

}



