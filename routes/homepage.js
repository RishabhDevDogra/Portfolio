var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) 
{
  res.render('homepage',
  { 
    title: 'homepage',
    userName: 'Rishabh'  });
});

module.exports = router;