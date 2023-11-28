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
  // 654a8c742674e68e7e7a7a3f

  const loan = await employeeService.applyLoan(req.body);
  sendSuccessResponse(res, loan);
}); 

module.exports = { signIn, applyLoan };
   