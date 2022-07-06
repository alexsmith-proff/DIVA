import nodemailer from 'nodemailer'

export async function sendMail(name, phone) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'alex_kuz84@mail.ru',
            pass: 'SccQiJ2MmUx50cjTDx5s'            
        }
    })
    await transporter.sendMail({
        from: 'Сайт ДИВА Недвижимость <alex_kuz84@mail.ru>',
        to: 'fifeko3440@meidir.com',
        subject: 'Лид с сайта ДИВА Недвижимость',
        // text: 'Свяжитесь' + (name != '' ? ' c ' + name : ' по номеру ' + phone),
        html: 
        `
            <div>
                <h1>Появился новый лид</h1>
                <h2>Имя: ${name}</h2>
                <h2>Номер телефона: ${phone}</h2>
            </div>
        `
    })
}