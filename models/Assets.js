// models/asset.js
const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Bike", "Car", "Laptop", "Mobile"],
    required: true,
  },
  status: {
    type: String,
    // enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  requestDate: {
    type: Date,
  },
  issueDate: {
    type: Date,
  },
});

const AssetApplication = mongoose.model("Asset", assetSchema);

module.exports = AssetApplication;
