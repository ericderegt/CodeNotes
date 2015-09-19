var path = require('path');
var rootPath = path.normalize(__dirname + '/../');

module.exports = {
  development: {
    db: 'mongodb://localhost:27017/codeNotes-dev',
    rootPath: rootPath,
    port: process.env.PORT || 3000
  },
  // need to fix production path for db
  production: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/codeNotes-prod',
    port: process.env.PORT || 80
  },
  test: {
    db: 'mongodb://localhost:27017/codeNotes-test',
    rootPath: rootPath,
    port: process.env.PORT || 3000
  }
};