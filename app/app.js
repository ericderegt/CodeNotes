var angular = require('angular');

angular.module('codeNotes', ['ngRoute'])
  
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '../views/notes.html'
      })
      .otherwise({
        redirectTo: '/'
      })
  });