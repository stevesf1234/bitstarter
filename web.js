var express = require('express');
var fs = require('fs');

var app = express();
var data = fs.readFileSync('sender/index.html');

app.get('/', function(request, response) {
  response.send(data.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
