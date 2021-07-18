const { v4: uuidv4 } = require('uuid');
'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('images', [{
      id: 1,
      name: 'flo-gesell.png',
      data: 'gesell@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'elli.png',
      data: 'gesell@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: 'luis.png',
      data: 'gesell@example.com',
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
