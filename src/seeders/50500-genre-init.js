'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('genres', [
      {
        genre: 'Action',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        genre: 'Adventure',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        genre: 'Comedy',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        genre: 'Drama',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        genre: 'Fantasy',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        genre: 'Historical',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        genre: 'Military',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        genre: 'Mystery',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        genre: 'Romance',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        genre: 'Sci-Fi',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        genre: 'Slice of Life',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        genre: 'Shounen',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        genre: 'Sport',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('genres', null, {});
  }
};
