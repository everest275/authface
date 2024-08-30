import { Router } from 'express'

const router = Router();

import {  create, edit, getAll, getOne, remove } from './store-service'
router.get('/stores', getAll)
router.get('/stores/:id', getOne)
router.post('/stores', create)
router.put('/stores/:id', edit)
router.delete('/stores/:id', remove)

export default router