const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//import routes
const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(userRoutes);
app.use(productRoutes);

const Port = 8080;
const DBurl =
  "mongodb+srv://pabasara20222053:pabasara20222053@cluster0.miwn7vr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.listen(Port, () => {
  console.log("Server is Running");
});

mongoose
  .connect(DBurl)

  .then(() => {
    console.log("DB is connected sucsessfully");
  })
  .catch((err) => {
    console.log("Error " + err);
  });
