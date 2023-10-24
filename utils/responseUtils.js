// src/utils/responseUtils.js
const sendSuccessResponse = (res, data) => {
  res.status(200).json({ success: true, data });
};

const sendErrorResponse = (error, req, res, next) => {
  // Wrong Mongodb Id error
  let message;
  if (error.name === "CastError") {
    message = `Resource not found. Invalid: ${error.path}`;
  }

  // Mongoose duplicate key error
  if (error.code === 11000) {
    message = `Duplicate ${Object.keys(error.keyValue)} Entered`;
  }

  // Wrong JWT error
  if (error.name === "JsonWebTokenError") {
    message = `Json Web Token is invalid, Try again `;
  }

  // JWT EXPIRE error
  if (error.name === "TokenExpiredError") {
    message = `Json Web Token is Expired, Try again `;
  }

  res.status(500).json({ success: false, error: error, message });
};

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
};
