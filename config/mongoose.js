var mongoose = require('mongoose');

// Requiring models so they are registered before app starts
var Note = require('../app/models/note');
var Category = require('../app/models/category');


module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', function() {
    console.log('connected to db');
  });
};