const animeService = require('../services/animeService');

exports.getHighlighAnime = async (req, res, next) => {
  try {
    const highlightAnimes = await animeService.getHighlightAnimes();
    const random = Math.floor(Math.random() * 5);
    const anime = await animeService.getAnimeById(highlightAnimes[random].id);

    return res.status(200).json({ anime });
  } catch (err) {
    next(err);
  }
};

exports.getPopularAnime = async (req, res, next) => {
  try {
    const { limit } = req.query;
    const animes = await animeService.getAnimesOrdered(
      'avgReviewScore',
      +limit || 18
    );

    return res.status(200).json({ animes });
  } catch (err) {
    next(err);
  }
};
