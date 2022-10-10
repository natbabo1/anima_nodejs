const fs = require('fs');
const { Op } = require('sequelize');
const { Anime, Episode, Rating, Genre } = require('../models');
const validator = require('../services/validator');
const ServerError = require('../utilities/serverError');

exports.getHighlightAnimes = () =>
  Anime.findAll({
    attributes: ['id'],
    where: { publishStatus: true },
    order: [['avgReviewScore', 'DESC']],
    limit: 5
  });

exports.getAnimeByIdMin = (id) => Anime.findOne({ where: { id } });

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

exports.addAnime = async (animeInput, files, Genres) => {
  if (!files.coverImage[0]) {
    throw new ServerError(400, 'Image Cover is required.');
  }
  if (Genres.length === 0) {
    throw new ServerError(400, 'Anime must have at least one genre.');
  }
  const { error } = validator.addNewAnime(animeInput);
  if (error) {
    throw new ServerError(400, error);
  }
  const anime = await Anime.create(animeInput);
  const folderName = `public/animes/${anime.id}-${anime.title.slice(0, 10)}`;
  const filePath = `${folderName}/cover-${files.coverImage[0].filename}`;
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
  fs.copyFileSync(files.coverImage[0].path, filePath);
  fs.unlinkSync(files.coverImage[0].path);
  await anime.update({ imagePath: filePath });

  if (files.highlightImage) {
    const fileHighLightPath = `${folderName}/highlight-${files.highlightImage[0].filename}`;
    fs.copyFileSync(files.highlightImage[0].path, fileHighLightPath);
    fs.unlinkSync(files.highlightImage[0].path);
    await anime.update({ highlightImagePath: fileHighLightPath });
  }
  return anime;
};

exports.updateAnime = async (animeInput, files, Genres, animeId) => {
  const { error } = validator.addNewAnime(animeInput);
  if (error) {
    throw new ServerError(400, error);
  }
  const animeDidUpdate = await Anime.update(animeInput, {
    where: { id: animeId }
  });

  if (!animeDidUpdate) {
    throw new ServerError(400, 'anime id is not exits');
  }

  if (!files.coverImage && !files.highlightImage) {
    return animeDidUpdate;
  }

  const anime = await Anime.findOne({ where: { id: animeId } });

  if (files.coverImage) {
    const { imagePath } = anime;
    let filePath;
    if (imagePath.startsWith('public')) {
      const imagePathSplited = imagePath.split('/');
      const fileName =
        imagePathSplited[imagePathSplited.length - 1].split('.')[0];
      const pathName = imagePathSplited
        .slice(0, imagePathSplited.length - 1)
        .join('/');
      filePath = `${pathName}/${fileName}.${
        files.coverImage[0].mimetype.split('/')[1]
      }`;
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    } else {
      const folderName = `public/animes/${anime.id}-${anime.title.slice(
        0,
        10
      )}`;
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }
      filePath = `${folderName}/cover-${files.coverImage[0].filename}`;
    }
    fs.copyFileSync(files.coverImage[0].path, filePath);
    fs.unlinkSync(files.coverImage[0].path);
    await anime.update({ imagePath: filePath });
  }
  if (files.highlightImage) {
    const { highlightImagePath } = anime;
    let filePath;
    if (highlightImagePath && highlightImagePath.startsWith('public')) {
      const imagePathSplited = highlightImagePath.split('/');
      const fileName =
        imagePathSplited[imagePathSplited.length - 1].split('.')[0];
      const pathName = imagePathSplited
        .slice(0, imagePathSplited.length - 1)
        .join('/');
      filePath = `${pathName}/${fileName}.${
        files.highlightImage[0].mimetype.split('/')[1]
      }`;
      if (fs.existsSync(highlightImagePath)) {
        fs.unlinkSync(highlightImagePath);
      }
    } else {
      const folderName = `public/animes/${anime.id}-${anime.title.slice(
        0,
        10
      )}`;
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }
      filePath = `${folderName}/highlight-${files.highlightImage[0].filename}`;
    }
    fs.copyFileSync(files.highlightImage[0].path, filePath);
    fs.unlinkSync(files.highlightImage[0].path);
    await anime.update({ highlightImagePath: filePath });
  }
  return animeDidUpdate;
};

exports.checkAnimeExist = async (animeId) => {
  const anime = await Anime.findOne({ where: { id: animeId } });
  if (!anime) {
    throw new ServerError(400, 'This anime does not exist.');
  }
  return anime;
};

exports.deleteAnime = async (anime) => {
  await anime.destroy();
};

exports.searchAnimes = async ({ id, title, season, year }) => {
  const where = {};
  if (id) {
    where.id = +id;
  }
  if (title) {
    where.title = { [Op.like]: `%${title}%` };
  }
  if (season) {
    where.season = season;
  }
  if (year) {
    where.year = +year;
  }
  const animes = await Anime.findAll({ where, include: Genre });
  return animes;
};
