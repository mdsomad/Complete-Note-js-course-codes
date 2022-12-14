
const express = require('express');
require('./config');
const Userdata = require('./userdatas');

const app = express()

app.use(express.json());





app.post('/create',async(req,resp)=>{
  let data = Userdata(req.body);
  let result = await data.save();
  resp.send(result);
})








app.get('/get',async(req,resp)=>{
  let data = await Userdata.find();
  resp.send(data);
});








app.delete("/delete:_id",async(req,resp)=>{
   let data = await Userdata.deleteOne(req.params);
   resp.send(data);
});








app.put("/update/:_id",async(req,resp)=>{
    let data = await Userdata.updateOne(
      req.params,
      {
         $set:req.body
      }
    );

    resp.send(data);

})





app.listen(7000);


















