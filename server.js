var express = require('express');
var browserify = require('browserify-middleware');
var path = require('path');
var cors = require('cors');
var request = require('request');

var app = express();

var API_URL = 'http://api.brewerydb.com/v2';
var API_KEY = 'dc1cda63d965b27555774c986b87b361';

app.use(cors());

app.get('/bundle.js', browserify('./src/index.js', {
  transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
}));

app.use(express.static('./src'));


app.get('/api', function(req, res){
  request('https://api.brewerydb.com/v2/?key=' + API_KEY, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
   });
});

app.get('/api/search', function(req, res){
  var url = API_URL + '/search?q=';
  var q = req.query.q;

  url = url + q + '&p=1' + '&withBreweries=Y' + '&type=beer' + '&key=' + API_KEY;

  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  })
});

app.use(function(req, res, next) {
  res.status(404).send('404 - Page Not Found');
});

app.listen(3000, function() {
  console.log('Server lives!! Listening on port 3000');
});
