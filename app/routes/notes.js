var notes = require('../controllers/notes.server');

module.exports = function(app) {
  // Notes Routes
  app.route('/api/notes')
    .get(notes.list);

  app.route('/api/notes/:noteId')
    .delete(notes.delete);
};
