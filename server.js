var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];

var app = express();

require('./config/express')(app, config);

// initialize mongoose connection and register models
require('./config/mongoose')(config);

require('./app/routes/notes')(app);


app.listen(config.port);
console.log('App started on port 3000');