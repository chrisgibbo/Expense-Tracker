const mongoose = require("mongoose");
const validator = require("validator");

const editTransaction = async (req, res) => {
  const transactionModel = mongoose.model("transactions");

  const { transaction_id, remarks, amount, transaction_type } = req.body;

  if (!transaction_id) throw "Transaction id is required";

  if (!validator.isMongoId(transaction_id.toString()))
    throw "Please provide a valid ID";

  const getTransaction = await transactionModel.findOne({
    _id: transaction_id,
  });

  if (!getTransaction) throw "Transaction not found";

  res.status(200).json({
    status: "Edit Transaction",
  });
};

module.exports = editTransaction;
