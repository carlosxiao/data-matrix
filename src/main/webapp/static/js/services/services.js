'use strict';

/* Services */

define([], function() {
	'use strict';

	var appServices = angular.module('App.services', []);
	appServices.factory('gqJSON', ['$resource',
		function($resource){
			return $resource('/jsonFile/:dir/:fileName.json', {dir:'@dir',fileName:'@fileName'}, {
				query: {method:'GET', params:{}, isArray:true}
			});
		}]);


	appServices.factory('gqObj', ['$resource',
		function($resource) {
			return $resource('../:use/:opt', {use:'@use',opt:'@opt'}, {
				query: {method:'GET', params:{}, isArray:true},
				post: {method: 'POST', params: {} },
				update: {method:'PUT', params:{} }
			});
		}
	]);
	return appServices;
});