;(function() {
  'use strict';
  angular
    .module('boilerplate')
    .factory('QueryService', [
      '$http', '$q', 'CONSTANTS', QueryService
    ]);

  function QueryService($http, $q, CONSTANTS) {


    var service = {
      query: query
    };

    return service;
    
    function query(method, url, params, data) {

      var deferred = $q.defer();

      $http({
        method: method,
        url: CONSTANTS.API_URL + url,
        params: params,
        data: data
      }).then(function(data) {
        if (!data.config) {
          console.log('Server error occured.');
        }
        deferred.resolve(data);
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

  }


})();
