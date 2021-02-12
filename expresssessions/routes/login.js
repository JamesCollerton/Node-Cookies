var express = require('express');
var router = express.Router();

/*
    This should show a logged in page
*/
router.get('/', function(req, res, next) {
  console.log(`Logged in, session Id ${req.session.id}`);
  res.render('login');
});

module.exports = router;
