require("dotenv/config")

module.exports = {
    environment: process.env.NODE_ENV,
    port:process.env.PORT,
    db:{
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        uri:process.env.DB_URI
    }
}