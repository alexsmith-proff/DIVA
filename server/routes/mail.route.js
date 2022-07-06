import { Router } from "express"
import { sendMail } from "../service/mail.service.js"

export const mailRouter = Router()
mailRouter.post('/', async (req, res) => {
    try {
        const {name, phone} = req.body

        //Отправляем письмо на почту
        await sendMail(name, phone)        

        // Ответ клиенту
        res.status(200).json({
            message: `Отправлено успешно`  
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка отправки'
        })          
    }
})
mailRouter.post('/phone', async (req, res) => {
    try {
        const {phone} = req.body

        //Отправляем письмо на почту
        await sendMail('', phone)        

        // Ответ клиенту
        res.status(200).json({
            message: `Отправлено успешно`  
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка отправки'
        })          
    }
})