const catchAsync = (func) => {
  return async (req, res, next) => {
    try {
      await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

const catchAsyncService = (func) => {
  return async (...args) => {
    try {
      return await func(...args);
    } catch (error) {
      throw error;
    }
  };
};

module.exports = { catchAsyncService, catchAsync };
