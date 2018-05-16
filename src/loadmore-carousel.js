var http = require('http');
var express = require('express');
var fs = require('fs');

var slideJson;
var app = express();

fs.readFile('./data/slide.json', 'utf8', function (err, data) {
  if (err) throw err;
  slideJson = JSON.parse(data);
});

app.get('/getslide', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    // res.send(JSON.stringify(slideJson));
    // res.jsonp(slideJson);
    setTimeout(function(){
        res.jsonp(slideJson);
    }, 1000);
});

app.listen(9000);