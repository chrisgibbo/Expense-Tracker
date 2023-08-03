const mongooose = require("mongoose");

const usersSchema = new mongooose.Schema({
  full_name: {
    type: String,
    required: [true, "Please enter your full name"],
  },

  email: {
    type: String,
    required: [true, "Please enter your email"],
  },
});

const usersModel = mongooose.model("users", usersSchema);

module.exports = usersModel;
