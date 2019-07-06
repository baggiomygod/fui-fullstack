var express = require('express');
var router = express.Router();
const loginCheck = require('../middleware/loginCheck')

/* GET home page. */
router.get('/', loginCheck, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
