exports.id = "WS";
exports.name = "Website server";
exports.description = "website server module";

var express = require('express');
var app = express();
var port = 80;

var plugins = [];
var eol = "";

exports.init = function(app) {
    plugins = app.plugins;
    eol = app.EOL;

    express = require('express');
    app = express();
    port = 80;

    var frontPage = require('./express/frontpage');

    app.get('/', frontPage);

    app.listen(port, () => console.log(`Express server listening on port ${port}!`));
};