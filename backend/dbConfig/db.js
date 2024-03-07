const mongoose = require("mongoose");


 const dbConnect = async()=>{
   try {
   const dbURL = process.env.URL;
      await mongoose.connect(dbURL);
       console.log("connected to db");
  } catch (error) {
    console.log("error from dbConn:-",error);
  } 
 }
 
 module.exports = dbConnect;
