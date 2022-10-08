const animeService = require('../services/animeService');
const genreService = require('../services/genreService');

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

exports.getPopularAnimes = async (req, res, next) => {
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

exports.getPopularAnimes = async (req, res, next) => {
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

exports.getThisSeasonAnimes = async (req, res, next) => {
  try {
    const { limit } = req.query;
    const animes = await animeService.getThisSeasonAnimes(+limit || 18);
    return res.status(200).json({ animes });
  } catch (err) {
    next(err);
  }
};

exports.getMovies = async (req, res, next) => {
  try {
    const { limit } = req.query;
    const animes = await animeService.getMovies(+limit || 18);
    return res.status(200).json({ animes });
  } catch (err) {
    next(err);
  }
};

exports.createAnime = async (req, res, next) => {
  try {
    const { Genres, coverImage, highlightImage, ...anime } = req.body;
    const newAnime = await animeService.addAnime(anime, req.files, Genres);
    await genreService.addGenreList(JSON.parse(Genres), newAnime.id);
    return res.status(200).json({ anime: newAnime });
  } catch (err) {
    next(err);
  }
};
