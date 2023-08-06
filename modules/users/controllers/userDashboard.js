const mongoose = require("mongoose");

const userDashboard = (req, res) => {
  console.log(req.user);

  const usersModel = mongoose.model("users");

  res.status(200).json({
    status: "Hello from userDashboard!!",
  });
};

module.exports = userDashboard;
