var config = require('./config');
var mongoose = require('mongoose');

module.exports = function()
{
	var db = mongoose.connect(config.dbConnection);	
	
	// Note: update the model here
	require('../app/models/user.server.model');
	
	return db;
}