const express = require('express')
// const bodyParser = require('body-parser')

//
const app = express()
const port = 4000
// app.use(bodyParser.json())
const data = [ "mie ayam", "bakso", "esteh jumbo"]

app.get('/get-operation',(req,res) => {
    res.send("Operasi GET menggunakan node js dan express js")
})

app.get('/get-data',(req,res) => {
    res.send(data) //mendapat data dari const data
})

app.listen(port,() => {
    console.log("Program run on port : ",port)
})