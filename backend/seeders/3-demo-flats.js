const { v4: uuidv4 } = require('uuid');
'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flats', [{
      id: "9792ae4f-9f50-4ebe-befc-9ef81d34e829",
      name: 'Flos Bude',
      owner: "0bba4745-9830-4d39-a686-74312bcfc936",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "84b93b39-1edc-4557-87bb-160c35eba887",
      name: 'Loisls Bude',
      owner: "f3752d8c-4702-446a-84f4-110c76607c7b",
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
