import { Request, Response } from 'express'
import Model from '../(auth)/model'

export const getAll = async (_req: Request, res: Response) => {
    try {
        const result = await Model.find();

        const usersWithoutPassword = [];

        for (const user of result) {
            const { password, ...userWithoutPassword } = user;
            usersWithoutPassword.push(userWithoutPassword);
        }

        res.json(usersWithoutPassword);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
}

