require('node-jsx').install({ extension: '.jsx' });

var express = require('express'),
    path = require('path'),
    React = require('react');

var app = express();

app.use('/public', express.static(path.join(__dirname, 'dist')));

var Html = React.createFactory(require('./app/index.jsx'));

app.get('/', function(req,res) {
  res.send('<!DOCTYPE HTML>' + React.renderToStaticMarkup(Html()));
});

app.listen(1337, function() {
  console.log('App running at http://localhost:1337');
});