const mongoose = require("mongoose");

const login = async (req, res) => {
  const usersModel = mongoose.model("users");

  const { email, password } = req.body;

  const getUser = await usersModel.findOne({
    email: email,
  });

  res.status(200).json({
    status: "success",
    message: "User logged in successfully",
  });
};

module.exports = login;
