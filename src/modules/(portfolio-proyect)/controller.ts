import { Router } from 'express'
import { create, edit, getAll, getOne, remove } from './service'

const router = Router()
router.get('/portfolio-proyects', getAll)
router.get('/portfolio-proyects/:id', getOne)
router.post('/portfolio-proyects', create)
router.put('/portfolio-proyects/:id', edit)
router.delete('/portfolio-proyects/:id', remove)

export default router