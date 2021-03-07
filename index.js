const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const app = express()
const port = 3000

mongoose.Promise = global.Promise; mongoose.connect("mongodb://localhost:27017/node-demo");
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// MONGO

// var entrySchema = new mongoose.Schema({
//   title: String,
//   content: String
// });

// var Entry = mongoose.model("Entry", entrySchema);


// REST API
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get("/getEntries", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("entries").find({}).toArray(function (err, result) {
      if (err) throw err;
      console.log("res: ", result);
      res.send(result);
      db.close();
    });
  });
})

app.post("/createPost", (req, res) => {
  console.log('attempting to post')
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    console.log(req.body)
    var entry = { title: req.body.title, content: req.body.content };
    dbo.collection("entries").insertOne(entry, function (err, res) {
      if (err) throw err;
      console.log("new entry added")
      db.close();
    })
  })
});