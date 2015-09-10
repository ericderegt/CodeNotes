var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


// Routes
var notesRoutes = require('../app/routes/notes');

module.exports = function() {

  var app = express();

  // set view path and engine
  // app.set('views', path.join(__dirname, '../app/views'));
  // app.set('view engine', 'jade');

  if (process.env.NODE_ENV === 'development') {
    // if development, use logging and disable view cache
    app.use(logger('dev'));
    app.set('view cache', false);
  }

  // set parsers & static folder
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static('public'));


  // include Notes Routes
  notesRoutes(app);


  // return Express server instance, called in server.js
  return app;
}

