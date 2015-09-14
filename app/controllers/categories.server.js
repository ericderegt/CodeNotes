var mongoose = require('mongoose'),
  Category = mongoose.model('Category');

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