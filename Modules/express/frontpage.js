var express = require('express');
var router = express.Router();
var path = require('path');


router.use(function Log (req, res, next) {
    console.log(`[${new Date().toLocaleString()}] requested: ${req.path} by: ${req.ip}`);
    next();
});

router.get('/', function (req, res) {
  res.sendFile(path.resolve('./Modules/express/html/index.html'));
});

router.get('/:file', function (req, res) {
  console.log(req.params.file);
  var fileName = req.params.file;
  if (!fileName.includes('/')) {
    if (fileName.endsWith(".css")) {
      
    }if (fileName.endsWith(".js")) {
      
    }
  }
});

module.exports = router;