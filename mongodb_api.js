
const express = require("express");

const database = require('./mongodb');    // <-- mongodb File Database Access

const mongodb = require('mongodb');       // <-- Yah required Hah Data ko Delete Karne ke liye

const dataReceive = require("./data");    // <-- Yah hai Other File Sa Data Receive Karne ka Tarika

const app = express();

app.use(express.json());       // <-- Yah hai Middle where Lagane Se Hi Json Data Server Samajh Pata Hai          
                               // Yah Nahin Lagane Se Server ko Json Data Samajh Nahin Aata Hai




app.get('/:scr',async(req,resp)=>{         // <-- Yah Hai Mongodb sa Data Get Karne ka Tarika
  let server = await database();
  server = await server.find({
    Name:req.params.scr
  }).toArray();
  resp.send(server)
});





app.post('/post',async(req,resp)=>{       // <-- Yah Hai Mongodb Main Data Post Karne ka Tarika
   let resData = await database();
   let result = await resData.insertOne(
       req.body
   );

   resp.send(result);
});







app.listen(3000);   // <-- This PORT