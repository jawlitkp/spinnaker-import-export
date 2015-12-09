var express = require('express');
var sys = require('sys')
var exec = require('child_process').exec;

var app = express();
app.set('views', './views')
app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/export', function(req, res) {
  exec("cqlsh -f export.cql", function (error, stdout, stderr) {
    exec("cd exports && tar -zcvf ../public/spinnaker_export.tgz", function (error, stdout, stderr) {
      res.redirect('/spinnaker_export.tgz');
    });
  });
});

app.get('/import', function(req, res) {
  res.render('import');
});

app.listen(10000);
