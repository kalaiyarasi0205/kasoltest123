var fs = require("fs");
// no need to install the "fs" package separately because it comes as a default package
 fs.readFile('node2.txt',function(err,data) {
	 if (err) {
		 console.log(err.stack);
		 return;
	 }
	 console.log(data.toString());
 });
 console.log("program Ended");