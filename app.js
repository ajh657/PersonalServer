var fs = require('fs');
var path = require('path');
var os = require('os');

var plugins = [];

var modulePath = path.resolve("./modules").toString();
var regex = /^([a-zA-Z0-9\s_\\.\-\(\):])+\.(js)$/;

var appData = {};
appData.osPlatform = os.platform();
appData.EOL = os.EOL;

fs.readdirSync(modulePath).forEach(function(file) {
    if(file.match(regex)) {
        console.log('Attempting to load: ' + file);
        plugins.push(require(modulePath + "/" + file));
    }
});

appData.plugins = plugins;

plugins.forEach(function(plugin){
    console.log('Attempting to Init: ' + plugin.name);
    plugin.init(appData);
});
