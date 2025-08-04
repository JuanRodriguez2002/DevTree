import express from 'express' //ESM EcmaScritp Modules
import 'dotenv/config'
import router from './router'
import {connectDB} from './config/db'
const app = express()

connectDB()

// Leer Datos de formulario
app.use(express.json())
app.use('/', router)


export default app