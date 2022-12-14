const mongoose = require('mongoose');

const productSchema = mongoose.Schema({              // Model Schema
    
Name:String,
UserName:String,
PhoneNumber:Number,
genter:String
});

module.exports = mongoose.model('userdatas',productSchema);