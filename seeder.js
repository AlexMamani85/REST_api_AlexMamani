var MongoClient = require('mongodb').MongoClient;
const colors = require('colors');
const fs = require('fs');
const mongoose = require('mongoose');
var url = "mongodb://localhost:27017/";
// Load models
const BlogModel = require('./src/models/crmModel');

// Read JSON files
const blogs = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/blogs.json`, 'utf-8')
  );

// Connect to DB




// Import into DB
  const importData = async () => {

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("blogs").insertMany(blogs, function(err, res) {
        if (err) throw err;
        console.log(
        `Number of documents inserted: ${res.insertedCount}`.green.inverse
            );
        db.close();
      });
});
  };




  // Delete data
  const deleteALLData = async () => {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        
        dbo.collection("blogs").deleteMany(({ }) , function(err, obj) {
          if (err) throw err;
          console.log(`  ${obj.deletedCount} document(s) deleted  `.red.inverse);
          db.close();
        });
      });
};


const selectALLData = async () => {


    MongoClient.connect('mongodb://localhost/test', function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
      
        dbo.collection("blogs").find().toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          console.log(`  Number of document(s):  ${result.length}  `.yellow.inverse);
          db.close();
        });
})
};


const selectById = async (id) => {
    MongoClient.connect('mongodb://localhost/test', function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
      
        dbo.collection("blogs").find({_id: id}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          console.log(`  Number of document(s):  ${result.length}  `.yellow.inverse);
          db.close();
        });
})
};


  if (process.argv[2] === '-i') {
    importData();
  } else if (process.argv[2] === '-d') {
    deleteALLData();
  } else if (process.argv[2] === '-s') {
    if (process.argv[3]) {
        selectById(process.argv[3]);}
    else {
        selectALLData();}
    

  }
