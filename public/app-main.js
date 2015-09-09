requirejs(['require-config'], function(){
	requirejs(['angular','app-lib', 'app-features'], function(angular){
		
		var mainApplicationModuleName = "listahan";
				
		var mainAplicationModule = angular.module(mainApplicationModuleName, ['appLib', 'appFeatures']);		
		
		mainAplicationModule.config(['$locationProvider', function($locationProvider){
			$locationProvider.hashPrefix('!');
		}]);
		
		if(window.location.hash === '#_=_'){
			window.location.hash = '#!'
		}
		
		angular.element(document).ready(function(){
			angular.bootstrap(document, [mainApplicationModuleName]);
		});
		
		return mainAplicationModule;
	});
});