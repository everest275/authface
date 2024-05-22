import { Router } from 'express'
import { loginValidator, registerValidator } from './config';
import { login, logout, register } from './service'

const router = Router();

router.post('/login', loginValidator, login)
router.post('/register', registerValidator, register)
router.post('/logout', logout)

export default router