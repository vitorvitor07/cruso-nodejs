const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(routes)

app.listen(48000, () => {
    console.log('Server on..')
})