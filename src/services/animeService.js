const { Anime, Episode, Rating, Genre } = require('../models');

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
