var mongoose = require('mongoose');
var config = require('./config/config')['development'];

var Note = require('./app/models/note');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  
  Note.remove({}, function() {
    console.log('deleted all Notes');
  });

  seedNotes.map(function(seed) {
    var note = new Note({
      title: seed.title,
      content: seed.content,
      link: seed.link
    });

    note.save();
  });

});

var seedNotes = [
  {
    title: "Mongoose Docs",
    content: "Great docs",
    link: "http://www.mongoosejs.com",
    category: "JavaScript"
  },
  {
    title: "MEAN Course",
    content: "Pluralsight",
    link: "http://www.pluralsight.com",
    category: "JavaScript"
  },
  {  
    title: "React",
    content: "Training site",
    link: "http://www.react-training.com",
    category: "JavaScript"
  }
];