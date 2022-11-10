const ServerError = require("../utilities/serverError");

module.exports = async (req, res, next) => {
  try {
    const { Subscription } = req.user;

    if (!Subscription) {
      throw new ServerError(403, "active subscription is not found");
    }

    next();
  } catch (err) {
    next(err);
  }
};
