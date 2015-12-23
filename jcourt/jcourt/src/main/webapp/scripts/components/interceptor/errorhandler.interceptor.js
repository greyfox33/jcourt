'use strict';

angular.module('jcourt2App')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('jcourt2App.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });