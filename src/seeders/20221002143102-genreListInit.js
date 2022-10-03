'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('genre_lists', [
      {
        anime_id: 1,
        genre_id: 1
      },
      {
        anime_id: 1,
        genre_id: 2
      },
      {
        anime_id: 1,
        genre_id: 4
      },
      {
        anime_id: 1,
        genre_id: 5
      },
      {
        anime_id: 2,
        genre_id: 3
      },
      {
        anime_id: 3,
        genre_id: 1
      },
      {
        anime_id: 3,
        genre_id: 3
      },
      {
        anime_id: 3,
        genre_id: 10
      },
      {
        anime_id: 4,
        genre_id: 4
      },
      {
        anime_id: 4,
        genre_id: 10
      },
      {
        anime_id: 5,
        genre_id: 1
      },
      {
        anime_id: 5,
        genre_id: 4
      },
      {
        anime_id: 6,
        genre_id: 1
      },
      {
        anime_id: 6,
        genre_id: 3
      },
      {
        anime_id: 6,
        genre_id: 10
      },
      {
        anime_id: 7,
        genre_id: 1
      },
      {
        anime_id: 7,
        genre_id: 3
      },
      {
        anime_id: 7,
        genre_id: 10
      },
      {
        anime_id: 8,
        genre_id: 1
      },
      {
        anime_id: 8,
        genre_id: 2
      },
      {
        anime_id: 8,
        genre_id: 5
      },
      {
        anime_id: 9,
        genre_id: 4
      },
      {
        anime_id: 9,
        genre_id: 9
      },
      {
        anime_id: 10,
        genre_id: 1
      },
      {
        anime_id: 10,
        genre_id: 3
      },
      {
        anime_id: 10,
        genre_id: 10
      },
      {
        anime_id: 11,
        genre_id: 4
      },
      {
        anime_id: 11,
        genre_id: 11
      },
      {
        anime_id: 12,
        genre_id: 1
      },
      {
        anime_id: 12,
        genre_id: 3
      },
      {
        anime_id: 12,
        genre_id: 10
      },
      {
        anime_id: 13,
        genre_id: 4
      },
      {
        anime_id: 13,
        genre_id: 9
      },
      {
        anime_id: 14,
        genre_id: 1
      },
      {
        anime_id: 14,
        genre_id: 4
      },
      {
        anime_id: 14,
        genre_id: 10
      },
      {
        anime_id: 15,
        genre_id: 1
      },
      {
        anime_id: 15,
        genre_id: 3
      },
      {
        anime_id: 15,
        genre_id: 10
      },
      {
        anime_id: 16,
        genre_id: 3
      },
      {
        anime_id: 16,
        genre_id: 8
      },
      {
        anime_id: 17,
        genre_id: 1
      },
      {
        anime_id: 17,
        genre_id: 5
      },
      {
        anime_id: 18,
        genre_id: 4
      },
      {
        anime_id: 18,
        genre_id: 8
      },
      {
        anime_id: 19,
        genre_id: 1
      },
      {
        anime_id: 19,
        genre_id: 4
      },
      {
        anime_id: 20,
        genre_id: 1
      },
      {
        anime_id: 21,
        genre_id: 1
      },
      {
        anime_id: 21,
        genre_id: 3
      },
      {
        anime_id: 21,
        genre_id: 10
      },
      {
        anime_id: 22,
        genre_id: 1
      },
      {
        anime_id: 23,
        genre_id: 1
      },
      {
        anime_id: 23,
        genre_id: 3
      },
      {
        anime_id: 24,
        genre_id: 2
      },
      {
        anime_id: 24,
        genre_id: 4
      },
      {
        anime_id: 24,
        genre_id: 5
      },
      {
        anime_id: 24,
        genre_id: 8
      },
      {
        anime_id: 24,
        genre_id: 10
      },
      {
        anime_id: 25,
        genre_id: 1
      },
      {
        anime_id: 25,
        genre_id: 4
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('genre_lists', null, {});
  }
};
