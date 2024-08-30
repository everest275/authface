import { Router } from 'express'
import { publicGetAllByPortfolio } from '../portfolios/service/abilitie-service'

const router = Router();
router.get('/portfolio-abilities-public/:id', publicGetAllByPortfolio)
export default router