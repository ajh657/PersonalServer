var fs = require('fs');
var path = require('path');
var plugins = [];

var modulePath = path.resolve("./modules").toString();
var regex = /^([a-zA-Z0-9\s_\\.\-\(\):])+\.(js)$/;

fs.readdirSync(modulePath).forEach(function(file) {
    if(file.match(regex)) {
        console.log('Attempting to load: ' + file);
        plugins.push(require(modulePath + "/" + file));
    }
});


plugins.forEach(function(plugin){
    console.log('Attempting to Init: ' + plugin.name);
    plugin.init();
});
