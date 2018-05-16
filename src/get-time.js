var http = require('http');
var utils = require('./utils');

var app = http.createServer( function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('You are Connected to Server!<br /><br />');
    res.write('Current Time: ' + utils.getTime());
    res.end();
});

app.listen(9090);