var express  = require('express');
var log = require('morgan');
var ejs = require('ejs');
var port = 8000;
var app = express();
app.use(date_log);
app.use(log('dev'));

app.get('/' , date_log , hello);

function date_log(req , res , next){

	console.log(new Date() , req.method , req.url);
	next();
}
function hello(req , res , next){
	res.send("hello world");
	console.log("Hello date.");
	res.end();
	//next();
}


app.listen(port , function(err , res){
	if(err) console.log("Connectivity problem..");
    console.log("Server started susseccfullly..");
});