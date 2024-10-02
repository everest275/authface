import { Request, Response } from 'express'
import Model from './model'
import bcrypt from 'bcryptjs'
import { jwtLib } from '../../libs/jwt'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../../config/token'
import { enviarCorreo } from '../(email)/service'

let code = ""

export const register = async (req: Request, res: Response): Promise<any> => {
    const { user_name, name, gender, email, birth, password, user_membership, user_state, pass } = req.body
    console.log(pass)
    if (pass === code) {
        try {
            const userFound = await Model.findOne({ email: email })
            if (userFound) {
                return res.status(400).json(["email is already in use"])
            }
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Model({
                user_name,
                name,
                email,
                gender,
                birth,
                password: passwordHash,
                user_membership,
                user_state,
            })
            const userSaved = await newUser.save()
            const token = await jwtLib.createAccessToken({ id: userSaved.id })
            res.cookie("token", token, {
                sameSite: 'none',
                secure: true,
                httpOnly: false
            })
            res.json(userSaved)
        } catch (error) {
            console.log([error])
        }
    } else {
        return res.status(401).json(["incorrect code"])
    }
}

export const login = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, password } = req.body
        const userFound = await Model.findOne({ email: email });
        if (!userFound) return res.status(400).json(["user not found"]);
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json(["incorrect password"]);
        const token = await jwtLib.createAccessToken({ id: userFound.id })
        res.cookie("token", token, {
            sameSite: 'none',
            secure: true,
            httpOnly: false
        })
        res.json(userFound)
    } catch (error) {
        console.log([error])
    }
}

export const profile = async (req: any, res: Response) => {
    const userFound = await Model.findById(req.user.id)
    if (!userFound) return res.status(400).json(["user not found"])
    return res.json({
        id: userFound._id,
        email: userFound.email,
        password: userFound.password,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
};

export const verifyToken = async (req: any, res: Response): Promise<any> => {
    const { token } = req.cookies
    try {

        if (!token) return res.status(401).json(["unauthorized"])

        jwt.verify(token, TOKEN_SECRET, async (err: any, user: any) => {
            if (err) return res.status(401).json(["unauthorized"])

            const userFound = await Model.findById(user.id)
            if (!userFound) return res.status(401).json(["unauthorized"])

            return res.json(userFound)
        })

    } catch (error) {

        console.log(error)
    }
}

export const verifyEmail = async (req: any, res: Response) => {
    const { email } = req.body
    const codeGenerated = generateVerificationCode()
    const result = await enviarCorreo("everest012016@gmail.com", email, "Verification pass", `<p>Type your verification pass in the web:</p><strong> ${codeGenerated}</strong>`)
    if (!result) return res.status(400).json(['error al enviar correo'])
    code = codeGenerated
    res.json({ pass: codeGenerated })
    return

}

// Función para generar un código de verificación de 4 dígitos
const generateVerificationCode = (): string => {
    const result = Math.floor(1000 + Math.random() * 9000).toString();
    return result
};

export const getVerifyCode = (_req: Request, res: Response) => {
    res.json({ code: code })
}

export const logout = async (_req: Request, res: Response) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}
