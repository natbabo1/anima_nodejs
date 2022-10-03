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
