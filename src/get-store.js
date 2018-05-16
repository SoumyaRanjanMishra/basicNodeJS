var http = require('http');
var express = require('express');
var fs = require('fs');

var slideJson;
var app = express();

fs.readFile('./data/storedetails.json', 'utf8', function (err, data) {
  if (err) throw err;
  slideJson = JSON.parse(data);
});

app.get('/services/store/getStores', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    // res.send(JSON.stringify(slideJson));
    res.jsonp(slideJson);
});

app.listen(9090);