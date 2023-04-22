const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// Rotas da Home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.enviaFormulario)

// Rota do monitoramento

// Rotas de contato

route.get('/contato', contatoController.contato)

module.exports = route