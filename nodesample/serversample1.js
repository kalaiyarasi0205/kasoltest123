const http = require('http');
const hostname = '127.0.0.1';
const port = 9090;
 
 // port 
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('content-Type','text/plain');
	res.end('Hello World123\n');
});


server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
	console.log("Consoles Hello World");
	console.log("Consoles Hello Wrold123");
});