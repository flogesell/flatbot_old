const fs = require("fs");
const path = require('path'); 

'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('images', [
    {
      id: 1,
      name: 'flo.JPG',
      user_id: "0bba4745-9830-4d39-a686-74312bcfc936",
      data: fs.readFileSync( path.join(__dirname, '../demo/flo.JPG') ),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'elli.jpg',
      user_id: "ef5d2090-8a59-4746-b3a0-efbd2f7fe63e",
      data: fs.readFileSync( path.join(__dirname, '../demo/elli.jpg') ),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: 'luis.png',
      user_id: "f3752d8c-4702-446a-84f4-110c76607c7b",
      data: fs.readFileSync( path.join(__dirname, '../demo/luis.png') ),
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
