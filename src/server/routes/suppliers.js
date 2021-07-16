var express = require('express');
var axios   = require('axios');
const env   = require('dotenv').config();

var router  = express.Router();

const url   = process.env.HOST+'/db/getRecord';

/*
router.get('/', async(req, res) => {
  const data = await axios.get(url,{
    params: {  
      fields: ["Addressbook_id, Organisation + ', ' + City AS OrgCity"], 
      orders: ['OrgCity'], 
      table: "dbo.fn_addressbook(2,'A')"
    }
  }).then((response) => {
    res.render('suppliers', { title: 'Suppliers', data: response.data });
  });
});

*/

/*

router.get('/', async(req, res) => {
  const data = await axios.get(url)
  .then((response) => {
    res.render('suppliers', { title: 'Suppliers', data: response.data });
  });
});

*/

module.exports = router;