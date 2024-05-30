import express from 'express'
import indexRoutes from "../router/routes"
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

export const app = express();

app.use(morgan('dev'));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(indexRoutes)

app.listen(4000,()=>{
    console.log("server on port",4000)
})