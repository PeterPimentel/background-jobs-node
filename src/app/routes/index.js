const express = require('express')
const UserController = require('../controllers/UserController')

const routes = new express.Router();

routes.post('/user',UserController.store)

module.exports = routes