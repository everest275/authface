import { Router } from 'express'
import { publicGetAllByPortoflio } from '../portfolios/service/review-portfolio-service'

const router = Router();
router.get('/portfolio-reviews-public/:id', publicGetAllByPortoflio)
export default router