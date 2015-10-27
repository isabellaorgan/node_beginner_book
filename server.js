var http = require("http");
//refactor:
function onRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");



// http.createServer(function(request, response) {
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("Hello World");
// 	response.end();
// }).listen(8888);


// We could have written the code that 
// starts our server and makes it listen at port 
// 8888 like this:


// var http = require("http");

// var server = http.createServer();
// server.listen(8888);


//Passing functions around:

// function say(word) {
// 	console.log(word);
// }

// function execute(someFunction, value) {
// 	someFunction(value);
// }

// execute(say, "Hello");