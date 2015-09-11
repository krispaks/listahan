define(['angular'], function(angular){
	'use strict';
	
	return angular.module('budget').factory('Budget', ['$resource', function($resource){
		return $resource('api/budget/:budgetId', {
			budgetId: '@_id'
		},
		{
			update: {
				method: 'PUT'
			}
		});
	}])
});