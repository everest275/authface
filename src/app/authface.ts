import express from 'express'
import AuthfaceRoutes from "../router/routes"
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { testDBConnection } from '../databases/pg'
import { loadEnv } from '../config/env'

export const app = express();
loadEnv();
testDBConnection()
app.use(cors({
    origin: process.env.JOBFACE_FORNTEND_ADDRESS,
    credentials: true
}))
app.use(morgan('dev'));
app.use(cookieParser())
app.use(bodyParser.json({ limit: '100mb' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(AuthfaceRoutes)



