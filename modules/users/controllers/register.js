const mongoose = require("mongoose");

const register = (req, res) => {
  const usersModel = mongoose.model("users");

  const { email, password, confirm_password } = req.body;

  res.status(200).json({
    status: "Hello from the server",
  });
};

module.exports = register;
