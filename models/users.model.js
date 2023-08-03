const mongooose = require("mongoose");

const usersSchema = new mongooose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },

  email: {
    type: String,
    required: [true, "email is required"],
  },
});

const usersModel = mongooose.model("users", usersSchema);

module.exports = usersModel;
