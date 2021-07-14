const { v4: uuidv4 } = require('uuid');
'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flats', [{
      id: uuidv4(),
      name: 'Flos Bude',
      owner: "0bba4745-9830-4d39-a686-74312bcfc936",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
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
