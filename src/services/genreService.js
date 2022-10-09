const { GenreList } = require('../models');

exports.addGenreList = async (genres, animeId) => {
  const genreList = genres.map((item) => ({ animeId, genreId: item.id }));
  await GenreList.bulkCreate(genreList);
};

exports.updateGenreList = async (genres, animeId) => {
  const genreList = genres.map((item) => ({ animeId, genreId: item.id }));
  await GenreList.destroy({ where: { animeId } });
  await GenreList.bulkCreate(genreList);
};

exports.deleteGenreList = async (animeId) => {
  await GenreList.destroy({ where: { animeId } });
};
