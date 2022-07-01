var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) 
{
  res.render(
    'aboutme',
   { 
    title: 'aboutme',
    userName: 'Rishabh'  });
});

module.exports = router;