import { Request, Response } from 'express'
import { userService } from './config'
import User from './class'

export const obtainUsers = async (_req: Request, res: Response) => {
    try {
        const data: User[] = await userService.getAll()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const obtainOneUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    try {
        const data: User[] = await userService.getById(id)
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const data: User[] = await userService.post(req.body)
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const editUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    try {
        const data: User[] = await userService.put(id, req.body)
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const removeUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    try {
        const data: User[] = await userService.remove(id)
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
}