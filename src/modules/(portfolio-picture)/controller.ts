import { Router } from 'express'

const router = Router();

import { create, edit, getAll, getByPortfolioId, getOne, remove } from './service'

router.get('/portfolio-pictures', getAll)
router.get('/portfolio-pictures/:id', getOne)
router.get('/portfolio-picture/:id', getByPortfolioId)
router.post('/portfolio-pictures', create)
router.put('/portfolio-pictures/:id', edit)
router.delete('/portfolio-pictures/:id', remove)

export default router