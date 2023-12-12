const { catchAsyncService } = require("../utils/catchAsyncErrors");
const Employee = require("../models/Employee");
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const LoanApplication = require("../models/Loan");
const LeaveApplication = require("../models/leaves");

const signIn = catchAsyncService(async (...args) => {
  const loginData = args[0];
  const admin = await Admin.findOne({ email: loginData.email });
  return admin;
});

const createEmployee = catchAsyncService(async (...args) => {
  const employeeData = args[0];
  const newEmployee = new Employee(employeeData);
  return await newEmployee.save();
});

const getAllEmployees = catchAsyncService(async (...args) => {
  const employees = await Employee.find();
  return employees;
});

const signUp = catchAsyncService(async (...args) => {
  const signupData = args[0];
  const newAdmin = new Admin(signupData);
  return await newAdmin.save();
});

const getAllLeaves = catchAsyncService(async (...args) => {
  const leaves = await LeaveApplication.find();
  return leaves;
});

const getAllLoans = catchAsyncService(async (...args) => {
  const loans = await LoanApplication.find();
  return loans;
});

const Aprrove_Reject_loan = catchAsyncService(async (...args) => {
  const data = args[0];
  const { loanId, status } = data;
  const updatedLoan = await LoanApplication.findByIdAndUpdate(
    loanId,
    { status },
    { new: true }
  );
  return updatedLoan;
});

const Aprrove_Reject_leave = catchAsyncService(async (...args) => {
  const data = args[0];
  const { leaveId, status } = data;
  const updatedLeave = await LeaveApplication.findByIdAndUpdate(
    leaveId,
    { status },
    { new: true }
  );
  return updatedLeave;
});

module.exports = {
  createEmployee,
  signIn,
  signUp,
  getAllEmployees,
  getAllLoans,
  Aprrove_Reject_loan,
  getAllLeaves,
  Aprrove_Reject_leave,
};
