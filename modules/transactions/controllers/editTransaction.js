const mongoose = require("mongoose");

const editTransaction = (req, res) => {
  const transactionModel = mongoose.model("transactions");

  const { transaction_id } = req.body;

  if (!transaction_id) throw "Transaction id is required";

  res.status(200).json({
    status: "Edit Transaction",
  });
};

module.exports = editTransaction;
