const { catchAsyncService } = require("../utils/catchAsyncErrors");
const Employee = require("../models/Employee");
const LoanApplication = require("../models/Loan");
const jwt = require("jsonwebtoken");

const signIn = catchAsyncService(async (...args) => {
  const loginData = args[0];
  const employee = await Employee.findOne({ email: loginData.email });
  return employee;
});

const applyLoan = catchAsyncService(async (...args) => {
  const loanData = args[0];
  const { userId, name, email, amount } = loanData;

  const newApplication = new LoanApplication({
    userId,
    name,
    email,
    amount,
  });
  return await newApplication.save();
});

module.exports = { signIn, applyLoan };
