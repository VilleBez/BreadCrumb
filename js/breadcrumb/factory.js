(function(){
	'use strict';
	angular
		.module('components.breadcrumb')
		.factory('Breadcrumbs', factory);

	factory.$inject = [];

	function factory() {
		var self = this;
		self.breadcrumbs  = [];

		// Interface
		self.init = init;
		self.set  = set;
		self.push = push;
		self.getAll = getAll;
		self.getFirst = getFirst;

		// Implement
		function init(){
			self.breadcrumbs =[{
		         "name": "首頁",
		         "path": "#/"
		    }];
		}
		
		function set (urls) {
			self.breadcrumbs = urls;
		}
		
		function push (url){
			self.breadcrumbs.push(url);
		}
		
		function getAll(){
			return self.breadcrumbs;
		}
		
		function getFirst(){
			return self.breadcrumbs[0] || {};
		}
		
		return self;
	}
})();