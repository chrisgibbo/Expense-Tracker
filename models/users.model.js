const mongooose = require("mongoose");

const usersSchema = new mongooose.Schema({
  full_name: {
    type: String,
    required: [true, "Full name is required"],
  },

  email: {
    type: String,
    required: [true, "email is required"],
  },
});

const usersModel = mongooose.model("users", usersSchema);

module.exports = usersModel;
