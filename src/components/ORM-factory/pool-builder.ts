import PoolAbstract from "./pool-abstract";

export default class PoolBuilder extends PoolAbstract {
    constructor(newSchema: { [key: string]: any }, newConfig: { [key: string]: any }) {
        super(newSchema, newConfig);
    }

    exportModel(modelName: string, newSchema: any) {
        const decorator = (modelName: string) => {
            this.ExportModel(modelName, newSchema);

            class Decorator {
                newData: { [key: string]: any };
                constructor(newData?: { [key: string]: any }) {
                    this.newData = newData ? newData : {};
                }

                async save() {
                    const result = await Decorator.service.Save(this.newData);
                    return result;
                }

                static service: any;

                static find: (obj?: { [key: string]: any }) => any;
                static findById: (id: string) => any;
                static findOne: (obj: { [key: string]: any }) => any;
                static findByIdAndDelete: (id: string) => any;
                static findByIdAndUpdate: (id: string, obj: { [key: string]: any }) => any;

                // Métodos encadenables
                static populate: (columnName?: string) => any;
            }

            Decorator.service = this;

            class QueryBuilder {
                private query: any;
                private populations: string[];

                constructor(query: any) {
                    this.query = query;
                    this.populations = [];
                }

                async execute() {
                    let result = await Decorator.service.Find(this.query);
                    // Aquí deberías agregar la lógica para realizar las operaciones de populate en los resultados.

                    try {
                        for (const column of this.populations) {
                            // Realiza la operación de populate aquí
                            for (let item of result) {
                                const schema = Decorator.service.getSchema()

                                for (const key in schema) {
                                    if (key === column) {
                                        const table = schema[key].references.table
                                        // const field=schema[key].references.field
                                        const newService = Decorator.service.getNewService(table)

                                        item[column] = await newService.getById(item[column])
                                    }
                                }

                            }
                        }
                    } catch (error) {
                        return result;
                    }

                    return result;
                }

                // async populateReferences(data: any, column: string) {
                //     if (Array.isArray(data)) {
                //         for (let item of data) {
                //             console.log(item[column],Decorator.service.getSchema()[column])
                //         }
                //     }
                //     return data;
                // }

                populate(columnName: string) {
                    this.populations.push(columnName);
                    return this;
                }

                async then(resolve: any, reject: any) {
                    try {
                        const result = await this.execute();
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                }
            }

            Decorator.find = (obj?: { [key: string]: any }) => {
                const queryBuilder = new QueryBuilder(obj);
                return queryBuilder;
            };
            Decorator.findById = (id: string) => {
                const result = this.FindById(id)
                return result

            };
            Decorator.findOne = (obj: { [key: string]: any }) => {
                const result = this.FindOne(obj)
                return result
            };
            Decorator.findByIdAndDelete = (id: string) => {
                const result = this.FindByIdAndDelete(id)
                return result
            };

            Decorator.findByIdAndUpdate = (id: string, obj: { [key: string]: any }) => {
                const result = this.FindByIdAndUpdate(id, obj)
                return result
            };


            return Decorator;
        };

        return decorator(modelName);
    }
}
