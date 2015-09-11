define(['require'
	, 'angular',
	, 'user/user.client.module'
	, 'budget/budget.client.module'
	, 'user/authentication.client.service'
	, 'budget/budget.client.routes'
	, 'budget/budget.client.service'
	, 'budget/budget.client.controller'	
	], function(requirejs, angular){
		'use strict';
		
		return angular.module('appFeatures', ['users', 'budget']);
});