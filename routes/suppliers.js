var express = require('express');
var axios   = require('axios');

var router  = express.Router();

const url   = 'http://192.168.0.10:5100/db/getCities';

router.get('/', async(req, res) => {
  const data = await axios.get(url)
  .then((response) => {
    res.render('suppliers', { title: 'Suppliers', data: response.data });
  });
});

module.exports = router;