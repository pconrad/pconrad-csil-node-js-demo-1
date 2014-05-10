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

Here's an example of a simple calculation:







simplest thing you can do with the node command is start a server.   To start a server
