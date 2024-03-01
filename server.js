const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//import routes
const userRoutes = require("./Routes/userRoutes");

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(userRoutes);

const Port = 8080;
const DBurl =
  "mongodb+srv://pabasara20222053:pabasara20222053@cluster0.miwn7vr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.listen(Port, () => {
  console.log("Server is start");
});

mongoose
  .connect(DBurl)

  .then(() => {
    console.log("DB conected is sucsess full");
  })
  .catch((err) => {
    console.log("some error " + err);
  });
