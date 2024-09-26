import { Router } from 'express'

const router = Router();

import { create, edit,getAll, response, remove, sended, getAllPetitionsReceived } from '../service/review-portfolio-service'

router.get('/portfolio-reviews', getAll)
router.get('/portfolio-reviews-response', getAllPetitionsReceived)
router.post('/portfolio-reviews', create)
router.post('/portfolio-reviews-response', sended)
router.put('/portfolio-reviews/:id', edit)
router.put('/portfolio-reviews-response/:id', response)
router.delete('/portfolio-reviews/:id', remove)

export default router