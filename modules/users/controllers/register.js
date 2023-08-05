const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const usersModel = mongoose.model("users");

  const { email, password, confirm_password, name, balance } = req.body;

  // vailidation ...

  if (!email) throw "Email is required";
  if (!password) throw "Password is required";
  if (password.length < 5) throw "Password must be at least 5 characters";

  if (!name) throw "Name is required";
  if (password !== confirm_password)
    throw "Password and Confirmed Password do not match";

  const getDuplicateEmail = await usersModel.findOne({
    email: email,
  });

  const hashedPassword = await bcrypt.hash(password, 10);

  if (getDuplicateEmail) throw "This email already exists";

  await usersModel.create({
    name: name,
    email: email,
    password: hashedPassword,
    balance: balance,
  });

  res.status(201).json({
    status: "User Registered Successfully",
  });
};

module.exports = register;
