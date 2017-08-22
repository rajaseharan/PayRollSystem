var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

/* GET home page. */
router.get('/psign', function(req, res, next) {
    res.render('psign', { title: 'Express' });
});
router.post('/emp_menu',function (req,res1,next) {
console.log(req.body.name);

    var l =
        {
            emp_name: req.body.F_Name,
            emp_id: req.body.Emp_Id,
            postions: req.body.position,

            phn_no: req.body.phno,
            email_id: req.body.Email_Id,
            dob: req.body.DOB

        };

    var de1={EMP_ID: req.body.EMP_ID,
        EMP_NAME:req.body.EMP_NAME,
        FAT_NAME: req.body.FAT_NAME,
        BLOOD_GRP: req.body.BLOOD_GRP,
        POSITION: req.body.POSITION,
        DOB: req.body.DOB,
        GENDER: req.body.GENDER,
        PERM_ADD: req.body.PERM_ADD,
        RES_ADD: req.body.RES_ADD,
        AADHAR_NO: req.body.AADHAR_NO,
        PHN_NO: req.body.PHN_NO,
        ALT_NO: req.body.ALT_NO,
        EMAIL_ID: req.body.EMAIL_ID };


    MongoClient.connect(url, function (err, db) {
        if(de1.EMP_ID!=undefined){
        db.collection("Emp_Details").insertOne(de1, function (err, res) {
            if (err) throw err;
            console.log(res);
            console.log('hello');
            db.close();
        });}
    });

});module.exports = router;
