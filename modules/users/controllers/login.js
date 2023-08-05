const mongooose = require("mongoose");

const login = (req, res) => {
  const usersModel = mongoose.model("users");

  const { email, password } = req.body;
};

module.exports = login;
