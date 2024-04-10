const mongoose=require("mongoose")

let userScheme=new mongoose.Schema({
    username:String,
    password:String,
    email:String
},{collection:"users"})

exports.Users=new mongoose.model("Users",userScheme);