const fs = require('fs');
const { getVideoDurationInSeconds } = require('get-video-duration');
const { Episode } = require('../models');
const animeService = require('./animeService');
const validator = require('../services/validator');
const ServerError = require('../utilities/serverError');

exports.createEpisode = async (episodeInput, files, animeId) => {
  if (!files.imagePath || !files.videoPath) {
    throw new ServerError(400, 'Image Cover and Video is required.');
  }
  const { error } = validator.createEpisode(episodeInput);
  if (error) {
    console.log(error);
    throw new ServerError(400, error);
  }

  const anime = await animeService.getAnimeByIdMin(animeId);
  if (!anime) {
    throw new ServerError(400, 'This anime does not exist');
  }

  const episode = await Episode.create({ ...episodeInput, animeId });

  const privateFolderName = `forSubscription/videos/${
    anime.id
  }-${anime.title.slice(0, 10)}`;
  const publicFolderName = `public/animes/${anime.id}-${anime.title.slice(
    0,
    10
  )}`;
  if (!fs.existsSync(privateFolderName)) {
    fs.mkdirSync(privateFolderName);
  }
  if (!fs.existsSync(publicFolderName)) {
    fs.mkdirSync(publicFolderName);
  }
  const imageFilePath = `${publicFolderName}/ep-${(
    '' + episode.number
  ).padStart(3, '0')}-cover-${files.imagePath[0].filename}`;
  fs.copyFileSync(files.imagePath[0].path, imageFilePath);
  fs.unlinkSync(files.imagePath[0].path);
  await episode.update({ imagePath: imageFilePath });

  const duration = await getVideoDurationInSeconds(files.videoPath[0].path);
  const videoFilePath = `${privateFolderName}/ep-${(
    '' + episode.number
  ).padStart(3, '0')}-vid-${files.videoPath[0].filename}`;
  fs.copyFileSync(files.videoPath[0].path, videoFilePath);
  fs.unlinkSync(files.videoPath[0].path);
  await episode.update({ videoPath: videoFilePath, duration });

  return episode;
};
