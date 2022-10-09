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

exports.updateAnime = async (req, res, next) => {
  try {
    const {
      Genres,
      title,
      type,
      season,
      year,
      duration,
      synopsis,
      publishStatus,
      ratingId,
      studioId
    } = req.body;
    const { animeId } = req.params;
    const didUpdate = await animeService.updateAnime(
      {
        title,
        type,
        season: season !== 'null' ? season : 'none',
        year: +year,
        duration: +duration,
        synopsis,
        publishStatus: publishStatus === 'true' ? true : false,
        studioId: +studioId,
        ratingId: +ratingId
      },
      req.files,
      Genres,
      animeId
    );
    await genreService.updateGenreList(JSON.parse(Genres), animeId);
    return res.status(200).json({ didUpdate });
  } catch (err) {
    next(err);
  }
};

exports.deleteAnime = async (req, res, next) => {
  try {
    const { animeId } = req.params;
    const anime = await animeService.checkAnimeExist(animeId);
    await genreService.deleteGenreList(animeId);
    await animeService.deleteAnime(anime);
    res.status(201).json({ message: 'delete anime successfully' });
  } catch (err) {
    next(err);
  }
};

exports.searchAnime = async (req, res, next) => {
  try {
    const { id, title, season, year } = req.query;
    const animes = await animeService.searchAnimes({ id, title, season, year });
    return res.status(200).json({ animes });
  } catch (err) {
    next(err);
  }
};
