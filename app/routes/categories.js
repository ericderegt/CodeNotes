var categories = require('../controllers/categories.server');

module.exports = function(app) {
  // Notes Routes
  app.route('/api/categories')
    .get(categories.list)
    .post(categories.create);

  app.route('/api/categories/:categoryId')
    .delete(categories.delete);
};
