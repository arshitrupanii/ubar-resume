const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
dotenv.config()
const app = express()

app.use(cors())

app.get('/',(req,res) => {
    res.send("hello worldd")
})

module.exports = app