const mongoose = require("mongoose");

const getTransactions = (req, res) => {
  const transactionmodel = mongoose.model("transactions");
  res.status(200).json({
    status: "Transactions",
  });
};

module.exports = getTransactions;
