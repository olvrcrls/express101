"use strict";

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Express Home</h1>');
});

app.listen(3000);
console.log("The server is listening at port 3000");