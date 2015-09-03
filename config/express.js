var express = require('express');


module.exports = function() {

  var app = express();

  app.get('/', function(req,res) {
    res.send('Getting this app started');
  });

  // return Express server instance, called in server.js
  return app;
}

