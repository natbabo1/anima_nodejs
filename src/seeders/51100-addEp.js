'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'The Town Where Everything Began',
        number: 1,
        image_path:
          'https://img1.ak.crunchyroll.com/i/spire4-tmb/328f563ae2a81d43520f380e1dbe2ba91556432883_large.jpg',
        video_path: 'forSubscription/videos/005-attackOnTitan/001.mp4',
        duration: 123,
        publish_status: true,
        anime_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Thunder Spears',
        number: 2,
        image_path:
          'https://img1.ak.crunchyroll.com/i/spire4-tmb/f2e0ee3a1dbb05046ae37490f890e4f21557056448_large.jpg',
        video_path: 'forSubscription/videos/005-attackOnTitan/002.mp4',
        duration: 123,
        publish_status: true,
        anime_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Descent',
        number: 3,
        image_path:
          'https://img1.ak.crunchyroll.com/i/spire2-tmb/2e36a7defa9694a212aaa26b200109d21557673116_large.jpg',
        video_path: 'nully',
        duration: 123,
        publish_status: true,
        anime_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Perfect Game',
        number: 4,
        image_path:
          'https://img1.ak.crunchyroll.com/i/spire1-tmb/5cacf7aeb029825da15652740d1f36ce1558279231_large.jpg',
        video_path: 'nully',
        duration: 123,
        publish_status: true,
        anime_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Hero',
        number: 5,
        image_path:
          'https://img1.ak.crunchyroll.com/i/spire2-tmb/7385376881794960b527bd1f97f92ff21558902273_large.jpg',
        video_path: 'nully',
        duration: 123,
        publish_status: true,
        anime_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Midnight Sun',
        number: 6,
        image_path:
          'https://img1.ak.crunchyroll.com/i/spire4-tmb/3f288861f03d9538d342855139c322e71559516204_large.jpg',
        video_path: 'nully',
        duration: 123,
        publish_status: true,
        anime_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'The Basement',
        number: 7,
        image_path:
          'https://img1.ak.crunchyroll.com/i/spire3-tmb/a487ae5f50260859ae587418f53f68501560126406_large.jpg',
        video_path: 'nully',
        duration: 123,
        publish_status: true,
        anime_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'That Day',
        number: 8,
        image_path:
          'https://img1.ak.crunchyroll.com/i/spire3-tmb/914b753bfd31868515ac2901569073b41560712044_large.jpg',
        video_path: 'nully',
        duration: 123,
        publish_status: true,
        anime_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Attack Titan',
        number: 9,
        image_path:
          'https://img1.ak.crunchyroll.com/i/spire2-tmb/a4f749bd8382e4b09aad9daffd5055bb1561322638_large.jpg',
        video_path: 'nully',
        duration: 123,
        publish_status: true,
        anime_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'The Other Side of the Wall',
        number: 10,
        image_path:
          'https://img1.ak.crunchyroll.com/i/spire3-tmb/6713305bb66e55f778db2153fe3c20bf1561940629_large.jpg',
        video_path: 'nully',
        duration: 123,
        publish_status: true,
        anime_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'A Quiet Beginning',
        number: 1,
        image_path:
          'https://img1.ak.crunchyroll.com/i/spire1-tmb/12e6c856efd925df298b48a55ee2df121664599706_large.jpg',
        video_path:
          'forSubscription/videos/029-My-Hero-Academia-Season-6/001.mp4',
        duration: 123,
        publish_status: true,
        anime_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('episodes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
