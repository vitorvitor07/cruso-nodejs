const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    senha: {
        type: String
    }
})

const homeModel = mongoose.model('Home', homeSchema)

module.exports = homeModel