const mongoose = require("mongoose");

const resetPassword = (req, res) => {
  const usersModel = mongoose.model("users");
  res.status(200).json({
    status: "Reset Password!",
  });
};

module.exports = resetPassword;