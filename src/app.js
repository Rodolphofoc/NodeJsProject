'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const config = require('./config');
const mongoose = require('mongoose');

// Connecta ao banco
mongoose.connect(config.connectionString);

// Carrega os Models
const User = require('./models/user');


//rotas
const indexRoute = require('./routes/index');
const loginRoute = require('./routes/loginRoute');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/healthcheck', indexRoute);
app.use('/login', loginRoute);

module.exports = app;
