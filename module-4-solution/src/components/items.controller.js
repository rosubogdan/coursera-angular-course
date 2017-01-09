(function() {
	
	'use strict';
	
	function ItemsController (items) {
		var self = this;
		self.items = items;
		console.log('items ', items);
	};
	
	ItemsController.$inject = ['items'];
	angular.module('MenuApp')
		.controller('ItemsController', ItemsController);
})();