;(function() {
  angular
    .module('boilerplate')
    .factory('getDataFromAPI', getDataFromAPI);

  getDataFromAPI.$inject = ['$http'];

  function getDataFromAPI($http) {

    return {
      loadData: loadData
    };

  }


})();
