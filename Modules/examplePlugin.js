//Module Id
exports.id = "EX";
//Module Name
exports.name = "examplePlugin";
//Module Description
exports.description = "An example plugin for modular server";
//data given by the server app
var app;
//Module initial Function
exports.init = function (data) {
    app = data;
    console.log("Hello World");
};