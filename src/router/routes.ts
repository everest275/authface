import { Router } from 'express'
import authRoutes from '../modules/(auth)/controller'
import typeRoutes from '../modules/(type)/controller'
import typeValueRoutes from '../modules/(type-value)/controller'
import membershipRoutes from '../modules/(membership)/controller'
import portfolioRoutes from '../modules/(portfolio)/controller'
import portfolioProyectRoutes from '../modules/(portfolio-proyect)/controller'
import portfolioRoutesPublic from '../modules/(portfolio)/controller-public'
import portfolioProyectRoutesPublic from '../modules/(portfolio-proyect)/controller-public'
import portfolioAbilitiesRoutesPublic from '../modules/(portfolio-abilitie)/controller-public'
import portfolioPicturePublic from '../modules/(portfolio-picture)/controller-public'
import portfolioProyectPicturePublic from '../modules/(proyect-picture)/controller-public'
import portfolioPicutreRoutes from '../modules/(portfolio-picture)/controller'
import portfolioProyectPictureRoutes from '../modules/(proyect-picture)/controller'
import portfolioAbilitiesRoutes from '../modules/(portfolio-abilitie)/controller'
import { authRequired } from '../middlewares/validate-token'
import portfolioReviewsRoutes from '../modules/(portfolio-review)/controller'
import reviewRoutesPublic from '../modules/(portfolio-review)/controller-public'
import usersRoutes from '../modules/(users)/controller'
import path from 'path';

const router = Router();

router.get('/test', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../public/test.html'));
})

//authentication off
router.use(typeValueRoutes, membershipRoutes, typeRoutes, portfolioRoutesPublic, portfolioProyectRoutesPublic,portfolioAbilitiesRoutesPublic,
    portfolioPicturePublic,portfolioProyectPicturePublic,reviewRoutesPublic,
    //authentication on
    authRoutes,
    //client
    authRequired,portfolioAbilitiesRoutes, portfolioProyectRoutes, portfolioReviewsRoutes,portfolioRoutes, portfolioProyectPictureRoutes,portfolioPicutreRoutes,usersRoutes)
//security

export default router