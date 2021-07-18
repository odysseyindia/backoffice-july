var express = require('express');
var axios   = require('axios');
const env   = require('dotenv').config();

var router  = express.Router();

router.get('/', async(req, res) => {

  if (process.env.HOST){

    axios.post(process.env.HOST+'/db/getRecord',{
      "fields":["Addressbook_id, Organisation"],
      "orders":["organisation"],
      "table":"dbo.fn_addressbook(2,'OA')"
    })
    .then(function (response) {
    // handle success
    //const data  = JSON.parse(response.data);
    res.render('suppliers', { data: response.data });

  })
    .catch(function (error) {
    // handle error
    console.log(error);
    res.render('suppliers', { msg: error, data: [] });

  })
    .then(function () {
    // always executed
  });

  } else {
    res.render('suppliers', { show: 'show', msg: 'Host ip is not on file' });  
  }

});

module.exports = router;