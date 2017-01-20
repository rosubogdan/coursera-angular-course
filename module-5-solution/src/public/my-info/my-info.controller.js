(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user'];

function MyInfoController(user) {
  var self = this;
  self.user = user;
}

})();
