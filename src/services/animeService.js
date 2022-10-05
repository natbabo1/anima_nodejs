const { Anime, Episode, Rating, Genre } = require('../models');
const ServerError = require('../utilities/serverError');

exports.getHighlightAnimes = () =>
  Anime.findAll({
    attributes: ['id'],
    where: { publishStatus: true },
    order: [['avgReviewScore', 'DESC']],
    limit: 5
  });

exports.getAnimeById = (id) =>
  Anime.findOne({
    attributes: { exclude: 'ratingId' },
    where: { id },
    include: [
      { model: Episode },
      {
        model: Rating,
        attributes: ['id', 'rating']
      },
      { model: Genre, attributes: ['genre'], through: { attributes: [] } }
    ]
  });

exports.getAnimesOrdered = (orderBy = 'avgReviewScore', limit = 18) =>
  Anime.findAll({
    attributes: { exclude: 'ratingId' },
    include: [
      { model: Episode },
      {
        model: Rating,
        attributes: ['id', 'rating']
      },
      { model: Genre, attributes: ['genre'], through: { attributes: [] } }
    ],
    order: [[orderBy, 'DESC']],
    limit
  });

const getSeasonNow = () => {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  const season = (() => {
    switch (month) {
      case 0:
      case 1:
      case 2:
        return 'winter';
      case 3:
      case 4:
      case 5:
        return 'spring';
      case 6:
      case 7:
      case 8:
        return 'summer';
      case 9:
      case 10:
      case 11:
        return 'fall';
    }
  })();

  return { season, year };
};

exports.getThisSeasonAnimes = async (limit = 24) => {
  const { season, year } = getSeasonNow();
  const animes = await Anime.findAll({
    attributes: { exclude: 'ratingId' },
    where: { season, year },
    include: [
      { model: Episode },
      {
        model: Rating,
        attributes: ['id', 'rating']
      },
      { model: Genre, attributes: ['genre'], through: { attributes: [] } }
    ],
    limit
  });
  return animes;
};

exports.getMovies = (limit = 18) =>
  Anime.findAll({
    attributes: { exclude: 'ratingId' },
    where: { type: 'Movie' },
    include: [
      { model: Episode },
      {
        model: Rating,
        attributes: ['id', 'rating']
      },
      { model: Genre, attributes: ['genre'], through: { attributes: [] } }
    ],
    limit
  });
