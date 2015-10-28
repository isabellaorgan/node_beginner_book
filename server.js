var http = require("http");
var url = require("url");
//refactor:
function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received");

		route(pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;

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