console.log("server 32-13 is running...");

var http = require("http");

http.createServer(function (req, res) {
	console.log("[200] " + req.method + " to " + req.url);
	console.log(req.headers);
	res.setHeader("Content-Type", "text/html");

	setTimeout(function() {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.write("<html><head><title>Fruit Total</title></head><body>");
		res.write("<p>");
		res.write("You selected " + req.url.substring(1));
		res.write("</p></body></html>");
		res.end();
	}, 2000);
}).listen(8080);