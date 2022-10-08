const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().alphanum().case('lower').min(6).max(16).required(),
  email: Joi.string()
    .lowercase()
    .email({ tlds: { allow: true } })
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9_#@$]{8,18}$'))
    .required(),
  confirmPassword: Joi.ref('password'),
  firstName: Joi.string().trim().max(30).required(),
  lastName: Joi.string().max(30).required(),
  birthDate: Joi.date().greater('1-1-1922'),
  gender: Joi.string().valid('Male', 'Female').required(),
  mobileNo: Joi.string().pattern(new RegExp('^0[0-9]{9}$'))
}).with('password', 'confirmPassword');

const animeSchema = Joi.object({
  type: Joi.string().valid('TV', 'Movie'),
  title: Joi.string().max(255).required(),
  season: Joi.string().valid('spring', 'summer', 'fall', 'winter', 'none'),
  year: Joi.number()
    .greater(1900)
    .less(new Date().getFullYear() + 1),
  ratingId: Joi.number().required(),
  studioId: Joi.number().required(),
  duration: Joi.number().required(),
  publishStatus: Joi.boolean().required(),
  synopsis: Joi.string().required()
});

exports.register = (input) => userSchema.validate(input, { abortEarly: false });
exports.addNewAnime = (anime) =>
  animeSchema.validate(anime, { abortEarly: false });
