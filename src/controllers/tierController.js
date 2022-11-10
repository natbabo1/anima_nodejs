const tierService = require("../services/tierService");

exports.getAllTiers = async (req, res, next) => {
  try {
    const tiers = await tierService.getAllTiers();

    res.status(200).json({ tiers });
  } catch (err) {
    next(err);
  }
};
