exports.middlewareGlobal = (req, res, next) => {
    console.log('middleware global')
    next()
}

exports.checkCSRF = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' == err.code) {
        return res.send( {message: 'Bad CSRF'} )
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}