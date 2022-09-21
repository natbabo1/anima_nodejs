const { json } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const validator = require('../services/validator');
const ServerError = require('../utilities/serverError');

const genToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET_KEY || 'private_key', {
    expiresIn: process.env.JWT_EXPIRES || '1d'
  });

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
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const newRegist = { ...input, password: hashedPassword };
    const user = await User.create(newRegist);
    const token = genToken({ id: user.id });
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};
