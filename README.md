pconrad-csil-node-js-demo-1
===========================

A demo of using node.js on CSIL


node.js is already installed on CSIL, making it a great place to get started.

Using the REPL
==============

To use the REPL (Read-Eval-Print Loop) just type node at the shell prompt.  To exit, use CTRL-D.

Note that console.log("Hello") is the way to "print", but that the REPL will echo not only the output, but
the return value of console.log, which happens to be "undefined".

```
-bash-4.2$ node
> 2+4
6
> console.log("Hello World")
Hello World
undefined
> ^D
-bash-4.2$
```

One of the points here is that a print function is really unnecessary, since "print" is the P built into the REPL.  

If you really wanted a print function that clutter up your output with "undefined", you could define print to wrap console.log and return an empty string, but that empty string would still echo (as an empty set of quotes):

```
> print = function(x) {console.log(x); return ' ';}
[Function]
> print("Hello")
Hello
' '
> 
```

The node command: running a script
==================================

The man page for the node command is online here (and in this repo as a .md file):

https://github.com/pconrad/pconrad-csil-node-js-demo-1/blob/master/node_man_page.md

Other than starting a repl, the next thing you can do with the node command is run a script.

The script can just do some simple calculation, or it can start a server.

Here's an example of a simple calculation; the kind of thing you might do in the first few weeks of an intro programming class.

Suppose the file simpleCalc.js contains the following
(found in this repo in examples/simpleCalculation/simpleCalc.js ):


```javascript
// P.Conrad simpleCalc.js
// This is an example of a simple calculation in JavaScript
// that you could run with node.js.

// This is not really what node.js or JavaScript is "for", but it does
// illustrate that you can do plain old computation in JavaScript
// without a server, or a browser, or any kind of web or network stuff involved.


function square(x) { 
    return x * x; 
}

function makeTable(start, end, f) {

    console.log("x\tf(x)");
    console.log("=\t===");
    for (var i=start; i<=end; i++) {
	    console.log(i+"\t"+f(i));
    }
   return null;
}

makeTable(1,10,square);

```

Here is how you run the program:

```
-bash-4.2$ node simpleCalc.js
x	f(x)
=	===
1	1
2	4
3	9
4	16
5	25
6	36
7	49
8	64
9	81
10	100
-bash-4.2$ 
```

If instead, you want to start a server, here's a script that does that.   The source is the node.js tutorial http://www.nodebeginner.org/#building-the-application-stack

Suppose the file server.js contains the following (found in this repo in examples/simpleServer/server.js ):

```javascript
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
```

If we run this script on csil.cs.ucsb.edu by typing "node" then the filename:

```
-bash-4.2$ node server.js 

```

Then we can bring up the URL http://csil.cs.ucsb.edu:8888 and see the output "Hello World", as shown in this image:

http://www.cs.ucsb.edu/~pconrad/github/pconrad-csil-node-js-demo-1/examples/simpleServer/server.js.example.png

To stop the server, just type CTRL-C:

```
-bash-4.2$ node server.js 
^C-bash-4.2$ 
```

The number 8888 is the "port number" on which you are running the server.    If that number is already being used by another server running on csil.cs.ucsb.edu, you'll get an error message.   The key part of this output is the EADDRINUSE which is an error code returned by the "listen" system call.

```
-bash-4.2$ node server.js

events.js:72
        throw er; // Unhandled 'error' event
              ^
Error: listen EADDRINUSE
    at errnoException (net.js:901:11)
    at Server._listen2 (net.js:1039:14)
    at listen (net.js:1061:10)
    at Server.listen (net.js:1127:5)
    at Object.<anonymous> (/cs/faculty/pconrad/public_html/github/pconrad-csil-node-js-demo-1/examples/simpleServer/server.js:7:4)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
-bash-4.2$ 
```

In this case, just change the number 8888 to some other number between 8000 and 65535.    You can list the number currently in use with the following command:

```
-bash-4.2$ netstat -an | grep tcp | grep LISTEN
tcp        0      0 127.0.0.1:6016          0.0.0.0:*               LISTEN     
tcp        0      0 0.0.0.0:36032           0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.1:6017          0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.1:6018          0.0.0.0:*               LISTEN     
tcp        0      0 0.0.0.0:5666            0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.1:6019          0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.1:6020          0.0.0.0:*               LISTEN     
...
```

The following version will leave out tcp6 (TCP over IPv6) which will shorten the listing, probably without leaving out any relevant information (since the tcp6 listings are likely duplicates).

```
-bash-4.2$ netstat -an | grep "tcp " | grep LISTEN
tcp        0      0 127.0.0.1:6016          0.0.0.0:*               LISTEN     
tcp        0      0 0.0.0.0:36032           0.0.0.0:*               LISTEN     
...
```
