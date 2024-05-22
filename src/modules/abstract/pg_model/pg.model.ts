import AbstractModel from "./pg.abstract"
import { services } from './pg.config'
import SqlAdapter from '../../adapter_sql/class'

export default class AbstractSchema extends AbstractModel{
    
    constructor(){

        super()
        
    }

    New(newData: { [key: string]: any }) {
        this.model[1].data = newData
        return this
    }

    ModelName(moduleName: String) {
        this.model[0].name = moduleName
    }

    Schema(schema: { [key: string]: any }, configOne: { [key: string]: any }) {
        return [{ schema, configOne }]
    }

    ExportModel(modelKey: String, schema: { [key: string]: any }, modelName: String) {
        this.model[0].key = modelKey
        this.model[0].name = modelName
        this.model[1].schema = schema[0].schema
        return this;
    }


    async getAll() {
        const service = new services(this.model[0].name)
        try {
            const sqlAdapter = new SqlAdapter(this.model[1].schema)
            await service.createTableFromAbstractModel(sqlAdapter.objectToSql(this.model[0].name))
            return this.getTables()

        } catch (error) {
            console.log(error)
            return error
        }
    }

    async getTables() {
        const service = new services(this.model[0].name)
        const tables = await service.getAllTables()
        return tables
    }

    async createTables() {

        const service = new services(this.model[0].name)

        try {
            const tables = await service.getAllTables()
            const isTableCreated = tables.includes(this.model[0].name) ? false : true
            isTableCreated ? await service.createTableFromAbstractModel(new SqlAdapter(this.model[1].schema).objectToSql(this.model[0].name)) : null
        } catch (error) {
            console.log(error)
        }
    }

    async save() {
        await this.createTables()
        const service = new services(this.model[0].name)
        try {
            const result = await service.post(this.model[1].data)
            console.log(result[0].id)
            return result[0]

        } catch (error) {
            console.log(error)
            return error
        }
    }

    
    
}