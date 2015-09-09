var userController = require('./user.server.controller');
var passport = require('passport');

module.exports = function(app){
	app.get('/signin', userController.renderSignin);
		
	app.get('/signout', userController.signout);
	
	// facebook
	app.get('/auth/facebook', passport.authenticate('facebook',{
		scope: [ 'email' ],
		failureRedirect: '/signin'
	}));
	
	app.get('/auth/facebook/callback', passport.authenticate('facebook',{
		scope: [ 'email' ],
		failureRedirect: '/signin',
		successRedirect: '/'
	}));
};