import { Router } from 'express'
import { getCounterPoryectsByPortfolio, publicGetAllByPortfolio } from './service'

const router = Router();
router.get('/portfolio-proyects-public/:id', publicGetAllByPortfolio)
router.get('/portfolio-proyects-counter/:id', getCounterPoryectsByPortfolio)
export default router