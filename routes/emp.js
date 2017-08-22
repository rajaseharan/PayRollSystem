var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/login_data";
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('emp', {title: 'Express'});
    var de1={EMP_ID: req.query.EMP_ID,
        EMP_NAME:req.query.EMP_NAME,
        FAT_NAME: req.query.FAT_NAME,
        BLOOD_GRP: req.query.BLOOD_GRP,
        POSITION: req.query.POSITION,
        DOB: req.query.DOB,
        GENDER: req.query.GENDER,
        PERM_ADD: req.query.PERM_ADD,
        RES_ADD: req.query.RES_ADD,
        AADHAR_NO: req.query.AADHAR_NO,
        PHN_NO: req.query.PHN_NO,
        ALT_NO: req.query.ALT_NO,
        EMAIL_ID: req.query.EMAIL_ID }


    k(de1);
});
function k(i) {



    MongoClient.connect(url, function (err, db) {
        db.collection("Emp_Details").insertOne(i, function (err, res) {
            if (err) throw err;
            console.log(res);
            console.log('hello');
            db.close();
        });
    });


}

module.exports = router;