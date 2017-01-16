(function() {

	'use strict';

	var itemsComponent = {
		templateUrl: './src/components/items.template.html',
		bindings: {
			list: '<'
		}
	};

	angular.module('MenuApp')
		.component('items', itemsComponent);

})();
