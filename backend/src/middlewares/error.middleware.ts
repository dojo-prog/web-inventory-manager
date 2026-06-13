import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = async (error, req, res, next) => {
  console.log(error);

  let statusCode = error.statusCode || 500;
  let message = error.message || "Internal Server Error";
  let errors = error.errors || null;

  // Postgres errors
  if (error.code) {
    // Generic Errors
    switch (error.code) {
      case "23505":
        statusCode = 409;
        message = "Duplicate value";
        break;

      case "23503":
        statusCode = 400;
        message = "Referenced resource does not exist";
        break;

      case "23514":
        statusCode = 400;
        message = "Invalid field value";
        break;

      case "23502":
        statusCode = 400;
        message = "Missing required field";
        break;
    }
  }

  // JWT errors
  if (error.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Unauthorized - Invalid token";
  }

  if (error.name === "TokenExpiredError") {
    if (req.originalUrl.includes("/auth/refresh")) {
      statusCode = 403;
      message = "Refresh token expired. Please login again";
    } else {
      statusCode = 401;
      message = "Unauthorized - Token expired";
    }
  }

  res.status(statusCode).json({ success: false, message, errors });
};

export default errorMiddleware;
