const Queue = require('../lib/Queue')

const store = async (req, res, next) => {
    const {name, email} = req.body

    const user = {name, email}

    //Enviar e-mail
    await Queue.add('RegistrationMail',{user})

    return res.json(user)
}

const remove = async (req, res, next) => {
    const {name, email} = req.body

    const user = {name, email}

    //Enviar e-mail
    await Queue.add('UnsubscribeMail',{user})

    return res.json(user)
}

module.exports = { store, remove }