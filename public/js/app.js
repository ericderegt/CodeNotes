var angular = require('angular');
require('jquery');
require('angular-route');
require('bootstrap');

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