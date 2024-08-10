const express = require('express')  //mengimport modul express
const app = express()
const port = 4000                 //inisiasi port
const bodyParser = require('body-parser')   //mengimpor modul body parser
app.use(bodyParser.json())

//inisiasi variabel untuk menyimpan data user
const user = []

//perutean dengan output menampilkan data user
app.get('/', (req, res) => {
    res.send(user)
})

// perutean untuk register username dan password
    .post('/signup',(req,res) => { 
    const { username, password } = req.body;
    
    //pengkondisi jika username dan password tidak dipenuhi 
    if (!username || !password){
        return res.status(400).json({ error : 'username dan password dibutuhkan'})
    }
    
    
    const users = { username, password }
    user.push(users)    //menambahkan data yang diperoleh ke users

    //kondisi jika login sukse
    res.json({ message : 'Login Berhasil'})

    })

    //
    .listen(port, () => {
    console.log(`API Run on port ${port}`)
    })