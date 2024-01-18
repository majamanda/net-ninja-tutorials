const http = require('node:http');
var fs = require('fs');
var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});




app.listen(3003);
