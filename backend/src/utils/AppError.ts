class AppError extends Error {
  statusCode: number;
  status: string;
  errors: Record<string, any> | null;
  isOperational: boolean;

  constructor(
    message: string,
    statusCode: number = 500,
    options: Record<string, any> = {},
  ) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.errors = options.errors || null;

    this.isOperational =
      options.isOperational !== undefined
        ? options.isOperational
        : statusCode < 500;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
