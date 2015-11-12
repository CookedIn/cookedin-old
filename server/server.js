var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/cookedin');

require('./config/middleware.js')(app, express);

var port = 1337;
app.listen(port, function() {
  console.log("I'm listening at " + port);
});

module.exports = app;


