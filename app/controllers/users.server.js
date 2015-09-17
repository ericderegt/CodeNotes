var mongoose = require('mongoose'),
  passport = require('passport'),
  User = mongoose.model('User');

// Check if no user, then try to create new user. If fail, show error,
// otherwise login user in and redirect home

exports.register = function(req, res, next) {
  if (!req.user) {
    var user = new User(req.body);
    var message = null;
    user.provider = 'local';
    user.save(function(err) {
      if (err) {
        return res.redirect('/register');
      }

      req.login(user, function(err) {
        if (err)
          return next(err);

        return res.redirect('/');
      });
    });
  } else {
    return res.redirect('/');
  }
};

exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};