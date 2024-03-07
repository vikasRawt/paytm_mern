const mongoose = require("mongoose");


const dbSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        unique:true
    },
    userName:{
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
        required:true,
        unique:true
    }
},{timestamps: true})


const mongoSchema = mongoose.model("user", dbSchema);

module.exports = {
    mongoSchema
};