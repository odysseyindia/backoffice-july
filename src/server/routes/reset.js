var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('reset', { title: 'Reset Password' });
});

module.exports = router;