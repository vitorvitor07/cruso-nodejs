require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')
const middlewareGlobal = require('./src/middlewares/middleware')

mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
    app.emit('ok')
})
.catch(e => console.log(e))

app.use(middlewareGlobal)

app.use(routes)
app.use(express.static('./public'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.on('ok', () => {
    app.listen(8080, () => {
        let date = new Date() 
        console.log('Server iniciado em:' + date)
    })
})