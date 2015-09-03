var express = require('express');
var path = require('path');
var logger = require('morgan');


// need to add routes
// var indexRoutes = require('../app/routes/index');

module.exports = function() {

  var app = express();

  // set up views
  app.set('views', path.join(__dirname, '../app/views'));
  app.set('view engine', 'jade');

  app.use(logger('dev'));

  app.use(express.static(path.join(__dirname, 'public')));


  app.get('/', function(req,res) {
    res.render('index');
  });

  // return Express server instance, called in server.js
  return app;
}

