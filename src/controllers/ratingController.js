const { Rating } = require('../models');

exports.getAllRatings = async (req, res, next) => {
  const ratings = await Rating.findAll();
  res.status(200).json({ ratings });
};
