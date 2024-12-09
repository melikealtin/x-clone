const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  profilePicture: Joi.string().uri().optional(),
  bio: Joi.string().max(160).optional(),
  location: Joi.string().optional(),
  websiteURL: Joi.string().uri().optional(),
  accountType: Joi.string().valid("standard", "premium").default("standard"),
});

module.exports = { userSchema };
