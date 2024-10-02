import { Request, Response } from 'express'
import Model from './model'

export const getAll = async (req: any, res: Response) => {
    const result = await Model.find({ picture_user: req.user.id })
    res.json(result)
}

export const getByPortfolioId = async (req: any, res: Response) => {
    const id = req.params.id
    try {
        const result = await Model.find({portfolio:id})
        res.json(result[0])

    } catch (error) {
        console.log(error)
    }

}

export const publicGetByPortfolioId = async (req: any, res: Response) => {
    const id = req.params.id
    try {
        const result = await Model.find({portfolio:id})
        res.json(result[0])

    } catch (error) {
        console.log(error)
    }

}

export const getById = async (req: any, res: Response) => {
    const id = req.params.id
    const result = await Model.findById(id)
    res.json(result)
}

export const getOne = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await Model.findById(id)
    res.json(result)
}

export const create = async (req: any, res: Response) => {
    const { portfolio, picture_data, picture_state } = req.body
    const newCreate = new Model({
        picture_user: req.user.id,
        portfolio: portfolio,
        picture_data: picture_data,
        picture_state: picture_state,
    })
    const createdSaved = await newCreate.save()
    res.json(createdSaved)
}

export const edit = async (req: any, res: Response) => {
    const { portfolio, picture_data, picture_state } = req.body
    const id = req.params.id
    const saved = await Model.findByIdAndUpdate(id, {
        picture_user: req.user.id,
        portfolio: portfolio,
        picture_data: picture_data,
        picture_state: picture_state,
    })
    res.json(saved)
}

export const remove = async (req: Request, res: Response) => {
    const id = req.params.id
    const removed = await Model.findByIdAndDelete(id)
    res.json(removed)
}