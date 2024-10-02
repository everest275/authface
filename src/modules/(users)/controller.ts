import { Router } from 'express'

const router = Router();

import { getAll} from './service'

router.get('/portfolio-reviews-users', getAll)

export default router