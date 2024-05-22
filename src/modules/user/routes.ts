import { Router } from 'express'
import { userValidator } from './config'

const router = Router();

import { createUser, editUser, obtainOneUser, obtainUsers, removeUser } from './service'
router.get('/users', obtainUsers)
router.get('/users/:id', obtainOneUser)
router.post('/users', userValidator, createUser)
router.put('/users/:id', userValidator, editUser)
router.delete('/users/:id', removeUser)

export default router