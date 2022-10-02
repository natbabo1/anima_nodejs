const { Anime, Episode } = require('../models');

exports.getHighlighAnime = async (req, res, next) => {
  try {
    const highlightAnimes = await Anime.findAll({
      attributes: ['id'],
      where: { publishStatus: true },
      order: [['avgReviewScore', 'DESC']],
      limit: 5
    });
    const random = Math.floor(Math.random() * 5);
    const anime = await Anime.findOne({
      where: { id: highlightAnimes[random].id },
      include: Episode
    });

    return res.status(200).json({ anime });
  } catch (err) {
    next(err);
  }
};
