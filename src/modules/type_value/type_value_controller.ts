import { Router } from 'express'
import {  create, edit, getAll, getOne, remove } from './type_value_service'

const router = Router();

router.get('/type-values', getAll)
router.get('/type-values/:id', getOne)
router.post('/type-values', create)
router.put('/type-values/:id', edit)
router.delete('/type-values/:id', remove)

export default router