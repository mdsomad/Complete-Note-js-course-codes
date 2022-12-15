const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter()

let count = 0;

event.on('countAPI',()=>{                              // isk kaam hai Kitna bar request  Aaya hai Find kar sakte hain
    count++
    console.log("Event call",count)
})


app.get('/',(req,resp)=>{
    resp.send("Api called");
    event.emit('countAPI');
})

app.get('/scarch',(req,resp)=>{
    resp.send("scarch called");
    event.emit('countAPI');
})

app.get('/update',(req,resp)=>{
    resp.send("update called");
    event.emit('countAPI');
})

app.listen(7000);
















