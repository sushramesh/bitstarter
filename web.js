var express = require('express');
var app = express();
var fs = require('fs');

var data = fs.readFileSync("index.html","utf-8");

app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World!');
    response.send(data); 
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
