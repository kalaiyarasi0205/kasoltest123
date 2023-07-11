const http = require('http');
const hostname = '127.0.0.1';
const port = 9090;
 

const server = http.createServer((req, res) => {
	const a = 1;
	const b = 2;
	const c = a + b;
	res.statusCode = 200;
	res.setHeader('content-Type','text/plain');
	res.end(`sum of two numbers is ${c}` );
});


server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
	
	
});