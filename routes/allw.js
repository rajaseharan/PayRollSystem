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
            console.log('cookie of admin caught inn allw.js');
            var de = {
                Emp_id: req.body.Emp_Id,
                bspay: req.body.bsp,
                pf: req.body.pf,
                esi: req.body.esi,
                tds: req.body.tds,
                prof_tax: req.body.pt,
                insu_pre: req.body.ip,
                others: req.body.oth,
                total: req.body.oth1

            };
            console.log('ID of curent emp' + de.Emp_id);
            MongoClient.connect(url, function (err, db) {
                if (de.Emp_id != undefined) {
                    db.collection("deduction").insertOne(de, function (err, result) {
                        if (err) throw err;
                        console.log(result);
                        console.log(de.Emp_id + 'deductions inserted');
                        db.close();
                    });
                }
                else
                    db.close();
            });
            res.render('allw', {empid: de.Emp_id});
            console.log('after render in ded.js');

        }
        else
            res.render('index');
});

module.exports = router;