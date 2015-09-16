var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// User Schema
var UserSchema = new Schema({
  username: {
    type: String,
    default: '',
    trim: true,
    required: 'Username is required'
  },
  password: {
    type: String,
    default: '',
    trim: true,
    required: 'Password is required'
  },
  email: {
    type: String,
    default: '',
    trim: true,
    required: 'Email is required'
  },
  salt: {
    type: String,
  },
  admin: {
    type: Boolean,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);