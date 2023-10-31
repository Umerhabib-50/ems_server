const { catchAsyncService } = require("../utils/catchAsyncErrors");
const Employee = require("../models/Employee");
const jwt = require("jsonwebtoken");

const signIn = catchAsyncService(async (...args) => {
  const loginData = args[0];
  const employee = await Employee.findOne({ email: loginData.email });
  return employee;
});

module.exports = { signIn };
