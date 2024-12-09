const Joi = require("joi");

const postSchema = Joi.object({
  content: Joi.string().max(280).required(),
  author: Joi.string(),
  attachments: Joi.array()
    .items(
      Joi.object({
        type: Joi.string().valid("image", "video", "file").required(),
        url: Joi.string().uri().required(),
      })
    )
    .optional(),
});

module.exports = { postSchema };
