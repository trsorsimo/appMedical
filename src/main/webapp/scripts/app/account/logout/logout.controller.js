'use strict';

angular.module('appmedicalApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
