const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const { vpass } = req.query;
    jwt.verify(vpass, process.env.JWT_SECRET_KEY || "private_key");
    next();
  } catch (err) {
    next(err);
  }
};
