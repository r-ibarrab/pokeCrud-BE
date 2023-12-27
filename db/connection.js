const mongoose = require("mongoose")
const config = require('../config')

mongoose.set("strictQuery", false)

const dbURI = `mongodb+srv://${config.db.user}:${config.db.password}@${config.db.uri}/?retryWrites=true&w=majority`

const connectDB = () =>{
    try{
        if(mongoose.connection.readyState != 1){
            mongoose.connect(dbURI)
            console.log("DB connected successfully ")
        }
    }catch(e){
        console.log(e)
    }
}

module.exports = connectDB