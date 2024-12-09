const winston = require("winston");
const { createLogger, format } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: "error",
  format: combine(label({ label: "x-clone" }), timestamp(), myFormat),
  transports: [
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),

    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

module.exports = logger;
