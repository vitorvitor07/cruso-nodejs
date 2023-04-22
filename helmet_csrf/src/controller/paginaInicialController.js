const homeModel = require('../models/homeModel')

exports.paginaInicial = (req, res) => {   

    // Salvar sessão no BD
    // req.session.usuário = { nome: 'vitor', login: new Date() }
    res.render('index')
}

exports.enviaFormulario = (req, res) => {   
    console.log(req.body)
/*
    homeModel.create( {
        usuario: req.body.usuario,
        senha: req.body.senha
    } )
        .then(dados => console.log(dados))
*/
    res.send( {message: 'Enviado'} )
}