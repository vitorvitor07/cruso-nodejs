const homeModel = require('../models/homeModel')

exports.paginaInicial = (req, res) => {
    

    homeModel.create({
        login: req.query.login,
        senha: req.query.senha
    })
    .then(dados => console.log(dados))
    .catch(e => console.log(e))
    

    res.json({message: "Home page"})
}