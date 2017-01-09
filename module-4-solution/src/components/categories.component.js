(function() {
	
	'use strict';
	
	var categoriesComponent = {
		templateUrl: './src/components/categories.template.html',
		bindings: {
			categories: '<'
		}
	};
	
	angular.module('MenuApp')
		.component('categories', categoriesComponent);
	
})();