define(['angular'], function(angular){
	'use strict';
	
	return angular.module('budget').config(['$routeProvider', function($routeProvider){
		
		$routeProvider
			.when('/budget', {
				templateUrl: '/views/list-budget.client.view.html'
			});
	}]);
});