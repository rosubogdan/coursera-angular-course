(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var self = this;
  self.exist = true;
  self.user = {};

  self.checkDish = function() {
    var short_name = self.user.favorite || false;
    if (short_name) {
      MenuService.getFavoriteDish(short_name)
        .then(function(res) {
          self.user.favorite_dish = res;
          self.exist = true;
        })
        .catch(function(err) {
          self.exist = false;
        })
    }

    self.saveUser = function() {
      UserService.saveUser(self.user);
      self.success = true;
    };
  }
}

})();
