var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/login_data";
/* GET home page. */
router.post('/emp_menu', function(req, res, next) {
    res.render('emp_menu', { title: 'Express' });


    console.log('inside emp _menu js');
    var i = {
        name: req.query.F_Name,
        emp_id: req.query.Emp_Id,
        pos: req.query.position,
        email_id: req.query.Email_Id,
        dob: req.query.DOB
    };
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
        EMAIL_ID: req.query.EMAIL_ID };


    k(de1);

});

function k(j) {



    MongoClient.connect(url, function (err, db) {
        if(j.GENDER!=undefined) {
            var k=0;
            db.collection("Emp_Details").find({}).toArray( function (err, res) {
                if (err) throw err;

                for(var i=0;i<res.length;i++){
                    if(res[i].EMP_ID==j.EMP_ID)
                        k=k+1;

                }
                if(k==0){
                    l(j);
                }
                else {
                    k2(j);
                }

                db.close();
            });



        }
    });


}
function l(i){
    MongoClient.connect(url, function (err, db) {
    db.collection("Emp_Details").insertOne(i, function (err, res) {
        if (err) throw err;
        console.log(res);
        console.log('hello');
        db.close();
    });
});}
function k2(i){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var myquery = { EMP_ID:i.EMP_ID };
        var newvalues = {$set: {EMP_ID: i.EMP_ID,
            EMP_NAME:i.EMP_NAME,
            FAT_NAME: i.FAT_NAME,
            BLOOD_GRP: i.BLOOD_GRP,
            POSITION: i.POSITION,
            DOB: i.DOB,
            GENDER: i.GENDER,
            PERM_ADD: i.PERM_ADD,
            RES_ADD: i.RES_ADD,
            AADHAR_NO: i.AADHAR_NO,
            PHN_NO: i.PHN_NO,
            ALT_NO: i.ALT_NO,
            EMAIL_ID: i.EMAIL_ID} };
        db.collection("Emp_Details").updateOne(myquery, i, function(err, res) {
            if (err) throw err;
            console.log("1 record updated");
            db.close();
        });
    });
}

module.exports = router;