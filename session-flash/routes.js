const express = require('express')
const route = express.Router()
const paginaInicialController = require('./src/controller/paginaInicialController')

// Exemplo de middleware

route.get('/', paginaInicialController.paginaInicial)

module.exports = route