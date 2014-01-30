var express = require('express');

var app = express()
var port = 8000;
app.listen(port)

console.log("Express app listening on port " + port);

//listening for requests on that port
app.get('/', function(req, res){
	res.send("Hello, welcome to CS 1501");
});