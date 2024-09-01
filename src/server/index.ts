import express from 'express'
import AuthfaceRoutes from "../router/routes"
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { config } from 'dotenv';
import path from 'path';
import { testDBConnection } from '../databases/pg'

export const app = express();
// {
//     origin: process.env.JOBFACE_FORNTEND_ADDRESS || "http://localhost:5173",
//     credentials: true
// }
const envPath = path.resolve(__dirname, '../../env/.env')
app.use(express.static(path.join(__dirname, '../../public')));
config({ path: envPath })

testDBConnection()
app.use(cors())
app.use(morgan('dev'));
app.use(cookieParser())
app.use(bodyParser.json({ limit: '100mb' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(AuthfaceRoutes)

const port = Number(process.env.PORT || "3001")
app.listen(port, () => {
    console.log(`server on port ${port}`)
})

