var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendfile(__dirname + '/index.html');
})

module.exports = router;