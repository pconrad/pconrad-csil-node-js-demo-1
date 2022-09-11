// Code from  http://www.nodebeginner.org/#finding-a-place-for-our-server-module

// To use, in other file, index.js, put:
// 
//  var server = require("./server");
//  server.start();

var http = require("http");

function start() {
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
