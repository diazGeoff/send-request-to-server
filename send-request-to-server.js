var http = require("http");

var sendRequestToServer = function sendRequestToServer( status ){
    var options = {
        "hostname": "localhost",
        "port": 8080,
        "path": "/server",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        }
    };
    var sendRequest = http.request(options, function ( response ) {
        console.log( response.statusCode );
        response.setEncoding("utf8");
        response.on("data", function ( data ) {
            console.log(data);
        });
    });
    sendRequest.on("error", function ( err ) {
        console.log( err );
    });
    sendRequest.write(status);
    sendRequest.end();
};

( module || {} ).exports = sendRequestToServer;