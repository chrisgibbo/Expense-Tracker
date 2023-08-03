require("express-async-errors");

const express = require("express");
const errorHandler = require("./handlers/errorHandlers");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("mongo connection failed");
  });

// Modules initialization

require("./models/User");

app.use(express.json());

// End of all routes

app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
