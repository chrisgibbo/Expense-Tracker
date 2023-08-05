const mongoose = require("mongoose");

const login = (req, res) => {
  const usersModel = mongoose.model("users");

  const { email, password } = req.body;

  res.status(200).json({
    status: "success",
    message: "User logged in successfully",
  });
};

module.exports = login;
