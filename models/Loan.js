const mongoose = require("mongoose");

const LoanApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: "Pending" },
  date: { type: Date, default: Date.now },
});

const LoanApplication = mongoose.model(
  "LoanApplication",
  LoanApplicationSchema
);

module.exports = LoanApplication;
