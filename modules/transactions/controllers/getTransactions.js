const mongoose = require("mongoose");

const getTransactions = async (req, res) => {
  const transactionModel = mongoose.model("transactions");

  const transactions = await transactionModel.find({
    user_id: req.user._id,
  });

  res.status(200).json({
    status: "Success",
    data: transactions,
  });
};

module.exports = getTransactions;
