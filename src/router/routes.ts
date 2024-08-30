import { Router } from 'express'
import authRoutes from '../modules/auth/auth-controller'
import typeRoutes from '../modules/type/type-controller'
import typeValueRoutes from '../modules/type-value/type-value-controller'
import membershipRoutes from '../modules/membership/membership-controller'
import portfolioRoutes from '../modules/portfolio/routes/portfolio-routes'
import portfolioProyectRoutes from '../modules/proyect/portfolios/routes/portfolio-proyect-routes'
import portfolioRoutesPublic from '../modules/portfolio/public/portfolio-controller'
import portfolioProyectRoutesPublic from '../modules/proyect/portfolios/public/public-portfolio-proyect-controller'
import portfolioAbilitiesRoutesPublic from '../modules/abilitie/public/public-portfolio-abilitie-controller'
import PicturePublic from '../modules/picture/public/public-picture-controller'
import portfolioPicutreRoutes from '../modules/picture/portfolio-picture/portfolio-picture-controller'
import proyectPictureRoutes from '../modules/picture/proyect-picture/proyect-picture-controller'
import portfolioAbilitiesRoutes from '../modules/abilitie/portfolios/routes/abilitie-routes'
import { authRequired } from '../middlewares/validate-token'
import portfolioReviewsRoutes from '../modules/review/portfolios/routes/review-portfolio-routes'
import reviewRoutesPublic from '../modules/review/public/review-public-routes'


const router = Router();

router.get('/test', (_req, res) => {
    res.send("Testing services...")
})

//authentication off
router.use(typeValueRoutes, membershipRoutes, typeRoutes, portfolioRoutesPublic, portfolioProyectRoutesPublic,portfolioAbilitiesRoutesPublic,
    PicturePublic,reviewRoutesPublic,
    //authentication on
    authRoutes,
    //client
    authRequired,portfolioAbilitiesRoutes, portfolioProyectRoutes, portfolioReviewsRoutes,portfolioRoutes, proyectPictureRoutes,portfolioPicutreRoutes,)
//security

export default router