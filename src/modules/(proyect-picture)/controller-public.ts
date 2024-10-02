import { Router } from 'express'

const router = Router();

import {publicGetAllByProyectId, publicGetByProyectId} from './service'

router.get('/proyect-pictures-public/:id', publicGetAllByProyectId)
router.get('/proyect-picture-public/:id',publicGetByProyectId )

export default router