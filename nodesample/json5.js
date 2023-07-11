const fs = require("fs");

const users = require("./newuser");
let user = {
    "fname":"John"
	,"iname":"David",
	"age":22,
	"emp_id":501}

let user1 = {
	"fname":"Mickle",
	"iname":"jeckson",
	"age":26,
	"emp_id":503
	
};
 users.unshift(user);
 users.push(user1);
 
 fs.writeFile("newuser.json",JSON.stringify(users),err =>{
	 if(err) throw err;
	 console.log("Done writing");
 });