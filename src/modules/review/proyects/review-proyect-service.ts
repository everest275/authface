import { Request, Response } from 'express'
import Model from './review-proyect-model'

export const getAll = async (req: any, res: Response) => {
    const result = await Model.find({ review_user: req.user.id })
    res.json(result)
}



export const getAllByViewer = async (req: any, res: Response) => {
    const result = await Model.find({ viewer_user: req.user.id })
    res.json(result)
}

export const getOne = async (req: Request, res: Response) => {

    const id = req.params.id
    const result = await Model.findById(id)
    res.json(result)
}

export const getAllByPortfolio = async (req: Request, res: Response) => {

    const id = req.params.id
    const result = await Model.findById(id)
    res.json(result)
}

export const create = async (req: any, res: Response):Promise<any> => {

    const { review_user, comment, review_state } = req.body
    if(review_user===req.user.id) return res.status(400).json(["To make a review, user and viewer can't be the same"])
    const newData = new Model({
        review_user: review_user,
        viewer_user: req.user.id,
        comment: comment,
        review_state: review_state
    })
    const savedType = await newData.save()
    res.json(savedType)

}

export const edit = async (req: any, res: Response):Promise<any> => {

    const { review_user, comment, review_state } = req.body
    if(review_user===req.user.id) return res.status(400).json(["To make a review, user and viewer can't be the same"])
    const id = req.params.id
    const savedType = await Model.findByIdAndUpdate(id, {
        review_user: review_user,
        viewer_user: req.user.id,
        comment: comment,
        review_state: review_state
    })
    res.json(savedType)
}

export const remove = async (req: Request, res: Response) => {

    const id = req.params.id
    const removedData = await Model.findByIdAndDelete(id)
    res.json(removedData)
}