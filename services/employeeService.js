const { catchAsyncService } = require("../utils/catchAsyncErrors");
const Employee = require("../models/Employee");
const LoanApplication = require("../models/Loan");
const jwt = require("jsonwebtoken");
const LeaveApplication = require("../models/leaves");

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

const applyLeave = catchAsyncService(async (...args) => {
  const leaveData = args[0];
  const { employeeId, startDate, endDate, reason, leaveType } = leaveData;

  const leaveApplication = new LeaveApplication({
    employeeId,
    startDate,
    endDate,
    reason,
    leaveType: leaveType === "" ? "Casual" : leaveType,
  });

  return await leaveApplication.save();
});

const loanHistory = catchAsyncService(async (...args) => {
  const loanData = args[0];

  const { userId } = loanData;

  const loanHistory = await LoanApplication.find({ userId: userId });
  return loanHistory;
});

const leaveHistory = catchAsyncService(async (...args) => {
  const data = args[0];

  const { employeeId } = data;

  const leaveHistory = await LeaveApplication.find({ employeeId: employeeId });
  return leaveHistory;
});

module.exports = { signIn, applyLoan, loanHistory, applyLeave, leaveHistory };
