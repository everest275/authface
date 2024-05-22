import { Router } from 'express'
// import {authRequired} from '../middlewares/app.middleware'
import userRoutes from '../modules/user/routes'
import authRoutes  from '../modules/auth/routes.routing'
import typeRoutes from '../modules/type/routes'

const router = Router();

router.get('/test', (_req, res) => {
    res.send("Testing services...")
})

router.use(typeRoutes,authRoutes,userRoutes)

export default router