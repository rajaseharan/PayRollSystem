var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/login_data";
var assert = require('assert');


router.post('/',function (req,res,next) {

    console.log('inside addemp_view post(for /emp_view) method');
    var cookie1 = req.cookies.user;
    if(cookie1.valueOf() === 'admin') {
        console.log('cookie of admin caught inn addemp_view.js');

        MongoClient.connect(url, function (err, db) {
            db.collection("Emp_Details").find({EMP_ID: req.body.EMP_ID}).toArray(function (err, result) {
                if (err) {
                    res.render('emp_menu');
                }
                else {
                    if (result == '') {

                        var data = {
                            EMP_ID: req.body.EMP_ID,
                            EMP_NAME: req.body.EMP_NAME,
                            FAT_NAME: req.body.FAT_NAME,
                            L_NAME: req.body.L_NAME,
                            BLOOD_GRP: req.body.BLOOD_GRP,
                            POSITION: req.body.POSITION,
                            DOB: req.body.DOB,
                            GENDER: req.body.GENDER,
                            PERM_ADD: req.body.PERM_ADD,
                            RES_ADD: req.body.RES_ADD,
                            AADHAR_NO: req.body.AADHAR_NO,
                            PHN_NO: req.body.PHN_NO,
                            ALT_NO: req.body.ALT_NO,
                            EMAIL_ID: req.body.EMAIL_ID
                        };


                        MongoClient.connect(url, function (err, db) {
                            if (data.EMP_ID != undefined) {
                                db.collection("Emp_Details").insertOne(data, function (err, res) {
                                    if (err) throw err;
                                    console.log(res);
                                    console.log('one employee data inserted');
                                    db.close();
                                });
                            }
                        });
                           res.render('view_details', {
                                    title: 'Express',
                                    EMP_ID: data.EMP_ID,
                                    POSITION: data.POSITION,
                                    AADHAR_NO: data.AADHAR_NO,
                                    EMP_NAME: data.EMP_NAME,
                                    EMAIL_ID: data.EMAIL_ID,
                                    PHN_NO: data.PHN_NO,
                                    DOB: data.DOB,
                                    GENDER: data.GENDER,
                                    PERM_ADD: data.PERM_ADD,
                                    RES_ADD: data.RES_ADD,
                                    ALT_NO: data.ALT_NO,
                                    FAT_NAME: data.FAT_NAME,
                                    BLOOD_GRP: data.BLOOD_GRP,
                                    success_msg: data.EMP_ID + "  " + "Employee added successfully"});
                    }
                    else
                        res.render('psign', {msg: req.body.EMP_ID +"  "+"Employee ID already in use"});
                }
                db.close();
            });
        });
    }
    else
        res.render('index');
});

module.exports = router;
