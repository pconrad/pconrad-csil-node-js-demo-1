var sys = require("sys"),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");

function uploader(request,response) {
    
    console.log("in uploader function");
    // TODO: pull out contents and filename from post request
    // TODO: if filename blank, generate random filename that doesn't exist
    // TODO: else make sure filename doesn't exist; if so, presesnt error page
    // TODO: store content in filename
    // TODO: present success page indicating it was done.

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE html>\n");
    response.write("<html>\n");
    response.write(" <head>\n");
    response.write(" <title>File uploader</title>\n");
    response.write(" </head>\n");
    response.write(" <body>\n");
    response.write(" <h1>File uploader response page</h1>\n");
    response.write(" </body>\n");
    response.write("</html>\n");

    response.end();

}


http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname;
    var filename = path.join(process.cwd(), uri);

    console.log("uri="+uri);

    if (uri=="/uploader") {
	uploader(request,response);
	return;
    }

    fs.exists(filename, function(exists) {
        if(!exists) {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.end("404 Not Found\n");
            return;
        }
	
        fs.readFile(filename, "binary", function(err, file) {
            if(err) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.end(err + "\n");
                return;
            }

            response.writeHead(200);
            response.end(file, "binary");
        });
    });
}).listen(8080);

console.log("Server running at http://localhost:8080/");
