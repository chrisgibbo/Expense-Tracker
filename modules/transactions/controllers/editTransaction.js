const mongoose = require("mongoose");

const editTransaction = (req, res) => {
  res.status(200).json({
    status: "Edit Transaction",
  });
};

module.exports = editTransaction;
