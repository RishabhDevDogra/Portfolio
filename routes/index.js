var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', home);

function home(req, res, next) {
  res.render('index', { 
    title: 'Home',
    userName: 'Rishabh'  });
}

module.exports = router;
