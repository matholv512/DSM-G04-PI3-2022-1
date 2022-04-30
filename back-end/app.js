// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config()

// Exibindo as variáveis de ambiente no console(teste)
// console.log(process.env)

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

const dbConnection = require('./confg/database')
dbConnection()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/********************** ROTAS ************************** */

const glossary = require('./routes/glossary')
app.use('/glossary', glossary)

const user = require('./routes/user')
app.use('/user', user)

const assessment = require('./routes/assessment')
app.use('/assessment', assessment)
/******************************************************* */

const login = require('.routes/login')
app.use('/login', login)

module.exports = app;