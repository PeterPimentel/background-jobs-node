const nodemailer = require('nodemailer')
const mailConfig = require('../../config/mail')

const transporter = nodemailer.createTransport(mailConfig)

module.exports = { transporter }