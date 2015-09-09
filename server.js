process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoosedb');
var express = require('./config/express');
var passportConfig = require('./config/passportConfig');

var db = mongoose();
var app = express();
var passport = passportConfig();

app.listen(4000);
module.exports = app;

console.log('running in ' + process.env.NODE_ENV + ' mode');
console.log('Server running at http://localhost:3000');