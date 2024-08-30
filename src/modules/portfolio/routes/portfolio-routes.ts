import { Router } from 'express'

const router = Router();

import { create, edit, getAll, getOne, remove } from '../service/portfolio-service'
router.get('/portfolios', getAll)
router.get('/portfolios/:id', getOne)
router.post('/portfolios', create)
router.put('/portfolios/:id', edit)
router.delete('/portfolios/:id', remove)

export default router