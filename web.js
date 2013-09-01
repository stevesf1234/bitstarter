var express = require('express');
var fs = require('fs');
var path = require('path');
var http = require('http');
var ejs = require('ejs');

var app = express();
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send(fs.readFileSync('./index.html').toString());
});

app.get('/sender', function(req, res) {
  res.send(fs.readFileSync('./sender/index.html').toString());
});

http.createServer(app).listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'));
});

