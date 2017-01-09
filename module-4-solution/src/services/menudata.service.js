(function() {
	
	'use strict';
	
	function MenuDataService ($http, ApiBaseUrl) {
		var self = this;
		
		self.getAllCategories = function() {
			return $http.get(ApiBaseUrl + 'categories.json').then(function(res) {
				return res.data;
			});
		};
		
		self.getItemsForCategory = function(categoryShortName) {
			return $http.get(ApiBaseUrl + 'menu_items.json?category=' + categoryShortName)
				.then(function(res) {
					return res.data;
			});
		};
	}
	
	MenuDataService.$inject = ['$http', 'ApiBase'];
	angular
		.module('data')
		.service('MenuDataService', MenuDataService);
})();