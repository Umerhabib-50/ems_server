const AdminService = require("../services/adminService");
const { sendSuccessResponse } = require("../utils/responseUtils");
const { catchAsync } = require("../utils/catchAsyncErrors");
const generateToken = require("../utils/generateToken");

const signIn = catchAsync(async (req, res, next) => {
  const admin = await AdminService.signIn(req.body);
  const token = generateToken(admin);
  sendSuccessResponse(res, token);
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

module.exports = {
  createEmployee,
  signIn,
  signUp,
};
