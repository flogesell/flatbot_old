const { v4: uuidv4 } = require('uuid');
'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flatmates', [{
      flat_id: "9792ae4f-9f50-4ebe-befc-9ef81d34e829",
      user_id: "ef5d2090-8a59-4746-b3a0-efbd2f7fe63e",
      joinedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
