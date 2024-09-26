import { Router } from 'express'

const router = Router();

import {getCounter, publicGetById} from '../service/portfolio-service'
router.get('/portfolios-public/:id', publicGetById)
router.get('/portfolios-counter/:id', getCounter )
export default router