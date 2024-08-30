import { Router } from 'express'

const router = Router();

import { create, edit, getAll, remove } from '../service/abilitie-service'

router.get('/portfolio-abilities', getAll)
router.post('/portfolio-abilities', create)
router.put('/portfolio-abilities/:id', edit)
router.delete('/portfolio-abilities/:id', remove)

export default router