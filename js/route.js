window.appConfig = window.appConfig || {};
window.appConfig.locationConfig = {
	'/': {
		templateUrl: '/template/index.html',
		resolve : [["Breadcrumbs",function(Breadcrumbs){
			Breadcrumbs.init();
			
		}]]
	},
	'/hello': {
		templateUrl: '/template/hello.html',
		resolve : [["Breadcrumbs",function(Breadcrumbs){
			Breadcrumbs.init();
			Breadcrumbs.push({
		         "name": "Hello",
		    });
		}]]
	},
	'/world': {
		templateUrl: '/template/world.html',
		resolve : [["Breadcrumbs",function(Breadcrumbs){
			Breadcrumbs.init();
			Breadcrumbs.push({
		         "name": "World",
		    });
		}]]
	}
};