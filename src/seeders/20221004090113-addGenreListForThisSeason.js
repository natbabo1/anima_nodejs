'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('genre_lists', [
      { anime_id: 26, genre_id: 1 },
      { anime_id: 27, genre_id: 1 },
      { anime_id: 27, genre_id: 3 },
      { anime_id: 28, genre_id: 1 },
      { anime_id: 28, genre_id: 3 },
      { anime_id: 29, genre_id: 1 },
      { anime_id: 30, genre_id: 1 },
      { anime_id: 30, genre_id: 2 },
      { anime_id: 30, genre_id: 5 },
      { anime_id: 31, genre_id: 2 },
      { anime_id: 31, genre_id: 4 },
      { anime_id: 32, genre_id: 13 },
      { anime_id: 33, genre_id: 3 },
      { anime_id: 34, genre_id: 1 },
      { anime_id: 34, genre_id: 3 },
      { anime_id: 34, genre_id: 5 },
      { anime_id: 35, genre_id: 3 },
      { anime_id: 35, genre_id: 5 },
      { anime_id: 36, genre_id: 1 },
      { anime_id: 36, genre_id: 5 },
      { anime_id: 37, genre_id: 3 },
      { anime_id: 37, genre_id: 9 },
      { anime_id: 37, genre_id: 10 },
      { anime_id: 38, genre_id: 3 },
      { anime_id: 38, genre_id: 5 },
      { anime_id: 38, genre_id: 9 },
      { anime_id: 39, genre_id: 1 },
      { anime_id: 39, genre_id: 10 },
      { anime_id: 39, genre_id: 11 },
      { anime_id: 40, genre_id: 1 },
      { anime_id: 40, genre_id: 2 },
      { anime_id: 41, genre_id: 1 },
      { anime_id: 42, genre_id: 1 },
      { anime_id: 42, genre_id: 5 },
      { anime_id: 43, genre_id: 1 },
      { anime_id: 43, genre_id: 2 },
      { anime_id: 43, genre_id: 5 },
      { anime_id: 44, genre_id: 3 },
      { anime_id: 44, genre_id: 4 },
      { anime_id: 44, genre_id: 9 },
      { anime_id: 45, genre_id: 3 },
      { anime_id: 45, genre_id: 11 },
      { anime_id: 46, genre_id: 5 },
      { anime_id: 48, genre_id: 3 },
      { anime_id: 48, genre_id: 5 },
      { anime_id: 49, genre_id: 3 },
      { anime_id: 50, genre_id: 3 },
      { anime_id: 50, genre_id: 11 }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('genre_lists', null, {});
  }
};
