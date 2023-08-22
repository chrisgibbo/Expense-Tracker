const mongoose = require("mongoose");

const resetPassword = (req, res) => {
  const usersModel = mongoose.model("users");

  const { email, new_password, reset_code } = req.body;

  res.status(200).json({
    status: "Reset Password!",
  });
};

module.exports = resetPassword;
