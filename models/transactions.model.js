const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const transactionsSchema = new mongooose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.OjectsId,
      ref: "users",
      required: true,
    },

    amount: {
      type: number,
      required: true,
    },

    transactions_type: {
      type: string,
      required: true,
      enum: ["income", "expense"],
    },

    remarks: {
      type: string,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const transactionsModel = mongooose.model("users", transactionsSchema);

module.exports = transactionsModel;
