'use strict'

var express = require('express');
var UserController = require('../controler/user');

var api = express.Router();

api.get('/probando-controlador', UserController.pruebas);
api.post('/register', UserController.saveUser);

module.exports = api;