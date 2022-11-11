const jwt = require("jsonwebtoken");
const tierService = require("../services/tierService");
const ServerError = require("../utilities/serverError");

const genVpassToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET_KEY || "private_key", {
    expiresIn: process.env.JWT_VPASS_EXPIRES || "1hr"
  });

exports.getAllTiers = async (req, res, next) => {
  try {
    const tiers = await tierService.getAllTiers();
    res.status(200).json({ tiers });
  } catch (err) {
    next(err);
  }
};

exports.getVpassToken = async (req, res, next) => {
  try {
    const { id, Subscription } = req.user;

    if (!Subscription) {
      res.status(200).json({ isNotSub: true, vpass: null });
    }

    const vpass = genVpassToken({ id });

    res.status(200).json({ vpass });
  } catch (err) {
    next(err);
  }
};

exports.checkVpassToken = async (req, res, next) => {
  try {
    const { Subscription } = req.user;

    const { vpass } = req.body;

    jwt.verify(vpass, process.env.JWT_SECRET_KEY || "private_key");

    return res.status(200).json({ isExpired: false });
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(200).json({ isExpired: true });
    }
    next(err);
  }
};
