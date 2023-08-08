const mongoose = require("mongoose");

const userDashboard = async (req, res) => {
  const usersModel = mongoose.model("users");
  const transactionModel = mongoose.model("transactions");
  console.log(req.user);

  const getUser = await usersModel
    .findOne({
      _id: req.user._id,
    })
    .select("-password");

  const transactions = await transactionModel.find({
    user_id: req.user._id,
  });

  res.status(200).json({
    status: "Success!",
    data: getUser,
  });
};

module.exports = userDashboard;
