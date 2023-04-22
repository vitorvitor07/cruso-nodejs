const express = require('express')
const app = express()
const routes = require('./routes')

app.use(routes)
app.use(express.static('./public'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.listen(8080, () => {
    let date = new Date() 
    console.log('Server iniciado em:' + date)
})