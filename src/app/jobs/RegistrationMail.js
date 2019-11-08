const Mail = require('../lib/Mail')

const job = {
    key:'RegistrationMail',
    async handle({data}) {
        const { user } = data

        await Mail.transporter.sendMail({
            from:'Queue <queue@mail.com>',
            to:`${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html:`Olá ${user.name}, Bem-vindo ao sistema de filas em Node usando Redis!`
        })
    }
}

module.exports = job