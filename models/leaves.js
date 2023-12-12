// models/LeaveApplication.js

const mongoose = require("mongoose");

const leaveApplicationSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  leaveType: {
    type: String,
    default: "Casual",
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const LeaveApplication = mongoose.model(
  "LeaveApplication",
  leaveApplicationSchema
);

module.exports = LeaveApplication;
