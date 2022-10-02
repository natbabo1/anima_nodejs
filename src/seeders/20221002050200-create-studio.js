'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('studios', [
      {
        name: 'Bones',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'A-1 Pictures',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Bandai Namco Pictures',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'White Fox',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Wit Studio',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Madhouse',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Shaft',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Kyoto Animation',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'ufotable',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'MAPPA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Kinema Citrus',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Sunrise',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'TMS Entertainment',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Pierrot',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('studios', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * , created_at: new Date()
     * updated_at: new Date(),
     * await queryInterface.bulkDelete('People', null, {
     * });
     */
  }
};
