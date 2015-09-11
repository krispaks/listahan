define(['angular'], function(angular){
	'use strict';
	
	return angular.module('budget').controller('BudgetController', 
		['$scope', '$routeParams', '$location', 'Authentication', 'Budget', 
		function($scope, $routeParams, $location, Authentication, Budget){
		
			$scope.authentication = Authentication;
			
			$scope.find = function(){
				$scope.budget = Budget.query();
			};
	}]);
});