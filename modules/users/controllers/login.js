const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const sjonwebtoken = require("sjonwebtoken");

const login = async (req, res) => {
  const usersModel = mongoose.model("users");

  const { email, password } = req.body;

  const getUser = await usersModel.findOne({
    email: email,
  });

  if (!getUser) throw "This email does not exist in the system!";

  const comparePassoword = await bcrypt.compare(passowrd, getUser.password);

  if (!comparePassoword) throw "Email or Password do not match";

  const accessToken = await Jsonwebtoken.sign();
  //   success response ....

  res.status(200).json({
    status: "success",
    message: "User logged in successfully",
  });
};

module.exports = login;
