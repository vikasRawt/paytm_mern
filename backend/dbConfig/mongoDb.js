const mongoose = require("mongoose");


const dbSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    lastName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps: true})


const User = mongoose.model("user", dbSchema);

module.exports = {
    User
};