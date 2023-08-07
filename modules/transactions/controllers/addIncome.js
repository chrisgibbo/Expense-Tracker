const mongoose = require("mongoose");

const addIncome = (req, res) => {
  const usersModel = mongoose.model("users");
  const transactionsModel = mongoose.model("transactions");
  res.status(200).json({
    status: "Hello from add Income!",
  });
};

module.exports = addIncome;
