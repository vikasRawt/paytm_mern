const express = require("express");
const userRoutes = require("./userRoutes.js")

const Router = express.Router(); 

Router.use("/user",userRoutes)


module.exports = Router;