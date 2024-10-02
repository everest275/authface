import { Router } from 'express'

const router = Router();

import { create, edit, getAll, getAllByProyectId, getByProyectId,remove } from './service'

router.get('/proyect-pictures', getAll)
router.get('/proyect-pictures/:id', getAllByProyectId)
router.get('/proyect-picture/:id', getByProyectId)
router.post('/proyect-pictures', create)
router.put('/proyect-pictures/:id', edit)
router.delete('/proyect-pictures/:id', remove)

export default router