var express = require('express');
var axios   = require('axios');
const env   = require('dotenv').config();

var router  = express.Router();

var agents = [];
var hotels = [];

router.get('/', async(req, res) => {

  if (process.env.HOST){

    axios.post(process.env.HOST+'/db/getRecord',{
      "fields":["*"],
      "orders":["Organisation"],
      "table":"dbo.fn_addressbook(2,'A')"
    })
    .then(function (response) {
    agents = response.data ;

  })
    .catch(function (error) {
    // handle error
    console.log(error);
    res.render('suppliers', { msg: error, data: [] });

  })
    .then(function () {
    // always executed
  });


  axios.post(process.env.HOST+'/db/getRecord',{
      "fields":["*"],
      "orders":["Organisation"],
      "table":"dbo.fn_addressbook(2,'H')"
    })
    .then(function (response) {
    hotels = response.data;

  })
    .catch(function (error) {
    // handle error
    console.log(error);
    res.render('suppliers', { msg: error, data: [] });

  })
    .then(function () {
    // always executed
  });

  res.render('suppliers', { 'hotels': hotels, 'agents': agents });

  } else {
    res.render('suppliers', { show: 'show', msg: 'Host ip is not on file' });  
  }


  axios.post(process.env.HOST+'/db/getRecord',{
      "fields":["*"],
      "orders":["Organisation"],
      "table":"dbo.fn_addressbook(5,'')"
    })
    .then(function (response) {
    all = response.data;

  })
    .catch(function (error) {
    // handle error
    console.log(error);
    res.render('suppliers', { msg: error, data: [] });

  })
    .then(function () {
    // always executed
  });

  res.render('suppliers', { 'all': all, 'hotels': hotels, 'agents': agents });

  } else {
    res.render('suppliers', { show: 'show', msg: 'Host ip is not on file' });  
  }


});

module.exports = router;