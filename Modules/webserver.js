exports.id = "WS";
exports.name = "Website server";
exports.description = "website server module";



var plugins = [];
var eol = "";

exports.init = function(app) {
    plugins = app.plugins;
    eol = app.EOL;
    
    console.log(__dirname);

};