const mongoose = require("mongoose");

const register = async (req, res) => {
  const usersModel = mongoose.model("users");

  const { email, password, confirm_password, name, balance } = req.body;

  // vailidation ...

  if (!email) throw "Email is required";
  if (password) throw "Password is required";
  if (password.length < 5) throw "Password must be at least 5 characters";

  if (!name) throw "Name is required";
  if (password !== confirm_password)
    throw "Password and Confirmed Password do not match";
  f;

  const getDuplicateEmail = await usersModel.findOne({
    email: email,
  });

  if (getDuplicateEmail) throw "This email already exists";

  await usersModel.create({
    name: name,
    email: email,
    password: password,
    balance: balance,
  });

  res.status(201).json({
    status: "User Registered Successfully",
  });
};

module.exports = register;
