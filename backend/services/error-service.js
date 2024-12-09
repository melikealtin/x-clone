class ErrorService {
  constructor(logger) {
    this.logger = logger;
  }
  handle(err, req, res, next) {
    this.logger.error(err);
    const statusCode = err.status || 500;
    return res.status(statusCode).json(err);
  }
  createError(message, status = 500) {
    const error = new Error(message);
    error.status = status;
    return error;
  }
}
module.exports = ErrorService;
