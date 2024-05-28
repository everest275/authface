import { Request, Response } from 'express'
import { userService } from './auth_config'
import User from './auth_model'
import bcrypt from 'bcryptjs'
import { jwtLib } from '../../libs/jwt'

export const login = async (req: Request, res: Response) => {

    const userForm: User = req.body

    try {

        const userFound = await userService.getByFields({ email: userForm.email })
        if (!userFound) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(userForm.pash, userFound.pash);
        if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

        const token = await jwtLib.createAccessToken({ id: userFound.email })
        res.cookie("token", token)

        return res.status(200).json(userFound);

    } catch (error) {
        return res.status(500).json(error);
    }
}

export const register = async (req: Request, res: Response) => {

    const { name, email, pash }: User = req.body

    try {

        const hashed = await bcrypt.hash(pash, 10)

        const user: User = new User(name, email, hashed)

        const data: User[] = await userService.post(user)

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json(error);
    }
}

export const logout = async (_req: Request, res: Response) => {

    res.cookie('token', "", {
        expires: new Date(0)
    })

    return res.sendStatus(200)
}
