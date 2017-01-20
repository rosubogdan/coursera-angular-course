(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['$localStorage'];

function UserService($localStorage) {
  var self = this;

  self.saveUser = function(userData) {
    $localStorage.user = userData;
  };

  self.getUserInfo = function() {
    return $localStorage.user || null;
  };
}



})();
