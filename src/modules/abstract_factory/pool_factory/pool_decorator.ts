export default class PoolDecorator {
    constructor(private service: any) {}

    find = (objectToFind: string) => {
        console.log(objectToFind)
        return this
    }

    populate = (column?: string) => {
        console.log(column)
        return this
    }

    async execute() {
        // Simulación de una ejecución de consulta real
        console.log("Executing query...")
        return this.service.getAll() // Simulamos que llama al servicio para obtener los datos
    }
}

