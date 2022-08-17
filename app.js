const express = require('express');
const app = express();
const path = require('path')

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.listen(3000, (_) => {
    console.log('server is now listening on port 3000');
})