import { Router } from 'express'
import {loginSchema,registerSchema} from './schema'
import {validateSchema} from '../../middlewares/validate-schema'
import { login, logout, profile, register, verifyToken,verifyEmail } from './service'
import { authRequired } from '../../middlewares/validate-token';

const router = Router();

router.post('/login', validateSchema(loginSchema),login)
router.post('/register', validateSchema(registerSchema),  register)
router.post('/logout', logout)
router.get('/verify',verifyToken)
router.post('/verify-email',verifyEmail)
router.get('/profile',authRequired , profile)



export default router