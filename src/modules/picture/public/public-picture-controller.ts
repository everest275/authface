import { Router } from 'express'

const router = Router();

import { publicGetByPortfolioId } from '../portfolio-picture/portfolio-picture-service'
import {publicGetAllByProyectId, publicGetByProyectId} from '../proyect-picture/proyect-picture-service'

router.get('/portfolio-picture-public/:id', publicGetByPortfolioId)
router.get('/proyect-pictures-public/:id', publicGetAllByProyectId)
router.get('/proyect-picture-public/:id',publicGetByProyectId )

export default router