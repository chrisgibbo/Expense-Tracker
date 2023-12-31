const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwtManager = require("../../../managers/jwtManager");
const emailManager = require("../../../managers/emailManager");

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

  const hashedPassword = await bcrypt.hash(password, 12);

  if (getDuplicateEmail) throw "This email already exists";

  const createdUser = await usersModel.create({
    name: name,
    email: email,
    password: hashedPassword,
    balance: balance,
  });

  const accessToken = jwtManager(createdUser);

  await emailManager(
    createdUser,
    email,
    "Welcome to expense tracker, We hope you can manage your expense easily from our platform",
    "<h1>Welcome to expense tracker</h1> <br> We hope you can manage your expense easily from our platform",
    "Welcome to Expense Tracker"
  );

  res.status(201).json({
    status: "User Registered Successfully",
    accessToken: accessToken,
  });
};

module.exports = register;
