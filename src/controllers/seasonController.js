const animeService = require('../services/animeService');

exports.getSeason = (req, res, next) => {
  res.status(200).json(animeService.getSeasonNow());
};
