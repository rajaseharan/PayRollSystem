var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/login_data";
var assert = require('assert');

/* POSt home page. */
router.post('/', function(req, res, next) {
    var cookie1 = req.cookies.user;
    if(cookie1.valueOf() === 'admin') {
        console.log('cookie of admin caught inn psign.js');
        res.render('psign', {title: 'Express'});
    }
    else
        res.render('index');
});

module.exports = router;
