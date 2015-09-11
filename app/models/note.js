var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Note Schema
var NoteSchema = new Schema({
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title is required'
  },
  content: {
    type: String,
    default: '',
    trim: true,
    required: 'Content is required'
  },
  link: {
    type: String,
    default: '',
    trim: true,
    required: 'Link is required'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Note', NoteSchema);