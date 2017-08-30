'use strict';
var bodyParser = require('body-parser');
console.log(bodyParser);
var express = require('express');
var app = express();
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.text({ type: 'ejs' }));
app.use(bodyParser.urlencoded({extended:false}));

var expressValidator = require('express-validator');
var promise = require('promise');
var  user_name , user_pass;
var router = express.Router();
 router.post('/dashboard' , function(req , res) {
	// body...
	if (!req.body) return res.sendStatus(400)
	//console.log("i m in " +  req.body);
	res.send("hello dashboard");
				         user_name = req.body.username;
					     user_pass = req.body.userpass;

						console.log("i m " +  user_name +  '  ' + user_pass);
							
						if(typeof user_name!='string' && user_name=='' && user_name.length > 6){
											req.check('username', "User name is required").notEmpty();

						}
						if(typeof user_pass!='string' && user_pass=='' && user_pass.length < 8){
							                req.check('userpass', "password is required").notEmpty();
						}
						if (user_name=="raja" && user_pass=="maurya") {
							console.log("All Ok.");
							getUserName();
							res.send(getUserName());
							res.render('dashboard');
						}
				
			});	

 function getUserName(){ return user_name;}
 	
/*let validationPromise = new Promise(function(resolve , reject, req){
						var  user_name = req.body.user;
						var  user_pass = req.body.pass;

						console.log("i m in ");
							
						if(typeof user_name!='string' && user_name=='' && user_pass.length.length > 6){
											reject("user name required"); 
						}
						if(typeof user_pass!='string' && user_pass=='' && user_pass.length.length < 8){
							                reject("password required"); 
						}
						if (user_name=="raja" && user_pass=="maurya") {
							resolve("All Ok.");
						}
						router.get('/dashboard' , function(req , res) {
	// body...
				res.render('dashboard');
			});	
			
			//message = " all ok.";
});

validationPromise.then(function(message){
	         
			
} , function(){ console.log("error occured!");}
); */



module.exports = router;