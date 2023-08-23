const mongoose = require("mongoose");

const deleteTransaction = async (req, res) => {
  const transactionModel = mongoose.model("transactions");

  const { transaction_id } = req.params;

  const getTransaction = await transactionModel.findOne({
    _id: transaction_id,
  });

  if (!getTransaction) throw "Transaction not found";

  res.status(200).json({
    status: "Deleted Successfully",
  });
};

module.exports = deleteTransaction;
