const fs = require("fs");

const users = require("./newuser");
let user = {
     name: "kalai",
	 age: 25,
	 language:["Node","React","Graphql"]
};
let user1 = {
	name: "suga",
	 age: 25,
	 language:["MSA","JS","Graphql"]
};
 users.unshift(user);
 users.push(user1);
 
 fs.writeFile("newuser.json",JSON.stringify(users),err =>{
	 if(err) throw err;
	 console.log("Done writing");
 });
 