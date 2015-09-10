
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/codeNotes-dev';
var db = mongoose.connect(url, function(err) {
  if (err) {
    console.log(err);
  }
  console.log('connected');
});

var app = require('./config/express')(db);

app.listen(3000);
console.log('App started on port 3000');