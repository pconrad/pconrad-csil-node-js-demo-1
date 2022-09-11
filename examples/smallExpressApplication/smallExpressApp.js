// smallExpressApp.js
// From: http://proquest.safaribooksonline.com.proxy.library.ucsb.edu:2048/book/-/9781449337735/2dot-nodedotjs/i_sect12_d1e452_html#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTk3ODE0NDkzMzc3MzUlMkZpX3NlY3QxMl9kMWU0ODhfaHRtbCZxdWVyeT0=

var express = require('express');
var app = express();

app.get('/stooges/:name?', function(req, res, next) {
    var name = req.params.name;

    switch ( name ? name.toLowerCase() : '' ) {
        case 'larry':
        case 'curly': 
        case 'moe':
          res.send(name + ' is my favorite stooge.');
          break;

        default:
          next();
    }
});

app.get('/stooges/*?', function(req, res){
  res.send('no stooges listed');
});

app.get('/?', function(req, res){
  res.send('hello world');
});

var port = 8080;
app.listen(port);
console.log('Listening on port ' + port);
