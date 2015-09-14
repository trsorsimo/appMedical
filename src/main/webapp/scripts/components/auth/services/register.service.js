'use strict';

angular.module('appmedicalApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


