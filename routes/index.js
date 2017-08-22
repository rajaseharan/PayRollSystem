var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/login_data";
router.post('/emp_menu',function (req,resp,next){

      var nam = {"name": req.body.em, "password": req.body.ps};
      var i;
      console.log(nam);
      console.log('hleo');
      MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          db.collection("Admin_login").find(nam).toArray(function (err, result) {
              if (err) throw err;
              if (result != '') {
                  console.log(result);
                  console.log('raja');
                  var cookie = req.cookies;
                  if (cookie != null) {
                      resp.cookie('user', 'admin');
                      resp.cookie('pass', 'admin');
                      console.log('cookie created successfully');
                  }
                  resp.render('emp_menu');
              }
              else {
                  console.log('seharan');
                  resp.render('index', {login_error: "invalid username & password"});
              }
              db.close();
          });
      });

});

module.exports = router;
