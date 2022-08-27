const {MongoClient} = require('mongodb');  
const url = "mongodb+srv://HarshalJamdar:810Umakant@cluster0.wz2ii.mongodb.net/BloggingSite"; 
const databaseName = 'BloggingSite'
const client = new MongoClient(url); 


async function getData(){
    let result = await client.connect();
    //console.log(result)
    db = result.db(databaseName);
    // console.log(db)
    collection = db.collection('blogs');
    let data = await collection.find({title: 'PQR'}).toArray();
    console.log(data);
}
getData();











// MongoClient.connect(url, function(err, db) {  
// if (err) throw err;  
// var myobj = [     
// { name: "Mahesh Sharma", age: "25", address: "Ghaziabad"},  
// { name: "Tom Moody", age: "31", address: "CA"},  
// { name: "Zahira Wasim", age: "19", address: "Islamabad"},  
// { name: "Juck Ross", age: "45", address: "London"}  
// ];  
// db.collection("customers").insert(myobj, function(err, res) {  
// if (err) throw err;  
// console.log("Number of records inserted: " + res.insertedCount);  
// db.close();  
// });  
// });  