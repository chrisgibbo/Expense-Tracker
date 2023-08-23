const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const emailManager = require("../../../managers/emailManager");

const resetPassword = async (req, res) => {
  const usersModel = mongoose.model("users");

  const { email, new_password, reset_code } = req.body;

  if (!email) throw "Email is required";
  if (!new_password) throw "Please provide new password!";
  if (!reset_code) throw "Please provide reset code!";
  if (new_password.length < 5)
    throw "Password must be at least 5 characters long!";

  const getUserWithResetCode = await usersModel.findOne({
    email: email,
    reset_code: reset_code,
  });

  if (!getUserWithResetCode) throw "Reset code does not match reset code!";

  const hashedPassword = await bcrypt.hash(new_password, 12);

  await usersModel.updateOne(
    {
      email: email,
    },
    {
      password: hashedPassword,
      reset_code: "",
    },
    {
      runValidators: true,
    }
  );

  await emailManager(
    email,
    "Your password resetted successfully! If you have not changed your password. please contact your administrator",
    "Your password resetted successfully! If you have not changed your password. please contact your administrator",
    "Password resetted successfully!"
  );

  res.status(200).json({
    status: "success!",
    message: "Password has been resetted successfully",
  });
};

module.exports = resetPassword;
