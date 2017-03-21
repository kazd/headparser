var express = require('express');
var bodyParser = require('body-parser');
var useragent = require('express-useragent');
var port = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.json());
app.use(useragent.express());
app.get('/', function(req, res) {
 
//getting sources
    var headers = req.headers;
    var ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var language = headers['accept-language'].split(',');
    var useragent = headers["user-agent"];
    
    res.json({  ipaddress: headers.host,
                language: language[0],
                software: req.useragent.platform + ', ' + req.useragent.os
             });
});

app.listen(port, function() {
    console.log('Server online on port ' + port + '...');
});