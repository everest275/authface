import { Request, Response } from 'express'
import Model from './model'

export const getAll = async (req: any, res: Response) => {
    const result = await Model.find({ review_user: req.user.id }).populate('portfolio')
    res.json(result)
}
export const getCounterReviewsByPortfolio = async (req: any, res: Response) => {
    const result = await Model.find({ portfolio: req.params.id }).populate("is_accept")
    const filteredResult = result.filter((petition: any) => petition.is_accept.type_value === 'Success');
    res.json(filteredResult.length);
}

export const getSuccessReviews = async (req: any, res: Response) => {
    const result = await Model.find({ portfolio: req.params.id }).populate("reviewer_user").populate("is_accept")
    const filteredResult = result.filter((petition: any) => petition.is_accept.type_value === 'Success');
    res.json(filteredResult);
}

export const getAllPetitionsReceived = async (req: any, res: Response) => {
    const result = await Model.find({ reviewer_user: req.user.id }).populate("review_user").populate("portfolio").populate("is_accept")
    const filteredResult = result.filter((petition: any) => petition.is_accept.type_value === 'Sended');
    res.json(filteredResult);
}

export const publicGetAllByPortoflio = async (req: any, res: Response) => {
    const id = req.params.id
    const result = await Model.find({ portfolio: id }).populate("reviewer_user")
    res.json(result)
}

export const getAllPetitionsSendedByPortoflio = async (req: any, res: Response) => {
    const id = req.params.id
    const result = await Model.find({ portfolio: id }).populate("reviewer_user").populate("is_accept")
    const filteredResult = result.filter((petition: any) => petition.is_accept.type_value === 'Sended' || petition.is_accept.type_value === 'Declined');
    res.json(filteredResult)
}

export const getAllPetitionsPendingByPortoflio = async (req: any, res: Response) => {
    const id = req.params.id
    const result = await Model.find({ portfolio: id }).populate("reviewer_user").populate("is_accept")
    const filteredResult = result.filter((petition: any) => petition.is_accept.type_value === 'Pending');
    res.json(filteredResult)
}

export const getOne = async (req: Request, res: Response) => {

    const id = req.params.id
    const result = await Model.findById(id)
    res.json(result)
}

export const create = async (req: any, res: Response): Promise<any> => {

    const { review_user, portfolio, comment, is_accept, review_state } = req.body
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

export const sended = async (req: any, res: Response): Promise<any> => {

    const { reviewer_user, portfolio, comment, is_accept, review_state } = req.body
    if (reviewer_user === req.user.id) return res.status(400).json(["To make a review, user and viewer can't be the same"])
    const newData = new Model({
        review_user: req.user.id,
        reviewer_user: reviewer_user,
        portfolio: portfolio,
        comment: comment,
        is_accept: is_accept,
        review_state: review_state
    })
    const savedType = await newData.save()
    res.json(savedType)
}

export const response = async (req: any, res: Response): Promise<any> => {

    const { reviewer_user, comment, is_accept, review_state } = req.body
    if (req.user.id === reviewer_user) return res.status(400).json(["To make a review, user and viewer can't be the same"])
    const id = req.params.id
    const savedType = await Model.findByIdAndUpdate(id, {
        review_user: req.user.id,
        reviewer_user: reviewer_user,
        comment: comment,
        is_accept: is_accept,
        review_state: review_state
    })
    res.json(savedType)
}

export const edit = async (req: any, res: Response): Promise<any> => {

    const { review_user, reviewer_user, portfolio, comment, is_accept, review_state } = req.body
    if (review_user === reviewer_user) return res.status(400).json(["To make a review, user and viewer can't be the same"])
    const id = req.params.id
    const savedType = await Model.findByIdAndUpdate(id, {
        reviewer_user: reviewer_user,
        review_user: review_user,
        portfolio: portfolio,
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