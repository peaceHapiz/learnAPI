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

app.listen(port,() => {
    console.log('program run on port : ',port)
})