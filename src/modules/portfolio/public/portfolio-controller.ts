import { Router } from 'express'

const router = Router();

import {publicGetById} from '../service/portfolio-service'
router.get('/portfolios-public/:id', publicGetById)
export default router