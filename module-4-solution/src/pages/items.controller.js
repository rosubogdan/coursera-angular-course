(function() {

	'use strict';

	function ItemsController (items) {
		var self = this;
		self.items = items;
	};

	ItemsController.$inject = ['items'];
	angular.module('MenuApp')
		.controller('ItemsController', ItemsController);
})();
