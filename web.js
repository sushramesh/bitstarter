var express = require('express');
var app = express();
var fs = require('fs');

//var data = fs.readFileSync("index.html","utf-8");

//var buffer = new Buffer(fs.readFile('index.html','utf8'));

app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World!');
    response.send(fs.readFileSync('index.html','utf8')); 
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
