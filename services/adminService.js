const { catchAsyncService } = require("../utils/catchAsyncErrors");
const Employee = require("../models/Employee");
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

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

module.exports = {
  createEmployee,
  signIn,
  signUp,
  getAllEmployees,
};
