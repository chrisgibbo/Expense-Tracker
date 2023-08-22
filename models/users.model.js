const mongooose = require("mongoose");

const usersSchema = new mongooose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "password is required"],
    },

    balance: {
      type: Number,
      required: [true, "balance is required"],
      default: 0,
    },

    reset_code: {
      type: Number,
    },
  },

  {
    timestamps: true,
  }
);

const usersModel = mongooose.model("users", usersSchema);

module.exports = usersModel;
