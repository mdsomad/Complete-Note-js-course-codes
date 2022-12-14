const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/practice-set');

const user = mongoose.Schema({
    Name:String,
    Email:String
});



const main = async(req,resp)=>{
    const User = mongoose.model("userdatas",user);
    let data = new User({
        Name:"Mongodb",
        Email:"Mongodb@gile.com"
    });
    const result = await data.save();
    console.log(result);
}


main()













