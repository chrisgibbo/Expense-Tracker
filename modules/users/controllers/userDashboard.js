const mongoose = require("mongoose");

const userDashboard = async (req, res) => {
  const usersModel = mongoose.model("users");
  console.log(req.user);

  const getUser = await usersModel
    .findOne({
      _id: req.user._id,
    })
    .select("name balance email");

  res.status(200).json({
    status: "Success!",
    data: getUser,
  });
};

module.exports = userDashboard;
