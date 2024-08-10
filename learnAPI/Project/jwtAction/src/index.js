const express = require('express');

const bodyParser = require('body-parser');

const userValidate = require('./routes/validate')

const userGenerate = require('./routes/generate')

const app = express();

const JWT_SECRET = '13245768';  //token JWT 

const PORT = 4000;

app.use(bodyParser.json());

// Generate token 
app.use('/generate', userGenerate);

// Validate token 
app.use('/validate', userValidate);

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
