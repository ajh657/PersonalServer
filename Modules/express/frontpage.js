var express = require('express');
var router = express.Router();


router.use(function Log (req, res, next) {
    console.log(`[${new Date().toLocaleString()}] requested: ${req.path} by: ${req.ips}`);
    next();
});

router.get('/', function (req, res) {
  res.send('Hello world!');
});

module.exports = router;