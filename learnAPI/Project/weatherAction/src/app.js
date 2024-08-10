const express = require('express');

const weatherRoutes = require('./routes/weather')

require('dotenv').config();

const app = express();



const PORT = process.env.PORT || 3000;

app.use('/weather',weatherRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
