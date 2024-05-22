import AppService from '../../services/app.service'
import {validateSchema} from '../../middlewares/app.middleware'
import {userSchema} from './schema'

export const userValidator= validateSchema(userSchema)
export const userService=new AppService('users');