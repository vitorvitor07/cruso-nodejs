require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
    app.emit('ok')
})
.catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
const routes = require('./routes')
const { middlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.static('./public'))

const sessionOptions = session( {
    secret: 'eueueueeueueueueueue',
    store: MongoStore.create( {
        mongoUrl: process.env.CONNECTIONSTRING
    } ),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24*7,
        httpOnly: true
    }
} )

app.use(sessionOptions)
app.use(flash())

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(middlewareGlobal)
app.use(routes)

app.on('ok', () => {
    app.listen(8080, () => {
        let date = new Date() 
        console.log('Server iniciado em:' + date)
    })
})