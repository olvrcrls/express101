const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());
app.use(helmet());
// This is important because it will parse the data body.
app.use(express.urlencoded({extended: false}));

app.post('/ajax', (req, res) => {
    // console.log(req);
    console.log(req.body);
    
    res.json('POST test.');
});


app.listen(3000);
console.log('Server listening on port 3000.');