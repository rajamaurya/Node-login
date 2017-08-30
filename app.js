var express  = require('express');
var log = require('morgan');
var ejs = require('ejs');
var port = 8000;

//var signupController = require('SignUpController');

//var routes = require('routes');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app.use(log('dev'));

// setting templating views here...

app.set('view engine' , 'ejs');

/*    // to set html views

app.engine('html', require('ejs').renderFile);
app.set('view engine' , 'html'); */

app.set('views', 'views/');

var router  = require('./routes/indexController');
var dashboard_router  = require('./routes/UserDashboardController');
var signup_router  = require('./routes/sign_up');
//console.log(router);

/*app.get('/signup', function (req, res)
{
    res.render('signup');
}); */
/*   // html page
app.get('/sample', function (req, res)
{
    res.render('sample');
});
 */
app.use(router);
app.use(dashboard_router);
app.use(signup_router);
//console.log(dashboard_router);
//app.use('/routes', require('./routes/indexController'));
/// 
/*				res.render('index');
}); */

/*app.get('/' , function(req , res){
				res.render('index');
}); */
app.listen(port , function(err , res){
	if(err) console.log("Connectivity problem..");
    console.log("Server started susseccfullly..");
});