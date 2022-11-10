const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const { User, Subscription, Tier } = require("../models");
const ServerError = require("../utilities/serverError");

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer ")) {
      throw new ServerError(401, "you are unauthorized");
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      throw new ServerError(401, "you are unauthorized");
    }
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY || "private_key"
    );

    const user = await User.findOne({
      attributes: { exclude: "password" },
      where: { id: payload.id },
      include: [
        {
          model: Subscription,
          attributes: ["endDate"],
          where: { endDate: { [Op.gte]: new Date() } },
          required: false,
          include: { model: Tier, attributes: ["id", "name"] }
        }
      ]
    });

    if (!user) {
      throw new ServerError(401, "you are unauthorize");
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
