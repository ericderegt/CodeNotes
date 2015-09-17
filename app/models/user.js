var crypto = require('crypto'),
  mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// User Schema
var UserSchema = new Schema({
  username: {
    type: String,
    default: '',
    trim: true,
    unique: true,
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
  provider: String,
  providerId: String,
  created: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', function(next) {
  if (this.password) {
    var md5 = crypto.createHash('md5');
    this.password = md5.update(this.password).digest('hex');
  }

  next();
});

UserSchema.methods.authenticate = function(password) {
  var md5 = crypto.createHash('md5');
  md5 = md5.update(password).digest('hex');

  return this.password == md5;
};

UserSchema.statics.findUniqueUsername = function(username, suffix, cb) {
  var _this = this;
  var possibleUsername = username + (suffix || '');

  _this.findOne(
    {username: possibleUsername},
    function(err, user) {
      if (!err) {
        if(!user) {
          cb(possibleUsername);
        } else {
          return _this.findUniqueUsername(username, (suffix || 0) + 1, cb);
        }
      } else {
        cb(null);
      }
    })
}

module.exports = mongoose.model('User', UserSchema);