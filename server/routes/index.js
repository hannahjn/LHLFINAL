var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testcam', function(req, res, next) {
  res.render('potato', { title: 'Express' });
});

module.exports = router;
