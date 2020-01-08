var express = require('express');
var router = express.Router();

const api = require('../controller/api');

/* GET api check. */
router.get('/', function(req, res, next) {
  res.send("api is now working!");
});

router.get('/api/articlelist', api.articleList);


router.post('/api/registration/submit', api.registration);
router.post('/api/login/submit', api.login)


module.exports = router;
