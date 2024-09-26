import { Router } from 'express'
import { getCounterAbilitiesByPortfolio, publicGetAllByPortfolio } from '../portfolios/service/abilitie-service'

const router = Router();
router.get('/portfolio-abilities-public/:id', publicGetAllByPortfolio)
router.get('/portfolio-abilities-counter/:id', getCounterAbilitiesByPortfolio)
export default router