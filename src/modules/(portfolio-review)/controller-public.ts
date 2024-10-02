import { Router } from 'express'
import { getCounterReviewsByPortfolio, getSuccessReviews, publicGetAllByPortoflio } from './service'

const router = Router();
router.get('/portfolio-reviews-public/:id', publicGetAllByPortoflio)
router.get('/portfolio-reviews-counter/:id', getCounterReviewsByPortfolio)
router.get('/portfolio-reviews-success/:id', getSuccessReviews)
export default router