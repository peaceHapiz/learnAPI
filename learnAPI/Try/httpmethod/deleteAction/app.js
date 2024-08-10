const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
let kata = []

app.use(bodyParser.json())

//untuk ngecek isi variabel
app.get('/get',(req,res) => {
    res.send(kata)
})

// untuk mengirim 
app.post('/post',(req,res) => {
    const data = req.body
    kata = [...kata,data]

    res.send('PAHAMMM!!!')
})

// menghapus berdasarkan nama di URL
app.delete('/:nama?',(req,res) => {
    const params = req.params.nama
    let deleteNama = kata.filter(val => val.nama!==params)

    kata = deleteNama
    res.send(kata)
})

app.listen(port,() => {
    console.log('program run on port : ',port)
})