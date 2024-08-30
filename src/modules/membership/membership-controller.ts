import { Router } from 'express'

const router = Router();

import {  create, edit, getAll, getOne, remove } from './membership-service'
router.get('/memberships', getAll)
router.get('/memberships/:id', getOne)
router.post('/memberships', create)
router.put('/memberships/:id', edit)
router.delete('/memberships/:id', remove)

export default router