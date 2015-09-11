var angular = require('angular');
require('angular-route');
require('jquery');
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