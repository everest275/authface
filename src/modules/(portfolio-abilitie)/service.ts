import { Request, Response } from 'express'
import Model from './model'
import TypeValueModel from '../(type-value)/model'

export const getAll = async (req: any, res: Response) => {
    const result = await Model.find({ abilitie_user: req.user.id })
    res.json(result)
}
export const getAblitieTypes = async (_req: any, res: Response) => {
    const result = await TypeValueModel.find({ type: "01f145eb-8f9a-4389-9c86-138617090b19" })
    res.json(result)
}

export const getAllByPortfolio = async (req: Request, res: Response) => {

    const id = req.params.id
    const result = await Model.find({portfolio:id})
    res.json(result)
}

export const getCounterAbilitiesByPortfolio = async (req: Request, res: Response) => {

    const id = req.params.id
    const result = await Model.find({portfolio:id})
    res.json(result.length)
}

export const getOne = async (req: Request, res: Response) => {

    const id = req.params.id
    const result = await Model.findById(id)    
    res.json(result)
}


export const create = async (req: any, res: Response) => {

    const { portfolio, abilitie_type,comment, abilitie_state } = req.body
    const newData = new Model({
        abilitie_user: req.user.id,
        abilitie_type: abilitie_type,
        portfolio: portfolio,
        comment: comment,
        abilitie_state: abilitie_state
    })
    const savedData = await newData.save()
    res.json(savedData)
}

export const publicGetAllByPortfolio = async (req: any, res: Response) => {
    const result = await Model.find({
        portfolio: req.params.id
    }).populate("abilitie_type")
    res.json(result)
}

export const edit = async (req: any, res: Response) => {

    const { abilitie_type, portfolio, comment, abilitie_state } = req.body
    const id = req.params.id
    const savedType = await Model.findByIdAndUpdate(id, {
        abilitie_user: req.user.id,
        abilitie_type: abilitie_type,
        portfolio: portfolio,
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