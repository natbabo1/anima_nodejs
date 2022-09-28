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
  firstName: Joi.string().max(30).required(),
  lastName: Joi.string().max(30).required(),
  birthDate: Joi.date().greater('1-1-1922'),
  gender: Joi.string().valid('Male', 'Female').required(),
  mobileNo: Joi.string().pattern(new RegExp('^0[0-9]{9}$'))
}).with('password', 'confirmPassword');

exports.register = (input) => userSchema.validate(input, { abortEarly: false });
// exports.username = (username) => {
//   const error = [];
//   if (typeof username !== 'string') {
//     return ['username must be string'];
//   }
//   if (username.length < 6 || username.length > 12) {
//     error.push('username must contain between 6 and 12 letters');
//   }
//   if (username.match(/^[^a-z]/)) {
//     error.push('username must start with a-z');
//   }
//   if (username.match(/[A-Z]/)) {
//     error.push('username must be lowercase');
//   }
//   if (username.match(/[^a-zA-Z0-9_]/)) {
//     error.push('username must not contain any special character');
//   }
//   return error;
// };

// exports.email = (email) => {
//   const err = [];
//   if (typeof email !== 'string') {
//     return ['email must be string'];
//   }
//   if (email.length > 230) {
//     err.push('email must not longer than 230 letters');
//   }
//   if (!email.match(/\w+@\w+[.]\w+/)) {
//     err.push('email format is incorrect');
//   }

//   return err;
// };
