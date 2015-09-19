var users = require('../controllers/users.server.js'),
  passport = require('passport');

// Users related routes
module.exports = function(app) {
  app.route('/register')
    .post(users.register);

  app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

  app.route('/logout')
    .get(users.logout);
};