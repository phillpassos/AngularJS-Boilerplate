
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['QueryService'];


  function MainController(QueryService) {
    var self = this;
  }


})();