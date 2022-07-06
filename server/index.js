import 'dotenv/config'
import express from "express"
import cors from 'cors'
import { mailRouter } from './routes/mail.route.js';

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/mail', mailRouter)

async function startApp() {
    try {
        // await mongoose.connect(process.env.DB_URL)
        // console.log('База данных подключена')
        app.listen(process.env.PORT, () => console.log(`Сервер запущен на порту: ${process.env.PORT}`))
        
    } catch (error) {
        console.log(error)
    }
}

startApp()