
const express = require('express');
const Userdata = require('./userdatas');
require('./config');

const app = express()

app.use(express.json());


app.get('/search/:key',async(req,resp)=>{
  console.log(req.params.key)
  let data = await Userdata.find(
    {
     "$or":[
       {"Name":{$regex:req.params.key}},
       {"UserName":{$regex:req.params.key}},
     ]
    }
  )

  
   resp.send(data);


})





app.listen(7000);


















