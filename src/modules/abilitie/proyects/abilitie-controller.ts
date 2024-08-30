import { Router } from 'express'

const router = Router();

import { create, edit, getAll, remove } from './abilitie-service'

router.get('/proyect-abilities', getAll)
router.post('/proyect-abilities', create)
router.put('/proyect-abilities/:id', edit)
router.delete('/proyect-abilities/:id', remove)

export default router