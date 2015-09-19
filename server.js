var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];

var app = express();

// initialization
// express with correct environment
require('./config/express')(app, config);
// mongoose connection and register models
require('./config/mongoose')(config);
// passport local strategy
require('./config/passport')();
// routes
require('./app/routes/notes')(app);
require('./app/routes/categories')(app);
require('./app/routes/users')(app);


app.listen(config.port);
console.log('App started on port 3000');

module.exports = app;