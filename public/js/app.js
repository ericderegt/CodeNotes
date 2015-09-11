var angular = require('angular');
require('angular-route');
require('angular-resource');

// require('./services');

var app = angular.module('codeNotes', ['ngRoute', 'ngResource']);

require('./controllers');

app.config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '../views/notes.html',
        controller: 'NoteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  });