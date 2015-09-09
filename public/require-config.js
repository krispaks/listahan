(function(require){
	'use strict';
	require.config({
		paths: {
			angular: '/lib/angular/angular',
			angularRoute: '/lib/angular-route/angular-route',
			angularResource: '/lib/angular-resource/angular-resource'
		},
		shim: {
			'angular': { exports: 'angular' },
			'angularRoute': ['angular'],
			'angularResource': ['angular'],
		}
	});
}(require))