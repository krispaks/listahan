define(['angular'], function(angular){
	'use strict';
	
	return angular.module('budget').config(['$routeProvider', function($routeProvider){
		
		$routeProvider
			.when('/budget', {
				templateUrl: '/budget/views/list-budget.client.view.html',
				controller: 'BudgetController',
				controllerAs: 'vm'
			})
			.when('/budget/create', {
				templateUrl: '/budget/views/create-budget.client.view.html',
				controller: 'BudgetController',
				controllerAs: 'vm'
			})
			.when('/budget/:budgetId', {
				templateUrl: '/budget/views/detail-budget.client.view.html',
				controller: 'BudgetController',
				controllerAs: 'vm'
			});
	}]);
});