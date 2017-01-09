(function() {
	
	'use strict';
	
	var itemsComponent = {
		templateUrl: './src/components/items.template.html',
		bindings: {
			categories: '<'
		}
	};
	
	angular.module('MenuApp')
		.component('items', itemsComponent);
	
})();