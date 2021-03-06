var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Category Schema
var CategorySchema = new Schema({
  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Category is required'
  }
});

module.exports = mongoose.model('Category', CategorySchema);