import AppService from '../pool_factory/pool_strategy'
import {validateSchema} from '../../middlewares/validator'
import {loginSchema, registerSchema} from './auth_schema'

export const loginValidator= validateSchema(loginSchema)
export const registerValidator= validateSchema(registerSchema)
export const userService=new AppService('users');
