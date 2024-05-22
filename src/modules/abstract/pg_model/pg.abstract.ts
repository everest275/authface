export default abstract class AbstractModel {

    model: { [key: string]: any }

    constructor() {

        this.model = [

            {
                name: "",
                key: ""
            },
            {
                id_: "",
                schema: {},
                data: []
            },
            {
                times: false
            }
        ]
    }


   
}
