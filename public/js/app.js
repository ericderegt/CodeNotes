var angular = require('angular');
require('angular-route');
require('angular-resource');
require('angular-bootstrap-npm');

var app = angular.module('codeNotes', ['ngRoute', 'ngResource', 'ui.bootstrap']);

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