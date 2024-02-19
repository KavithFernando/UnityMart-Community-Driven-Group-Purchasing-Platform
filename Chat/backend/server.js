const express = require("express");
const { chats } = require("./data");
const { connect } = require("mongoose");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleWare/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is runings success");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(`server start on port ${process.env.PORT}`.yellow.bold)
);
