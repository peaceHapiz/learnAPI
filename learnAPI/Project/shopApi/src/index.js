require('dotenv').config()

const port = process.env.PORT || 5000;

const express = require('express')

const bodyParser = require('body-parser')

const menuRoutes = require('./routes/menu')

const orderRoutes = require('./routes/order')

const middlewareLogRequest = require('../src/middleware/logs')

const app = express()

app.use(bodyParser.json())

app.use(middlewareLogRequest)

app.use('/menu',menuRoutes)

app.use('/order',orderRoutes)

app.listen(port,() => {
    console.log(`Program berjalan di port : ${port}`)
})