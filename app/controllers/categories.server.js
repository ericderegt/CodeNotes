var mongoose = require('mongoose'),
  Category = mongoose.model('Category');

// List all categories (GET api/categories)
exports.list = function(req, res) {
  Category.find().exec(function(err,categories) {
    if (err) {
      return res.status(400).send({
        message: 'error'
      });
    } else {
      res.json(categories);
    };
  });
};

// Delete category (DELETE api/categories/:id)
exports.delete = function(req, res) {
  Category.remove({ _id: req.params.categoryId }, function(err) {
    if (err) {
      return res.status(400).send({
        message: 'error'
      });
    } else {
      res.json('Category deleted');
    };
  });
};

// Create category (POST api/categories)
exports.create = function(req, res) {
  var category = new Category(req.body);
  
  category.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: 'error'
      });
    } else {
      res.json(category);
    };
  });
};