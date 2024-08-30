import { Router } from 'express'
import { publicGetAllByPortfolio } from '../service/portfolio-proyect-service'

const router = Router();
router.get('/portfolio-proyects-public/:id', publicGetAllByPortfolio)
export default router