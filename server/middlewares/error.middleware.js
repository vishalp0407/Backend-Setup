const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Product not found";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "development" ? null : err.stack,
  });
};

export { errorHandler };
