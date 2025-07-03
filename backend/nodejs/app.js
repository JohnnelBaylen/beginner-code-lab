const express = require('express');
const morgan = require('morgan');

const app = express();

app.listen(8000);


app.get('/', (req, res) => {
    // res.send('<h1>Express app </h1>');
    res.sendFile('./src/index.html', { root: __dirname});
});
