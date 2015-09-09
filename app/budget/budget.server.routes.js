var userController = require('../user/user.server.controller');
var budgetController = require('./budget.server.controller');

module.exports = function(app){
	
	app.route('/api/budget')
		.get(budgetController.list);
	
	app.route('/budget')
		.get(budgetController.render);
};