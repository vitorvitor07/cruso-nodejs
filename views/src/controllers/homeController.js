exports.paginaInicial = (req, res) => {
    res.render('index')    
}

exports.enviaFormulario = (req, res) => {
    res.send(req.body)
}