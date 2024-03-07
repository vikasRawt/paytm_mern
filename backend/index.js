const express = require("express")
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const dbConnect = require("./dbConfig/db.js");
const mainRoutes = require("./routes/routes.js");
const cors = require("cors");
const bodyParser = require("body-parser");

dbConnect()

app.use(cors());
app.use(bodyParser);
app.use("/api/v1", mainRoutes);         //all routes of mainRoutes will go through the /api/v1


app.listen(3001,()=>{
    console.log(`https://localhost:3001`);
})