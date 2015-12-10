var express = require('express');
var multer  = require('multer');
var sys = require('sys');
var fs = require('fs');
var exec = require('child_process').exec;
var upload = multer({ dest: 'imports/' });

var app = express();
app.set('views', './views')
app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/export', function(req, res) {
  exec("cqlsh -f export.cql", extract);
});

app.post('/import', upload.single('csv'), function(req, res) {
  exec("cd imports && tar -xvf " + req.file.filename, function (error, stdout, stderr) {
    exec("cqlsh -f import.cql", function (error, stdout, stderr) {
      res.send('Import Complete');
    });
  });
});

var extract = function (error, stdout, stderr){
  exec("cd exports && tar -zcvf ../public/spinnaker_export.tgz", function (error, stdout, stderr) {
    res.redirect('/spinnaker_export.tgz');
  });
};

app.listen(10000);
