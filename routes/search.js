var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/login_data";
/* GET home page. */
router.post('/', function(req, res, next) {
    var cookie1 = req.cookies.user;
    if(cookie1.valueOf() === 'admin')
    {
        console.log('cookie of admin caught inn search.js');
        res.render('search');
    }
    else
        res.render('index');


    MongoClient.connect(url, function (err, db) {
        db.collection("Emp_Details").find({EMP_ID: req.body.F_Name}).toArray(function (err, result) {
            if (err) {
                res.render('emp_menu');
            }
            else {
                for (var l = 0; l <= 0; l++) {



                    console.log(result);
                   /* res.render('view_details', {
                        title: 'Express',
                        EMP_ID: result[l].EMP_ID,
                        POSITION: result[l].POSITION,
                        AADHAR_NO: result[l].AADHAR_NO,
                        EMP_NAME: result[l].EMP_NAME,
                        EMAIL_ID: result[l].EMAIL_ID,
                        PHN_NO: result[l].PHN_NO,
                        DOB: result[l].DOB,
                        GENDER: result[l].GENDER,
                        PERM_ADD: result[l].PERM_ADD,
                        RES_ADD: result[l].RES_ADD,
                        ALT_NO: result[l].ALT_NO,
                        FAT_NAME: result[l].FAT_NAME,
                        BLOOD_GRP: result[l].BLOOD_GRP

                    });*/
                }
            }
            db.close();
        });
    });
});
module.exports = router;