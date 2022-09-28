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
    const input = req.body;
    const { error } = validator.register(input);
    if (error) {
      throw new ServerError(400, error);
    }
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const newRegist = { ...input, password: hashedPassword };
    const user = await User.create(newRegist);
    const token = genToken({ id: user.id, username: user.username });
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const input = req.body;
    const user = await User.findOne({ where: { username: input.username } });

    if (!user) {
      throw new ServerError(400, 'username or password is invalid');
    }

    const isCorrectPassword = await bcrypt.compare(
      input.password,
      user.password
    );

    if (!isCorrectPassword) {
      throw new ServerError(400, 'username or password is invalid');
    }

    const token = genToken({ id: user.id, username: user.username });
    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (err) {
    next(err);
  }
};
