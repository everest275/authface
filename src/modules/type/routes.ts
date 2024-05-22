import { Router } from 'express'

const router = Router();

import {  createType, getAllTypes } from './service'
router.get('/types', getAllTypes)
router.post('/types', createType)

export default router