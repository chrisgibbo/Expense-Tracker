const mongoose = require("mongoose");

const resetPassword = async (req, res) => {
  const usersModel = mongoose.model("users");

  const { email, new_password, reset_code } = req.body;

  if (!email) throw "Email is required";
  if (!password) throw "Please provide new password!";
  if (!reset_code) throw "Please provide reset code!";
  if (!new_password.length < 5)
    throw "Password must be at least 5 characters long!";

  const getUserWithResetCode = await usersModel.findOne({
    email: email,
    reset_code: reset_code,
  });

  if (!getUserWithResetCode) throw "Reset code does not match reset code!";

  res.status(200).json({
    status: "Reset Password!",
  });
};

module.exports = resetPassword;
