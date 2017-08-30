var http = require('http');
var express = require('express');
const consolere = require('console-remote-client').connect('console.re', '80', 'gycwifi');
var app = express();

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app).listen('3232', function() {
  console.log('Express server listening on port 3232');
});
