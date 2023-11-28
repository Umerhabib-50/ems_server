const AdminService = require("../services/adminService");
const { sendSuccessResponse, ErrorHandler } = require("../utils/responseUtils");
const { catchAsync } = require("../utils/catchAsyncErrors");
const generateToken = require("../utils/generateToken");

const signIn = catchAsync(async (req, res, next) => {
  const admin = await AdminService.signIn(req.body);

  if (!admin) {
    return next(new ErrorHandler("Invalid credentials", 401));
  }

  if (admin.password != req.body.password) {
    return next(new ErrorHandler("Invalid credentials", 401));
  }

  const token = generateToken(admin);
  sendSuccessResponse(res, { token, role: [1000] });
});

const signUp = catchAsync(async (req, res, next) => {
  const data = await AdminService.signUp(req.body);
  sendSuccessResponse(res, data);
});

const createEmployee = catchAsync(async (req, res, next) => {
  let employeeData = req.body;
  const newEmployee = await AdminService.createEmployee(employeeData);
  sendSuccessResponse(res, newEmployee);
});

const getAllEmployees = catchAsync(async (req, res, next) => {
  const employees = await AdminService.getAllEmployees();
  sendSuccessResponse(res, employees);
});

const getAllloans = catchAsync(async (req, res, next) => {
  const loans = await AdminService.getAllLoans();
  sendSuccessResponse(res, loans);
});

module.exports = {
  getAllloans,
  getAllEmployees,
  createEmployee,
  signIn,
  signUp,
};
