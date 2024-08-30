import { Request, Response } from 'express'
import Model from './type-value-model'

export const getAll = async (_req: Request, res: Response) => {
    const result = await Model.find().populate("type")
    res.json(result)
}

export const getOne = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await Model.findById(id)
    res.json(result)
}

export const create = async (req: Request, res: Response) => {
    const { typeId, typeValueDescription, state } = req.body
    const newType = new Model({
        type: typeId,
        type_value: typeValueDescription,
        state: state
    })
    const savedType = await newType.save()
    res.json(savedType)
}

export const edit = async (req: Request, res: Response) => {
    const { typeId, typeValue } = req.body
    const id = req.params.id
    const savedType = await Model.findByIdAndUpdate(id, {
        type: typeId,
        type_value: typeValue
    })
    res.json(savedType)
}

export const remove = async (req: Request, res: Response) => {
    const id = req.params.id
    const removedType = await Model.findByIdAndDelete(id)
    res.json(removedType)
}
