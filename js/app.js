(function() {

	'use strict';

	angular.module('bcapp', [ 'ngRoute', 'components.breadcrumb' ]).config(configure);

	configure.$inject = [ '$routeProvider' ];

	function configure($routeProvider) {

		// Url 設定
		for ( var locationPath in appConfig.locationConfig) {
			var urlPattern = locationPath;
			var config = appConfig.locationConfig[locationPath];
			$routeProvider.when(urlPattern, config);
		}
	}
})();