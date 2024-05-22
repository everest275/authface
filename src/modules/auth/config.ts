import AppService from '../../services/app.service'
import {validateSchema} from '../../middlewares/app.middleware'
import {loginSchema, registerSchema} from './schema'

export const loginValidator= validateSchema(loginSchema)
export const registerValidator= validateSchema(registerSchema)
export const userService=new AppService('users');
