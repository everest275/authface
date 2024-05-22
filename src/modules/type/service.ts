import { Request, Response } from 'express'
import Types from '../abstract/pg_model/pg.class'
import TypeModel from './class'

export const getAllTypes = async (_req: Request, res: Response) => {
const result =await TypeModel.getAll()

res.json(result)
}

// export const obtainOneUser = async (req: Request, res: Response) => {
// }

export const createType = async (req: Request, res: Response) => {

const {typeName, typeDescription, state}= req.body
   const schema= new Types({})
    const newType= TypeModel.New({
        type_name:typeName,
        type_description:typeDescription,
        state:state
    })
    const savedType=newType.save()
   
    res.json(savedType)
}

// export const editUser = async (req: Request, res: Response) => {
  
// }

// export const removeUser = async (req: Request, res: Response) => {
  
// }