
var http = require('http');
var qs = require('querystring');
var mongo = require('mongodb');
var ObjectId = require('mongodb').ObjectID;



var form = require('fs').readFileSync('homepage.html');

http.createServer(function (request, response) {

if (request.method === "GET") {
response.writeHead(200, {'Content-Type': 'text/html'});
response.end(form);
}


if (request.method === "POST") {

 var postData = '';
 var Pitem = '';
 var post = '';

request.on('data', function (chunk) {
postData += chunk;

var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  // var post = qs.parse(postData);
 /* dbo.collection("customers").insertOne(post, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
   // response.end(post.username);
  }); */
});  

/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //var query = {_id : ObjectId("62988f04b4ed60e389c87cce")}
  dbo.collection("customers").findOne({_id : ObjectId("62988f04b4ed60e389c87cce")}, 
function(err, item) {

   if (err) throw err;
   Pitem += qs.stringify(item);
    //console.log(Pitem); 

    db.close();
}
    );
  //var PObj = qs.parse(Obj);
  //console.log(Obj); 


}) */

}).on('end', function() {

post += postData;
//var post = qs.parse(postData);
//console.log(post.username);
//response.end(post.username

console.log(post);
response.end(post);
//var Pitemo = Pitem;

//console.log(Pitem);


//response.end(Pitem); 

});
} 


}).listen(1000);



