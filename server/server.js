var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/cookedin');

require('./config/middleware.js')(app, express);

var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log("Listening to " + port);
});

module.exports = app;


