var express = require('express');
var app = express();
var port = process.env.NODE_PORT || 3000;

app.get('/', function (req, res) {
  res.send("Hi there! I'm running with Supernova Cloud Platform");
});

app.listen(port, function () {
  console.log('Example app listening on port '+ port);
});

