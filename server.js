var express = require('express');
var browserify = require('browserify-middleware');
var path = require('path');

var app = express();


app.get('/bundle.js', browserify('./src/index.js', {
  transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
}));

app.use(express.static('./src/index.js'));


app.use('/style.css', function(req, res, next) {
  res.sendFile('style.css');
});

app.use(function(req, res, next) {
  res.status(404).send('404 - Page Not Found');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
