import { Request, Response } from 'express'
import Model from './abilitie-model'

export const getAll = async (req: any, res: Response) => {
    const result = await Model.find({abilitie_user:req.user.id})
    res.json(result)
}


export const getOne = async (req: Request, res: Response) => {

    const id = req.params.id
    const result = await Model.findById(id)
    res.json(result)
}
export const getAllByProyect = async (req: Request, res: Response) => {

    const id = req.params.id
    const result = await Model.find({proyect:id})
    res.json(result)
}

export const create = async (req: Request, res: Response) => {

    const { abilitie_user,abilitie_type,proyect, comment, abilitie_state } = req.body
    const newData = new Model({
        abilitie_user: abilitie_user,
        abilitie_type: abilitie_type,
        proyect:proyect,
        comment: comment,
        abilitie_state: abilitie_state
    })
    const savedData = await newData.save()
    res.json(savedData)

}

export const edit = async (req: Request, res: Response) => {

    const { abilitie_user,abilitie_type,proyect, comment, abilitie_state } = req.body
    const id = req.params.id
    const savedType = await Model.findByIdAndUpdate(id, {
        abilitie_user: abilitie_user,
        abilitie_type: abilitie_type,
        proyect:proyect,
        comment: comment,
        abilitie_state: abilitie_state
    })
    res.json(savedType)
}

export const remove = async (req: Request, res: Response) => {

    const id = req.params.id
    const removedData = await Model.findByIdAndDelete(id)
    res.json(removedData)
}