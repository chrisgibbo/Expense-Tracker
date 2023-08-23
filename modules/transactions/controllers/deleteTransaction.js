const mongoose = require("mongoose");

const deleteTransaction = (req, res) => {
  const transactionModel = mongoose.model("transactions");

  res.status(200).json({
    status: "Deleted Successfully",
  });
};

module.exports = deleteTransaction;
