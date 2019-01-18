var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('./config/mongoose');
var bodyParser = require('body-Parser');
app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());

require('./config/routes.js')(app)
app.listen(8000, function() {
	console.log('listening on 8000')
});