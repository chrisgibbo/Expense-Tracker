const express = require("express");

const auth = require("../../middleware/auth");
const addIncome = require("./controllers/addIncome");

const transactionRoutes = express.Router();

userRoutes.use(auth);

transactionRoutes.post(".addIncome", addIncome);

module.exports = transactionRoutes;
