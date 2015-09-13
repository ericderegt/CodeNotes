var angular = require('angular');
require('angular-route');
require('angular-resource');

var app = angular.module('codeNotes', ['ngRoute', 'ngResource']);

require('./controllers');
require('./services');

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