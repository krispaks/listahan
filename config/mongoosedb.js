var config = require('./config');
var mongoose = require('mongoose');

module.exports = function()
{
	var db = mongoose.connect(config.dbConnection);	
	
	// Note: update the model here
	require('../app/user/user.server.model');
	require('../app/budget/budget.server.model');
	require('../app/budget/budget.server.modelItem');	
	
	return db;
}