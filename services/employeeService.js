const { catchAsyncService } = require("../utils/catchAsyncErrors");
const Employee = require("../models/Employee");
const LoanApplication = require("../models/Loan");
const jwt = require("jsonwebtoken");
const LeaveApplication = require("../models/leaves");
const AssetApplication = require("../models/Assets");

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

const applyasset = catchAsyncService(async (...args) => {
  const assetData = args[0];
  const { employeeId, name, type } = assetData;

  const asset = new AssetApplication({
    name,
    type,
    employeeId,
    requestDate: Date.now(),
  });
  return await asset.save();
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

const assetHistory = catchAsyncService(async (...args) => {
  const data = args[0];

  const { employeeId } = data;

  const assetHistory = await AssetApplication.find({ employeeId: employeeId });
  return assetHistory;
});

const changePassword = catchAsyncService(async (...args) => {
  const data = args[0];
  const { userId, newPassword } = data;

  const updatedasset = await Employee.findByIdAndUpdate(
    userId,
    { password: newPassword },
    { new: true }
  );

  return updatedasset;
});

module.exports = {
  signIn,
  applyLoan,
  loanHistory,
  applyLeave,
  leaveHistory,
  applyasset,
  assetHistory,
  changePassword,
};
