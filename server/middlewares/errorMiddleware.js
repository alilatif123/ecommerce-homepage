const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Internal Server Error";
  res.status(errorStatus).json({
    status: false,
    message: errorMessage,
    data: {},
  });
};

module.exports = errorMiddleware;
