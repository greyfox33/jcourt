'use strict';

//these two variables need to be picked up at runtime, not hard coded
var token = '12345';
var url = 'http://127.0.0.1:8050/api/hearings';

angular.module('jcourt2App')
	.factory('External', ['$resource', function($resource) { 
		return { 
			postExternal: function(token, url) { 
				return $resource(url, null, {
					query: 
					{
						headers: {'Authorization': 'Bearer ' + token
					}
					/*//add post here
					put: {
						method: 'POST',
						headers: {'Authorization': 'Bearer ' + token }
						data?? : data
					}
					*/
				}
		}); 
	} }
}]);


//build the $http resource
//set a temp hearing equal to the current hearing
//set the transfer hearing values to match only the subset needed (e.g. leave out Judge, and don't set caseworker
//build the http command 
// leave a note  here to build the http command using applicatio.yml values, not hard coded
/*
.factory('dataFactory', ['$http', function($http) {

    var urlBase = 'http://127.0.0.1:8050/api/hearing';
    var dataFactory = {};
    -- insert http command, like bearer token here

    dataFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };
 */