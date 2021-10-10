var mongoose = require("mongoose");
require('dotenv').config();

var conn = mongoose.connect(process.env.MONGODB_URI, (err)=>{
     if(!err){
         console.log("Moongoose connect succeded...");
     }
     else{
         console.log("ERROR : " , err);
     }
 });


 require("../models/User");