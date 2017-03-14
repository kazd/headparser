
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//used for passing of user-agent for response
var useragent = require('express-useragent');
//create an instance of express for the app
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors);
app.use(useragent.express());
//Api url
var api = '/api/whoami';
app.get(api, function(req, res, next){
var language = req.acceptsLanguages();
var software = "OS: " +req.useragent.os + ", Browser: " + res.useragent.browser;
//create an instance of express for the app
var ipaddress = req.ip;

res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
});

app.listen(8080, function(){
    console.log('we are now online');
});