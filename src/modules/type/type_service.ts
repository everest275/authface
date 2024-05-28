import { Request, Response } from 'express'
import Model from './type_model'

export const getAll = async (_req: Request, res: Response) => {

    const result = await Model.find({ state: "1" })
    res.json(result)
}

export const getOne = async (req: Request, res: Response) => {

    const id = req.params.id
    const result = await Model.findById(id)
    res.json(result)
}

export const create = async (req: Request, res: Response) => {

    const { typeName, typeDescription, state } = req.body
    const newType = Model.New({
        type_name: typeName,
        type_description: typeDescription,
        state: state
    })
    const savedType = await newType.save()
    res.json(savedType)

}

export const edit = async (req: Request, res: Response) => {

    const id = req.params.id
    const savedType = await Model.findByIdAndUpdate(id, req.body)
    res.json(savedType)

}

export const remove = async (req: Request, res: Response) => {

    const id = req.params.id
    const removedType = await Model.findByIdAndDelete(id)
    res.json(removedType)
}