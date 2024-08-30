import express from 'express'
import AuthfaceRoutes from "../router/routes"
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { config } from 'dotenv';
import path from 'path';

export const app = express();

config({ path: path.resolve(__dirname, '../../env/.env') })


app.use(cors({
    origin: process.env.JOBFACE_FORNTEND_ADDRESS || "http://localhost:5173",
    credentials: true
}))
app.use(morgan('dev'));
app.use(cookieParser())
app.use(bodyParser.json({ limit: '100mb' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


const port=Number(process.env.PORT || "3001")
app.listen(port,"0.0.0.0", () => {
    console.log(`server on port ${port}`)
})
app.use(AuthfaceRoutes)
