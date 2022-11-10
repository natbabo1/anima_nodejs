'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        username: 'ADMIN',
        email: 'admin@anima.com',
        password:
          '$2a$10$Qcz.dlDhkTgZIEI70OphM.h.VsuD8MgnSqhrEnNw1BWs2Dfp9AyHW',
        first_name: 'ADMIN',
        last_name: '007',
        gender: 'MALE',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'natbabo1',
        email: 'natbabo@hotmail.com',
        password:
          '$2a$10$Smn4BaqjJiuyZonbmlPoRuo57vjjpwJHsB7amaDpfr1CGhrAwTdFm',
        first_name: 'Rutsarun',
        last_name: 'Limwichai',
        gender: 'MALE',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
