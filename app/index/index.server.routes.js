var indexController = require('./index.server.controller');

module.exports = function(app){
	app.get('/', indexController.render);
};