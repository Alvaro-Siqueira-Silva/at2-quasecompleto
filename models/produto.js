const mongoose = require ('mongoose')

const modelo = mongoose.Schema({
    produto:String,
    data:Date,
    status:{type:String, default:'0'}
})

const produto = mongoose.model ('produto',modelo)

module.exports = produto