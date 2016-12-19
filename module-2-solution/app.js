(function() {

  "use strict";

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  //prevent minified injections
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  // default items to buy
  var ToBuyDefaultItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Cake",
      quantity: "3"
    }
  ];

  //ToBuyController
  function ToBuyController (ShoppingListCheckOffService) {
    var self = this;

    //get items list
    self.items = ShoppingListCheckOffService.getItemsToBuy();

    //mark item as bought
    self.markBought = function(index) {
      //use ShoppingListCheckOffService method
      ShoppingListCheckOffService.markAsBought(index);
    }
  }

  //AlreadyBoughtController
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var self = this;
    self.items = ShoppingListCheckOffService.getItemsAlreadyBought();

  }

  //ShoppingListCheckOffService
  function ShoppingListCheckOffService () {
    var service = this;

    //store items and initialize toBuy list
    var toBuy = ToBuyDefaultItems;
    var alreadyBought = [];

    //mark items as bought and manipulate arrays
    service.markAsBought = function(index) {
      //populate alreadyBought arrays
      alreadyBought.push(toBuy[index]);

      //remove item after marked as bought
      toBuy.splice(index,1);
    }

    // get initial to buy list
    service.getItemsToBuy = function() {
      return toBuy;
    };

    //get aready bought items
    service.getItemsAlreadyBought = function () {
      return alreadyBought;
    }

  };

})();
