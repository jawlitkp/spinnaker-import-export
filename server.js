var express = require('express');
var sys = require('sys')
var exec = require('child_process').exec;
var fs = require('fs');

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

app.post('/import', function(req, res) {
  console.log(req.files);
  fs.readFile(req.files.csv.path, function (err, data) {
  var newPath = __dirname + "spinnaker_import.tgz";
  fs.writeFile(newPath, data, function (err) {
    exec("tar -xf spinnaker_import.tgz -C import", function (error, stdout, stderr) {
      exec("cqlsh -f import.cql", function (error, stdout, stderr) {
       res.send('done');
    });
    });
  });
});
});

app.listen(9000);
