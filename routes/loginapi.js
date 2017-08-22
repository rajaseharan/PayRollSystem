function a(l,r) {


    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.collection("Admin_login").find({}).toArray(function (err, res) {
            if (err) throw err;
            if (res[0].login == nam) {
                if (res[0].password == pas) {
                    console.log("correct");
                }
            }
            else
                console.log('error');
            db.close();
        });
    });
}