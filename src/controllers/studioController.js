const { Studio } = require('../models');

exports.getStudios = async (req, res, next) => {
  try {
    const studios = await Studio.findAll();
    res.status(200).json({ studios });
  } catch (err) {
    next(err);
  }
};

exports.createStudio = async (req, res, next) => {
  try {
    const studio = await Studio.create({
      name: req.body.name
    });
    res.status(200).json({ studio });
  } catch (err) {
    next(err);
  }
};

exports.updateStudio = async (req, res, next) => {
  try {
    const studio = await Studio.update(
      { name: req.body.name },
      { where: { id: req.params.studioId } }
    );
    res.status(200).json({ studio });
  } catch (err) {
    next(err);
  }
};

exports.deleteStudio = async (req, res, next) => {
  try {
    await Studio.destroy({
      where: {
        id: req.params.studioId
      }
    });
    res.status(200).json();
  } catch (err) {
    next(err);
  }
};
