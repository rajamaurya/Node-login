'use strict';

var express = require('express');

var router = express.Router();

router.get('/' , function(req , res) {
	// body...
	res.render('index');
});

module.exports = router;