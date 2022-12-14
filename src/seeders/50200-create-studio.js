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
      },
      {
        name: 'Drive',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '8bit',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'ENGI',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Nexus',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'C2C',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'David Production',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Brain's Base",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Maho Film',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'TROYCA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Studio A-CAT',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'studio MOTHER',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Pine Jam',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'EMT Squared',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Seven',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'CloverWorks',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Kamikaze Douga',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'CoMix Wave Films',
        created_at: new Date(),
        updated_at: new Date()
      },

      { name: 'Studio Ghibli', created_at: new Date(), updated_at: new Date() },
      {
        name: 'Khara',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Artland',
        created_at: new Date(),
        updated_at: new Date()
      },
      { name: 'Studio Chizu', created_at: new Date(), updated_at: new Date() },
      {
        name: 'Gainax',
        created_at: new Date(),
        updated_at: new Date()
      },
      { name: 'Studio VOLN', created_at: new Date(), updated_at: new Date() }
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
