// env variables
const config = require("./config")

// utilities
const chalk = require("chalk")
const morgan = require("morgan")
const cors = require("cors")

// routes
const PokemonRoute = require("./routes/pokemon")


// db
const connectDB = require("./db/connection")

// express
const express = require("express")
const app = express()
const bodyParser = require('body-parser')

const PORT = config.port|| 3001

if (config.environment === 'DEVELOPMENT') {
  app.use(morgan("dev"))
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())

app.use("/api/pokemon",PokemonRoute)

app.listen(PORT,async (e)=>{
    await connectDB()
    if(!e) return console.log("Server running")
    console.log(chalk.red("Error:"))
    console.log(e)
})