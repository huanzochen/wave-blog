var express = require('express');
var router = express.Router();

const api = require('../controller/api');

/* GET api check. */
router.get('/', function(req, res, next) {
  res.send("api is now working!");
});

router.get('/api/articlelist', api.articleList);


module.exports = router;
