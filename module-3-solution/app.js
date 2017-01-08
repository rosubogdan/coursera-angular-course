(function() {
	
	"use strict";
	
	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.constant('ApiBaseUrl', "https://davids-restaurant.herokuapp.com/")
	.directive('foundItems', FoundItemsDirective);
	
	//prevent minified injections
	NarrowItDownController.$inject = ['MenuSearchService'];
	MenuSearchService.$inject = ['$http', 'ApiBaseUrl'];
	
	//NarrowItDownController
	function NarrowItDownController (MenuSearchService) {
		var self = this;
		
		self.searchItems = function() {
			MenuSearchService.getMatchedMenuItems(self.searchedItem).then(function(response) {
				self.found = response || [];
				self.found.length > 0 ? self.msg = undefined : self.msg = 'Nothing found!';
			});
		};
		
		self.removeItem = function (itemIndex) {
			self.found.splice(itemIndex, 1);
		}
	}
	
	//MenuSearchService
	function MenuSearchService ($http, ApiBaseUrl) {
		var self = this;
		
		self.getMatchedMenuItems = function(searchTerm) {
			return $http.get(ApiBaseUrl + "menu_items.json"
			).then(function (result) {
				// process result and only keep items that match
				var foundItems = [];
				angular.forEach(result.data.menu_items, function (item) {
					if (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
						foundItems.push(item);
					}
				});
				// return processed items
				return foundItems;
			}).catch(function(err) {
				console.log('ERROR: ', err);
			});
		}
	}
	//FoundItemsDirective
	function FoundItemsDirective() {
		var ddo = {
			restrict: 'AE',
			templateUrl: 'found-items.template.html',
			scope: {
				foundItems: '<items',
				removeItem: '&onRemove'
			}
		};
		
		return ddo;
	}
	
	
})();
