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

