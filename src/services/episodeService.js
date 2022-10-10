const fs = require('fs');
const { getVideoDurationInSeconds } = require('get-video-duration');
const { Episode } = require('../models');
const animeService = require('./animeService');
const validator = require('../services/validator');
const ServerError = require('../utilities/serverError');

const getEpisodeMin = (episodeId) =>
  Episode.findOne({ where: { id: episodeId } });

exports.getEpisodeMin = getEpisodeMin;

exports.createEpisode = async (episodeInput, files, animeId) => {
  if (!files.imagePath || !files.videoPath) {
    throw new ServerError(400, 'Image Cover and Video is required.');
  }
  const { error } = validator.createEpisode(episodeInput);
  if (error) {
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

exports.updateEpisode = async (episodeInput, files, animeId, episodeId) => {
  const { error } = validator.createEpisode(episodeInput);
  if (error) {
    throw new ServerError(400, error);
  }

  const anime = await animeService.getAnimeByIdMin(animeId);
  if (!anime) {
    throw new ServerError(400, 'This anime does not exist');
  }
  const episode = await getEpisodeMin(episodeId);
  if (+episode.animeId !== +animeId) {
    throw new ServerError(400, 'anime id is not match with episode');
  }
  await episode.update({ ...episodeInput });

  if (files.imagePath) {
    fs.unlinkSync(episode.imagePath);
    const publicFolderName = `public/animes/${anime.id}-${anime.title.slice(
      0,
      10
    )}`;
    if (!fs.existsSync(publicFolderName)) {
      fs.mkdirSync(publicFolderName);
    }
    const imageFilePath = `${publicFolderName}/ep-${(
      '' + episode.number
    ).padStart(3, '0')}-cover-${files.imagePath[0].filename}`;
    fs.copyFileSync(files.imagePath[0].path, imageFilePath);
    fs.unlinkSync(files.imagePath[0].path);
    await episode.update({ imagePath: imageFilePath });
  }
  if (files.videoPath) {
    fs.unlinkSync(episode.videoPath);

    const privateFolderName = `forSubscription/videos/${
      anime.id
    }-${anime.title.slice(0, 10)}`;
    if (!fs.existsSync(privateFolderName)) {
      fs.mkdirSync(privateFolderName);
    }

    const duration = await getVideoDurationInSeconds(files.videoPath[0].path);
    const videoFilePath = `${privateFolderName}/ep-${(
      '' + episode.number
    ).padStart(3, '0')}-vid-${files.videoPath[0].filename}`;

    fs.copyFileSync(files.videoPath[0].path, videoFilePath);
    fs.unlinkSync(files.videoPath[0].path);
    await episode.update({ videoPath: videoFilePath, duration });
  }
  return episode;
};

exports.deleteEpisode = async (animeId, episodeId) => {
  const episode = await getEpisodeMin(episodeId);
  if (!episode) {
    throw new ServerError(400, 'this episode id does not exist');
  }
  console.log(`============${episode.animeId} &&&&&&  ${animeId}`);
  if (+episode.animeId !== +animeId) {
    throw new ServerError(400, 'anime id is not match with episode');
  }
  const { imagePath, videoPath } = episode;
  episode.destroy();
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }
  if (fs.existsSync(videoPath)) {
    fs.unlinkSync(videoPath);
  }
};
