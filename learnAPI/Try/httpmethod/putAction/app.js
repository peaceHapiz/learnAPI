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
app.post('/post-action',(req,res) => {
    const data = req.body
    kata = [...kata,data]

    res.send('PAHAMMM!!!')
})

app.put('/put-action',(req,res) => {
    const data = req.body
    kata.map(val =>{
        //kondisi jika data 'quoters' dan input 'quoters' sama
        if (val.quoters === data.quoters) {
            // val.quote = data
            kata.push(data)
        }
        
        
        
    })
    res.send(kata)
})

app.listen(port,() => {
    console.log('program run on port : ',port)
})