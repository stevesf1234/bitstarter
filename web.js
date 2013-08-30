var express = require('express');
var fs = require('fs');
var path = require('path');
var http = require('http');

var app = express();
app.set('port', process.env.PORT || 8080);
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  var data = fs.readFileSync('index.html').toString();
  response.send(data);
});

http.createServer(app).listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'));
});
