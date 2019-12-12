exports.id = "CL";
exports.name = "Interactive terminal";
exports.description = "An interactive terminal";

var plugins = [];
var eol = "";

exports.init = function(app) {
    plugins = app.plugins;
    eol = app.EOL;
    var standard_input = process.stdin;
    standard_input.setEncoding('utf-8');

    standard_input.on('data', function (data) {
        if(data === 'exit' + app.EOL){
            console.log("User input complete, program exit.");
            process.exit();
        }else
        {
            console.log();
            commandHandler(data);
        }
    });
};
/**
 * 
 * @param {string} command 
 */
function commandHandler(command) {
    switch (command) {
        case "list" + eol:
            list();
            break;

        case "clear" + eol:
            clear();
            break;
    
        case "" + eol:
            break;
            
        default:
            console.log("Command: " + command +" not found" + eol);
            break;
    }
}

function list() {
    plugins.forEach(function(plugin) {
        console.log("Plugin " + plugin.name);
        console.log("ID: " + plugin.id);
        console.log("Description: " + plugin.discription);
        console.log();
    });
}

function clear() {
    console.clear();
}