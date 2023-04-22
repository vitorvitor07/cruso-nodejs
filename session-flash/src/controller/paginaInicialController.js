
exports.paginaInicial = (req, res) => {   
    // Salvar sessão no BD
    // req.session.usuário = { nome: 'vitor', login: new Date() }
    res.send({ message: "Home page" })
}
