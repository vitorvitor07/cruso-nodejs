exports.middlewarePrincipal = (req, res, next) => {
    console.log('Acesso')
    next()
}