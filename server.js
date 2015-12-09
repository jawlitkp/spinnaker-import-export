var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/export', function(req, res) {
  res.send('export');
});

app.get('/import', function(req, res) {
  res.render('import');
});

app.listen(9000);
