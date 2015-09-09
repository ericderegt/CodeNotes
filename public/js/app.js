var angular = require('angular');
require('angular-route');

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