const { Episode } = require('../models');

exports.getEpisodeList = async (req, res, next) => {
  try {
    const episodes = await Episode.findAll({
      where: { animeId: req.params.animeId }
    });

    return res.status(200).json({ episodes });
  } catch (err) {
    next(err);
  }
};
