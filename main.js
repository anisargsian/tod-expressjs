const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
 
app.use(bodyParser.json())

app.use(routes);

app.get('*', (req, res) => {
    res.status(404).end('Not found');
});

app.listen(3000);