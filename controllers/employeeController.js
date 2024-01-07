const { sendSuccessResponse, ErrorHandler } = require("../utils/responseUtils");
const { catchAsync } = require("../utils/catchAsyncErrors");
const generateToken = require("../utils/generateToken");
const employeeService = require("../services/employeeService");

const signIn = catchAsync(async (req, res, next) => {
  const employee = await employeeService.signIn(req.body);
  if (!employee) {
    return next(new ErrorHandler("Invalid credentials", 401));
  }
  if (employee?.password != req?.body?.password) {
    return next(new ErrorHandler("Invalid credentials", 401));
  }
  const token = generateToken(employee);
  sendSuccessResponse(res, { token, role: [2000], employee });
});

const applyLoan = catchAsync(async (req, res, next) => {
  const loan = await employeeService.applyLoan(req.body);
  sendSuccessResponse(res, loan);
});

const applyLeave = catchAsync(async (req, res, next) => {
  const loan = await employeeService.applyLeave(req.body);
  sendSuccessResponse(res, loan);
});

const applyasset = catchAsync(async (req, res, next) => {
  const asset = await employeeService.applyasset(req.body);
  sendSuccessResponse(res, asset);
});

const loanhistory = catchAsync(async (req, res, next) => {
  const loan = await employeeService.loanHistory(req.body);
  sendSuccessResponse(res, loan);
});

const leavehistory = catchAsync(async (req, res, next) => {
  const leaves = await employeeService.leaveHistory(req.body);
  sendSuccessResponse(res, leaves);
});

const assethistory = catchAsync(async (req, res, next) => {
  const assets = await employeeService.assetHistory(req.body);
  sendSuccessResponse(res, assets);
});

const changePassword = catchAsync(async (req, res, next) => {
  const updatedPassword = await employeeService.changePassword(req.body);
  sendSuccessResponse(res, updatedPassword);
});

module.exports = {
  signIn,
  applyLoan,
  loanhistory,
  applyLeave,
  leavehistory,
  applyasset,
  assethistory,
  changePassword,
};
