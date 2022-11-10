'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ratings', [
      {
        rating: 'R - 17+ (violence & profanity)',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        rating: 'R+ - Mild Nudity',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        rating: 'PG-13 - Teens 13 or older',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        rating: 'PG - Children',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        rating: 'G - All Ages',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   rating: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ratings', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
