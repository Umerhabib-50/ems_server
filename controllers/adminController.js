const AdminService = require("../services/adminService");
const { sendSuccessResponse } = require("../utils/responseUtils");

const catchAsync = require("../middlewares/catchAsyncErrors");

const createEmployee = catchAsync(async (req, res, next) => {
  let employeeData = req.body;
  const newEmployee = await AdminService.createEmployee(employeeData);
  sendSuccessResponse(res, newEmployee);
});

module.exports = {
  createEmployee,
};
