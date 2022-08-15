const mongoose = require ('mongoose')

const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://UserAdmin:1234567890@ac1tri.aganv.mongodb.net/at2')
}

module.exports = conn