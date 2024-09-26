import { Request, Response } from 'express'
import Model from '../model/portfolio-proyect-model'
import PictureModel from '../../../picture/proyect-picture/proyect-picture-model'

export const getAll = async (req: any, res: Response) => {
    const result = await Model.find({
        proyect_user: req.user.id
    })
    res.json(result)
}

export const publicGetAllByPortfolio = async (req: any, res: Response) => {
    const result = await Model.find({
        portfolio: req.params.id
    })
    res.json(result)
}

export const getCounterPoryectsByPortfolio = async (req: any, res: Response) => {
    const result = await Model.find({
        portfolio: req.params.id
    })
    res.json(result.length)
}

export const getOne = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await Model.findById(id)
    res.json(result)
}

export const create = async (req: any, res: Response) => {

    const { portfolio, title, position, description, proyect_state } = req.body
    const newCreate = new Model({
        proyect_user: req.user.id,
        portfolio: portfolio,
        title: title,
        position: position,
        description: description,
        proyect_state: proyect_state
    })
    const createdSaved = await newCreate.save()
    res.json(createdSaved)
}

export const edit = async (req: any, res: Response) => {
    const { portfolio, title, position, description, proyect_state } = req.body
    const id = req.params.id
    const saved = await Model.findByIdAndUpdate(id, {
        proyect_user: req.user.id,
        portfolio: portfolio,
        title: title,
        position: position,
        description: description,
        proyect_state: proyect_state
    })
    res.json(saved)
}

export const remove = async (req: Request, res: Response) => {

    const id = req.params.id
    console.log(id)
    const getPicture = await PictureModel.find({ proyect: id })
  
    if (getPicture) {
        for (const picture of getPicture) {
            await PictureModel.findByIdAndDelete(picture.id);
        }
    }
    const deletedProyect = await Model.findByIdAndDelete(id)
    res.json(deletedProyect)
}