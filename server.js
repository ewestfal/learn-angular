var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static');

var app = connect();

var serve = serveStatic("angularjs");
app.use(serve);

var server = http.createServer(app).listen(5000);