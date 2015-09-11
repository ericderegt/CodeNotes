var mongoose = require('mongoose'),
  Note = mongoose.model('Note');

exports.list = function(req, res) {
  Note.find().exec(function(err,notes) {
    if (err) {
      return res.status(400).send({
        message: 'error'
      });
    } else {
      res.json(notes);
    };
  });
};