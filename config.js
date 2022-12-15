
const mysql = require("mysql");
const con= mysql.createConnection({                   // connect database
    host:'localhost',
    user:'root',
    password:"",
    database:"test"
});

con.connect((err)=>{
    if(err)
    {
        console.warn("error in connection")
    }else{
        console.log("connected")
    }
});

module.exports = con;