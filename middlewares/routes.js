const express = require('express')
const route = express.Router()
const paginaInicialController = require('./src/controller/paginaInicialController')
const middleware = require('./src/middlewares/middleware')
const paginaMonitoramento = require('./src/controller/monitoramentoController')

// Exemplo de middleware

route.get('/', middleware.middlewarePrincipal, paginaInicialController.paginaInicial)
route.get('/monitoramento', paginaMonitoramento.paginaMonitoramento)

module.exports = route