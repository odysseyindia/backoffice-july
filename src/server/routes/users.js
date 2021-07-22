var express = require('express');
var router = express.Router();

var axios   = require('axios');

/*
const url   = 'http://192.168.0.10:5100/db/getCities';

router.get('/', async(req, res) => {
  const data = await axios.get(url)
  .then((response) => {
    console.table(response.data)
    res.render('users', { title: 'Users', data: response.data });
  });
});
*/

router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users' });
});

module.exports = router;