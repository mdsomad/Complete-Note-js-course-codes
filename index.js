const express = require('express');
const multer = require('multer');       // Multer Package Use file upload

const app = express();

app.use(express.json())



const uploadd = multer({

    storage: multer.diskStorage({
        destination:function(req,file,cd){
            cd(null,"uploads")
        },
        filename:function(req,file,cd){
            cd(null,file.fieldname+".jpg");
        }
        
    })
}).single("user_file")



app.post('/upload',uploadd,(req,resp)=>{                           // postman file send Body  form-data  key name this --> user_file
    resp.send("File Uplaod");
})



app.listen(7000);



















