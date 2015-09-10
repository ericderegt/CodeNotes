var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Card Schema
var CardSchema = new Schema({
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
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Card', CardSchema);