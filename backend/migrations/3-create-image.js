'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('images', {
      id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        autoIncrement:  true
      },
      name: {  
          type:       Sequelize.STRING(30),
          allowNull:  false,
      },
      data: {
          type: Sequelize.BLOB("long"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('images');
  }
};