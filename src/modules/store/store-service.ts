import { Request, Response } from 'express'
import Model from './store-model'

export const getAll = async (req: any, res: Response) => {
    const result = await Model.find({ store_user: req.user.id })
    res.json(result)
}


export const getOne = async (req: Request, res: Response) => {

    const id = req.params.id
    const result = await Model.findById(id)
    res.json(result)
}

export const create = async (req: any, res: Response): Promise<any> => {

    const { store_type, store_style, name, description, telephone, email, openingDate, country, city, store_state } = req.body
    const newData = new Model({
        store_user: req.user.id,
        store_type: store_type,
        store_style: store_style,
        name: name,
        description: description,
        telephone: telephone,
        email: email,
        openingDate: openingDate,
        country: country,
        city: city,
        store_state: store_state
    })
    const savedType = await newData.save()
    res.json(savedType)

}

export const edit = async (req: any, res: Response): Promise<any> => {

    const { store_type, store_style, name, description, telephone, email, openingDate, country, city, store_state } = req.body
    const id = req.params.id
    const savedType = await Model.findByIdAndUpdate(id, {
        store_user: req.user.id,
        store_type: store_type,
        store_style: store_style,
        name: name,
        description: description,
        telephone: telephone,
        email: email,
        openingDate: openingDate,
        country: country,
        city: city,
        store_state: store_state
    })
    res.json(savedType)
}

export const remove = async (req: Request, res: Response) => {

    const id = req.params.id
    const removedData = await Model.findByIdAndDelete(id)
    res.json(removedData)
}