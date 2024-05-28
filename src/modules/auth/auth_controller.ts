import { Router } from 'express'
import { loginValidator, registerValidator } from './auth_config';
import { login, logout, register } from './auth_service'

const router = Router();

router.post('/login', loginValidator, login)
router.post('/register', registerValidator, register)
router.post('/logout', logout)

export default router