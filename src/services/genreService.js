const { GenreList } = require('../models');

exports.addGenreList = async (genres, animeId) => {
  const genreList = genres.map((item) => ({ animeId, genreId: item.id }));
  await GenreList.bulkCreate(genreList);
};
