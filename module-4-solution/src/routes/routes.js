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

			// Categories page
			.state('categories', {
				url: '/categories',
				templateUrl: 'src/pages/categories.html',
				controller: 'CategoriesController as catCtrl',
				resolve: {
					categoriesList: ['MenuDataService', function(MenuDataService) {
						return MenuDataService.getAllCategories().then(function (res) {
							return res;
						});
					}]
				}
			})

			// Items page
			.state('items', {
				url: '/items/{shortName}',
				templateUrl: 'src/pages/items.html',
				controller: 'ItemsController as itCtrl',
				resolve: {
					items: ['$stateParams', 'MenuDataService', function($stateParams,MenuDataService) {
						return MenuDataService.getItemsForCategory($stateParams.shortName).then(function (res) {
							return res.menu_items;
						});
					}]
				}
			});
	}

})();
