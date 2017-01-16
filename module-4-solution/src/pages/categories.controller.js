(function() {

	'use strict';

	function CategoriesController (categoriesList) {
		var self = this;
		self.categoriesList = categoriesList;
	}

	CategoriesController.$inject = ['categoriesList'];
	angular.module('MenuApp')
		.controller('CategoriesController', CategoriesController);
})();
