(function () {
	'use strict';
	
	angular.module('MenuApp')
		.config(RoutesConfig);
	
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		
		// Redirect to home page if no other URL matches
		$urlRouterProvider.otherwise('/');
		
		// *** Set up UI states ***
		$stateProvider
		
		// Home page
			.state('home', {
				url: '/',
				templateUrl: 'src/pages/homepage.html'
			})
			
			// Premade list page
			.state('categories', {
				url: '/categories',
				templateUrl: 'src/pages/categories.html'
			});
	}
	
})();
