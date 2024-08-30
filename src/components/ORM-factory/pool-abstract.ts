import Services from './pool-strategy'
import SqlAdapter from './pool-adapter'

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

    getNewService(modelName: string) {
        return new Services(modelName)
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

    async Find(findObject?: { [key: string]: any }, model?: string) {
        await this.createTables();
        const service = new Services(model ? model : this.getModelName());
    
        try {
            const allResults = await service.getAll();
            
            if (!findObject) {
                // Si findObject no está definido, devuelve todos los resultados
                return allResults;
            }
    
            // Filtra los resultados según findObject
            const filteredResults = allResults.filter(row => {
                return Object.keys(findObject).every(key => row[key] === findObject[key]);
            });
    
            return filteredResults;
        } catch (error) {
            console.error(error);
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
            return result[0]

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



