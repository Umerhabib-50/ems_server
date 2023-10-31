// src/utils/responseUtils.js
const sendSuccessResponse = (res, data) => {
  res.status(200).json({ success: true, ...data });
};

const sendErrorResponse = (error, req, res, next) => {
  error.statusCode = error.statusCode || "500";
  error.message = error.message || "Internal Server Error";

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
    code: error.statusCode,
  });
};

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
  ErrorHandler,
};
