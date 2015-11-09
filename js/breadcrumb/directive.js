(function(){
	'use strict';
	angular.module('components.breadcrumb',[]).directive('breadcrumbDirective', Directive);
	
	Directive.$inject = 
		['Breadcrumbs'];
	
	function Directive(Breadcrumbs) {
		var directive = {
			scope: {
                
            },
			restrict:    'E',
            templateUrl : '/template/breadcrumb.html',
			link : link	
		};
		
		return directive;
		
		function link(scope, elem, attrs, ctrl) {
			scope.breadcrumbs = Breadcrumbs;
		}
	}
})();