(function() {

	'use strict';

	var categoriesComponent = {
		templateUrl: './src/components/categories.template.html',
		bindings: {
			catList: '<'
		}
	};

	angular.module('MenuApp')
		.component('categories', categoriesComponent);

})();
