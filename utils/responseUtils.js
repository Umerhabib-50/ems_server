// src/utils/responseUtils.js
const sendSuccessResponse = (res, data) => {
  res.status(200).json({ success: true, data });
};

const sendErrorResponse = (error, req, res, next) => {
  res.status(500).json({ success: false, error: error.message });
};

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
};
