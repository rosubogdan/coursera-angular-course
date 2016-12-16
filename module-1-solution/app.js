(function() {

  'use strict';

  angular.module('LunchCheck', [

  ])

  .controller('LunchCheckController', LunchCheckController)


  function LunchCheckController($scope) {
    var self = this;
    var messages = [ "Please enter data first.", "Enjoy!", "Too much!"];
    self.lunchMenu = "";
    self.message = "";
    self.isValid = null;

    //validate input private method
    var _validateInput = function(string) {
      var dishes = string ? string.trim().split(',') : [];

      //remove empty array items
      angular.forEach(dishes, function(item, index) {
        if(item === " ") {
          dishes.splice(index, 1);
        }
      });

      _setMessage(dishes);

    };

    //resetMessage
    self.resetMessage = function() {
      self.message = self.isValid = "";
    };

    //set display message - private method
    var _setMessage = function(arr) {
      if (arr.length == 0) {
        self.message = messages[0];
        self.isValid = false;
      }

      if (arr.length > 0 && arr.length <= 3) {
        self.message = messages[1];
        self.isValid = true;
      }

      if (arr.length > 3) {
        self.message = messages[2];
        self.isValid = false;
      }
    };

    //check lunch  public method
    self.checkLunch = function () {
      _validateInput(self.lunchMenu);
    };

    return ($scope.lunchCtrl = self);
  };

  LunchCheckController.$inject = ['$scope']

})();
