var MongoClient = require('mongodb').MongoClient, format = require('util').format;

// Connect to the db
MongoClient.connect("mongodb://127.0.0.1:27017/myuseDB",{useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true }, function (err, db) {

    if(err) throw err;

    //Write databse Insert/Update/Query code here..

});