import { Router } from 'express'

const router = Router();

import { create, edit,getAll, remove } from '../service/review-portfolio-service'

router.get('/portfolio-reviews', getAll)
router.post('/portfolio-reviews', create)
router.put('/portfolio-reviews/:id', edit)
router.delete('/portfolio-reviews/:id', remove)

export default router