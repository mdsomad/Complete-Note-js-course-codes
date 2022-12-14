const express = require('express');
const multer = require('multer');
const app = express();
app.use(express.json())



const uploadd = multer({
    storage: multer.diskStorage({
        destination:function(req,file,cd){
            cd(null,"uploads")
        },
        filename:function(req,file,cd){
            cd(null,file.filename+".jpg");
        }
        
    })
}).single("imag")


app.post('/upload',uploadd,(req,resp)=>{
    resp.send("File Uplaod");
})

app.listen(6000);