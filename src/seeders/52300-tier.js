"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tiers", [
      {
        name: "Standard",
        price: 99,
        detail: "access every animes with full-hd definition",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Donator",
        price: 999,
        detail: "same as Standard but we can buy more coffee",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("tiers", null, {});
  }
};
