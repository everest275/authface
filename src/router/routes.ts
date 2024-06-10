import { Router } from 'express'
// import {authRequired} from '../middlewares/app.middleware'
import authRoutes  from '../modules/auth/auth_controller'
import typeRoutes from '../modules/type/type_controller'
import typeValueRoutes from '../modules/type_value/type_value_controller'

const router = Router();

router.get('/test', (_req, res) => {
    res.send("Testing services...")
})

router.use(typeValueRoutes,typeRoutes,authRoutes)

export default router