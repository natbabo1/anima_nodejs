const { Episode } = require('../models');
const episodeService = require('../services/episodeService');

exports.getEpisodeList = async (req, res, next) => {
  try {
    const episodes = await Episode.findAll({
      where: { animeId: req.params.animeId }
    });

    return res.status(200).json({ episodes });
  } catch (err) {
    next(err);
  }
};

exports.createEpisode = async (req, res, next) => {
  try {
    const { number, title, publishStatus } = req.body;
    const { animeId } = req.params;
    const newEpisode = await episodeService.createEpisode(
      {
        number: +number,
        title,
        publishStatus: publishStatus === 'false' ? false : true
      },
      req.files,
      animeId
    );

    res.status(200).json({ episode: newEpisode });
  } catch (err) {
    next(err);
  }
};

exports.updateEpisode = async (req, res, next) => {
  const { animeId, episodeId } = req.params;
  const { number, title, publishStatus } = req.body;
  const episode = await episodeService.updateEpisode(
    {
      number: +number,
      title,
      publishStatus: publishStatus === 'false' ? false : true
    },
    req.files,
    animeId,
    episodeId
  );
  res.status(200).json({ episode });
};

exports.deleteEpisode = async (req, res, next) => {
  try {
    const { animeId, episodeId } = req.params;
    await episodeService.deleteEpisode(animeId, episodeId);
    res.status(200).json({ message: 'delete Episode success' });
  } catch (err) {
    next(err);
  }
};
