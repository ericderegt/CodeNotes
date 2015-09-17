var users = require('../controllers/users.server.js'),
  passport = require('passport');

module.exports = function(app) {

  app.route('/register')
    .post(users.register);

};