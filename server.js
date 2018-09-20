const knex = require ('./db/knex');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 2000;
const app = express();
const path = require ('path');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({}))

let assassins = require('./routes/routes.js');
app.use(assassins);

app.use(express.static('public'))

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');




app.listen(PORT, () => console.log('Hey, I am your server.'))
//module.exports = app;

