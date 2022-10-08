const { Rating } = require('../models');

exports.getAllRatings = async (req, res, next) => {
  try {
    const ratings = await Rating.findAll();
    res.status(200).json({ ratings });
  } catch (err) {
    next(err);
  }
};

exports.createRating = async (req, res, next) => {
  try {
    const rating = await Rating.create({
      rating: req.body.rating
    });
    res.status(200).json({ rating });
  } catch (err) {
    next(err);
  }
};

exports.updateRating = async (req, res, next) => {
  try {
    const rating = await Rating.update(
      { rating: req.body.rating },
      { where: { id: req.params.ratingId } }
    );
    res.status(200).json({ rating });
  } catch (err) {
    next(err);
  }
};

exports.deleteRating = async (req, res, next) => {
  try {
    await Rating.destroy({
      where: {
        id: req.params.ratingId
      }
    });
    res.status(200).json();
  } catch (err) {
    next(err);
  }
};
