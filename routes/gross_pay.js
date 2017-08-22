var express = require('express');
var router = express.Router();
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/login_data";
/* GET home page. */
router.post('/', function(req, res, next) {
    //res.render('gross_pay', {empid: req.body.Emp_id});
    var cookie1 = req.cookies.user;
    if(cookie1.valueOf() === 'admin') {
        var t1, t2;
        var de = {
            Emp_id: req.body.Emp_id,
            hra: req.body.hra,
            ta: req.body.ta,
            med_re: req.body.me,
            other_allw: req.body.oa,
            total: req.body.total

        };
        MongoClient.connect(url, function (err, db) {
            if (de.Emp_id != '') {
                db.collection("allowance").insertOne(de, function (err, res1) {
                    if (err) throw err;
                    console.log(res1);
                    console.log(de.Emp_id + 'inserted into allowance');
                    db.close();
                });
            }
            MongoClient.connect(url, function (err, db) {
                if (de.Emp_id != '') {
                    db.collection("allowance").find({Emp_id: de.Emp_id}).toArray(function (err, result) {

                        if (err) throw err;
                        for (var l = 0; l <= 0; l++) {
                            if (err) throw err;
                            else t1 = parseInt(result[l].total, 10);
                        }
                        db.close();
                    });
                }

            });
            MongoClient.connect(url, function (err, db) {
                db.collection("deduction").find({Emp_id: de.Emp_id}).toArray(function (err, result) {
                    if (err) throw err;
                    for (var l = 0; l <= 0; l++) {
                        if (err) throw err;
                        else if (result[l].total == 'undefined') throw err;
                        else {
                            t2 = parseInt(result[l].bspay, 10) + t1 - parseInt(result[l].total, 10);
                            console.log(t2);
                            res.render('gross_pay', {
                                empid: req.body.Emp_id,
                                total: t2,
                                allw: t1,
                                ded: parseInt(result[l].total, 10),
                                bpay: parseInt(result[l].bspay)
                            });
                        }
                    }
                    db.close();
                });

            });
        });
}
else
    res.render('index');
});


module.exports = router;