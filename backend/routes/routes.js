const express = require("express");
const userRoutes = require("./userRoutes.js");
const accountRouter = require("./accountRoutes.js");
const Router = express.Router();

Router.use("/user", userRoutes);
Router.use("/account", accountRouter);

module.exports = Router;
