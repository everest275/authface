import { Router } from 'express'

const router = Router();

import { publicGetByPortfolioId } from './service'

router.get('/portfolio-picture-public/:id', publicGetByPortfolioId)

export default router