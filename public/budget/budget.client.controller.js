define(['angular'], function(angular){
	'use strict';
	
	return angular.module('budget').controller('BudgetController', 
		['$scope', '$routeParams', '$location', 'Authentication', 'Budget', 
		function($scope, $routeParams, $location, Authentication, Budget){
			
			var vm = this;
			vm.budgetDetail = {};
			vm.budgetExpenseList = {};
			vm.budgetNotes = {};
			
			vm.authentication = Authentication;
			
			vm.testing = "testing dodo ng cow";
			
			vm.find = function(){
				
				Budget.query(function(data){
					vm.budgetList = data;
				}, function(errorResponse){
					$scope.error = errorResponse.data.message;
				});
			};
			
			// Events
			vm.newBudget = function(){
				$location.path('/budget/create');
			};
			
			vm.initializeNewBudget = function(){
				vm.budgetDetail = {
					dateRangeFrom: Date.now(),
					dateRangeTo: Date.now(),
					khrisSalary: 0,
					rasselSalary: 0
				};
			};
			
			vm.create = function(){
				var newBudget = new Budget(vm.budgetDetail);
				
				newBudget.$save(function(response){
					$location.path('budget/' + response._id);
				}, function(errorResponse){
					$scope.error = errorResponse.data.message;
				});
			};
			
			vm.initializeBudgetDetail = function(){
				vm.budgetDetail = Budget.get({
					budgetId: $routeParams.budgetId
				});
			};
	}]);
});