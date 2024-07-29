class ApiError extends Error {
  constructor(
    statusCode,
    message = "Somthing went wrong",
    errors = [],
    statck = ""
  ) {
    super(message);
    thes.statusCode = statusCode;
    this.data = null; // What is this.data search
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this.this.constructor);
    }
  }
}

export default ApiError;
