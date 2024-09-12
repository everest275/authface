import { Router } from 'express'

const router = Router();

import { getAll} from '../service/users-service'

router.get('/users', getAll)

export default router