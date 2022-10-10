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

exports.updateEpisode = async (req, res, next) => {};
exports.deleteEpisode = async (req, res, next) => {};
