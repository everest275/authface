import { Router } from 'express'

const router = Router();

import { create, edit, getAblitieTypes, getAll, remove,getOne } from '../service/abilitie-service'


router.get('/portfolio-abilities', getAll)
router.get('/portfolio-abilitie/:id', getOne)
router.get('/portfolio-abilitie-types', getAblitieTypes)
router.post('/portfolio-abilities', create)
router.put('/portfolio-abilities/:id', edit)
router.delete('/portfolio-abilities/:id', remove)

export default router