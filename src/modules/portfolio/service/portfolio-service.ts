import { Request, Response } from 'express'
import Model from '../model/portfolio-model'
import PictureModel from '../../picture/portfolio-picture/portfolio-picture-model'
import Proyects from '../../proyect/portfolios/model/portfolio-proyect-model'
import Reviews from '../../review/portfolios/model/review-portfolio-model'

export const getAll = async (req: any, res: Response) => {
    const result = await Model.find({ portfolio_user: req.user.id })
    res.json(result)
}

export const getCounter = async (req: any, res: Response) => {
    const result = await Model.find({ portfolio_user: req.user.id })
    res.json(result.length)
}

export const publicGetById = async (req: any, res: Response) => {
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

    const { portfolio_style, portfolio_type, name, title, description, about, country, city, portfolio_state } = req.body
    const newCreate = new Model({
        portfolio_user: req.user.id,
        portfolio_style: portfolio_style,
        portfolio_type: portfolio_type,
        name: name,
        title: title,
        description: description,
        about: about,
        country: country,
        city: city,
        portfolio_state: portfolio_state
    })
    const createdSaved = await newCreate.save()
    res.json(createdSaved)
}

export const edit = async (req: any, res: Response) => {

    const { portfolio_style, portfolio_type, name, title, description, about, country, city, portfolio_state } = req.body
    const id = req.params.id
    const saved = await Model.findByIdAndUpdate(id, {
        portfolio_user: req.user.id,
        portfolio_style: portfolio_style,
        portfolio_type: portfolio_type,
        name: name,
        title: title,
        description: description,
        about: about,
        country: country,
        city: city,
        portfolio_state: portfolio_state
    })
    res.json(saved)
}

export const remove = async (req: Request, res: Response) => {

    const id = req.params.id
    console.log(id)
    const getPicture = await PictureModel.find({ portfolio: id })
    const getProyects = await Proyects.find({ portfolio: id })
    const getReviews = await Reviews.find({ portfolio: id })

    if (getPicture) {
        for (const picture of getPicture) {
            await PictureModel.findByIdAndDelete(picture.id);
        }
    }

    if (getProyects) {
        for (const proyect of getProyects) {
            await Proyects.findByIdAndDelete(proyect.id);
        }
    }

    if (getReviews) {
        for (const review of getReviews) {
            await Reviews.findByIdAndDelete(review.id);
        }
    }
    const deletedPortfolio = await Model.findByIdAndDelete(id)
    res.json(deletedPortfolio)
}