const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const dbName = 'practice-set';


async function main() {                            // Yah hai MongoDb Database connect Karne ka Tarika
 let result = await client.connect();
 let db = result.db(dbName);
  return db.collection("test");
}


module.exports = main;       // This Data exports Any Outher File Access