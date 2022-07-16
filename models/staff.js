const mongoose = require("mongoose");
const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    dividends: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "staffs",
      trim: true,
    },
  },
  { timestamps: true }
);
module.exports = staffModel = mongoose.model("staffs", staffSchema);
