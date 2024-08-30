import { Router } from 'express'

const router = Router();

import {  create, edit, getAll, getOne, remove } from './type-service'
router.get('/types', getAll)
router.get('/types/:id', getOne)
router.post('/types', create)
router.put('/types/:id', edit)
router.delete('/types/:id', remove)

export default router