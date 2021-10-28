var express = require('express');
var router = express.Router();
let x=0

/* GET users listing. */
router.get('/', function(req, res, next) {
  x++
  res.send("“User accesses are: "+x);
});

module.exports = router;
