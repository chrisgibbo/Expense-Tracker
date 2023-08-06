const express = require("express");

const auth = require("../../middleware/auth");

const transactionRoutes = express.Router();

userRoutes.use(auth);

module.exports = transactionRoutes;
