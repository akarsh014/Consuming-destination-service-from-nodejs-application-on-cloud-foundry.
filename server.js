/*eslint no-console: 0*/
"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var cfenv = require("cfenv");
var route = require('./routes/route');

var app = express();
app.use(bodyParser.json());
app.use('/', route);

var appEnv   = cfenv.getAppEnv();
app.listen(appEnv.port, function() {
    console.log("server starting on " + appEnv.url);
})
