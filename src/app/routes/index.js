const express = require('express')
const UserController = require('../controllers/UserController')

const routes = new express.Router();

routes.post('/user',UserController.store)
routes.delete('/user',UserController.remove)

module.exports = routes