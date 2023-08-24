const express = require("express");

const auth = require("../../middleware/auth");
const addIncome = require("./controllers/addIncome");
const addExpense = require("./controllers/addExpense");
const getTransactions = require("./controllers/getTransactions");
const deleteTransaction = require("./controllers/deleteTransaction");

const transactionRoutes = express.Router();

// Use Routes

transactionRoutes.use(auth);

//  Post Routes

transactionRoutes.post("/addIncome", addIncome);
transactionRoutes.post("/addExpense", addExpense);

// Get Routes

transactionRoutes.get("/", getTransactions);

// Delete Routes

transactionRoutes.delete("/:transaction_id", deleteTransaction);

module.exports = transactionRoutes;
