const Mail = require('../lib/Mail')

const job = {
    key:'UnsubscribeMail',
    async handle({data}) {
        const { user } = data

        await Mail.transporter.sendMail({
            from:'Queue <queue@mail.com>',
            to:`${user.name} <${user.email}>`,
            subject: 'Remoção do usuário',
            html:`Usuário: ${user.name} removido.`
        })
    }
}

module.exports = job