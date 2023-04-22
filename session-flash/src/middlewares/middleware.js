exports.middlewareGlobal = (req, res, next) => {
    console.log('middleware global')
    next()
}

