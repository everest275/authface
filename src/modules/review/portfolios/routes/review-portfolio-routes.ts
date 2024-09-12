import { Router } from 'express'

const router = Router();

import { create, edit,getAll, response, remove, sended } from '../service/review-portfolio-service'

router.get('/portfolio-reviews', getAll)
router.post('/portfolio-reviews', create)
router.post('/portfolio-reviews-sended', sended)
router.put('/portfolio-reviews/:id', edit)
router.put('/portfolio-reviews-response/:id', response)
router.delete('/portfolio-reviews/:id', remove)

export default router