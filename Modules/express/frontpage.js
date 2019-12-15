var express = require('express');
var router = express.Router();
var path = require('path');


router.use(function Log (req, res, next) {
    console.log(`[${new Date().toLocaleString()}] requested: ${req.path} by: ${req.ip}`);
    next();
});

router.get('/', function (req, res) {
  res.sendFile(path.resolve('./html/index.html'));
});

module.exports = router;