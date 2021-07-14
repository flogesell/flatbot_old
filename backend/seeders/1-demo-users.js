const { v4: uuidv4 } = require('uuid');
'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: "0bba4745-9830-4d39-a686-74312bcfc936",
      firstName: 'Florian',
      lastName: 'Gesell', 
      email: 'gesell@example.com',
      password: '$2b$10$dE15MMoqfx4QfFCmiRDOJ.J47bxeR3Qr0.2NFQiO6Qv2UwhvYHNWC',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "ef5d2090-8a59-4746-b3a0-efbd2f7fe63e",
      firstName: 'Elisabeth',
      lastName: 'Franke',
      email: 'elli@example.com',
      password: '$2b$10$dE15MMoqfx4QfFCmiRDOJ.J47bxeR3Qr0.2NFQiO6Qv2UwhvYHNWC',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "f3752d8c-4702-446a-84f4-110c76607c7b",
      firstName: 'Luis',
      lastName: 'Schweigard',
      email: 'loisl@example.com',
      password: '$2b$10$dE15MMoqfx4QfFCmiRDOJ.J47bxeR3Qr0.2NFQiO6Qv2UwhvYHNWC',
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
