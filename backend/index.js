const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./dbConfig/db.js");
const mainRoutes = require("./routes/routes.js");
const cors = require("cors");

dbConnect();

app.use(cors());
app.use(express.json());
app.use("/api/v1", mainRoutes); //all routes of mainRoutes will go through the /api/v1

app.listen(3000, () => {
  console.log(`server started`);
});
