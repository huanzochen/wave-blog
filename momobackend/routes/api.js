var express = require('express');
var router = express.Router();

const api = require('../controller/api');

/* GET api check. */
router.get('/', function(req, res, next) {
  res.send("api is now working!");
});

router.get('/api/articlelist', api.articleList);
router.get('/api/logged_in', api.logged_in);



router.post('/api/registration/submit', api.registration);
router.post('/api/login/submit', api.login);
router.get('/api/logout/submit', api.logout);

router.post('/api/newarticle/submit', api.addArticle);


module.exports = router;
