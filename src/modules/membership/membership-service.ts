import { Request, Response } from 'express'
import Model from './membership-model'

export const getAll = async (_req: Request, res: Response) => {
    const result = await Model.find({ membership_state: "6b17756c-c1da-4636-821e-4b98ed59c02f" }).populate("membership_state").populate("membership_range")
    res.json(result)
}

export const getOne = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await Model.findById(id)
    res.json(result)
}

export const create = async (req: Request, res: Response) => {

    const { membership, membership_duration_days, membership_description, membership_range,membership_state } = req.body
    const newCreate = new Model({
        membership: membership,
        membership_duration_days:membership_duration_days,
        membership_description: membership_description,
        membership_range: membership_range,
        membership_state: membership_state
    })
    const createdSaved = await newCreate.save()
    res.json(createdSaved)
}

export const edit = async (req: Request, res: Response) => {

    const { membership, membership_duration_days, membership_description, membership_range,membership_state } = req.body
    const id = req.params.id
    const saved = await Model.findByIdAndUpdate(id, {
        membership: membership,
        membership_duration_days:membership_duration_days,
        membership_description: membership_description,
        membership_range: membership_range,
        membership_state: membership_state
    })
    res.json(saved)
}

export const remove = async (req: Request, res: Response) => {

    const id = req.params.id
    const removed = await Model.findByIdAndDelete(id)
    res.json(removed)
}