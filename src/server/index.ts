import express from 'express'
import AuthfaceRoutes from "../router/routes"
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'

export const app = express();

process.loadEnvFile("env/.env")

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

const port=Number(process.env.PORT || "3001")
app.listen(port,"0.0.0.0", () => {
    console.log(`server on port ${port}`)
})