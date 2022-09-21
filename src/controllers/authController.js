const { json } = require('sequelize');
const { User } = require('../models');
const validator = require('../services/validator');
const ServerError = require('../utilities/serverError');

exports.register = async (req, res, next) => {
  try {
    // const {
    //   username,
    //   email,
    //   password,
    //   confirmPassword,
    //   firstName,
    //   lastName,
    //   birthDate,
    //   gender,
    //   mobileNo
    // } = req.body;
    const input = req.body;
    const { value, error } = validator.register(input);
    if (error) {
      throw new ServerError(400, error);
    }
    const user = await User.create(input);
    return res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};
