 'use strict';

angular.module('appmedicalApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-appmedicalApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-appmedicalApp-params')});
                }
                return response;
            },
        };
    });