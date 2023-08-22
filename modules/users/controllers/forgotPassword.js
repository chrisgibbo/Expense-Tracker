const mongoose = require("mongoose");

const forgotPassword = (req, res) => {
  const userModel = mongoose.model("users");
  res.status(200).json({
    status: "Forgot Password",
  });
};

module.exports = forgotPassword;
