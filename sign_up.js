var express  = require('express');
            
var signup_router = express.Router();



            
            signup_router.get('/signup' , function(req , res){
                             // console.log("hello2");
                        res.render('signup');
            });
			
			



module.exports = signup_router;


