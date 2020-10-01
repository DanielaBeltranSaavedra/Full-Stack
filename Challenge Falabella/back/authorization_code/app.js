const authorization = require('./authorization.js')
var express = require('express'); 
var request = require('request'); 
var cookieParser = require('cookie-parser');
var stateKey = 'spotify_auth_state';
var app = express();
app.use(express.static(__dirname + '/public'))
   .use(cookieParser());

app.get('/login', authorization.login);
app.get('/callback',authorization.callback);
console.log('Listening on 8888');
app.listen(8888);