import { Request, Response } from 'express'
import Model from '../model/review-portfolio-model'

export const getAll = async (req: any, res: Response) => {
    const result = await Model.find({ review_user: req.user.id })
    res.json(result)
}

export const publicGetAllByPortoflio = async (req: any, res: Response) => {
    const id = req.params.id
    const result = await Model.find({ portfolio: id })
    res.json(result)
}

export const getOne = async (req: Request, res: Response) => {

    const id = req.params.id
    const result = await Model.findById(id)
    res.json(result)
}

export const create = async (req: any, res: Response): Promise<any> => {

    const { review_user, portfolio,comment, is_accept, review_state } = req.body
    if (review_user === req.user.id) return res.status(400).json(["To make a review, user and viewer can't be the same"])
    const newData = new Model({
        reviewer_user: req.user.id,
        review_user: review_user,
        portfolio: portfolio,
        comment: comment,
        is_accept: is_accept,
        review_state: review_state
    })
    const savedType = await newData.save()
    res.json(savedType)
}

export const edit = async (req: any, res: Response): Promise<any> => {

    const { review_user, comment, is_accept, review_state } = req.body
    if (review_user === req.user.id) return res.status(400).json(["To make a review, user and viewer can't be the same"])
    const id = req.params.id
    const savedType = await Model.findByIdAndUpdate(id, {
        reviewer_user: req.user.id,
        review_user: review_user,
        comment: comment,
        is_accept: is_accept,
        review_state: review_state
    })
    res.json(savedType)
}

export const remove = async (req: Request, res: Response) => {

    const id = req.params.id
    const removedData = await Model.findByIdAndDelete(id)
    res.json(removedData)
}