var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/login_data";
/* GET home page. */
router.get('/', function(req, res, next) {
    MongoClient.connect(url, function (err, db) {


        db.collection("Emp_Details").find({}).toArray(function (err, res1) {
            if (err) throw err;

            console.log(res1);


            db.close();
        });

    });
});
