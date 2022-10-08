const { Genre } = require('../models');

exports.getGenres = async (req, res, next) => {
  try {
    const genres = await Genre.findAll();
    res.status(200).json({ genres });
  } catch (err) {
    next(err);
  }
};

exports.createGenre = async (req, res, next) => {
  try {
    const genre = await Genre.create({
      genre: req.body.genre
    });
    res.status(200).json({ genre });
  } catch (err) {
    next(err);
  }
};

exports.updateGenre = async (req, res, next) => {
  try {
    const genre = await Genre.update(
      { genre: req.body.genre },
      { where: { id: req.params.genreId } }
    );
    res.status(200).json({ genre });
  } catch (err) {
    next(err);
  }
};

exports.deleteGenre = async (req, res, next) => {
  try {
    await Genre.destroy({
      where: {
        id: req.params.genreId
      }
    });
    res.status(200).json();
  } catch (err) {
    next(err);
  }
};
