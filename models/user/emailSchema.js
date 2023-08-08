const Joi = require('joi');

const { emailRegexp } = require('./userSchema');

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = {
  emailSchema,
};
