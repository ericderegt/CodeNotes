var mongoose = require('mongoose');


// checks if Card model is registered already, otherwise register it
if (mongoose.models.Card) {
  Card = mongoose.model('Card');
} else {
  Card = mongoose.model('Card', require('../models/article'));
}

exports.list = function(req, res) {
  Card.find().exec(function(err,cards) {
    if (err) {
      return res.status(400).send({
        message: 'error'
      });
    } else {
      res.json(cards);
    };
  });
};